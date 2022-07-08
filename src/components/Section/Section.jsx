import './Section.css';

const Section = ({ title, children }) => {
  return (
    <div className="section__container">
      <h2 className="section__title">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
