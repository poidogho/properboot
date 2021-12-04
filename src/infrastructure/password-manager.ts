import { IPasswordManager } from '../domain/aggregates/user-aggregates/password-manager';
import { injectable } from 'inversify';
import bcrypt from 'bcrypt';

@injectable()
export class PasswordManager implements IPasswordManager {
  private SALT_ROUNDS = 12;

  public async computeHash(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  public async verifyPassword(
    attemptedPassword: string,
    savedHash: string
  ): Promise<boolean> {
    return bcrypt.compare(attemptedPassword, savedHash);
  }
}
