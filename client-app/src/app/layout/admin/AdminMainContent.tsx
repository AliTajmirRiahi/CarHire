import React, { useContext } from 'react';
import Dashboard from '../dash/Dashboard';
import BaseList from '../../../components/baseInfo/BaseList';
import { Switch, Route } from 'react-router-dom';
import AnimationGradient from '../../../components/preloader/AnimationGradient';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';
import Founder from '../../../components/founder/Founder';
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
              <Route
                exact
                path='/dashboard/BankList'
                render={() => <BaseList type='Bank' typeName='بانک' />}
              />
              <Route
                exact
                path='/dashboard/InsuranceType'
                render={() => (
                  <BaseList type='InsuranceType' typeName='انواع بیمه' />
                )}
              />
              <Route
                exact
                path='/dashboard/InsuranceCompany'
                render={() => (
                  <BaseList type='InsuranceCompany' typeName='شرکت بیمه' />
                )}
              />
              <Route
                exact
                path='/dashboard/Founder'
                render={() => <Founder />}
              />
            </Switch>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(AdminMainContent);
