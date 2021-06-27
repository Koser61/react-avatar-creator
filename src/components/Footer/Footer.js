import React from 'react';
import styles from './Footer.scss';
import Container from '../Container/Container';

class Footer extends React.Component {
  render(){
    return (
      <footer className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <p>React avatar creator app</p>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;