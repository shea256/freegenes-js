import React from 'react';
import PropTypes from 'prop-types';

class CollectionCard extends React.Component {
  static propTypes = {
    collection: PropTypes.shape({
      name: PropTypes.string.isRequired,
      readme: PropTypes.string.isRequired,
      time_created: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  render() {
    const item = this.props.collection;
    return (
      <div className="card" style={{ marginBottom: '30px' }}>
        <div className="card-body">
          <a href={`/collections/${item.uuid}`}>
            <h5 className="card-title">{item.name}</h5>
          </a>
          <h6 className="card-subtitle mb-2 text-muted">
            Created on {item.time_created}
          </h6>
          <p className="card-text">
            {item.readme !== 'Todo' ? (
              item.readme.slice(0, 250)
            ) : (
              <i>(no description found)</i>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default CollectionCard;
