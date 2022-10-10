import { Column, DataType, Table, Model } from "sequelize-typescript";
import { DataCreateDTO } from "./dto";

export interface IMap {
  id: number
  code: number
  type: string
  name: string
  rayon: string
  adress: string
  contact: string
  k1: string
  k2: string
  link: string
  gorpit: string
  director: string
  programm: string
  deyatelnost: string
  scoc: string
  trosta: string
  itcube: string
  kvant: string
  masterskay: string
}

@Table({tableName: 'imap'})
export class Map extends Model<IMap, DataCreateDTO> {

  @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false })
  id: number

  @Column({type: DataType.STRING, allowNull: false})
  code: number

  @Column({type: DataType.STRING, allowNull: false})
  type: string

  @Column({type: DataType.STRING, allowNull: false})
  name: string

  @Column({type: DataType.STRING, allowNull: false})
  rayon: string

  @Column({type: DataType.STRING, allowNull: false})
  adress: string

  @Column({type: DataType.STRING, allowNull: false})
  contact: string

  @Column({type: DataType.STRING, allowNull: false})
  k1: string

  @Column({type: DataType.STRING, allowNull: false})
  k2: string

  @Column({type: DataType.STRING, allowNull: false})
  link: string

  @Column({type: DataType.STRING, allowNull: false})
  gorpit: string

  @Column({type: DataType.STRING, allowNull: false})
  director: string

  @Column({type: DataType.STRING, allowNull: false})
  programm: string

  @Column({type: DataType.STRING, allowNull: false})
  deyatelnost: string

  @Column({type: DataType.STRING, allowNull: true})
  scoc: string

  @Column({type: DataType.STRING, allowNull: true})
  trosta: string

  @Column({type: DataType.STRING, allowNull: true})
  itcube: string

  @Column({type: DataType.STRING, allowNull: true})
  kvant: string

  @Column({type: DataType.STRING, allowNull: true})
  masterskaya: string

}