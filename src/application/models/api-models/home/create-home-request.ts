import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber,
  ArrayMinSize,
  IsUUID,
  ValidateNested
} from 'class-validator';
import { Home } from '../../../../domain/aggregates/home-aggregates/home';
import { APIRequest } from '../api-request';
import { Request } from 'express';
import { v4 as UUIDV4 } from 'uuid';

export class HomeImage {
  @IsDefined()
  @IsUUID('4')
  public id: string;

  @IsDefined()
  @IsUUID('4')
  public homeId: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public imageUrl: string;

  constructor(id: string, homeId: string, imageUrl: string) {
    this.id = id;
    this.homeId = homeId;
    this.imageUrl = imageUrl;
  }
}

export class CreateHomeRequest extends APIRequest {
  @IsDefined()
  @IsUUID('4')
  public id: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public authorId: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public address: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  public sqrFtSize: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  public images: string[];

  @IsNotEmpty()
  @ValidateNested()
  public homeImages: HomeImage[];

  constructor(req: Request) {
    super();
    const { name, price, sqrtFtSize, description, homeImages, address } =
      req.body;
    this.id = UUIDV4();
    this.authorId = req.user.id;
    this.name = name;
    this.price = price;
    this.address = address;
    this.sqrFtSize = sqrtFtSize;
    this.description = description;
    this.images = homeImages;
    this.homeImages = this.images.map(
      (image) => new HomeImage(UUIDV4(), this.id, image)
    );
  }

  public toDomain(): Home {
    return new Home({
      id: this.id,
      name: this.name,
      authorId: this.authorId,
      price: this.price,
      sqrFtSize: this.sqrFtSize,
      description: this.description,
      address: this.address,
      homeImages: this.homeImages
    });
  }
}
