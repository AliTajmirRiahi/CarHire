import React, { useContext, useEffect, Fragment } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { Table, Button } from 'react-bootstrap';
import BankItem from './BankItem';

const BankList = () => {
  const rootContext = useContext(RootStoreContext);
  const { BasiesInfo, getBasiesInfo } = rootContext.baseInfoStore;
  useEffect(() => {
    getBasiesInfo('Bank');
  }, [getBasiesInfo]);

  if (BasiesInfo) console.log(BasiesInfo);

  return (
    <div className='art-divTable'>
      <h4 className='m-3 d-inline-block'>لیست بانک ها</h4>
      <Button className='m-3 float-left'>جدید</Button>
      <Table className='art-table' striped hover variant='dark' size='sm'>
        <thead>
          <tr>
            <th className='text-center' style={{ width: 80 }}>
              انتخاب
            </th>
            <th className='text-center'>#</th>
            <th className='text-center'>نام بانک</th>
            <th className='text-center'>...</th>
          </tr>
        </thead>
        <tbody>
          {BasiesInfo &&
            BasiesInfo.map((p, i) => (
              <BankItem key={p.id} bank={p} index={i + 1} />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default observer(BankList);

// <div></div>
