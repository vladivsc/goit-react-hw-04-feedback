import { Component } from 'react';

import Section from './Section/Section'
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'

const voteOptions = ["good", "neutral", "bad"];


class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positivePercent = ((this.state.good / total) * 100);
    return Number(Math.round(positivePercent));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={voteOptions} onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
          {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> : <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>}
        </>
    );
  }
}

export default Feedback;