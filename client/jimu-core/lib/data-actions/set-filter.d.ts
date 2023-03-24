import * as React from 'react';
import { AbstractDataAction } from '../base-data-action';
import { DataRecordSet } from '../data-sources/data-source-interface';
export default class SetFilter extends AbstractDataAction {
    _version: number;
    _modules: any;
    constructor(props: any);
    loadModeuls(): Promise<void>;
    updateIcon(dataSourceId: string): Promise<void>;
    isSupported(dataSet: DataRecordSet): Promise<boolean>;
    onExecute(dataSet: DataRecordSet, actionConfig?: any): Promise<boolean | React.ReactElement>;
}
