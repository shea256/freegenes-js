import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlateDetails.css';

class PlateDetails extends React.Component {
  static propTypes = {
    plate: PropTypes.shape({
      breadcrumb: PropTypes.string,
      plate_form: PropTypes.string.isRequired,
      plate_name: PropTypes.string.isRequired,
      plate_type: PropTypes.string.isRequired,
      plate_vendor_id: PropTypes.string,
      protocol_uuid: PropTypes.string,
      status: PropTypes.string.isRequired,
      container_uuid: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      wells: PropTypes.arrayOf(PropTypes.string).isRequired,
      notes: PropTypes.string,
      thaw_count: PropTypes.number,
    }).isRequired,
    wells: PropTypes.object.isRequired,
  };

  render() {
    const { plate, wells } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Plate {plate.plate_name}</h1>

          <h4>Form</h4>

          <p>{plate.plate_form}</p>

          <h4>Type</h4>

          <p>{plate.plate_type}</p>

          <h4>Status</h4>

          <p>{plate.status}</p>

          <h4>Vendor ID</h4>

          <p>
            {plate.plate_vendor_id ? (
              plate.plate_vendor_id
            ) : (
              <i>- no plate vendor ID found -</i>
            )}
          </p>

          <h4>Protocol ID</h4>

          <p>
            {plate.protocol_uuid ? (
              plate.protocol_uuid
            ) : (
              <i>- no protocol ID found -</i>
            )}
          </p>

          <h4>Wells</h4>

          {plate.wells && wells ? (
            <ol>
              {plate.wells.map(wellUUID => (
                <li key={wellUUID}>
                  <a href={`/wells/${wellUUID}`}>
                    {plate.plate_name} - {wells[wellUUID].address}
                  </a>
                </li>
              ))}
            </ol>
          ) : (
            <i>- no wells found -</i>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PlateDetails);
