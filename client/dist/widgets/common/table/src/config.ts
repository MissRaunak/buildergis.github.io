import {
  ImmutableObject,
  ImmutableArray,
  IMFieldSchema,
  DataSource,
  UseDataSource
} from 'jimu-core'

export enum TableArrangeType {
  Dropdown = 'DROPDOWN',
  Tabs = 'TABS'
}

export enum SelectionModeType {
  Single = 'SINGLE',
  Multiple = 'MULTIPLE'
}

export interface Suggestion {
  suggestionHtml: string | Element
  suggestion: string
}

export interface TableFieldsSchema extends IMFieldSchema {
  editAuthority?: boolean
  editable?: boolean
  visible?: boolean
}

export interface LayersConfig {
  id: string
  name: string
  useDataSource?: UseDataSource
  allFields: IMFieldSchema[]
  tableFields?: TableFieldsSchema[]
  enableAttachements: boolean
  enableSearch: boolean
  searchFields?: string
  searchExact?: boolean
  searchHint?: string
  enableEdit: boolean
  enableRefresh: boolean
  enableSelect: boolean
  selectMode: SelectionModeType
  allowCsv: boolean
  dataActionObject?: any
  dataActionDataSource?: DataSource
}

export interface Config {
  layersConfig?: ImmutableArray<LayersConfig>
  arrangeType: TableArrangeType
}

export type IMConfig = ImmutableObject<Config>
