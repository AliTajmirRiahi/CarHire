import React, { Fragment } from 'react';
import NavBar from '../nav/NavBar';
import TopContentMain from './TopContentMain';
import FooterMain from '../footer/FooterMain';

const BaseHomePage = () => {
  return (
    <Fragment>
      <NavBar />
      <TopContentMain />
      <FooterMain />
    </Fragment>
  );
};

export default BaseHomePage;
