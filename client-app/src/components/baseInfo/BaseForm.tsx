import React, { useContext, useEffect, useState, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import { RootStoreContext } from '../../app/stores/rootStore';
import { combineValidators, isRequired } from 'revalidate';
import { observer } from 'mobx-react-lite';
import { IBaseInfo, BaseInfo } from '../../app/models/baseInfo';

interface IProps {
  id: string;
  type: string;
  typeName: string;
}

const BaseForm: React.FC<IProps> = ({ id = '', type, typeName }) => {
  const [base, setBase] = useState(new BaseInfo());
  const rootStore = useContext(RootStoreContext);
  const { setLoading } = rootStore.commonStore;
  const { getCurrent, updateInfo, createInfo } = rootStore.baseInfoStore;
  const { closeModal } = rootStore.modalStore;

  const msg = useRef(`لطفا ${typeName} را وارد کنید`);
  const validate = combineValidators({
    value: isRequired({
      message: msg.current,
    }),
  });

  useEffect(() => {
    if (base.id === undefined && id !== '') {
      getCurrent(id).then((base) => {
        setBase(new BaseInfo(base));
      });
    }
  }, [getCurrent, base, id]);

  const onSubmit = (values: IBaseInfo) => {
    setLoading(true);
    if (values.id === undefined)
      createInfo(type, values).then(() => {
        setLoading(false);
      });
    else
      updateInfo(values).then(() => {
        setLoading(false);
      });
  };
  return (
    <Form
      validate={validate}
      initialValues={base}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name='value'
            value={base.value}
            myType='text'
            component={TextInput}
            hSpace='mb-2'
            placeholder={typeName}
          />
          <div className='mt-3'>
            <button
              type='submit'
              className='btn btn-success '
              disabled={pristine}
            >
              ثبت
            </button>
            <button
              type='button'
              className='btn btn-warning  mr-2'
              onClick={() => closeModal()}
            >
              انصراف
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default observer(BaseForm);
