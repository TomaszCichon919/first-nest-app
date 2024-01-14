/* eslint-disable */
import {
    IsNotEmpty,
    IsString,
    Length,
  } from 'class-validator';

  
  export class CreateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @Length(5, 50)
    address: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(36, 36, {message: 'sdsad'})
    productId: string;
  
    @IsNotEmpty()
    @IsString()
    client: string;
  }