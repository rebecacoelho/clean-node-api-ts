import bcrypt from 'bcrypt'
import { type Hasher } from '../../data/protocols/criptography/hasher'

export class BcryptAdapter implements Hasher {
  private readonly salt: number

  constructor (salt: number) { // itens expecificos de cada bibilioteca sao passadas no constructor para nao alterar os protocolos genricos
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
