import React, { useContext, useEffect, useState, Fragment } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { Table, Button, Dropdown } from 'react-bootstrap';
import BaseItem from './BaseItem';
import Linear from '../preloader/Linear';
import BaseFrom from './BaseForm';
import Pages from '../pagination/Pages';

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
    getPages,
  } = rootContext.baseInfoStore;
  const { setLoading, loading } = rootContext.commonStore;
  const { openModal } = rootContext.modalStore;
  const { setNumInPage, numInPage, pages, currentPage } = rootContext.pageStore;
  useEffect(() => {
    setLoading(true);
    getBasiesInfo(type, numInPage, currentPage);
    getPages(type, numInPage);
    setLoading(false);
  }, [getBasiesInfo, setLoading, type, numInPage, getPages, currentPage]);

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

  const onSelectNumInPage = (e: any) => {
    setNumInPage(Number.parseInt(e));
    getPages(type, numInPage);
  };

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <span className='posSticky art-spanSticky'>
            <h4 className='m-3 d-inline-block'>لیست {typeName} ها</h4>

            <Button
              className='btn btn-primary ml-3 mt-3 mr-1 float-left'
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
                className='btn btn-danger mt-3 mr-1 float-left'
                variant='danger'
                onClick={onMultiDelete}
              >
                حذف
              </Button>
            )}
            <Dropdown
              className='float-left mt-3 mr-1'
              onSelect={onSelectNumInPage}
            >
              <Dropdown.Toggle
                className='btn btn-secondary'
                variant='secondary'
                id='dropdown-basic'
              >
                تعداد در هر صفحه {numInPage}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/' eventKey='5'>
                  5
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='10'>
                  10
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='15'>
                  15
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='20'>
                  20
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='30'>
                  30
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='40'>
                  40
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='50'>
                  50
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='100'>
                  100
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='150'>
                  150
                </Dropdown.Item>
                <Dropdown.Item href='#/' eventKey='200'>
                  200
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
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
                    index={(currentPage - 1) * numInPage + i + 1}
                    onChecked={onChecked}
                  />
                ))}
            </tbody>
          </Table>
          {pages > 1 && <Pages />}
        </Fragment>
      ) : (
        <Linear />
      )}
    </Fragment>
  );
};

export default observer(BaseList);
