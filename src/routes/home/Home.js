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

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

class Home extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>The DNA Commons</h1>
            <p className={s.bannerDesc}>
              DNA sequences in the public domain, for all to browse and order
            </p>
          </div>

          <h2>
            Resources
          </h2>
          <div>
            {['collections', 'parts', 'authors', 'plates', 'wells'].map((item, index) => (
              <p key={index}>
                <a href={`/${item}`}>
                  {item.capitalize()}
                </a>
              </p>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
