import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { IAdress, IContacts, IMastery, IOrganization } from './models';
import { CreateOrgDto } from '../dto/create-org-dto';

@Table({ tableName: 'organizations_2.0' })
export class OrganizationModel extends Model<IOrganization, CreateOrgDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  code: number;
  @Column({ type: DataType.STRING })
  type: string;
  @Column({ type: DataType.STRING })
  name: string;
  @Column({ type: DataType.STRING })
  area: string;
  @Column({ type: DataType.STRING })
  address: IAdress;
  @Column({ type: DataType.STRING })
  contacts: IContacts;
  @Column({ type: DataType.STRING })
  k1: string;
  @Column({ type: DataType.STRING })
  k2: string;
  @Column({ type: DataType.STRING })
  web_site: string;
  @Column({ type: DataType.STRING })
  hot_meals: string;
  @Column({ type: DataType.STRING })
  director: string;
  @Column({ type: DataType.STRING })
  programm: string;
  @Column({ type: DataType.STRING })
  activity: string;
  @Column({ type: DataType.BOOLEAN })
  cos: boolean;
  @Column({ type: DataType.BOOLEAN })
  trosta: boolean;
  @Column({ type: DataType.BOOLEAN })
  itcube: boolean;
  @Column({ type: DataType.BOOLEAN })
  kvant: boolean;
  @Column({ type: DataType.STRING })
  mastery: IMastery[];
}
