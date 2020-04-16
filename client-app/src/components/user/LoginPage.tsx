import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Container } from 'react-bootstrap';
import Linear from '../preloader/Linear';
import LoginForm from './LoginForm';
import { observer } from 'mobx-react-lite';

const LoginPage = () => {
  const rootStore = useContext(RootStoreContext);
  const { submitting } = rootStore.commonStore;
  return (
    <Container>
      <div className='art-closelogin'>
        <Link to='/'>
          <i className='fa fa-times text-danger' aria-hidden='true'></i>{' '}
        </Link>
        <div className='art-login'>
          <LoginForm />
        </div>
        {submitting && <Linear />}
      </div>
    </Container>
  );
};

export default observer(LoginPage);
