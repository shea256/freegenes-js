import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Collections.css';
import Alerts from '../../components/Alerts';
import CollectionsList from '../../components/CollectionsList';

class Collections extends React.Component {
  static propTypes = {
    collections: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        readme: PropTypes.string.isRequired,
        time_created: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Biopart Collections</h1>

          {this.props.errors.length === 0 ? (
            <CollectionsList collections={this.props.collections} />
          ) : (
            <Alerts errors={this.props.errors} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Collections);
