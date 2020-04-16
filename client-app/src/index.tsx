import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollToTop from './components/layout/ScrollToTop';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

// از هیستوری میشه برای جایی خاس برای تغییر مسیر استفاده کرد
// جاهایی که به هیستوری دسترسی نداریم
// import history from '../..'
