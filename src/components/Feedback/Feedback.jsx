import { useState } from 'react';

import Section from './Section/Section'
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'

const voteOptions = ["good", "neutral", "bad"];

const Feedback = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = votes.good + votes.neutral + votes.bad;
  const { good, neutral, bad } = votes;

  const onLeaveFeedback = name => {
    setVotes(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    const { good } = votes;
    const positivePercent = (good / total) * 100;
    return Number(Math.round(positivePercent));
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={voteOptions}
          onLeaveFeedback={onLeaveFeedback}
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
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
};

export default Feedback;