import React, { useContext, useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import TextInput from '../formField/TextInput';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import { combineValidators, isRequired } from 'revalidate';
import { observer } from 'mobx-react-lite';
import { IBaseInfo, BaseInfo } from '../../app/models/baseInfo';

const validate = combineValidators({
  value: isRequired({
    message: 'نام بانک را وارد کنید',
  }),
});

interface IProps {
  id: string;
}

const BankForm: React.FC<IProps> = ({ id = '' }) => {
  const [bank, setBank] = useState(new BaseInfo());
  const rootStore = useContext(RootStoreContext);
  const { setLoading } = rootStore.commonStore;
  const { getCurrent, updateInfo, createInfo } = rootStore.baseInfoStore;
  const { closeModal } = rootStore.modalStore;

  useEffect(() => {
    if (bank.id === undefined && id !== '') {
      getCurrent(id).then((base) => {
        setBank(new BaseInfo(base));
      });
    }
  }, [getCurrent, bank, id]);

  const onSubmit = (values: IBaseInfo) => {
    setLoading(true);
    if (values.id == undefined)
      createInfo('Bank', values).then(() => {
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
      initialValues={bank}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name='value'
            value={bank.value}
            myType='text'
            component={TextInput}
            hSpace='mb-2'
            placeholder='بانک'
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

export default observer(BankForm);
