/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <header className="mdl-layout__header mdl-layout__header--scroll">
        <div className="mdl-grid mdl-grid--header mdl-layout__header-row">
          <a className="mdl-layout-title" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span className="Header-brandTxt">Your Company</span>
          </a>
		  <div className="mdl-layout-spacer"></div>
          <Navigation/>
        </div>
      </header>
    );
  }

}

export default Header;
