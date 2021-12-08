import { inject, injectable } from 'inversify';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import TYPES from '../../constants/types';
import { User } from '../aggregates/user-aggregates/user';
import { IUserRepository } from '../aggregates/user-aggregates/user-repository-interface';
import { config } from '../../config/config';
import { ValidationException } from '../../domain/exceptions/validation-exceptions';
import { ErrorCode } from '../../application/models/error-models/error-code';

@injectable()
export class AuthService {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: IUserRepository
  ) {}

  public async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.getUserByAttribute({ email });

    if (!user) {
      throw new ValidationException('email or passord cannot be found', [
        { errorCode: ErrorCode.USERNAME_OR_PASSWORD_NOT_FOUND }
      ]);
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new ValidationException('email or passord IS WRONG', [
        { errorCode: ErrorCode.USERNAME_OR_PASSWORD_WRONG }
      ]);
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 * 24 });
    return token;
  }

  public async createUser(user: User) {
    return user;
  }
}
