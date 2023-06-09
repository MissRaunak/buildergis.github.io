import { IMLayoutJson, IMState } from 'jimu-core';
import { GridItemType } from '../../types';
export declare function indexOfPlainContent(layout: IMLayoutJson, layoutItemId: string): number;
export declare function isLastChildOfRootItem(layout: IMLayoutJson, layoutItemId: string): boolean;
export declare function isExpandable(state: IMState, layoutId: string, layoutItemId: string): boolean;
export interface GridNode {
    layoutItemId: string;
    type: GridItemType;
    children?: GridNode[];
}
export declare function getGridLayoutStructure(layout: IMLayoutJson): GridNode;
