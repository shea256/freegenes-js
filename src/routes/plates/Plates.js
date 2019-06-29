import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Plates.css';

class Plates extends React.Component {
  static propTypes = {
    plates: PropTypes.arrayOf(
      PropTypes.shape({
        breadcrumb: PropTypes.string.isRequired,
        plate_form: PropTypes.string.isRequired,
        plate_name: PropTypes.string.isRequired,
        plate_type: PropTypes.string.isRequired,
        plate_vendor_id: PropTypes.string,
        protocol_uuid: PropTypes.string,
        status: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.header}>Plates</h1>

          <table className={s.table}>
            <thead className={s.tableThead}>
              <tr className={s.tableTr}>
                <th className={s.tableTh} scope="col">#</th>
                <th className={s.tableTh} scope="col">Name</th>
                <th className={s.tableTh} scope="col">Type</th>
                <th className={s.tableTh} scope="col">Form</th>
                <th className={s.tableTh} scope="col">Status</th>
                <th className={s.tableTh} scope="col">Breadcrumb</th>
                <th className={s.tableTh} scope="col">Vendor ID</th>
                <th className={s.tableTh} scope="col">Protocol ID</th>
              </tr>
            </thead>
            <tbody className={s.tableTbody}>
              {this.props.plates.map((item, i) => {
                if (item) {
                  return (
                    <tr className={s.tableTr} key={item.uuid}>
                      <th className={s.tableTh} scope="row">{i}</th>
                      <td className={s.tableTd}>
                        <a href={`/plates/${item.uuid}`}>
                          {item.plate_name}
                        </a>
                      </td>
                      <td className={s.tableTd}>{item.plate_type}</td>
                      <td className={s.tableTd}>{item.plate_form}</td>
                      <td className={s.tableTd}>{item.status}</td>
                      <td className={s.tableTd}>{item.breadcrumb}</td>
                      <td className={s.tableTd}>{item.plate_vendor_id}</td>
                      <td className={s.tableTd}>{item.protocol_uuid}</td>
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

export default withStyles(s)(Plates);
