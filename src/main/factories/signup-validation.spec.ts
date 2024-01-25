import { CompareFieldsValidator } from '../../presentation/helpers/validators/compare-fields-validator'
import { RequiredFieldValidator } from '../../presentation/helpers/validators/required-field-validator'
import { type Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { makeSignUpValidation } from './signup-validation'

jest.mock('../../presentation/helpers/validators/validation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidator(field))
    }

    validations.push(new CompareFieldsValidator('password', 'passwordConfirmation'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
