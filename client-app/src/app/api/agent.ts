import { IFounder } from './../models/founder';
import { IUser, IUserFormValues } from './../models/user';
import axios, { AxiosResponse } from 'axios';
// import { IFounder } from '../models/founder';
import { history } from '../..';
import { toast } from 'react-toastify';
import { IBaseInfo } from '../models/baseInfo';
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = 'http://localhost:5000/api';
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === 'Network Error' && !error.response) {
    toast.error('شبکه اینترنت خود را بررسی کنید');
    return;
  }
  const { status, statusText, data, headers, config } = error.response;
  if (status === 404) {
    toast.error(statusText);
  } else if (status === 400) {
    Object.keys(data.errors).forEach((key) => {
      if (Array.isArray(data.errors[key])) toast.error(data.errors[key][0]);
      else toast.error(data.errors[key]);
      return;
    });
  } else if (
    status === 401 &&
    headers['www-authenticate'] ===
      'Bearer error="invalid_token", error_description="The token is expired"'
  ) {
    window.localStorage.removeItem('token');
    toast.error('نشست شما به پایان رسیده است\nدوباره وارد شوید');
    history.push('/');
  } else if (status === 401) {
    Object.keys(data.errors).map((key) => toast.error(data.errors[key]));
  } else if (
    status === 400 &&
    config.method === 'get' &&
    data.errors.hasOwnProperty('id')
  ) {
    history.push('/notfound');
  }
  if (status === 500) {
    toast.error('خطای سمت سرور با پشتیبان تماس بگیرید ' + data.errors);
    console.log(error);
  }

  throw error.response;
});

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
  delMulti: (url: string, body: {}) =>
    axios.delete(url, body).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append('File', file);
    return axios
      .post(url, formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      .then(responseBody);
  },
};

const Founder = {
  update: (founder: IFounder) =>
    requests.put(`/founder/${founder.id}`, founder),
};

const User = {
  current: (): Promise<IUser> => requests.get('/user'),
  login: (user: IUserFormValues): Promise<IUser> =>
    requests.post('/user/login', user),
  register: (user: IUserFormValues): Promise<IUser> =>
    requests.post('/user/register', user),
};

const BaseInfo = {
  details: (
    type: string,
    numInPage: number,
    pageNumber: number
  ): Promise<IBaseInfo[]> =>
    requests.get(`/BaseInfo/${type}/${numInPage}/${pageNumber}`),
  pages: (type: string, numInPage: number): Promise<number> =>
    requests.get(`/BaseInfo/pages/${type}/${numInPage}`),
  current: (id: string): Promise<IBaseInfo> =>
    requests.get(`/BaseInfo/current/${id}`),
  update: (values: IBaseInfo) => requests.put(`/BaseInfo/${values.id}`, values),
  create: (type: string, values: IBaseInfo): Promise<IBaseInfo> =>
    requests.post(`/BaseInfo/${type}`, values),
  delete: (id: string) => requests.del(`/BaseInfo/${id}`),
  multiDelete: (idlist: string[]) =>
    requests.del(`/BaseInfo/MultiDelete/${idlist}`),
};

export default { User, BaseInfo, Founder };
