import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOption } from './FeedbackOption/FeedbackOption.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';

 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((this.state.good / total) * 100);
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
        ;
      </>
    );
  }
}

export {App}