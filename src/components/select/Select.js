import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Select extends Component {
  renderOptions() {
    let opts = this.props.options;
    if (opts.length && typeof opts[0] !== 'object') {
      opts = this.props.options.map(option => ({ value: option, label: option }));
    }
    return opts.map(opt => <option value={opt.value} key={opt.value}>{opt.label}</option>);
  }

  render() {
    const selectClasses = {
      'select': true,
      [`${this.props.className}`]: this.props.className,
    };

    return (
      <label
        className={classNames(selectClasses)}
        htmlFor={this.props.id}
        disabled={this.props.disabled}
      >
        {this.props.label ? (
          <span className="select-label">{this.props.label}</span>
        ) : null}
        <select
          ref={(input) => { this.selectInputRef = input; }}
          className="select-input"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          tabIndex={this.props.tabIndex}
          disabled={this.props.disabled}
        >
          {this.renderOptions()}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

Select.defaultProps = {
  className: null,
  disabled: false,
  id: null,
  label: null,
  onChange: null,
  options: null,
  placeholder: null,
  tabIndex: '0',
  value: '',
}

export default Select;
