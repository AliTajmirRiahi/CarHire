import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import { Row, Col } from 'react-bootstrap';
import { Founder, IFounder } from '../../app/models/founder';
import { combineValidators, isRequired } from 'revalidate';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const validate = combineValidators({
  rTitle: isRequired({
    message: 'نام موسسه را وارد کنید',
  }),
  rLastName: isRequired({
    message: 'نام خانوادگی را وارد کنید',
  }),
});

const FounderFrom = () => {
  const [sfounder, setFounder] = useState(new Founder());
  const rootStore = useContext(RootStoreContext);
  const { setLoading } = rootStore.commonStore;
  const { updateFounder, founder } = rootStore.founderStore;
  const { user } = rootStore.userStore;
  useEffect(() => {
    if (sfounder.id === '' && founder) {
      setFounder(founder!);
    }
  }, [setFounder, sfounder, founder]);
  const onSubmit = (values: IFounder) => {
    setLoading(true);
    updateFounder(values).then(() => {
      setFounder(founder!);
      setLoading(false);
    });
  };
  return (
    <Fragment>
      <p className='centered'>
        <a href='/dashboard/Founder'>
          <img
            alt=''
            src='/assets/user.png'
            className='rounded-circle'
            width='200'
          />
        </a>
      </p>
      <h5 className='centered art-UserName' style={{ fontSize: 20 }}>
        {sfounder && sfounder.rLastName !== ''
          ? sfounder.rFirstName + ' ' + sfounder.rLastName
          : user?.username}
      </h5>
      <Form
        validate={validate}
        initialValues={sfounder}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={12}>
                <Field
                  name='rTitle'
                  myType='text'
                  component={TextInput}
                  hSpace='mb-2'
                  placeholder='نام موسسه'
                  value={sfounder.rTitle}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name='rFirstName'
                  myType='text'
                  component={TextInput}
                  hSpace='mb-2'
                  placeholder='نام'
                  value={sfounder.rFirstName}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name='rLastName'
                  component={TextInput}
                  placeholder='نام خانوادگی'
                  hSpace='mb-2'
                  myType='text'
                  value={sfounder.rLastName}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name='rContactMail'
                  myType='text'
                  component={TextInput}
                  hSpace='mb-2'
                  placeholder='ایمیل'
                  value={sfounder.rContactMail}
                />
              </Col>
              <Col sm={6}></Col>
              <Col sm={6}>
                <div className='art-desc'>
                  <label>تاریخ عضویت : {sfounder.rCreateJalali}</label>
                </div>
              </Col>
              <Col sm={6}>
                <div className='art-desc'>
                  <label>تاریخ انقضاء : {sfounder.rExpireJalali}</label>
                </div>
              </Col>
            </Row>

            <div className='mt-3'>
              <button
                type='submit'
                className='btn animated-button thar-three w-100'
                disabled={pristine}
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
