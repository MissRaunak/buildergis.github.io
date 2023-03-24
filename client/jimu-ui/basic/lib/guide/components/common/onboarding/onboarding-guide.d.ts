/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, jsx, PageMode, ImmutableObject, UrlParameters } from 'jimu-core';
import { GuideProps } from '../../core/guide';
import { Step, Steps, ConditionalStepIndexes } from '../../../types';
interface StateToProps {
    queryObject: ImmutableObject<UrlParameters>;
    pageMode: PageMode;
}
interface State {
    stepIndex: number;
    steps: Steps;
    conditionalStepIndexes: ConditionalStepIndexes;
    run: boolean;
}
export declare class _OnboardingGuide extends React.PureComponent<GuideProps & StateToProps, State> {
    private readonly currentStep;
    constructor(props: any);
    componentDidUpdate(prevProps: GuideProps & StateToProps): void;
    private readonly handleChange;
    private readonly handleClick;
    render(): jsx.JSX.Element;
}
export declare const OnboardingGuide: ReactRedux.ConnectedComponent<typeof _OnboardingGuide, {
    ref?: React.LegacyRef<_OnboardingGuide>;
    className?: string;
    key?: React.Key;
    disabled?: boolean;
    widgetName?: string;
    steps: Steps;
    stepIndex?: number;
    run?: boolean;
    conditionalStepIndexes?: ConditionalStepIndexes;
    onStepChange?: (data: import("../../../types").StepOnChangeCallBackProps) => void;
    onActionClick?: (e: any, step: Step, index: number) => void;
    widgetJson?: import("jimu-core").WidgetJson;
    isInjected?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export {};
