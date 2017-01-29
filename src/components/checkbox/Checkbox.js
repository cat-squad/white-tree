import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Checkbox(props) {
  const checkboxClasses = {
    checkbox: true,
    'checkbox--checked': props.checked,
    [`${props.className}`]: props.className,
  };
  let checkboxInputRef = null;

  return (
    <label
      className={classNames(checkboxClasses)}
      htmlFor={props.id}
      onKeyDown={(e) => {
        // Trigger radio input click event if label is focused and user presses spacebar
        if (e.keyCode === 32) {
          e.preventDefault();
          checkboxInputRef.click();
        }
      }}
      tabIndex={props.tabIndex}
      disabled={props.disabled}
    >
      <span className="checkbox-icon">
        {props.checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </span>
      {props.label ? (
        <span className="checkbox-label">{props.label}</span>
      ) : null}
      <input
        ref={(input) => { checkboxInputRef = input; }}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        tabIndex={props.tabIndex}
        disabled={props.disabled}
      />
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkbox.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null,
  name: null,
  onChange: null,
  tabIndex: '0',
  value: null,
};

export default Checkbox;
