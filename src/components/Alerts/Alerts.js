import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Alerts.css';
import PropTypes from 'prop-types';

class Alerts extends React.Component {
  static propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  static defaultProps = {
    errors: [],
  };

  render() {
    return (
      <div className={s.root}>
      {this.props.errors.map(error => (
        <div className={`${s.alert} alert alert-danger`} key={error}>
          {error}
        </div>
      ))}
      </div>
    );
  }
}

export default withStyles(s)(Alerts);
