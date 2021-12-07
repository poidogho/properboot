import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'jest';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Typemoq from 'typemoq';
import { HomeRepository } from '../../infrastructure/repository/home-repository';
import { HomeImageRepository } from '../../infrastructure/repository/home-image-repository';
import { IHomeRepository } from '../aggregates/home-aggregates/home-repository-interface';
import { IHomeImageRepository } from '../aggregates/home-image-aggregates/home-image-repository-interface';
import { Home } from '../aggregates/home-aggregates/home';
import { HomeService } from './home-service';
import { HomeImage } from '../aggregates/home-aggregates/home-image';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe(HomeService.name, () => {
  let homeRepositoryMock: Typemoq.IMock<IHomeRepository>;
  let homeImageRepositoryMock: Typemoq.IMock<IHomeImageRepository>;
  let homeService: HomeService;
  let home: Home;
  let homeImage1: HomeImage;
  let homeImage2: HomeImage;

  beforeEach(() => {
    homeRepositoryMock = Typemoq.Mock.ofType(HomeRepository);
    homeImageRepositoryMock = Typemoq.Mock.ofType(HomeImageRepository);
    homeService = new HomeService(
      homeRepositoryMock.object,
      homeImageRepositoryMock.object
    );
    homeImage1 = {
      imageUrl: 'imegeUrl'
    };

    homeImage2 = {
      imageUrl: 'imegeUrl'
    };

    home = new Home({
      name: 'new home',
      price: 350000,
      address: '200 toronto, toronto',
      sqrFtSize: 4000,
      authorId: 'dgdfg',
      description: 'new home',
      homeImages: [homeImage1, homeImage2]
    });
  });

  afterEach(() => {
    homeRepositoryMock.verifyAll();
    homeImageRepositoryMock.verifyAll();
    sinon.restore();
  });

  describe('get homes', () => {
    test('get notifications', () => {
      homeRepositoryMock
        .setup((mock) => mock.getHomes())
        .verifiable(Typemoq.Times.once());

      const promise = homeService.getHomes();
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });

  describe('get a home', () => {
    test('get a home', () => {
      homeRepositoryMock
        .setup((mock) => mock.getHome(home.id))
        .returns(async () => home)
        .verifiable(Typemoq.Times.once());

      homeImageRepositoryMock
        .setup((mock) => mock.getHomeImages(home.id))
        .returns(async () => [homeImage1, homeImage2])
        .verifiable(Typemoq.Times.once());

      const promise = homeService.getHome(home.id);
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });

  describe('create a home', () => {
    test('create a home', () => {
      homeRepositoryMock
        .setup((mock) => mock.createHome(home))
        .returns(async () => home)
        .verifiable(Typemoq.Times.once());

      homeImageRepositoryMock
        .setup((mock) => mock.createHomeImages(home.homeImages))
        .returns(async () => home.homeImages)
        .verifiable(Typemoq.Times.once());

      const promise = homeService.createHome(home);
      return expect(promise).to.be.eventually.be.fulfilled;
    });
  });
});
