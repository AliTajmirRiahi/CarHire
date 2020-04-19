import React, { useContext } from 'react';
import Dashboard from '../dash/Dashboard';
import BankList from '../../../components/banks/BankList';
import { Switch, Route } from 'react-router-dom';
import AnimationGradient from '../../../components/preloader/AnimationGradient';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';
const AdminMainContent = () => {
  const rootContext = useContext(RootStoreContext);
  const { loading } = rootContext.commonStore;
  return (
    <div className='col-sm-12 art-mainContent '>
      <div className='container'>
        {loading ? (
          <AnimationGradient height={600} />
        ) : (
          <div className='art-divTable'>
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/dashboard/BankList' component={BankList} />
            </Switch>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(AdminMainContent);
