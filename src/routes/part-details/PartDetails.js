import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PartDetails.css';

class PartDetails extends React.Component {
  static propTypes = {
    part: PropTypes.shape({
      collection_id: PropTypes.string.isRequired,
      description: PropTypes.string,
      gene_id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      original_sequence: PropTypes.string.isRequired,
      optimized_sequence: PropTypes.string.isRequired,
      synthesized_sequence: PropTypes.string.isRequired,
      part_type: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      status: PropTypes.string,
      time_created: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      author_uuid: PropTypes.string,
    }).isRequired,
    collections: PropTypes.object.isRequired,
    authors: PropTypes.object.isRequired
  };

  render() {
    const part = this.props.part
    const collections = this.props.collections
    const authors = this.props.authors

    const collection = part.collection_id in collections ? collections[part.collection_id] : null
    const author = part.author_uuid in authors ? authors[part.author_uuid] : null

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{part.name}</h1>

          <h4>Gene ID</h4>

          <p>
            {part.gene_id}
          </p>

          <h4>Parent Collection</h4>

          <p>
            { collection ? (
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

          <p>
            {part.time_created}
          </p>

          <h4>Author</h4>

          <p>
            { author ? (
            <a href={`/authors/${author.uuid}`}>
              {author.name}
            </a>
            ) : (
              <i>- no author found -</i>
            )}
          </p>

          <h4>Status</h4>

          <p>
            {part.status ? (
              part.status
            ) : (
              <i>- no status found -</i>
            )}
          </p>

          <h4>Part Type</h4>

          <p>
            {part.part_type}
          </p>

          <h4>Tags</h4>

          {part.tags && part.tags.length > 0 ? (
            <ul>
            {part.tags.map((tag, index) => (
              <li key={index}>
                {tag}
              </li>
            ))}
            </ul>
          ) : (
            <p>
              <i>- no tags found -</i>
            </p>
          )}

          <h4>Original Sequence</h4>

          <p className={s.pBreak}>
            {part.original_sequence}
          </p>

          <h4>Optimized Sequence</h4>

          <p className={s.pBreak}>
            {part.optimized_sequence}
          </p>

          <h4>Synthesized Sequence</h4>

          <p className={s.pBreak}>
            {part.synthesized_sequence}
          </p>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(PartDetails);