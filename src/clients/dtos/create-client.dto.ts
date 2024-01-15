/* eslint-disable */

import {
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateClientDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  address: string;

}