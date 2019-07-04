import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AuthorDetails.css';

class AuthorDetails extends React.Component {
  static propTypes = {
    author: PropTypes.shape({
      affiliation: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      parts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    parts: PropTypes.object.isRequired
  };

  render() {
    const author = this.props.author
    const parts = this.props.parts
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{author.name}</h1>

          <h4>Affiliation</h4>

          <p>
            {author.affiliation ? (
              author.affiliation
            ) : (
              <i>- no affiliation found -</i>
            )}
          </p>

          <h4>Email</h4>

          <p>
            {author.email ? (
              author.email
            ) : (
              <i>- no email found -</i>
            )}
          </p>

          <h4>Parts</h4>

          <ul>
          {author.parts.map((partUUID, index) => (
            <li key={index}>
              <a href={`/parts/${partUUID}`}>
                {parts[partUUID].name}
              </a>
            </li>
          ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(AuthorDetails);