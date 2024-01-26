import { CompareFieldsValidator } from '../../../presentation/helpers/validators/compare-fields-validator'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'
import { RequiredFieldValidator } from '../../../presentation/helpers/validators/required-field-validator'
import { type Validation } from '../../../presentation/protocols/validation'
import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidator(field))
  }
  validations.push(new CompareFieldsValidator('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
