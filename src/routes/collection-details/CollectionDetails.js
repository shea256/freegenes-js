import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CollectionDetails.css';

class CollectionDetails extends React.Component {
  static propTypes = {
    collection: PropTypes.shape({
      name: PropTypes.string.isRequired,
      readme: PropTypes.string.isRequired,
      time_created: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      parts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  };

  render() {
    const collection = this.props.collection
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{collection.name}</h1>

          <h4>Time Created</h4>

          <p>
            {collection.time_created}
          </p>

          <h4>Tags</h4>

          {collection.tags.length > 0 ? (
            <ul>
            {collection.tags.map(tag => (
              <li>{tag}</li>
            ))}
            </ul>
          ) : (
            <p>
              <i>- no tags found -</i>
            </p>
          )}

          <h4>Description</h4>

          <p>
            {collection.readme}
          </p>

          <h4>Parts</h4>

          <ul>
          {collection.parts.map((partUUID, index) => (
            <li key={index}>
              <a href={`/parts/${partUUID}`}>
                {partUUID}
              </a>
            </li>
          ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(CollectionDetails);