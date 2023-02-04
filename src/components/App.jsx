import css from './statistics-class.module.css';
import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackCounter = name => {
    setState(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = (state.good / total) * 100;
    return Number.parseInt(positivePercentage) || 0;
  };

  const onLeaveFeedback = feedbackCounter;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = state;

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
