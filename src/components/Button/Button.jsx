// import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <div style={{ textAlign: 'center', margin: '16px' }}>
      <button
        className={styles.buttonLoadMore}
        type="button"
        onClick={onLoadMore}
      >
        Load more
      </button>
    </div>
  );
}

// Button.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
// };
