import axios, { AxiosResponse } from 'axios';
import { IRenter } from '../models/renter';
import { toast } from 'materialize-css';
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = 'http://localhost:5000/api';
const responseBody = (response: AxiosResponse) => response.data;

// axios.interceptors.request.use(
//   (config) => {
//     const token = window.localStorage.getItem('jwt');
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(undefined, (error) => {
  //   if (error.message === 'Network Error' && !error.response) {
  //     toast.error('Network error - make sure API is running!');
  //   }
  const { status, statusText, data, config, headers } = error.response;
  if (status === 404) {
    toast({ html: statusText, displayLength: 5000, classes: 'red' });
  }
  //   if (
  //     status === 401 &&
  //     headers['www-authenticate'] ===
  //       'Bearer error="invalid_token", error_description="The token is expired"'
  //   ) {
  //     window.localStorage.removeItem('jwt');
  //     history.push('/');
  //     toast.info('Your session has expired, please login again');
  //   }
  //   if (
  //     status === 400 &&
  //     config.method === 'get' &&
  //     data.errors.hasOwnProperty('id')
  //   ) {
  //     history.push('/notfound');
  //   }
  //   if (status === 500) {
  //     toast.error('Server error - check the terminal for more info!');
  //   }
  throw error;
});

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
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

const Renter = {
  create: (renter: IRenter) => requests.post('/renter', renter),
  delete: (id: string) => requests.del(`/renter/${id}`),
  //   list: (params: URLSearchParams): Promise<IActivitiesEnvelope> =>
  //     axios.get('/activities', {params: params}).then(responseBody),
  details: (id: string) => requests.get(`/renter/${id}`),
  update: (renter: IRenter) => requests.put(`/renter/${renter.Id}`, renter),
  attend: (id: string) => requests.post(`/renter/${id}/attend`, {}),
  unattend: (id: string) => requests.del(`/renter/${id}/attend`),
};

export default {};
