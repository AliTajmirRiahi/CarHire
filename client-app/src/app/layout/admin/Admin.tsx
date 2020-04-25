import React, { useContext } from 'react';
import '../css/style-responsive.css';
import '../css/style.css';
import '../css/table-responsive.css';
import '../css/to-do.css';
import '../css/zabuto_calendar.css';
import '../myIconFont/styles.css';

import AdminHeader from './AdminHeader';
import AdminRightPanel from './AdminRightPanel';
import AdminMainContent from './AdminMainContent';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';
import { artMenu } from '../../layout/js/art-menu.js';

const Admin = () => {
  const rootStore = useContext(RootStoreContext);
  const { apploading } = rootStore.commonStore;

  if (!apploading) artMenu();
  return (
    <section id='container' style={{ position: 'relative' }}>
      <AdminHeader />
      <div className='row'>
        <AdminRightPanel />
        <AdminMainContent />
      </div>
      {/* <footer className='site-footer'>
        <div className='text-center'>
          <p>
            © Copyrights <strong>Dashio</strong>. All Rights Reserved
          </p>
          <div className='credits'>
            
          </div>
          <a href='#/' className='go-top'>
            <i className='fa fa-angle-up'></i>
          </a>
        </div>
      </footer> */}

      {/* footer end*/}
    </section>
  );
};

export default observer(Admin);
