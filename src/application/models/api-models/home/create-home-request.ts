import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber
} from 'class-validator';
import { Home } from '../../../../domain/aggregates/home-aggregates/home';
import { APIRequest } from '../api-request';
import { Request } from 'express';

export class CreateHomeRequest extends APIRequest {
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
  public homeImages: string[];

  constructor(req: Request) {
    super();
    const { name, price, sqrtFtSize, description, homeImages } = req.body;
    //  @ts-ignore
    this.authorId = req.user.id;
    this.name = name;
    this.price = price;
    this.sqrFtSize = sqrtFtSize;
    this.description = description;
    this.homeImages = homeImages;
  }

  public toDomain(): Home {
    return new Home({
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
