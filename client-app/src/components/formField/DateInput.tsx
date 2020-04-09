import React, { Fragment } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { DatePicker } from 'jalali-react-datepicker';

interface IProps extends FieldRenderProps<Date, any> {}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  const sub = (e: any) => {
    input.onChange(e.value.format('jYYYY-jMM-jDD'));
  };
  return (
    <Fragment>
      <DatePicker onClickSubmitButton={sub} />
      {touched && error && <label style={{ color: 'red' }}>{error}</label>}
    </Fragment>
  );
};

export default DateInput;
