import React, { Fragment, useContext, useEffect, useState } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const PagesItem = () => {
  const [one, setOne] = useState(-1);
  const [two, setTwo] = useState(-1);
  const [three, setThree] = useState(-1);
  const rootStore = useContext(RootStoreContext);
  const { currentPage, setCurrentPage, pages } = rootStore.pageStore;
  useEffect(() => {
    if (pages !== 0) {
      if (currentPage === 1) {
        setOne(currentPage);
        setTwo(currentPage + 1);
        setThree(currentPage + 2);
      } else {
        setOne(currentPage - 1);
        setTwo(currentPage);
        setThree(currentPage + 1);
      }
    }
  }, [currentPage, pages]);

  const onClick = (num: number) => {
    if (num !== currentPage) setCurrentPage(num);
  };

  return (
    <Fragment>
      {one > 0 && (
        <div
          className='pg-link'
          id={one === 1 && currentPage !== 2 ? 'm-pg-link' : ''}
          onClick={() => {
            onClick(one);
          }}
        >
          <span>{one}</span>
        </div>
      )}
      {two >= 0 && (
        <div
          className='pg-link'
          id={two > 2 || currentPage === 2 ? 'm-pg-link' : ''}
          onClick={() => {
            onClick(two);
          }}
        >
          <span>{two}</span>
        </div>
      )}
      {three <= pages && (
        <div
          className='pg-link'
          onClick={() => {
            onClick(three);
          }}
        >
          <span>{three}</span>
        </div>
      )}
    </Fragment>
  );
};

export default observer(PagesItem);
