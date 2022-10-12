import { IAdress, IContacts, IMastery } from '../models/models';

export interface CreateOrgDto {
  readonly id: number;
  readonly code: number;
  readonly type: string;
  readonly name: string;
  readonly area: string;
  readonly address: IAdress;
  readonly contacts: IContacts;
  readonly k1: string;
  readonly k2: string;
  readonly web_site: string;
}
