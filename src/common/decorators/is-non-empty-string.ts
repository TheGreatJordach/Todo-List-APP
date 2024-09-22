import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsNonEmptyString(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isNonEmptyString",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: unknown) {
          return typeof value === "string" && value.trim().length > 0;
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          return `${validationArguments.property} must be a non-empty string. Provided value: "${validationArguments.value}"`;
        }
      }
    })
  }
}
