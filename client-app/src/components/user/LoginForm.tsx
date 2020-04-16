import React, { useContext, useState } from 'react';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import { IUserFormValues } from '../../app/models/user';
import { combineValidators, isRequired } from 'revalidate';
import { observer } from 'mobx-react-lite';

const validate = combineValidators({
  emailOrPhoneNumber: isRequired({
    message: 'موبایل یا ایمیل را وارد کنید',
  }),
  password: isRequired({
    message: 'کلمه عبور را وارد کنید',
  }),
});

const LoginForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;
  const { setSubmitting } = rootStore.commonStore;
  const onSubmit = (values: IUserFormValues) => {
    setSubmitting(true);
    login(values);
    setSubmitting(false);
  };
  return (
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
              ورود
            </button>
          </div>
          <div className='mt-3 text-center'>
            <Link to='#' className='art-font13'>
              ورود با پیامک
            </Link>
            <span className='art-bar'>|</span>
            <Link to='#' className='art-font13'>
              فراموشی رمز
            </Link>
          </div>
          <div className='mt-3 text-center art-font10'>
            کاربر جدید هستید؟
            <Link to='/register' className='art-font10 art-registerLink'>
              ثبت‌ نام در آرتـــا
            </Link>
          </div>
        </form>
      )}
    />
  );
};

export default observer(LoginForm);
