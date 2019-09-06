import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PartDetails.css';
import capitalize from '../../utils/capitalize';
import Alerts from '../../components/Alerts';

class PartDetails extends React.Component {
  static propTypes = {
    part: PropTypes.shape({
      collection_id: PropTypes.string.isRequired,
      description: PropTypes.string,
      gene_id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      original_sequence: PropTypes.string,
      optimized_sequence: PropTypes.string,
      synthesized_sequence: PropTypes.string,
      full_sequence: PropTypes.string,
      part_type: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      status: PropTypes.string,
      time_created: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      author_uuid: PropTypes.string,
    }).isRequired,
    collection: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { part, collection, author, errors } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {errors.length !== 0 ? <Alerts errors={errors} /> : null}

          {part !== null && part !== undefined ? (
            <div>
              <h1>{part.name}</h1>

              <h4>Gene ID</h4>

              <p>{part.gene_id}</p>

              <h4>Parent Collection</h4>

              <p>
                {collection ? (
                  <a href={`/collections/${collection.uuid}`}>
                    {collection.name}
                  </a>
                ) : (
                  <i>- no collection found -</i>
                )}
              </p>

              <h4>Description</h4>

              <p>
                {part.description ? (
                  part.description
                ) : (
                  <i>- no description found -</i>
                )}
              </p>

              <h4>Time Created</h4>

              <p>{part.time_created}</p>

              <h4>Author</h4>

              <p>
                {author ? (
                  <a href={`/authors/${author.uuid}`}>{author.name}</a>
                ) : (
                  <i>- no author found -</i>
                )}
              </p>

              <h4>Status</h4>

              <p>{part.status ? part.status : <i>- no status found -</i>}</p>

              <h4>Part Type</h4>

              <p>{part.part_type}</p>

              <h4>Tags</h4>

              {part.tags && part.tags.length > 0 ? (
                <ul>
                  {part.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  <i>- no tags found -</i>
                </p>
              )}

              {['original', 'optimized', 'synthesized', 'full'].map(
                sequenceType => {
                  const partSequence = part[`${sequenceType}_sequence`];
                  if (partSequence) {
                    return (
                      <div key={sequenceType}>
                        <h4>{capitalize(sequenceType)} Sequence</h4>
                        <p className={s.pBreak}>
                          {part[`${sequenceType}_sequence`]}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div key={sequenceType}>
                      <h4>{capitalize(sequenceType)} Sequence</h4>
                      <p>
                        <i>- no sequence found -</i>
                      </p>
                    </div>
                  );
                },
              )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PartDetails);
