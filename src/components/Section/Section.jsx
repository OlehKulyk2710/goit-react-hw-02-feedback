import './Section.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className="section__container">
      <h2 className="section__title">{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
