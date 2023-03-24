import { DataSourceJson } from 'jimu-core'
// only used as type
import { IFeatureSet, ILayerDefinition } from '@esri/arcgis-rest-types'

export interface DataOptions {
  dataSourceJson: DataSourceJson
  // order of the added data.
  order: number
  // Uploaded file will be saved to it.
  restLayer?: LayerInFeatureCollection
}

export interface LayerInFeatureCollection {
  layerDefinition: ILayerDefinition
  featureSet: IFeatureSet
}

export interface FeatureCollection {
  layers: LayerInFeatureCollection[]
}
