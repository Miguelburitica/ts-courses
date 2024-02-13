export enum AccessType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export interface Category {
  id:            number;
  name:          string;
  image:         string;
  creationAt:      Date;
  updatedAt:       Date;
  access:    AccessType | undefined;
}
