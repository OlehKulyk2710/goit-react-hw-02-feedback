import shortid from 'shortid';

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
