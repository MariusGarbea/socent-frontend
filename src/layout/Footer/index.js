// @flow

import React from 'react';
import AuthService from '../../utils/AuthService'
import Img from '../../components/Img'
import logo from '../../../public/min-logo.png'
import './footer.css';

type Props = {
  auth: AuthService,
}
function Footer(props: Props){
  return (
    <div id='footer' className='section grey ml'>
      {/* className={!props.auth.isLoggedIn() ? 'section grey' : 'section grey ml'} */}
      <div className="logo_minister"><Img src={logo} alt='Ministerul Muncii' /></div>
      <p className="social-media">
        <a href="https://twitter.com" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a>
        <a href="https://facebook.com" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://www.linkedin.com" target="_blank" title="linkedin"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/orgs/gov-ithub" target="_blank" title="github"><i className="fa fa-github"></i></a>
      </p>

    </div>
  );
}
export default Footer;
