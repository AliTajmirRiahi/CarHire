import React, { Fragment } from 'react';
import { FieldRenderProps } from 'react-final-form';
interface IProps extends FieldRenderProps<Date, any> {}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Fragment>
      {/* <DatePicker /> */}
      {touched && error && <label style={{ color: 'red' }}>{error}</label>}
    </Fragment>
  );
};

export default DateInput;
