/** @jsx jsx */
import { jsx } from 'jimu-core';
import { JimuLayerView } from 'jimu-arcgis';
/**
 * The JimuLayerViewSelector component props
 */
export interface JimuLayerViewSelectorProps {
    /** @ignore */
    className?: string;
    /**
     * The id of a jimuMapView, it is usually returned by selecting from a jimuMapViewSelector component.
     */
    jimuMapViewId: string;
    /**
     * Callback when selected layers are changed.
     */
    onChange: (jimuLayerViewIds: string[]) => void;
    /**
     * Default selected values when first render the selector.
     */
    defaultSelectedValues?: string[];
    /**
     * Whether or not to hide some type of jimuLayerView.
     * @default false
     */
    hideLayers?: (jimuLayerView: JimuLayerView) => boolean;
    /**
     * Whether or not to disable some type of jimuLayerView, which are not selectable.
     * @default false
     */
    disableLayers?: (jimuLayerView: JimuLayerView) => boolean;
    /**
     * Whether or not allow to select multi items.
     *  @default false
     */
    isMultiSelection?: boolean;
    /**
     * Whether or not is used in the JimuLayerViewSelectorDropdown component. This property is used for height style calculation.
     * @ignore
     * @default false
     */
    isInDropdown?: boolean;
}
/**
 * A component for selecting layers in a map view. It is usually used in the
 * setting page to get the layer id.
 * ```
 * import { JimuLayerViewSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare const _JimuLayerViewSelector: (props: JimuLayerViewSelectorProps) => jsx.JSX.Element;
/**
 * A component for selecting layers in a map view. It is usually used on the settings page of a widget.
 * It includes a dropdown button to display the selected values and JimuLayerViewSelector component to select the layer.
 * ```
 * import { JimuLayerViewSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare const JimuLayerViewSelector: import("@emotion/styled").StyledComponent<JimuLayerViewSelectorProps, {}, {}>;
