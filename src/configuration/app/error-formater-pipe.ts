import { BadRequestException, ValidationError, ValidationPipeOptions } from "@nestjs/common";

/**
 * Formats validation errors into a structured format for a BadRequestException.
 *
 * @param errors An array of ValidationError objects containing validation error details.
 * @returns An instance of BadRequestException with formatted error details.
 */
const ErrorFormaterPipe =  (errors: ValidationError[]): any => {
  const formattedErrors =  errors.map((error) => ({
    field: error.property,
    issues: error.constraints ? Object.values(error.constraints) : []
  }))
  return new BadRequestException({
    message: "Input Validation failed",
    errors: formattedErrors,
  })
}

export const validationPipeOptions: ValidationPipeOptions = {
  whitelist: true,
  transform: true,
  forbidNonWhitelisted: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
  exceptionFactory: ErrorFormaterPipe, // Make sure ErrorFormatter is imported if necessary
};
