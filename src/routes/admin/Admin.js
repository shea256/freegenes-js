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
// import { connect } from 'react-redux';
import s from './Admin.css';
// import capitalize from '../../utils/capitalize';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const collections = ['parts', 'authors', 'collections', 'plates', 'wells'];
    const createPages = [];
    const collectionPages = [];

    collections.forEach(collection => {
      const createPage = {
        url: `/${collection}/create`,
        title: `Create ${collection}`,
      };
      createPages.push(createPage);

      const collectionPage = {
        url: `/${collection}`,
        title: `${collection}`,
      };
      collectionPages.push(collectionPage);
    });

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <h4>Create</h4>
          <ul>
            {createPages.map(page => (
              <li>
                <a href={page.url}>{page.url}</a>
              </li>
            ))}
          </ul>
          <h4>Edit and Update</h4>
          <ul>
            {collectionPages.map(page => (
              <li>
                <a href={page.url}>{page.url}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
