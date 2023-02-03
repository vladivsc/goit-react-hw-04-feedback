import styles from '../Section/section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}