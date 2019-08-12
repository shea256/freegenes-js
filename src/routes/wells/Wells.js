import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Wells.css';
import Alerts from '../../components/Alerts';

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
        volume: PropTypes.number.isRequired,
      }),
    ).isRequired,
    plates: PropTypes.object.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { wells, plates, errors } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Plate Wells</h1>

          {errors.length === 0 ? (
            <div className={`table-responsive ${s.tableWrapper}`}>
              <table className={`table ${s.table}`}>
                <thead>
                  <tr>
                    <th className={s.tableTh} scope="col">
                      #
                    </th>
                    <th className={s.tableTh} scope="col">
                      Plate Address
                    </th>
                    <th className={s.tableTh} scope="col">
                      Media
                    </th>
                    <th className={s.tableTh} scope="col">
                      Volume
                    </th>
                    <th className={s.tableTh} scope="col">
                      Quantity
                    </th>
                    <th className={s.tableTh} scope="col">
                      Organism
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wells.map((item, i) => {
                    if (item) {
                      return (
                        <tr key={item.uuid}>
                          <th className={s.tableTh} scope="row">
                            {i}
                          </th>
                          <td className={s.tableTd}>
                            <a href={`/wells/${item.uuid}`}>
                              {plates[item.plate_uuid].plate_name} -{' '}
                              {item.address}
                            </a>
                          </td>
                          <td className={s.tableTd}>{item.media}</td>
                          <td className={s.tableTd}>{item.volume}</td>
                          <td className={s.tableTd}>{item.quantity}</td>
                          <td className={s.tableTd}>{item.organism}</td>
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

export default withStyles(s)(Wells);
