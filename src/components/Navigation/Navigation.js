/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <nav className={classNames(this.props.className, 'mdl-navigation')} role="navigation">
        <a className="mdl-navigation__link" href="/" onClick={Link.handleClick}>Home</a>
        <a className="mdl-navigation__link" href="/about" onClick={Link.handleClick}>About</a>
        <a className="mdl-navigation__link" href="/services" onClick={Link.handleClick}>Services</a>
        <a className="mdl-navigation__link" href="/portfolio" onClick={Link.handleClick}>Our work</a>
        <a className="mdl-navigation__link" href="/contact" onClick={Link.handleClick}>Contact us</a>
      </nav>
    );
  }

}

export default Navigation;
