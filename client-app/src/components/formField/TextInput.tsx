import React, { Fragment } from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, any> {}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Fragment>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <label style={{ color: 'red' }}>{error}</label>}
    </Fragment>
  );
};

export default TextInput;
