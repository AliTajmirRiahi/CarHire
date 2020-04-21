import React, { Fragment } from 'react';
import DashChart from './DashChart';

const Dashboard = () => {
  return (
    <Fragment>
      <h3 className='p-4 text-info'>
        عصر بخیر علی تاجمیرریاحی ، به میزکار خود خوش آمدید !
      </h3>
      <DashChart />
    </Fragment>
  );
};

export default Dashboard;
