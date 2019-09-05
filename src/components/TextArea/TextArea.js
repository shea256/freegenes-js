import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './TextArea.css';

class TextArea extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.formGroup}>
        <label className={s.label} htmlFor={this.props.name}>
          {this.props.label}
          <textarea
            rows="4"
            className={s.formControl}
            id={this.props.name}
            name={this.props.name}
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
          />
        </label>
      </div>
    );
  }
}

export default withStyles(s)(TextArea);
