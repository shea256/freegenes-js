import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Authors.css';
import Alerts from '../../components/Alerts';

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
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { authors, errors } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Biopart Authors</h1>

          {errors.length === 0 ? (
            <div className={`table-responsive ${s.tableWrapper}`}>
              <table className={`table ${s.table}`}>
                <thead>
                  <tr>
                    <th className={s.tableTh} scope="col">
                      #
                    </th>
                    <th className={s.tableTh} scope="col">
                      Name
                    </th>
                    <th className={s.tableTh} scope="col">
                      Email
                    </th>
                    <th className={s.tableTh} scope="col">
                      Affiliation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {authors.map((item, i) => {
                    if (item) {
                      return (
                        <tr key={item.uuid}>
                          <th className={s.tableTh} scope="row">
                            {i}
                          </th>
                          <td className={s.tableTd}>
                            <a href={`/authors/${item.uuid}`}>{item.name}</a>
                          </td>
                          <td className={s.tableTd}>{item.email}</td>
                          <td className={s.tableTd}>{item.affiliation}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Alerts errors={errors} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Authors);
