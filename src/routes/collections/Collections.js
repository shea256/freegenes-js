import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Collections.css';

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
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Gene Collections</h1>

          {this.props.collections.map(item => (
            <article key={item.uuid} className={s.collectionsItem}>
              <h1 className={s.collectionsTitle}>
                {item.name}
              </h1>
              <h4 className={s.collectionsDesc}>
                Created: {item.time_created}
              </h4>
              <h4 className={s.collectionsDesc}>
                Tags: {item.tags.join(', ')}
              </h4>
              <div
                className={s.collectionsDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.readme }}
              />
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Collections);
