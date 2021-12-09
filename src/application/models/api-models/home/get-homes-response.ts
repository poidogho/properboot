import { Home } from '../../../../domain/aggregates/home-aggregates/home';

export class GetHomesResponse {
  constructor(
    readonly id: string,
    readonly price: number,
    readonly address: string,
    readonly sqrFtSize: number,
    readonly description: string,
    readonly images: string[]
  ) {}

  public static fromDomain(home: Home) {
    return new GetHomesResponse(
      home.id,
      home.price,
      home.address,
      home.sqrFtSize,
      home.description,
      home.homeImages.map((image) => image.imageUrl)
    );
  }
}
