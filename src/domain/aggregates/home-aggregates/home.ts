import { HomeImage } from './home-image';

type HomeParameters = {
  id?: string;
  authorId: string;
  name: string;
  price: number;
  address: string;
  sqrFtSize: number;
  description: string;
  homeImages: HomeImage[];
};

export class Home {
  public readonly id: string;
  public readonly authorId: string;
  public readonly name: string;
  public readonly price: number;
  public readonly address: string;
  public readonly sqrFtSize: number;
  public readonly description: string;
  public readonly homeImages: HomeImage[];

  constructor(parameters: HomeParameters) {
    this.id = parameters.id;
    this.authorId = parameters.authorId;
    this.name = parameters.name;
    this.price = parameters.price;
    this.address = parameters.address;
    this.sqrFtSize = parameters.sqrFtSize;
    this.description = parameters.description;
    this.homeImages = parameters.homeImages;
  }

  public builder(): HomeBuilder {
    return new HomeBuilder(this);
  }
}

export class HomeBuilder {
  private parameters: HomeParameters;

  constructor(parameters: Home) {
    this.parameters = { ...parameters };
  }

  public setId(id: string) {
    this.parameters.id = id;
    return this;
  }

  public setName(name: string) {
    this.parameters.name = name;
    return this;
  }

  public setPrice(price: number) {
    this.parameters.price = price;
    return this;
  }

  public setSqrFtSize(sqrFtSize: number) {
    this.parameters.sqrFtSize = sqrFtSize;
    return this;
  }

  public setDescription(description: string) {
    this.parameters.description = description;
    return this;
  }

  public setHomeImages(homeImages: HomeImage[]) {
    this.parameters.homeImages = homeImages;
    return this;
  }

  public build(): Home {
    return new Home(this.parameters);
  }
}
