import React from 'react';
import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Alerts.css';

class Alerts extends React.Component {
  static propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    errors: [],
  };

  render() {
    return (
      <div>
        {this.props.errors.map(error => (
          <div className="alert alert-danger" key={error}>
            {error}
          </div>
        ))}
      </div>
    );
  }
}

export default Alerts;
