/* eslint-disable */
import {
    IsNotEmpty,
    IsString,
    Length,
  } from 'class-validator';
  
  export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @Length(5, 50)
    address: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(36)
    productId: string;
  
    @IsNotEmpty()
    @IsString()
    client: string;
  }