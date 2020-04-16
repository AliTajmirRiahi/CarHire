import React, { useEffect, useContext, Fragment } from 'react';
import '../../app/layout/style.css';
import '../../app/layout/artaFont.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import RegisterForm from '../../components/user/RegisterForm';
import BaseHomePage from '../../components/layout/BaseHomePage';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../components/layout/NotFound';
import '../layout/js/art-menu.js';
import Admin from '../../app/layout/admin/Admin';
import ModalContainer from '../../components/modals/ModalContainer';
import LoginPage from '../../components/user/LoginPage';

function App() {
  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, token } = rootStore.commonStore;
  const { getUser } = rootStore.userStore;
  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [token, setAppLoaded, getUser]);
  return (
    <Fragment>
      <ModalContainer />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        className='defaultFont'
      />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={BaseHomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/dashboard' component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default withRouter(observer(App));
