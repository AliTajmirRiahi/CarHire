import React, { Fragment } from 'react';
import { IBaseInfo } from '../../app/models/baseInfo';
import { Button, ButtonGroup } from 'react-bootstrap';

interface IProps {
  bank: IBaseInfo;
  index: number;
}

const BankItem: React.FC<IProps> = ({ bank: { id, value }, index }) => {
  return (
    <Fragment>
      <tr>
        <td className='text-center pt-3'>
          <label className='checkbox path mb-0'>
            <input type='checkbox' />
            <svg viewBox='0 0 21 21'>
              <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186'></path>
            </svg>
          </label>
        </td>
        <td className='text-center art-lineheight40'>{index}</td>
        <td className='text-center art-lineheight40'>{value}</td>
        <td className='text-center w-25'>
          <ButtonGroup className='art-dirltr mb-2'>
            <Button variant='danger'>حذف</Button>
            <Button variant='success'>ویرایش</Button>
          </ButtonGroup>
        </td>
      </tr>
    </Fragment>
  );
};

export default BankItem;