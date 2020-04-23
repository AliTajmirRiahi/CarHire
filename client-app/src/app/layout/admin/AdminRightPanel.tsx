import React, { useContext } from 'react';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';

const AdminRightPanel = () => {
  const rootContext = useContext(RootStoreContext);
  const { user } = rootContext.userStore;
  return (
    <div className='col-sm-auto'>
      <aside>
        <div id='sidebar' className='nav-collapse '>
          {/* tabindex="5000" */}
          {/*  sidebar menu start*/}
          <ul className='sidebar-menu' id='nav-accordion'>
            <p className='centered'>
              <a href='/dashboard/Founder'>
                <img
                  alt=''
                  src='/assets/user.png'
                  className='rounded-circle'
                  width='80'
                />
              </a>
            </p>
            <h5 className='centered art-UserName'>{user?.username}</h5>
            <li className='mt'>
              <a className='active' href='#/'>
                <i className='icon icon-performance'></i>
                <span>میزکار</span>
              </a>
            </li>

            <li className='sub-menu '>
              <a href='#/' className='hasSubmenu'>
                <i className='icon icon-rial-1'></i>
                <span>مالی</span>
                <i
                  className='fa fa-chevron-circle-down OpenIcon'
                  aria-hidden='true'
                ></i>
              </a>
              <ul style={{ display: 'none' }}>
                <li className='sub-menu '>
                  <a href='/dashboard/Banklist'>
                    <i className='icon icon-bank-1' aria-hidden='true'></i>
                    <span>بانک ها</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-balance-2' aria-hidden='true'></i>
                    <span>حساب های بانکی</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-cheque-1' aria-hidden='true'></i>
                    <span>دسته چک ها</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='sub-menu'>
              <a href='#/'>
                <i className='icon icon-owner-1'></i>
                <span>مالکین</span>
              </a>
            </li>
            <li className='sub-menu'>
              <a href='#/'>
                <i className='icon icon-rent-1'></i>
                <span>مستأجرین</span>
              </a>
            </li>
            <li className='sub-menu'>
              <a href='#/'>
                <i className='fa fa-handshake-o'></i>
                <span>قرارداد ها</span>
              </a>
            </li>
            <li className='sub-menu'>
              <a href='#/'>
                <i className='icon icon-insurance-1'></i>
                <span>بیمه ها</span>
              </a>
            </li>
            <li className='sub-menu '>
              <a href='#/'>
                <i className='fa fa-car'></i>
                <span>خودرو</span>
                <i
                  className='fa fa-chevron-circle-down OpenIcon'
                  aria-hidden='true'
                ></i>
              </a>
              <ul style={{ display: 'none' }}>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i
                      className='icon icon-license-plate-2'
                      aria-hidden='true'
                    ></i>
                    <span>پلاک ها</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-cars-1' aria-hidden='true'></i>
                    <span>خودرو ها</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='/dashboard/InsuranceType'>
                    <i className='fa fa-building' aria-hidden='true'></i>
                    <span>انواع بیمه</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='/dashboard/InsuranceCompany'>
                    <i className='fa fa-building' aria-hidden='true'></i>
                    <span>شرکت های بیمه</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='fa fa-exchange' aria-hidden='true'></i>
                    <span>انواع تعویض ها</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-money-bag-2' aria-hidden='true'></i>
                    <span>انواع هزینه ها</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-car-parts-1' aria-hidden='true'></i>
                    <span>قطعات و امکانات</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i
                      className='icon icon-maintenance-1'
                      aria-hidden='true'
                    ></i>
                    <span>تعویض دوره ای</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-car-gps-2' aria-hidden='true'></i>
                    <span>لوکیشن</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='sub-menu '>
              <a href='#/'>
                <i className='icon icon-settings-1'></i>
                <span>تنظیمات</span>
                <i
                  className='fa fa-chevron-circle-down OpenIcon'
                  aria-hidden='true'
                ></i>
              </a>
              <ul style={{ display: 'none' }}>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-control-1' aria-hidden='true'></i>
                    <span>تنظیمات کلی</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='fa fa-handshake-o' aria-hidden='true'></i>
                    <span>تنظیمات قرارداد ها</span>
                  </a>
                </li>
                <li className='sub-menu '>
                  <a href='#/'>
                    <i className='icon icon-inquiry-1' aria-hidden='true'></i>
                    <span>تنظیمات استعلام ها</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='sub-menu '>
              <a href='#/'>
                <i className='fa fa-user'></i>
                <span>کاربران</span>
              </a>
            </li>
          </ul>
          {/*  sidebar menu end*/}
        </div>
      </aside>
    </div>
  );
};

export default observer(AdminRightPanel);
