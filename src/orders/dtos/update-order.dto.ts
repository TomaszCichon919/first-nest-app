/* eslint-disable */
import {
    IsNotEmpty,
    IsString,
    Length,
    IsUUID
  } from 'class-validator';
  
  export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @Length(5, 50)
    address: string;
  
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    productId: string;
  
    @IsNotEmpty()
    @IsString()
    client: string;
  }

