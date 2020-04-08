import React, { useEffect } from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';
import NavBar from '../../components/nav/NavBar';
import TopContentMain from '../../components/layout/TopContentMain';
import FooterMain from '../../components/footer/FooterMain';
import $ from 'jquery';
// import { FormSelect } from 'materialize-css';
import { DatePicker } from 'react-persian-datepicker';
function App() {
  // useEffect(() => {
  //   $('select').each((i, t) => {
  //     FormSelect.init(t);
  //   });
  // }, []);
  return (
    <div className='App'>
      <DatePicker />
      {/* <NavBar /> */}
      {/* <TopContentMain /> */}
      {/* <FooterMain /> */}
      {/* <Route component={NotFound} /> */}
    </div>
  );
}

export default App;
