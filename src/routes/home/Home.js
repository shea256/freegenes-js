/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import CollectionsList from '../../components/CollectionsList';
import Alerts from '../../components/Alerts';

class Home extends React.Component {
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
    const { errors } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>The Open Genetic Parts Registry</h1>
            <p className={s.bannerDesc}>
              FreeGenes offers genetic parts in the public domain, for all to
              browse and order
            </p>
          </div>

          {errors.length > 0 ? (
            <Alerts errors={this.props.errors} />
          ) : (
            <CollectionsList collections={this.props.collections} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
