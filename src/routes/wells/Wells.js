import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Wells.css';

class Wells extends React.Component {
  static propTypes = {
    wells: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string.isRequired,
        media: PropTypes.string.isRequired,
        organism: PropTypes.string,
        organism_uuid: PropTypes.string,
        plate_uuid: PropTypes.string.isRequired,
        quantity: PropTypes.string,
        uuid: PropTypes.string.isRequired,
        volume: PropTypes.string.isRequired,
      }),
    ).isRequired,
    plates: PropTypes.object.isRequired
  };

  render() {
    const wells = this.props.wells
    const plates = this.props.plates
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.header}>Wells</h1>

          <table className={s.table}>
            <thead className={s.tableThead}>
              <tr className={s.tableTr}>
                <th className={s.tableTh} scope="col">#</th>
                <th className={s.tableTh} scope="col">Plate Address</th>
                <th className={s.tableTh} scope="col">Media</th>
                <th className={s.tableTh} scope="col">Volume</th>
                <th className={s.tableTh} scope="col">Quantity</th>
                <th className={s.tableTh} scope="col">Organism</th>
              </tr>
            </thead>
            <tbody className={s.tableTbody}>
              {wells.map((item, i) => {
                if (item) {
                  return (
                    <tr className={s.tableTr} key={item.uuid}>
                      <th className={s.tableTh} scope="row">{i}</th>
                      <td className={s.tableTd}>
                        <a href={`/wells/${item.uuid}`}>
                          {plates[item.plate_uuid].plate_name} - {item.address}
                        </a>
                      </td>
                      <td className={s.tableTd}>{item.media}</td>
                      <td className={s.tableTd}>{item.volume}</td>
                      <td className={s.tableTd}>{item.quantity}</td>
                      <td className={s.tableTd}>{item.organism}</td>
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

export default withStyles(s)(Wells);