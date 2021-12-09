import { assert } from 'chai';
import 'jest';
import 'reflect-metadata';
import sinon from 'sinon';
import HomeDataModel from '../db-models/home';
import { HomeRepository } from './home-repository';

describe(HomeRepository.name, () => {
  let homeRepository: HomeRepository;

  beforeEach(() => {
    homeRepository = new HomeRepository();
  });

  afterEach(() => {
    sinon.restore();
  });

  test('Query all approved homes', async () => {
    const homeDataModelMock = sinon.mock(HomeDataModel);
    HomeDataModel.isInitialized = true;

    homeDataModelMock.expects('findAll').once().returns([]);
    const homes = await homeRepository.getHomes();
    assert.equal(homes.length, 0);
  });
});
