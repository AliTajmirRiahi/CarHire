import React, { Fragment } from 'react';
import DashChart from './DashChart';
import BankList from '../../../components/banks/BankList';

const Dashboard = () => {
  return (
    <Fragment>
      {/* <h3>عصر بخیر علی تاجمیرریاحی ، به میزکار خود خوش آمدید !</h3>
      <DashChart /> */}
      <BankList />
    </Fragment>
  );
};

export default Dashboard;
