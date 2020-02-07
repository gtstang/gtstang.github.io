import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TextInputGroup({
  name,
  type,
  label,
  placeholder,
  value,
  changed,
  error
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={changed}
        name={name}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
