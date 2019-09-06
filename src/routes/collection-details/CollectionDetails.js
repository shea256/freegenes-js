import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CollectionDetails.css';
import Alerts from '../../components/Alerts';

class CollectionDetails extends React.Component {
  static propTypes = {
    collection: PropTypes.shape({
      name: PropTypes.string.isRequired,
      readme: PropTypes.string.isRequired,
      time_created: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      parts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    parts: PropTypes.object.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { collection, parts, errors } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {errors.length === 0 ? (
            <div>
              <h1>{collection.name}</h1>

              <h4>Description</h4>

              <p>{collection.readme}</p>

              <h4>Time Created</h4>

              <p>{collection.time_created}</p>

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

              <h4>Parts</h4>

              <ul>
                {collection.parts.map(partUUID => (
                  <li key={partUUID}>
                    <a href={`/parts/${partUUID}`}>{parts[partUUID].name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Alerts errors={errors} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CollectionDetails);
