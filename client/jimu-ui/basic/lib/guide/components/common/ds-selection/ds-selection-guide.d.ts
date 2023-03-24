import { React, ReactRedux, ImmutableObject, ImmutableArray, DataSourceInfo, UseDataSource } from 'jimu-core';
import { GuideProps } from '../../core/guide';
import { Step, Steps, StepOnChangeCallBackProps } from '../../../types';
interface StateToProps {
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: DataSourceInfo;
    }>;
    widgetDs: ImmutableArray<UseDataSource>;
}
export declare const DataSourceSelectionGuide: ReactRedux.ConnectedComponent<(props: GuideProps & StateToProps) => JSX.Element, {
    className?: string;
    disabled?: boolean;
    widgetName?: string;
    steps: Steps;
    stepIndex?: number;
    run?: boolean;
    conditionalStepIndexes?: import("../../../types").ConditionalStepIndexes;
    onStepChange?: (data: StepOnChangeCallBackProps) => void;
    onActionClick?: (e: any, step: Step, index: number) => void;
    widgetJson?: import("jimu-core").WidgetJson;
    isInjected?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export {};
