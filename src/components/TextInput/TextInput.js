import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './TextInput.css';

class TextInput extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.formGroup}>
        <label className={s.label} htmlFor={this.props.name}>
          {this.props.label}
          <input
            className={s.formControl}
            id={this.props.name}
            type="text"
            name={this.props.name}
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
          />
        </label>
      </div>
    );
  }
}

export default withStyles(s)(TextInput);
