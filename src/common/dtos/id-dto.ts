import { isNonEmptyPositiveNumber } from "../decorators/is-non-empty-positive.int";

export class IdDto{
  @isNonEmptyPositiveNumber()
  id:number;
}
