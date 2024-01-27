import bcrypt from 'bcrypt'
import { type Encrypter } from '../../data/protocols/criptography/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) { // itens expecificos de cada bibilioteca sao passadas no constructor para nao alterar os protocolos genricos
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
