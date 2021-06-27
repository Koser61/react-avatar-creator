import React from 'react';
import PropTypes from 'prop-types';
import styles from './Jumbotron.scss';
import Container from '../Container/Container';

const Jumbotron = ({children, title}) => {
  return (
    <Container>
      <section className={styles.component}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <div className={styles.content}>
          {children}
        </div>
      </section>
    </Container>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Jumbotron;