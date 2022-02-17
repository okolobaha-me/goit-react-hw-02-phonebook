import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <form>
      <label>
        Filter
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
