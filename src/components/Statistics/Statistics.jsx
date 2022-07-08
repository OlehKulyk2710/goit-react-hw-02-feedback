import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className="statistics__container">
        <ul className="statistics__list">
          <li className="statistics__item">
            Good: <span>{good}</span>
          </li>
          <li className="statistics__item">
            Neutral: <span>{neutral}</span>
          </li>
          <li className="statistics__item">
            Bad: <span>{bad}</span>
          </li>
        </ul>
      </div>
      <ul className="sum__list">
        <li className="sum__totalFb">
          Total: <span>{total}</span>
        </li>
        <li className="sum__positiveFb">
          Positive feedbacks: <span>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;