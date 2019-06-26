import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Authors.css';

class Authors extends React.Component {
  static propTypes = {
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        affiliation: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Gene Authors</h1>

          <table className={s.table}>
            <thead className={s.tableThead}>
              <tr className={s.tableTr}>
                <th className={s.tableTh} scope="col">#</th>
                <th className={s.tableTh} scope="col">Name</th>
                <th className={s.tableTh} scope="col">Email</th>
                <th className={s.tableTh} scope="col">Affiliation</th>
              </tr>
            </thead>
            <tbody className={s.tableTbody}>
              {this.props.authors.map((item, i) => { if (item) {
              return (
                <tr className={s.tableTr} key={item.uuid}>
                  <th className={s.tableTh} scope="row">{i}</th>
                  <td className={s.tableTd}>{item.name}</td>
                  <td className={s.tableTd}>{item.email}</td>
                  <td className={s.tableTd}>{item.affiliation}</td>
                </tr>
              )
              }})}
            </tbody>
          </table>

          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Authors);