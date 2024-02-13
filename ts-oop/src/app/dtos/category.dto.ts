import { AccessType, Category } from "../models/category.model.ts";
import { IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator';

export interface ICreateCategoryDTO extends Omit<Category, 'id' | 'creationAt' | 'updatedAt'> {}

export class CreateCategoryDTO implements ICreateCategoryDTO {
  @IsNotEmpty()
  @Length(3, 50)
  name!: string;

  @IsNotEmpty()
  @IsUrl()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  access: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDTO();
    dto.name = 'a';
    dto.image = 'https://www.google.com';
    dto.access = AccessType.PUBLIC;
    await validateOrReject(dto)

  } catch (error) {
    console.log(error);
  }
})()
