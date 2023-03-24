/// <reference types="react" />
/** @jsx jsx */
import { React, LayoutItemJson, ReactRedux, SerializedStyles } from 'jimu-core';
import { LayoutItemProps, FixedLayoutItemSetting } from 'jimu-layouts/layout-runtime';
interface OwnProps {
    layoutItem: LayoutItemJson;
    offsetX?: number;
    offsetY?: number;
    dw?: number;
    dh?: number;
    index: number;
    initRect?: DOMRect;
    containerRect?: DOMRect;
    isLayoutLockChildren?: boolean;
    onResizeStart: (id: string) => void;
    onResizing: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, speed: number) => void;
    onResizeEnd: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, layoutItem: LayoutItemJson, itemSetting: FixedLayoutItemSetting) => void;
    onMoveByKey: (id: string, dx: number, dy: number) => void;
}
interface StateToLayoutItemProps {
    selected: boolean;
    isDesignMode: boolean;
}
interface State {
    dx?: number;
    dy?: number;
}
declare class FixedItem extends React.PureComponent<LayoutItemProps & OwnProps & StateToLayoutItemProps, State> {
    state: State;
    itemSetting: FixedLayoutItemSetting;
    handleResizeEnd: (id: string, dx: number, dy: number, dw: number, dh: number, shiftKey: boolean) => void;
    handleResizing: (id: string, dx: number, dy: number, dw: number, dh: number, shiftKey: boolean, speed: number) => void;
    moveUp: () => void;
    moveDown: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    getKeyboardComponent(): JSX.Element;
    getPositionStyle(): [SerializedStyles, string];
    render(): JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof FixedItem, {
    ref?: React.LegacyRef<FixedItem>;
    className?: string;
    style?: React.CSSProperties;
    children?: any;
    onClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
    onDoubleClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
    key?: React.Key;
    draggable?: boolean;
    aspectRatio?: number;
    onResizeStart: (id: string) => void;
    offsetX?: number;
    offsetY?: number;
    index: number;
    autoWidth?: boolean;
    layoutId: string;
    layoutItemId: string;
    resizable?: boolean;
    autoHeight?: boolean;
    isInSection?: boolean;
    showDefaultTools?: boolean;
    selectable?: boolean;
    forbidContextMenu?: boolean;
    forbidToolbar?: boolean;
    trailOrder?: number;
    forceAspectRatio?: boolean;
    resizeObserver?: ResizeObserver;
    layoutItem: LayoutItemJson;
    onResizeEnd: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, layoutItem: LayoutItemJson, itemSetting: FixedLayoutItemSetting) => void;
    dh?: number;
    dw?: number;
    initRect?: DOMRect;
    containerRect?: DOMRect;
    isLayoutLockChildren?: boolean;
    onResizing: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, speed: number) => void;
    onMoveByKey: (id: string, dx: number, dy: number) => void;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").AnyAction>>;
    store?: import("redux").Store<any, import("redux").AnyAction>;
}>;
export default _default;
