import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WellDetails.css';

class WellDetails extends React.Component {
  static propTypes = {
    well: PropTypes.shape({
      address: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
      organism: PropTypes.string,
      organism_uuid: PropTypes.string,
      plate_uuid: PropTypes.string.isRequired,
      quantity: PropTypes.string,
      samples: PropTypes.arrayOf(PropTypes.string).isRequired,
      uuid: PropTypes.string.isRequired,
      volume: PropTypes.number.isRequired,
      plate: PropTypes.shape({
        plate_name: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  render() {
    const { well } = this.props;
    const { plate } = well;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Well {well.address}</h1>

          <h4>Plate UUID</h4>

          {plate ? (
            <p>
              <a href={`/plates/${plate.uuid}`}>{plate.uuid}</a>
            </p>
          ) : null}

          <h4>Plate Name</h4>

          {plate ? <p>{plate.plate_name}</p> : null}

          <h4>Media</h4>

          <p>{well.media}</p>

          <h4>Organism</h4>

          <p>{well.organism ? well.organism : <i>- no organism found -</i>}</p>

          <h4>Volume</h4>

          <p>{well.volume}</p>

          <h4>Quantity</h4>

          <p>{well.quantity ? well.quantity : <i>- no quantity found -</i>}</p>

          <h4>Samples</h4>

          <ul>
            {well.samples.map(sampleUUID => (
              <li key={sampleUUID}>{sampleUUID}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WellDetails);
