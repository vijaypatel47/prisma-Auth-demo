import { IsString, IsArray, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  posts?: number[];

  @IsOptional()
  @IsArray()
  groups?: number[];
}
