import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import { Row, Col } from 'react-bootstrap';
import { combineValidators, isRequired } from 'revalidate';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { User, IUser } from '../../app/models/user';
import DropzoneUploader from '../photouploader/DropzoneUploader';
import agent from '../../app/api/agent';

const validate = combineValidators({
  'founder.rTitle': isRequired({
    message: 'نام موسسه را وارد کنید',
  }),
  aLastName: isRequired({
    message: 'نام خانوادگی را وارد کنید',
  }),
});

const FounderFrom = () => {
  const fromref = useRef<HTMLFormElement>(null);
  const [suser, setUser] = useState(new User());
  const rootStore = useContext(RootStoreContext);
  const { setLoading } = rootStore.commonStore;
  const { updateFounder } = rootStore.founderStore;
  const { user, setPhoto } = rootStore.userStore;
  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [setUser, user]);
  const onSubmit = (values: any) => {
    setLoading(true);
    updateFounder(values).then(() => {
      setUser(user!);
      setLoading(false);
    });
  };

  const onAddImage = async (e: any) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    try {
      const photo = await agent.Photo.Add(formData);
      setPhoto(photo);
    } catch (error) {}
  };

  const getFile = () => {
    (fromref.current?.elements[0] as HTMLInputElement).click();
  };

  return (
    <Fragment>
      <p className='centered'>
        <a href='#/' onClick={getFile} className='art-a-edit'>
          <img
            alt=''
            src={
              user?.photo != undefined ? user.photo.path : '/assets/user.png'
            }
            className='rounded-circle art-img'
          />
          <div className='art-eidthover'>
            <i className='fa fa-pencil art-fa-edit' aria-hidden='true'></i>
          </div>
        </a>
      </p>
      <h5 className='centered art-UserName' style={{ fontSize: 20 }}>
        {user && user.aLastName !== ''
          ? user.aFirstName + ' ' + user.aLastName
          : user?.username}
      </h5>
      <Form
        validate={validate}
        initialValues={suser}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            ref={fromref}
            onSubmit={handleSubmit}
            encType='multipart/form-data'
          >
            <Field
              name='image'
              type='file'
              component='input'
              onChange={onAddImage}
              className='art-hide'
            />
            <Row>
              <Col sm={12}>
                <Field
                  name='founder.rTitle'
                  myType='text'
                  component={TextInput}
                  hSpace='mb-2'
                  placeholder='نام موسسه'
                  value={suser.founder.rTitle}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name='aFirstName'
                  myType='text'
                  component={TextInput}
                  hSpace='mb-2'
                  placeholder='نام'
                  value={suser.aFirstName}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name='aLastName'
                  component={TextInput}
                  placeholder='نام خانوادگی'
                  hSpace='mb-2'
                  myType='text'
                  value={suser.aLastName}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name='founder.rContactMail'
                  myType='text'
                  component={TextInput}
                  hSpace='mb-2'
                  placeholder='ایمیل'
                  value={suser.founder.rContactMail}
                />
              </Col>
              <Col sm={6}></Col>
              <Col sm={6}>
                <div className='art-desc'>
                  <label>تاریخ عضویت : {suser.founder.rCreateJalali}</label>
                </div>
              </Col>
              <Col sm={6}>
                <div className='art-desc'>
                  <label>تاریخ انقضاء : {suser.founder.rExpireJalali}</label>
                </div>
              </Col>
            </Row>

            <div className='mt-3'>
              <button
                type='submit'
                className='btn animated-button thar-three w-100'
              >
                ثبت
              </button>
            </div>
          </form>
        )}
      />
    </Fragment>
  );
};

export default observer(FounderFrom);
