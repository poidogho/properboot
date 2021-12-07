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
  constructor() {}

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
    return userDataModel ? userDataModel.toDomain() : undefined;
  }

  public async createUser(user: User): Promise<User> {
    let userData = UserDataModel.fromDomain(user);
    userData = await userData.save();
    return userData.toDomain();
  }
}
