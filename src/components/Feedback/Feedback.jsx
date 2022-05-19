// import PropTypes from 'prop-types';
import React, { Component } from 'react';
class Feedback extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  createButtons = () => {
    return Object.keys(this.state).map(data => (
      <button key={data}>{data}</button>
    ));
  };

  firstLetterLarge = string => {
    if (!string) {
      return;
    }

    const splitedType = string.split('');
    const firstLetter = splitedType[0].toUpperCase();
    const typeCopy = [...splitedType];
    typeCopy.splice(0, 1);
    const result = [firstLetter, ...typeCopy].join('');
    return result;
  };

  createStatistics = () => {
    return Object.keys(this.state).map(data => (
      <p key={data}>
        {this.firstLetterLarge(data)}: {this.state[data]}
      </p>
    ));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        {this.createButtons()}
        <h2>Statistics</h2>
        {this.createStatistics()}
      </div>
    );
  }
}

export default Feedback;
