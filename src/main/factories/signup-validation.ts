import { CompareFieldsValidator } from '../../presentation/helpers/validators/compare-fields-validator'
import { RequiredFieldValidator } from '../../presentation/helpers/validators/required-field-validator'
import { type Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidator(field))
  }
  validations.push(new CompareFieldsValidator('password', 'passwordConfirmation'))

  return new ValidationComposite(validations)
}
