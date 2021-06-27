import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name='user-circle'/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink to='/creator' activeClassName='active'>Creator</NavLink>
              <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;