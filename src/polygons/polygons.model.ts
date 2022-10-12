import { Column, DataType, Table, Model} from "sequelize-typescript";

interface IProperty {
  "description": string,
  "fill": string,
  "fill-opacity": number,
  "stroke": string,
  "stroke-width": string,
  "stroke-opacity": number
}

interface IGeometry {
  type: string,
  coordinates: number[][][]
}

interface IPolygons {
  id: number
  type: string
  properties: IProperty,
  geometry: IGeometry
}

@Table({tableName: 'map_polygons'})
export class PolygonsModel extends Model<IPolygons, CreatePolygonsDTO> {
  @Column({type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true})
  id: number
  @Column({type: DataType.STRING})
  type: string
  @Column({type: DataType.STRING})
  properties: IProperty
  @Column({type: DataType.STRING})
  geometry: IGeometry
}