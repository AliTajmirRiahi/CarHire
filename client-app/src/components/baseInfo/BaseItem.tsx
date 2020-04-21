import React, { Fragment, useContext } from 'react';
import { IBaseInfo } from '../../app/models/baseInfo';
import { Button, ButtonGroup } from 'react-bootstrap';
import { RootStoreContext } from '../../app/stores/rootStore';
import BaseFrom from './BaseForm';
import { observer } from 'mobx-react-lite';
import { showConfirm } from '../../app/util/util';
interface IProps {
  base: IBaseInfo;
  index: number;
  type: string;
  typeName: string;
  onChecked: (value: boolean, id: string) => any;
}

const BaseItem: React.FC<IProps> = ({
  base: { id, value },
  index,
  type,
  typeName,
  onChecked,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { openModal } = rootStore.modalStore;
  const { setLoading } = rootStore.commonStore;
  const { deleteInfo } = rootStore.baseInfoStore;

  const onEdit = () => {
    openModal(
      <BaseFrom id={id} type={type} typeName={typeName} />,
      `اطلاعات ${typeName}`,
      'sm'
    );
  };
  const onDelete = () => {
    showConfirm('آیا عملیات انجام شود؟', () => {
      setLoading(true);
      deleteInfo(id).then(() => {
        setLoading(false);
      });
    });
  };
  const onChange = (event: any) => {
    const { checked } = event.target;
    onChecked(checked, id);
  };
  return (
    <Fragment>
      <tr>
        <td className='text-center pt-3'>
          <label className='checkbox path mb-0'>
            <input type='checkbox' onChange={onChange} />
            <svg viewBox='0 0 21 21'>
              <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186'></path>
            </svg>
          </label>
        </td>
        <td className='text-center art-lineheight40'>{index}</td>
        <td className='text-center art-lineheight40'>{value}</td>
        <td className='text-center w-25'>
          <ButtonGroup className='art-dirltr mb-2'>
            <Button variant='danger' onClick={onDelete}>
              حذف
            </Button>
            <Button variant='success' onClick={onEdit}>
              ویرایش
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    </Fragment>
  );
};

export default observer(BaseItem);
