import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Parts.css';
import Alerts from '../../components/Alerts';

class Parts extends React.Component {
  static propTypes = {
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        collection_id: PropTypes.string.isRequired,
        description: PropTypes.string,
        gene_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        original_sequence: PropTypes.string,
        part_type: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        status: PropTypes.string,
        time_created: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }),
    ).isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
    variables: PropTypes.object.isRequired,
  };

  render() {
    const { parts, errors, variables } = this.props;
    const { first, skip, page } = variables;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Bioparts</h1>

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
                      Gene ID
                    </th>
                    <th className={s.tableTh} scope="col">
                      Part Type
                    </th>
                    <th className={s.tableTh} scope="col">
                      Status
                    </th>
                    <th className={s.tableTh} scope="col">
                      Time Created
                    </th>
                    <th className={s.tableTh} scope="col">
                      Tags
                    </th>
                    <th className={s.tableTh} scope="col">
                      Original Sequence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {parts.map((item, i) => {
                    if (item) {
                      return (
                        <tr key={item.uuid}>
                          <th className={s.tableTh} scope="row">
                            {i + 1 + skip}
                          </th>
                          <td className={s.tableTd}>
                            <a href={`/parts/${item.uuid}`}>{item.name}</a>
                          </td>
                          <td className={s.tableTd}>{item.gene_id}</td>
                          <td className={s.tableTd}>{item.part_type}</td>
                          <td className={s.tableTd}>{item.status}</td>
                          <td className={s.tableTd}>{item.time_created}</td>
                          <td className={s.tableTd}>{item.tags.join(', ')}</td>
                          <td className={s.tableTdBreak}>
                            {item.original_sequence
                              ? item.original_sequence.slice(0, 40)
                              : null}
                            {item.original_sequence &&
                            item.original_sequence.length > 40 ? (
                              <span>
                                <br />
                                (and {item.original_sequence.length - 40} more
                                base pairs)
                              </span>
                            ) : null}
                          </td>
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

          <p>
            {page > 1 ? (
              <a href={`/parts?page=${page - 1}`}>Previous {first} results</a>
            ) : null}

            {page > 1 && parts.length === first ? (
              <span>&nbsp;|&nbsp;</span>
            ) : null}

            {parts.length === first ? (
              <a href={`/parts?page=${page + 1}`}>Next {first} results</a>
            ) : null}
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Parts);

/*
                <th scope="col">Collection ID</th>
                <td>{item.collection_id}</td>
*/
