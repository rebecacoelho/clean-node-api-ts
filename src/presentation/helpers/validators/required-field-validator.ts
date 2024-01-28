import { MissingParamError } from '../../errors'
import { type Validation } from '../../protocols/validation'

export class RequiredFieldValidator implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
