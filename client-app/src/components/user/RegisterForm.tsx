import React, { Fragment, useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import { combineValidators, isRequired } from 'revalidate';
import { RootStoreContext } from '../../app/stores/rootStore';
import { IUserFormValues } from '../../app/models/user';
import Linear from '../preloader/Linear';

const validate = combineValidators({
  emailOrPhoneNumber: isRequired({
    message: 'موبایل یا ایمیل را وارد کنید',
  }),
});

const RegisterForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;
  const onSubmit = (values: IUserFormValues) => {
    setSubmitting(true);
    register(values);
    setSubmitting(false);
  };
  return (
    <Fragment>
      <Container>
        <div className='art-closelogin'>
          <Link to='/'>
            <i className='fa fa-times text-danger' aria-hidden='true'></i>{' '}
          </Link>
          <div className='art-login'>
            <Form
              validate={validate}
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name='emailOrPhoneNumber'
                    myType='text'
                    component={TextInput}
                    faicon='user-circle'
                    hSpace='mb-2'
                    placeholder='موبایل یا ایمیل'
                  />
                  <Field
                    name='password'
                    component={TextInput}
                    placeholder='کلمه عبور'
                    faicon='lock'
                    myType='password'
                  />
                  <div className='mt-3'>
                    <button type='submit' className='btn btn-primary w-100'>
                      ثبت نام
                    </button>
                  </div>
                  <div className='mt-3 text-center'>
                    <Link to='/login' className='art-font13'>
                      ورود
                    </Link>
                    <span className='art-bar'>|</span>
                    <Link to='/' className='art-font13'>
                      صفحه اصلی
                    </Link>
                  </div>
                </form>
              )}
            />
          </div>
          {submitting && <Linear />}
        </div>
      </Container>
    </Fragment>
  );
};

export default RegisterForm;
