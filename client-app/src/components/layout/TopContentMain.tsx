import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import TextAreaInput from '../formField/TextAreaInput';
import SelectInput from '../formField/SelectInput';
import { category } from '../categoryOptions';
import DateInput from '../formField/DateInput';

const TopContentMain = () => {
  const handleFinalFormSubmit = (values: any) => {};
  return (
    <Fragment>
      <div className='art-topContent'></div>
      <div className='container' style={{ position: 'relative' }}>
        <div className='center art-midDesc'>
          <h1>مدیریت کرایه خودرو آرتــا</h1>
          <h5>تمام مراحل کرایه خودرو را اینترنتی کنید!</h5>
          <div style={{ margin: 50 }}>
            <a className='waves-effect waves-light btn-large teal lighten-2'>
              <i className='material-icons left'>directions_car</i>شروع کنید
            </a>
          </div>
          <Form
            // initialValues={renter}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit, invalid, pristine }) => (
              <form onSubmit={handleSubmit}>
                <Field name='title' placeholder='Title' component={TextInput} />
                <Field
                  name='select'
                  placeholder='Select'
                  options={category.map((p) => {
                    return (
                      <option className='opt' data-id={p.key} key={p.key}>
                        {p.text}
                      </option>
                    );
                  })}
                  component={SelectInput}
                />
                <Field name='date' placeholder='Date' component={DateInput} />
                <input
                  type='submit'
                  value='submit'
                  disabled={invalid || pristine}
                />
              </form>
            )}
          />
        </div>
      </div>
      <div className='art-midContent'></div>
    </Fragment>
  );
};

export default TopContentMain;
