import { InvalidParamError } from '../../errors'
import { type Validation } from './validation'

export class CompareFieldsValidator implements Validation {
  private readonly fieldName: string
  private readonly fieldToCompareName: string

  constructor (fieldName: string, fieldToCompareName: string) {
    this.fieldName = fieldName
    this.fieldToCompareName = fieldToCompareName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== this.fieldToCompareName) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
