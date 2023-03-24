import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  disableAddBySearch?: boolean
  disableAddByUrl?: boolean
  disableAddByFile?: boolean
  placeholderText?: string
}

export type IMConfig = ImmutableObject<Config>
