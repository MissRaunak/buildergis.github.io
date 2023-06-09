/// <reference types="react" />
/// <reference types="seamless-immutable" />
/** @jsx jsx */
import { React, ReactRedux, ImmutableObject, JimuMapViewInfo, ImmutableArray } from 'jimu-core';
import { JimuLayerView } from '../views';
/**
 * @ignore
 * The JimuLayerViewInfo
 */
export interface JimuLayerViewInfo {
    jimuMapViewId?: string;
    jimuLayerId?: string;
    rootJimuLayerId?: string;
    dataSourceId?: string;
    rootDataSourceId?: string;
}
export declare type IMJimuLayerViewInfo = ImmutableObject<JimuLayerViewInfo>;
/**
 * @ignore
 * The JimuLayerViewComponent component props
 */
export interface JimuLayerViewComponentProps {
    /**
     * The array of the map widget id selected from the MapWidgetSelector component
     */
    useMapWidgetIds: ImmutableArray<string>;
    /**
     * The jimuLayerViewInfo selected from the JimuLayerViewSelector component
     */
    jimuLayerViewInfo: IMJimuLayerViewInfo;
    /**
     * The function will be called when the JimuLayerView instance is created.
     */
    onLayerViewCreated?: (jimuLayerView: JimuLayerView) => void;
    /**
     * The function will be called when the JimuLayerView instance creation fails.
     */
    onLayerViewFailed?: (err: any) => void;
}
interface ExtraProps {
    viewInfos: ImmutableObject<{
        [jimuMapViewId: string]: JimuMapViewInfo;
    }>;
}
declare class _JimuLayerViewComponent extends React.PureComponent<JimuLayerViewComponentProps & ExtraProps, unknown> {
    componentDidMount(): void;
    componentDidUpdate(prevProps: JimuLayerViewComponentProps & ExtraProps, prevState: unknown): void;
    getJimuMapViewIdsFromUseMapWidgetIds: (useMapWidgetIds: ImmutableArray<string>, infos: ImmutableObject<{
        [jimuMapViewId: string]: JimuMapViewInfo;
    }>, rootDataSourceId: string) => string[];
    getJimuMapViewIdsFromMapWidgetId: (mapWidgetId: string, infos: ImmutableObject<{
        [jimuMapViewId: string]: JimuMapViewInfo;
    }>, rootDataSourceId: string) => string[];
    render(): any;
}
/**
 * A react component that makes it easy to use JimuLayerView from the map widget.
 * In most cases, you can pass in `useMapWidgetIds` & `jimuLayerViewInfo`, and use `onLayerViewCreated` & `onLayerViewFailed` to get a callback from the JimuLayerViewComponent.
 */
export declare const JimuLayerViewComponent: ReactRedux.ConnectedComponent<typeof _JimuLayerViewComponent, {
    ref?: React.LegacyRef<_JimuLayerViewComponent>;
    key?: React.Key;
    useMapWidgetIds: Readonly<import("seamless-immutable").ImmutableArray.Remaining<string>> & import("seamless-immutable").ImmutableArray.Additions<string> & import("seamless-immutable").ImmutableArray.Overrides<string> & import("seamless-immutable").ImmutableArray.ReadOnlyIndexer<string>;
    jimuLayerViewInfo: import("seamless-immutable").ImmutableObjectMixin<JimuLayerViewInfo> & {
        readonly jimuMapViewId?: string;
        readonly jimuLayerId?: string;
        readonly rootJimuLayerId?: string;
        readonly dataSourceId?: string;
        readonly rootDataSourceId?: string;
    };
    onLayerViewCreated?: (jimuLayerView: JimuLayerView) => void;
    onLayerViewFailed?: (err: any) => void;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export {};
