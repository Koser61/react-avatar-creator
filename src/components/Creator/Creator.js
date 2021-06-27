import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import styles from './Creator.scss';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  }
  render() {
    const eyesColor = this.props.match.params.eyesColor,
      hairColor = this.props.match.params.hairColor,
      topColor = this.props.match.params.topColor,
      eyesDivStyle = {
        background: eyesColor,
      },
      hairDivStyle = {
        background: hairColor,
      },
      topDivStyle = {
        background: topColor,
      };
    return (
      <Jumbotron title='Avatar Creator'>
        <div className={styles.profile}>
          <div className={styles.group}>
            <div className={styles.face}></div>
            <div className={styles.eye} style={eyesDivStyle}></div>
            <div className={styles.mouth}></div>
            <div className={styles.hair} style={hairDivStyle}></div>
            <div className={styles.neck}></div>
            <div className={styles.body} style={topDivStyle}></div>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Creator;