import { MapViewManager } from '../../mapview-manager';
import { IMDataSourceInfo, DataSource } from 'jimu-core';
/**
 * `JimuLayerViewConstructorOptions` is used in the constructor of the `JimuLayerView`, to initiate a `JimuLayerView` instance.
 */
export interface JimuLayerViewConstructorOptions {
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript `LayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html).
     */
    view: __esri.LayerView;
    /**
     * The layer type, see [ArcGIS Maps SDK for JavaScript Layer type]]((https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#type))
     */
    type: string;
    /**
     * The layerDataSourceId is the corresponding datasource id.
     */
    layerDataSourceId: string;
    /**
     * The jimuMapViewId is the corresponding JimuMapView instance id.
     */
    jimuMapViewId: string;
    /** The jimuLayerId is a string that connects the layer.id in the layer tree with "-" */
    jimuLayerId: string;
    /**
     * The layer is the corresponding layer object in ArcGIS JavaScript API View.map.
     */
    layer: any;
    /** @ignore */
    parentJimuLayerViewId: string;
    /** Pass MapViewManager in to avoid circular dependency. */
    mapViewManager: MapViewManager;
    index: number;
}
/**
 * `JimuLayerView` is a wrapper class for ArcGIS Maps SDK for JavaScript [`LayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html).
 * It is created by a `JimuMapView` using a layer [`DataSource`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSource).
 */
export declare class JimuLayerView {
    /**
     * The id of the JimuLayerView instance. It connects the JimuMapView.id and the JimuLayerId with "-"
     */
    id: string;
    /**
     * The `view` is the [ArcGIS Maps SDK for JavaScript `LayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html).
     */
    view: __esri.LayerView;
    /**
     * The layer type, see [ArcGIS Maps SDK for JavaScript Layer type]]((https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#type))
     */
    type: string;
    /**
     * The layerDataSourceId is the corresponding datasource id.
     */
    layerDataSourceId: string;
    /**
     * The jimuMapViewId is the corresponding JimuMapView instance id.
     */
    jimuMapViewId: string;
    /** @ignore */
    jimuLayerId: string;
    /**
     * The layer is the corresponding layer object in ArcGIS JavaScript API View.map.
     */
    layer: any;
    /** @ignore */
    parentJimuLayerViewId: string;
    /**
     * The order defined in the webmap
     */
    index: number;
    /** @ignore */
    private readonly dataSourceInfoObserver;
    /** @ignore */
    private readonly layerDataSourceJsonObserver;
    /** @ignore */
    private runTimeIsHidden;
    protected readonly mapViewManager: MapViewManager;
    constructor(options: JimuLayerViewConstructorOptions);
    ready(): Promise<this>;
    /** @ignore */
    protected onLayerDataSourceInfoChange(preDsInfo: IMDataSourceInfo, dsInfo: IMDataSourceInfo): void;
    /** @ignore */
    private onLayerDatasourceJsonChange;
    /** Return the cooresponding data source of the layer */
    getLayerDataSource(): DataSource;
    /** Select features */
    selectFeaturesByIds(ids: string[]): void;
    /** Select feature */
    selectFeatureById(id: string): void;
    /**
     * Return the MapView or SceneView of the layer view.
     */
    getMapSceneView(): __esri.MapView | __esri.SceneView;
    /**
     * Destroy the JimuLayerView instance.
     */
    destroy(): void;
}
