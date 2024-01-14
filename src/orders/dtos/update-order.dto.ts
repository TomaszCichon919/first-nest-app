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
    @Length(36, 36, { message: 'Product ID length should be exactly 36 characters' })
    productId: string;
  
    @IsNotEmpty()
    @IsString()
    client: string;
  }

//   import {
//     ValidationOptions,
//     registerDecorator,
//     ValidationArguments,
//   } from 'class-validator';
//   import { v4 as uuidv4 } from 'uuid';
  
//   export function IsUUID(validationOptions?: ValidationOptions) {
//     return function (object: Object, propertyName: string) {
//       registerDecorator({
//         name: 'isUUID',
//         target: object.constructor,
//         propertyName: propertyName,
//         options: validationOptions,
//         validator: {
//           validate(value: any, args: ValidationArguments) {
//             if (!value) {
//               return false;
//             }
//             return uuidv4(value);
//           },
//           defaultMessage(args: ValidationArguments) {
//             return `${args.property} must be a valid UUID`;
//           },
//         },
//       });
//     };
//   }