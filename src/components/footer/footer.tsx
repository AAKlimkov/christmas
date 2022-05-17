import React from 'react';
import './footer.css';
import logo from '../../assets/rs_school_js.svg';

const AppFooter = function (): JSX.Element {
  return (
    <footer className="footer">
      <a href="https://github.com/AAKlimkov"> GitHub Andrei Klimkou</a>
      <p>2021 год</p>

      <a href="https://rs.school/js/">
        <img src={logo} alt="Logo RSSchool" width="240" />
      </a>
    </footer>
  );
};
export default AppFooter;
