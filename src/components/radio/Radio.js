import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Radio(props) {
  const radioClasses = {
    radio: true,
    'radio--checked': props.checked,
    [`${props.className}`]: props.className,
  };
  let radioInputRef = null;

  return (
    <label
      className={classNames(radioClasses)}
      htmlFor={props.id}
      onKeyDown={(e) => {
        // Trigger radio input click event if label is focused and user presses spacebar
        if (e.keyCode === 32) {
          e.preventDefault();
          radioInputRef.click();
        }
      }}
      tabIndex={props.tabIndex}
      disabled={props.disabled}
    >
      <span className="radio-icon">
        {props.checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        )}
      </span>
      {props.label ? (
        <span className="radio-label">{props.label}</span>
      ) : null}
      <input
        ref={(input) => { radioInputRef = input; }}
        type="radio"
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

Radio.propTypes = {
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

Radio.defaultProps = {
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

export default Radio;
