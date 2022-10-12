class IProperty {
}

class IGeometry {
}

interface CreatePolygonsDTO {
  id: number
  type: string
  properties: IProperty,
  geometry: IGeometry
}