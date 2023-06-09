/// <reference types="react" />
import { React, DataSource, IMFieldSchema, IntlShape, CodedValue, ClauseValueOptions, ClauseValuePair, DataSourceManager, ReactRedux } from 'jimu-core';
import { ClauseInputEditor } from '../default';
interface Props {
    value: ClauseValueOptions;
    dataSource: DataSource;
    runtime: boolean;
    isSmallSize?: boolean;
    onChange: (valueObj: ClauseValueOptions) => void;
    codedValues?: CodedValue[];
    fieldObj?: IMFieldSchema;
    sql?: string;
    style?: React.CSSProperties;
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
interface DatasourceProps {
    datasourceInfo: any;
    datasourceBelongInfo: any;
}
interface State {
    list: any[];
    listWithSetValues: any[];
    codedValues: any[];
    isOpen: boolean;
}
export declare class _VIPillSelectorInner extends React.PureComponent<Props & DatasourceProps & IntlProps, State> {
    _isMounted: boolean;
    pillButton: any;
    dsManager: DataSourceManager;
    dataSource: DataSource;
    localDsRandomId: string;
    static contextType: React.Context<import("jimu-ui").QueryScopeContextProps>;
    static count: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getDataSource: () => DataSource;
    componentDidUpdate(prevProps: Props & DatasourceProps): void;
    /**
     * Sort value pairs by label.
    */
    sortValuePairs: (valuePairs: any) => any;
    isMultiple: () => boolean;
    i18nMessage: (id: string, values?: any) => string;
    updateList: (fieldObj?: IMFieldSchema) => void;
    getListWithSetValues: (list: any) => any;
    getDisplayLabel: (value: any) => string;
    onTogglePopper: () => void;
    isPillActive: (value: any) => boolean;
    onPillClick: (item: ClauseValuePair, e: any) => void;
    onDisplayChange: (inputEditor: ClauseInputEditor) => void;
    getPills: (list: any) => JSX.Element;
    render(): JSX.Element;
}
export declare const _VIPillSelector: ReactRedux.ConnectedComponent<typeof _VIPillSelectorInner, {
    ref?: React.LegacyRef<_VIPillSelectorInner>;
    className?: string;
    style?: React.CSSProperties;
    onChange: (valueObj: ClauseValueOptions) => void;
    key?: React.Key;
    value: ClauseValueOptions;
    intl: IntlShape;
    dataSource: DataSource;
    sql?: string;
    fieldObj?: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").FieldSchema> & {
        readonly jimuName: string;
        readonly type: import("jimu-core").JimuFieldType;
        readonly esriType?: import("jimu-core").EsriFieldType;
        readonly name: string;
        readonly alias?: string;
        readonly description?: string;
        readonly format?: import("seamless-immutable").ImmutableObject<import("jimu-core").FieldFormatSchema>;
        readonly originFields?: import("seamless-immutable").ImmutableArray<string>;
    };
    runtime: boolean;
    isSmallSize?: boolean;
    codedValues?: CodedValue[];
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
declare const VIPillSelector: import("@emotion/styled").StyledComponent<Omit<Props & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export default VIPillSelector;
