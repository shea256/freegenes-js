import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Collections.css';
import Alerts from '../../components/Alerts';

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
    const { collections, errors } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Gene Collections</h1>

          {errors.length === 0 ? (
            <div className="row" style={{ marginTop: '30px' }}>
              {collections.map(item => {
                if (item) {
                  return (
                    <div className="col-md-4" key={item.uuid}>
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
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <Alerts errors={errors} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Collections);
