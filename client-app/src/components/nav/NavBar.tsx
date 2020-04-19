import React, { Fragment, useContext } from 'react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { Nav, NavDropdown, Container, Navbar, Row, Col } from 'react-bootstrap';
import Linear from '../preloader/Linear';
import LoginForm from '../user/LoginForm';
const NavBar = () => {
  const rootStore = useContext(RootStoreContext);
  // const { appLoaded } = rootStore.commonStore;
  const { user, logout } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;
  const log = () => {
    logout();
  };
  return (
    <Container>
      <Navbar bg='secondary' variant='dark' className='shadow rounded'>
        <Navbar.Brand href='#home'>
          <img alt='' src='favicon.ico' style={{ width: 50 }} />
          {'   '}آرتـــا
        </Navbar.Brand>
        <Nav className='mr-auto' defaultActiveKey='/home' as='ul'>
          <Nav.Item as='li'>
            <Nav.Link href=''>سوالات متداول</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey='link-1'>قیمت ها</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey='link-2'>مشتریان</Nav.Link>
          </Nav.Item>
          <hr className='art-divider' />
          {user ? (
            <Fragment>
              <Nav.Item>
                <NavDropdown title=' ' id='collasible-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    <Row>
                      <Col className='text-right '>
                        <i className='fa fa-tachometer' aria-hidden='true'></i>
                      </Col>
                      <Col className='text-center '>داشبورد</Col>
                    </Row>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={log}>
                    <Row>
                      <Col className='text-right '>
                        <i className='fa fa-sign-out' aria-hidden='true'></i>
                      </Col>
                      <Col className='text-center '>خروج</Col>
                    </Row>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <div className='art-userAwatar'>
                  <img
                    alt=''
                    className='w-100 rounded-circle'
                    src='/assets/user.png'
                  ></img>
                </div>
              </Nav.Item>
            </Fragment>
          ) : (
            <Fragment>
              <Nav.Item>
                <Nav.Link
                  className='btn btn-primary text-white'
                  href='/register'
                >
                  شروع کنید ... !
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ marginRight: 10 }}>
                <Nav.Link
                  className='btn btn-success text-white'
                  onClick={() => openModal(<LoginForm />, 'ورود', 'sm')}
                >
                  ورود
                </Nav.Link>
              </Nav.Item>
            </Fragment>
          )}
        </Nav>
      </Navbar>
      {/* {!appLoaded && <Linear />} */}
    </Container>
  );
};

export default observer(NavBar);
