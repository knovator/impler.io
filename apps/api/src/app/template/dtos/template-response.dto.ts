import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class TemplateResponseDto {
  @ApiPropertyOptional({
    description: 'Id of the template',
  })
  @IsString()
  @IsDefined()
  _id?: string;

  @ApiProperty({
    description: 'Name of the template',
  })
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty({
    description: 'Code of the template',
  })
  @IsString()
  @IsDefined()
  code: string;

  @ApiProperty({
    description: 'Callback URL of the template, gets called when sending data to the application',
  })
  @IsString()
  @IsDefined()
  callbackUrl: string;

  @ApiProperty({
    description: 'Size of data in rows that gets sent to the application',
  })
  @IsNumber()
  @IsDefined()
  chunkSize: number;

  @ApiProperty({
    description: 'URL to download samle csv file',
  })
  @IsString()
  @IsDefined()
  sampleFileUrl: string;

  @ApiProperty({
    description: 'Id of project related to the template',
  })
  @IsString()
  @IsDefined()
  _projectId: string;
}
