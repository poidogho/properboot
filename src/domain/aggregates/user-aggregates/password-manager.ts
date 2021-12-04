export interface IPasswordManager {
  computeHash(password: string): Promise<string>;
  verifyPassword(
    attemptedPassword: string,
    savedHash: string
  ): Promise<boolean>;
}
