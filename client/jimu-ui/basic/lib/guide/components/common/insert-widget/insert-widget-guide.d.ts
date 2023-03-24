import { React, ReactRedux, IMAppConfig, IMSelection } from 'jimu-core';
import { GuideProps } from '../../core/guide';
import { Steps, StepOnChangeCallBackProps } from '../../../types';
interface StateToProps {
    appConfig: IMAppConfig;
    widgetSelection: IMSelection;
}
export declare const _InsertWidgetGuide: (props: GuideProps & StateToProps) => JSX.Element;
export declare const InsertWidgetGuide: ReactRedux.ConnectedComponent<(props: GuideProps & StateToProps) => JSX.Element, {
    className?: string;
    disabled?: boolean;
    widgetName?: string;
    steps: Steps;
    stepIndex?: number;
    run?: boolean;
    conditionalStepIndexes?: import("../../../types").ConditionalStepIndexes;
    onStepChange?: (data: StepOnChangeCallBackProps) => void;
    onActionClick?: (e: any, step: import("../../../types").Step, index: number) => void;
    widgetJson?: import("jimu-core").WidgetJson;
    isInjected?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export {};
