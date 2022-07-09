import shortid from 'shortid';
import PropTypes from 'prop-types';

import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback__container">
      <ul className="list feedback__list">
        {options.map(option => {
          const id = shortid.generate();
          return (
            <li key={id} className="feedback__item">
              <button type="button" onClick={onLeaveFeedback}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
