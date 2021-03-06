import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TopContentMain = () => {
  return (
    <Fragment>
      <div className='art-topContent'></div>
      <div className='container' style={{ position: 'relative' }}>
        <div className='text-center art-midDesc'>
          <h1>مدیریت کرایه خودرو آرتــا</h1>
          <h5>تمام مراحل کرایه خودرو را اینترنتی کنید!</h5>
          <div style={{ margin: 50 }}>
            <Link to='/register' className='btn btn-success'>
              شروع کنید
              {'   '}
              <i className='fa fa-car' aria-hidden='true'></i>
            </Link>
          </div>
        </div>
      </div>
      <div className='art-midContent'></div>
    </Fragment>
  );
};

export default TopContentMain;
