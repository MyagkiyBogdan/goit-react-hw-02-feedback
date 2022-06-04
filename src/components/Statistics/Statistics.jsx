import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <div className={styles.text}>
        <div className={styles.feedbackList}>
          {Object.keys(this.props.state).map(data => (
            <p key={data} className={styles.feedbackWrapper}>
              {this.props.firstLetterLarge(data)}
              <span className={styles.feedbackCount}>
                {this.props.state[data]}
              </span>
            </p>
          ))}
        </div>
        <div>
          <p>Total: {this.props.total()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }

  // this.props.total = countTotalFeedback from App

  countPositiveFeedbackPercentage = () => {
    if (this.props.total() === 0) {
      return 0;
    }
    return Math.floor((this.props.state.good * 100) / this.props.total());
  };
}

Statistics.propTypes = {
  state: PropTypes.object,
};

export default Statistics;
