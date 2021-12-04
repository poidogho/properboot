type homeParameters = {
  id?: string;
  authorId: string;
  name: string;
  price: number;
  address: string;
  sqrFtSize: number;
  description: string;
  homeImages: string[];
};

export class Home {
  public readonly id: string;
  public readonly authorId: string;
  public readonly name: string;
  public readonly price: number;
  public readonly sqrtFtSize: number;
  public readonly description: string;
  public readonly homeImages: string[];

  constructor(parameters: homeParameters) {
    this.id = parameters.id;
    this.authorId = parameters.authorId;
    this.name = parameters.name;
    this.price = parameters.price;
    this.sqrtFtSize = parameters.sqrFtSize;
    this.description = parameters.description;
    this.homeImages = parameters.homeImages;
  }
}
