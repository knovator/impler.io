import { Schema, Document, model, models } from 'mongoose';
import { schemaOptions } from '../schema-default.options';
import { ProjectEntity } from './project.entity';

const projectSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
    },
    code: {
      type: Schema.Types.String,
    },
    authHeaderName: {
      type: Schema.Types.String,
    },
  },
  { ...schemaOptions }
);

interface IProjectDocument extends ProjectEntity, Document {
  _id: never;
}

export const Project = models.Project || model<IProjectDocument>('Project', projectSchema);
