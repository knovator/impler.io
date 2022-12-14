import { Schema, Document, model, models, Model } from 'mongoose';
import { schemaOptions } from '../schema-default.options';
import { MappingEntity } from './mapping.entity';

const mappingSchema = new Schema(
  {
    columnHeading: String,
    _columnId: {
      type: Schema.Types.String,
      ref: 'Column',
    },
    _uploadId: {
      type: Schema.Types.String,
      ref: 'Upload',
    },
  },
  { ...schemaOptions }
);

interface IMappingDocument extends MappingEntity, Document {
  _id: never;
}

export const Mapping = (models.Mapping as Model<IMappingDocument>) || model<IMappingDocument>('Mapping', mappingSchema);
