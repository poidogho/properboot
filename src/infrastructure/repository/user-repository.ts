import { injectable } from 'inversify';
// import {
//   Op,
//   QueryTypes,
//   FindAndCountOptions,
//   Sequelize,
//   Order
// } from 'sequelize';
import { User } from '../../domain/aggregates/user-aggregates/user';
import { IUserRepository } from '../../domain/aggregates/user-aggregates/user-repository-interface';
import { UserDataModel } from '../db-models/user';
import { UserQuery } from '../../domain/aggregates/user-aggregates/user-query';

@injectable()
export class UserRepository implements IUserRepository {
  constructor() {
    UserDataModel.removeAttribute('id');
  }

  public async getUser(userId: string): Promise<User> {
    const user = await UserDataModel.findByPk(userId);
    return user ? user.toDomain() : undefined;
  }

  public async getUserByAttribute(userQuery: UserQuery): Promise<User> {
    const query = { where: {} };
    if (userQuery.email) {
      query['where']['email'] = userQuery.email;
    }
    if (userQuery.firstName) {
      query['where']['firstName'] = userQuery.firstName;
    }
    if (userQuery.lastName) {
      query['where']['lastName'] = userQuery.lastName;
    }
    const userDataModel = await UserDataModel.findOne(query);
    return userDataModel.toDomain();
  }

  public async createUser(user: User): Promise<User> {
    const userData = await UserDataModel.fromDomain(user).save();
    return userData.toDomain();
  }
}
