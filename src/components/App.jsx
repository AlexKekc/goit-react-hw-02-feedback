import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  optionsOfFeedBack = () => {
    let optionsArray = [];
    for (const key in this.state) {
      optionsArray.push(key);
    }

    return optionsArray;
  };

  feedbackCounter = event => {
    const feedbackOptionValue = event.currentTarget.value;

    this.setState(prevState => ({
      [feedbackOptionValue]: prevState[feedbackOptionValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percentage = Math.round((good / (good + neutral + bad)) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.optionsOfFeedBack()}
            onLeaveFeedback={this.feedbackCounter}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="Oops! There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
