import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <form className={s.filter}>
      <label className={s.filterLabel}>
        <span className={s.filterTitle}>Filter</span>
        <input
          type="text"
          placeholder="Whom are you looking for"
          onChange={onChange}
          value={value}
        />
      </label>
    </form>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
