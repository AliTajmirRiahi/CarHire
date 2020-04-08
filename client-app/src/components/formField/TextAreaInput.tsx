import React, { Fragment } from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, any> {}

const TextAreaInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Fragment>
      <textarea {...input} placeholder={placeholder} />
      {touched && error && <label style={{ color: 'red' }}>{error}</label>}
    </Fragment>
  );
};

export default TextAreaInput;
