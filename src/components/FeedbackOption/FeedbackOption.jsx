import React from 'react';
import css from './FeedbackOption.module.css';
import PropTypes from 'prop-types';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
        className={css.button}
          key={crypto.randomUUID()}
          type="button"
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
