import { BaseRepository } from '../base-repository';
import { MappingEntity } from './mapping.entity';
import { Mapping } from './mapping.schema';

export class MappingRepository extends BaseRepository<MappingEntity> {
  constructor() {
    super(Mapping, MappingEntity);
  }

  async getMappingInfo(_uploadId: string) {
    const mappings = await Mapping.find({ _uploadId }).populate('_columnId', 'name _id sequence');

    return mappings.map((mapping) => ({
      _id: mapping._id,
      id: mapping._id,
      columnHeading: mapping.columnHeading,
      column: mapping._columnId
        ? {
            _columnId: (mapping._columnId as any)._id,
            name: (mapping._columnId as any).name,
            sequence: (mapping._columnId as any).sequence,
          }
        : null,
    }));
  }
}
