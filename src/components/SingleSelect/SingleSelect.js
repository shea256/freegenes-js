import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './SingleSelect.css';

class SingleSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.formGroup}>
        <label className={s.label} htmlFor={this.props.name}>
          {this.props.label}
          <select
            className={`${s.formControl} ${s.selectFormControl}`}
            id={this.props.name}
            name={this.props.name}
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
          >
            {this.props.options.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default withStyles(s)(SingleSelect);
