import { inject, injectable } from 'inversify';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import TYPES from '../../constants/types';
import { User } from '../aggregates/user-aggregates/user';
import { ValidationException } from '../../domain/exceptions/validation-exceptions';
import { IUserRepository } from '../aggregates/user-aggregates/user-repository-interface';
import { config } from '../../config/config';
import { ErrorCode } from '../../application/models/error-models/error-code';

@injectable()
export class UserService {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: IUserRepository
  ) {}

  public async createUser(user: User): Promise<string> {
    const userToCreate = await this.userRepository.getUserByAttribute({
      email: user.email
    });

    if (userToCreate) {
      throw new ValidationException('user already exists', [
        { errorCode: ErrorCode.USER_ALREADY_EXISTS }
      ]);
    }
    const salt = await bcrypt.genSalt(10);
    const userToSave = user
      .builder()
      .setPassword(await bcrypt.hash(user.password, salt))
      .build();
    console.log(userToSave, 44444);
    const saveUser = await this.userRepository.createUser(userToSave);
    const payload = {
      user: {
        id: saveUser.id
      }
    };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 * 24 });

    return token;
  }
}
