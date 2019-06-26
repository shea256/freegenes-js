import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Parts.css';

class Parts extends React.Component {
  static propTypes = {
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        collection_id: PropTypes.string.isRequired,
        description: PropTypes.string,
        gene_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        original_sequence: PropTypes.string.isRequired,
        part_type: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        status: PropTypes.string,
        time_created: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.header}>Gene Parts</h1>

          <table className={s.table}>
            <thead className={s.tableThead}>
              <tr className={s.tableTr}>
                <th className={s.tableTh} scope="col">#</th>
                <th className={s.tableTh} scope="col">Name</th>
                <th className={s.tableTh} scope="col">Gene ID</th>
                <th className={s.tableTh} scope="col">Part Type</th>
                <th className={s.tableTh} scope="col">Status</th>
                <th className={s.tableTh} scope="col">Time Created</th>
                <th className={s.tableTh} scope="col">Tags</th>
                <th className={s.tableTh} scope="col">Original Sequence</th>
              </tr>
            </thead>
            <tbody className={s.tableTbody}>
              {this.props.parts.map((item, i) => {
                if (item) {
                  return (
                    <tr className={s.tableTr} key={item.uuid}>
                      <th className={s.tableTh} scope="row">{i}</th>
                      <td className={s.tableTd}>{item.name}</td>
                      <td className={s.tableTd}>{item.gene_id}</td>
                      <td className={s.tableTd}>{item.part_type}</td>
                      <td className={s.tableTd}>{item.status}</td>
                      <td className={s.tableTd}>{item.time_created}</td>
                      <td className={s.tableTd}>{item.tags.join(', ')}</td>
                      <td className={s.tableTdBreak}>
                        {item.original_sequence.slice(0,40)}
                        &nbsp;...&nbsp;
                        {item.original_sequence.slice(-40)}
                      </td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
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