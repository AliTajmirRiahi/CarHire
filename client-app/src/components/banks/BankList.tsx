import React, { useContext, useEffect, Fragment } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { Table, Button } from 'react-bootstrap';
import BankItem from './BankItem';
import Linear from '../preloader/Linear';
import BankFrom from './BankForm';

const BankList = () => {
  const rootContext = useContext(RootStoreContext);
  const { BasiesInfo, getBasiesInfo } = rootContext.baseInfoStore;
  const { setLoading, loading } = rootContext.commonStore;
  const { openModal } = rootContext.modalStore;
  useEffect(() => {
    setLoading(true);
    getBasiesInfo('Bank');
    setLoading(false);
  }, [getBasiesInfo]);

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <h4 className='m-3 d-inline-block'>لیست بانک ها</h4>
          <Button
            className='m-3 float-left'
            onClick={() =>
              openModal(<BankFrom id={''} />, 'اطلاعات بانک', 'sm')
            }
          >
            جدید
          </Button>
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
        </Fragment>
      ) : (
        <Linear />
      )}
    </Fragment>
  );
};

export default observer(BankList);
