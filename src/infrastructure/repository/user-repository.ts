import { injectable } from 'inversify';
import {
  Op,
  QueryTypes,
  FindAndCountOptions,
  Sequelize,
  Order
} from 'sequelize';
import { User } from '../../domain/aggregates/user-aggregates/user';
import { IUserRepository } from '../../domain/aggregates/user-aggregates/user-repository-interface';
import { UserDataModel } from '../db-models/user';

@injectable()
export class UserRepository implements IUserRepository {
  public async getUser(userId: string): Promise<User> {
    const user = await UserDataModel.findByPk(userId);
    return user ? user.toDomain() : undefined;
  }

  public async createUser(user: User): Promise<User> {
    const userData = await UserDataModel.fromDomain(user).save();
    return userData.toDomain();
  }
}
