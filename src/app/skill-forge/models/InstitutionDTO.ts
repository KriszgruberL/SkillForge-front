import {ClassDTO} from "./ClassDTO";

export interface AddressDTO {
  id: number;
  street: string;
  number: string;
  additional: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface InstitutionDTO {
  id: number;
  name: string;
  address: AddressDTO;
  coursesGiven: ClassDTO[];
}

export interface SmallInstitutionDTO {
  id: number;
  name: string;
  address: AddressDTO;
}
