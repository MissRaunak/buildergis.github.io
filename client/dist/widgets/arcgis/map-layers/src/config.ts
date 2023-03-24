import { ImmutableObject } from 'jimu-core'

export interface Config {
  goto?: boolean
  label?: boolean
  opacity?: boolean
  information?: boolean
  setVisibility?: boolean
  useMapWidget?: boolean
  customizeLayerOptions?: {
    [jimuMapViewId: string]: CustomizeLayerOption
  }
  selectedJimuLayerIds?: string[]
}

export interface CustomizeLayerOption {
  isEnabled: boolean
  hiddenJimuLayerViewIds?: string[]
}
export type IMConfig = ImmutableObject<Config>
