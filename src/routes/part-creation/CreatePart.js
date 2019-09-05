import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CreatePart.css';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';

class CreatePart extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>New Part</h1>
          <form method="post">
            <TextInput name="name" label="Name" />
            <TextInput name="description" label="Description" />
            <TextInput name="gene_id" label="Gene ID" />
            <TextInput name="part_type" label="Part Type" />
            <TextInput name="tags" label="Tags" />
            <TextInput name="status" label="Status" />

            <TextInput name="collection_id" label="Collection ID" />
            <TextInput name="author_uuid" label="Author ID" />

            <TextArea name="original_sequence" label="Original Sequence" />
            <TextArea name="optimized_sequence" label="Optimized Sequence" />
            <TextArea
              name="synthesized_sequence"
              label="Synthesized Sequence"
            />
            <TextArea name="full_sequence" label="Full Sequence" />

            <div className={s.formGroup}>
              <button className={s.button} type="submit" id="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CreatePart);

/*
  INCLUDE:
  Name, Description, Gene ID - any string
  Part Type - any string / later: drop down of types?
  Tags - any string with comma separations
  Status - any string / later: drop down of statuses?

  Sequences (optimized, original, synthesized, full) - must be valid gene sequences
  Collection ID - drop down of collections?
  Author ID - drop down of authors?
  
  Don't include: barcode, genbank, vbd, vector, primer_for, primer_rev, ip_check, ip_check_date, ip_check_ref
  Auto-created: time_created, time_updated, uuid
*/
