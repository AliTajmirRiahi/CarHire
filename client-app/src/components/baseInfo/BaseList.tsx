import React, { useContext, useEffect, useState, Fragment } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { Table, Button } from 'react-bootstrap';
import BaseItem from './BaseItem';
import Linear from '../preloader/Linear';
import BaseFrom from './BaseForm';

interface IProps {
  typeName: string;
  type: string;
}

const BaseList: React.FC<IProps> = ({ type, typeName }) => {
  const [selecteItem, setSelecteItem] = useState([] as string[]);
  const rootContext = useContext(RootStoreContext);
  const {
    BasiesInfo,
    getBasiesInfo,
    deleteMultiInfo,
  } = rootContext.baseInfoStore;
  const { setLoading, loading } = rootContext.commonStore;
  const { openModal } = rootContext.modalStore;
  useEffect(() => {
    setLoading(true);
    getBasiesInfo(type);
    setLoading(false);
  }, [getBasiesInfo]);

  const onChecked = (value: boolean, id: string) => {
    if (value) {
      setSelecteItem([...selecteItem, id]);
    } else {
      setSelecteItem(selecteItem.filter((p: string) => p !== id));
    }
  };

  const onMultiDelete = () => {
    deleteMultiInfo(selecteItem);
  };

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <h4 className='m-3 d-inline-block'>لیست {typeName} ها</h4>
          <Button
            className='m-3 float-left'
            onClick={() =>
              openModal(
                <BaseFrom id='' type={type} typeName={typeName} />,
                `اطلاعات ${typeName}`,
                'sm'
              )
            }
          >
            جدید
          </Button>
          {selecteItem.length > 0 && (
            <Button
              className='mt-3  float-left'
              variant='danger'
              onClick={onMultiDelete}
            >
              حذف
            </Button>
          )}
          <Table className='art-table' striped hover variant='dark' size='sm'>
            <thead>
              <tr>
                <th className='text-center' style={{ width: 80 }}>
                  انتخاب
                </th>
                <th className='text-center'>#</th>
                <th className='text-center'>نام {typeName}</th>
                <th className='text-center'>...</th>
              </tr>
            </thead>
            <tbody>
              {BasiesInfo &&
                BasiesInfo.map((p, i) => (
                  <BaseItem
                    key={p.id}
                    base={p}
                    type={type}
                    typeName={typeName}
                    index={i + 1}
                    onChecked={onChecked}
                  />
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

export default observer(BaseList);
