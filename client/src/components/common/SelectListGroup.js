import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  placeholder,
  onChange,
  disabled,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ))
  return (
    <div className='form-group'>
      <select
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {selectOptions}
      </select>
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default SelectListGroup
