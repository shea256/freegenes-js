import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './CollectionsList.css';
import CollectionCard from './CollectionCard';

class CollectionsList extends React.Component {
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
  };

  render() {
    return (
      <div className={`row ${s.cardListWrapper}`}>
        {this.props.collections.map(collection => {
          if (collection) {
            return (
              <div className="col-md-6" key={collection.uuid}>
                <CollectionCard collection={collection} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default withStyles(s)(CollectionsList);
