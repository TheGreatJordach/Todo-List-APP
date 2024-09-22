import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";


export function isNonEmptyPositiveNumber(validationOptions?: ValidationOptions) {
  return function(object: object, propertyName: string) {
    return registerDecorator({
      name: "isNonEmptyPositiveNumber",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints:[],
      validator:{
        validate(value: unknown) {
          return typeof value === "number" && value > 0;
        },
        defaultMessage(validationArguments?: ValidationArguments) {
          return `${validationArguments.property} must be a non-empty Positive Int. Provided value: "${validationArguments.value}"`;
        }
      }
    })
  }
}
