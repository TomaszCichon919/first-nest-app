/* eslint-disable */

import {
    IsNotEmpty,
    IsString,
    Length,
  } from 'class-validator';
  
  export class UpdateClientDTO {
    @IsNotEmpty()
    @IsString()
    @Length(10, 20)
    name: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(10, 20)
    address: string;
  
  }