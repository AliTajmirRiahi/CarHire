import React, { useContext } from 'react';
import PagesItem from './PagesItem';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../app/stores/rootStore';

const Pages = () => {
  const rootStore = useContext(RootStoreContext);
  const { setCurrentPage, currentPage, pages } = rootStore.pageStore;
  const onMinus = () => {
    if (currentPage - 1 > 0) setCurrentPage(currentPage - 1);
  };
  const onAdd = () => {
    if (currentPage + 1 <= pages) setCurrentPage(currentPage + 1);
  };
  return (
    <div id='pag-cover'>
      <div id='pg-links'>
        <div className='td arr-cover'>
          <div className='arrow' id='l-arrow' onClick={onMinus}>
            <i className='fas fa-chevron-circle-left'></i>
          </div>
        </div>
        <div className='td'>
          <div id='links'>
            <PagesItem />
          </div>
        </div>
        <div className='td arr-cover'>
          <div className='arrow' id='r-arrow' onClick={onAdd}>
            <i className='fas fa-chevron-circle-right'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Pages);
