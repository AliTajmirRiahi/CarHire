import React, { Fragment } from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, any> {
  myType: string;
  faicon: string | null;
  hSpace: string;
}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  myType,
  placeholder,
  meta: { touched, error, pristine },
  faicon,
  hSpace = '',
}) => {
  var inputWidth = '100%';
  if (!!faicon) inputWidth = '78%';
  return (
    <Fragment>
      <div className={`input-group ${hSpace}`}>
        <div className='input-group-prepend'>
          {!!faicon && (
            <i
              className={`fa fa-${faicon} input-group-text`}
              aria-hidden='true'
            ></i>
          )}
        </div>
        <div style={{ width: inputWidth }}>
          <input
            className='form-control'
            {...input}
            placeholder={placeholder}
            type={myType}
            style={{ width: inputWidth }}
          />
        </div>
        {touched && error && (
          <span
            className={`text-danger art-font13 mt-1 ${
              !!faicon ? 'mr-5' : 'mr-2'
            }`}
          >
            {error}
          </span>
        )}
      </div>
    </Fragment>
  );
};

export default TextInput;
