import React, { Fragment } from 'react';
import $ from 'jquery';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, any> {}

const SelectInput: React.FC<IProps> = ({
  input,
  width,
  options,
  placeholder,
  meta: { touched, error },
}) => {
  $('.matSelect').on('change', (e) => {
    var selected = $(e.target)
      .children('option')
      .filter((i, ev) => {
        return $(ev).val() === $(e.target).val();
      });
    input.onChange($(selected).attr('data-id'));
  });
  return (
    <Fragment>
      <div className='input-field col s12'>
        <select className='matSelect' placeholder={placeholder}>
          {options}
        </select>
        {touched && error && <label style={{ color: 'red' }}>{error}</label>}
      </div>
    </Fragment>
  );
};

export default SelectInput;
