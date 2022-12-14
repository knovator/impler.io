import { BadRequestException, Injectable } from '@nestjs/common';
import { ColumnRepository, UploadRepository } from '@impler/dal';
import { ValidateMappingCommand } from './validate-mapping.command';

@Injectable()
export class ValidateMapping {
  constructor(private columnRepository: ColumnRepository, private uploadRepository: UploadRepository) {}

  async execute(command: ValidateMappingCommand[], _uploadId: string) {
    // check if mapping data contains duplicates
    const mappings = [...new Map(command.map((item) => [item._columnId, item])).values()];
    if (mappings.length !== command.length) throw new BadRequestException('Mapping data contains duplicates');

    // Check if mapping data _columnIds are valid
    const columnIds = command.map((mapping) => ({
      _id: mapping._columnId,
    }));
    const count = await this.columnRepository.count({
      $or: [...columnIds],
    });
    if (count !== command.length) throw new BadRequestException(`Mapping data contains invalid _columnId(s)`);

    // check if mapping data headings are valid
    const columnHeadings = command.map((mapping) => mapping.columnHeading);
    const uploadInfo = await this.uploadRepository.findById(_uploadId, 'headings');
    const isAllHeadingsAreValid = columnHeadings.every((heading) => uploadInfo.headings.includes(heading));
    if (!isAllHeadingsAreValid) throw new BadRequestException(`Mapping data contains invalid columnHeading values`);
  }
}
