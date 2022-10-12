export interface IAdress {
  code: string;
  region: string;
  street: string;
  number: string;
}

interface IPhones {
  phone: string;
}

export interface IContacts {
  phones: IPhones[];
  email: string;
}

export interface IMastery {
  name: string;
}

export interface IOrganization {
  id: number;
  code: number;
  type: string;
  name: string;
  area: string;
  address: IAdress;
  contacts: IContacts;
  k1: string;
  k2: string;
  web_site: string;
  hot_meals: string;
  director: string;
  program: string;
  activity: string;
  cos: boolean;
  trosta: boolean;
  itcube: boolean;
  kvant: boolean;
  mastery: IMastery[];
}
