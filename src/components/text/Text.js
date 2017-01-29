import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Text(props) {
  const textClasses = {
    'text': true,
    [`${props.className}`]: props.className,
  };
  let textInputRef = null; // eslint-disable-line

  return (
    <label
      className={classNames(textClasses)}
      htmlFor={props.id}
      disabled={props.disabled}
    >
      {props.label ? (
        <span className="text-label">{props.label}</span>
      ) : null}
      {props.textarea ? (
        <textarea
          ref={(input) => { textInputRef = input; }}
          className="text-area"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          tabIndex={props.tabIndex}
          disabled={props.disabled}
        />
      ) : (
        <input
          ref={(input) => { textInputRef = input; }}
          type="text"
          className="text-input"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          tabIndex={props.tabIndex}
          disabled={props.disabled}
        />
      )}
    </label>
  );
}

Text.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  textarea: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

Text.defaultProps = {
  className: null,
  id: null,
  label: null,
  onChange: null,
  name: null,
  placeholder: null,
  tabIndex: '0',
  textarea: false,
  value: '',
}

export default Text;
