import React, { Component } from 'react';
import CountDown from '../CountDown/CountDown';
import CountDownFinished from '../CountDown/CountDownFinished';
import './CountDownList.css';

class CountDownList extends Component {
  constructor({ dates }) {
    super();
    this.state = {
      dates: dates,
      finished: [],
    };
  }

  // Sort dates by date starting with the closest date
  componentDidMount() {
    const { dates, finished } = this.state;

    // check if the date is finished
    dates.forEach((date, index) => {
      const now = new Date();

      if (Date.parse(now) > Date.parse(date.date)) {
        finished.push(date);
        dates.splice(index, 1);
      }
    });

    // sort dates by date starting with the closest date
    dates.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });

    this.setState({ dates, finished });
  }

  render() {
    const dates = this.state.dates;
    return (
      <div className="CountDownList mb4">
        {dates.map((date, index) => (
          <div key={index}>
            <h2>{date.title}</h2>
            <CountDown date={date.date} />
          </div>
        ))}

        {this.state.finished.length > 0 && (
          <hr className="br1 b--white-90 w-80 mt3 mb3" />
        )}
  
        {this.state.finished.map((date, index) => (
          <div key={index}>
            {/* <h2>{date.title}</h2> */}
            <CountDownFinished date={date} />
          </div>
        ))}
      </div>
    );
  }
}

export default CountDownList;
