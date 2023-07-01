import { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOption } from './FeedbackOption/FeedbackOption.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  };

  const onLeaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOption options={options} onLeaveFeedback={onLeaveFeedback} />
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
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
      ;
    </>
  );
};
export { App };
