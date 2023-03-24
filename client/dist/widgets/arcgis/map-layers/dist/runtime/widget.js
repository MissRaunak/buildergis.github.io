System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-for-builder"],(function(e,i){var t={},s={},o={},a={};return{setters:[function(e){t.DataSourceComponent=e.DataSourceComponent,t.React=e.React,t.css=e.css,t.jsx=e.jsx,t.portalUrlUtils=e.portalUrlUtils},function(e){s.DataSourceTypes=e.DataSourceTypes,s.JimuMapViewComponent=e.JimuMapViewComponent,s.MapViewManager=e.MapViewManager,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.zoomToUtils=e.zoomToUtils},function(e){o.WidgetPlaceholder=e.WidgetPlaceholder},function(e){a.getAppConfigAction=e.getAppConfigAction}],execute:function(){e((()=>{var e={59169:e=>{e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.324 15.04a.493.493 0 0 1 .632.216c.11.22.006.482-.232.585L10 20 .276 15.84c-.238-.102-.342-.363-.232-.584a.493.493 0 0 1 .632-.215L10 19.029ZM10 19.03l-.2.085h.4l-.2-.086Zm9.324-8.99a.493.493 0 0 1 .632.216c.11.22.006.482-.232.585L10 15 .276 10.84c-.238-.102-.342-.363-.232-.584a.493.493 0 0 1 .632-.215L10 14.029ZM10.226.055l9.523 4.888a.446.446 0 0 1-.025.813L10.2 9.958a.497.497 0 0 1-.4 0L.276 5.755a.446.446 0 0 1-.025-.813L9.775.054a.496.496 0 0 1 .45 0ZM10 .971 1.542 5.31 10 9.046l8.459-3.733L10 .97Z" fill="#000" fill-rule="nonzero"></path></svg>'},26826:e=>{"use strict";e.exports=s},48891:e=>{"use strict";e.exports=t},23137:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=o}},i={};function r(t){var s=i[t];if(void 0!==s)return s.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{LoadStatus:()=>u,default:()=>m});var e=r(48891),i=r(26826),t=r(30726);function s(i,t){let s,o;t.setVisibility&&t.useMapWidget?(s="block",o=""):(s="none",o="unset");const a=i.surfaces[1].bg,r=i.surfaces[1].bg;return e.css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${i.arcgis.widgets.layerlist.root.bg};*/
      background-color: ${a};

      .esri-layer-list__item-label:focus {
        outline: ${o};
      }

      .esri-layer-list__item-toggle {
        display: ${s};
      }

      .esri-layer-list {
        background-color: ${a};
      }

      .esri-layer-list__item {
        background-color: ${r};
      }

      .esri-layer-list__item-action {
        outline-offset: -2px;
      }

      /* .esri-layer-list {
        background-color: ${i.colors.palette.light[100]};
        color: ${i.colors.black}
      }

      .esri-layer-list__item {
        background-color: ${i.colors.palette.light[100]};
      }

      .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
        color: ${i.colors.palette.light[800]}
      }

      .esri-layer-list__child-toggle{
        color: ${i.colors.black}
      }


      .esri-layer-list__item-actions-menu-item:hover {
        background-color: ${i.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-menu-item--active, .esri-layer-list__item-actions-menu-item--active:hover {
        background-color: ${i.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions {
        background-color: ${i.colors.palette.light[200]};
        color: ${i.colors.black}
      }

      .esri-layer-list__item-action:hover {
        background-color: ${i.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-list {
        border-color: ${i.colors.palette.light[500]};
      } */
    }
  `}class o{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=e=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class a extends o{constructor(e,t){super(),this.isValid=e=>!("esri.layers.GroupLayer"===e.layer.declaredClass||e.parent&&"esri.layers.GroupLayer"!==e.parent.layer.declaredClass||!this.useMapWidget()||!this.widget.props.config.goto),this.execute=e=>{this.widget.viewFromMapWidget&&i.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=t,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class n extends o{constructor(e,i,t){super(),this.isValid=e=>{var i;return this.title=e.layer.labelsVisible?this.titleHide:this.titleShow,!!(this.useMapWidget()&&this.widget.props.config.label&&(null===(i=null==e?void 0:e.layer)||void 0===i?void 0:i.labelingInfo))},this.execute=e=>{e.layer.labelsVisible=!e.layer.labelsVisible,this.updateTitle(e.layer.labelsVisible)},this.updateTitle=e=>{var i,t;const s=document.querySelector(`.widget-layerlist_${null===(t=null===(i=this.widget)||void 0===i?void 0:i.props)||void 0===t?void 0:t.id} .esri-layer-list__item-action .label-action-title`),o=null==s?void 0:s.parentElement;let a;null==o||o.childNodes.forEach((e=>{var i;(null===(i=e.className)||void 0===i?void 0:i.indexOf("esri-layer-list__item-action-title"))>-1&&(a=e)})),a&&(a.innerHTML=e?this.titleHide:this.titleShow)},this.id="label",this.className="esri-icon-labels label-action-title",this.group=0,this.widget=e,this.titleShow=i,this.titleHide=t}}class d extends o{constructor(e,i,t){super(),this.isValid=e=>!(e.parent&&"esri.layers.GroupLayer"!==e.parent.layer.declaredClass||!this.useMapWidget()||!this.widget.props.config.opacity),this.execute=e=>{this.isIncreaseOpacity?e.layer.opacity<1&&(e.layer.opacity+=.25):e.layer.opacity>0&&(e.layer.opacity-=.25)},this.id=t?"increaseOpacity":"decreaseOpacity",this.title=i,this.className=t?"esri-icon-down":"esri-icon-up",this.group=1,this.widget=e,this.isIncreaseOpacity=t}}class c extends o{constructor(i,t){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=i=>{var t;const s=i.layer,o=null==s?void 0:s.portalItem;if((null===(t=null==o?void 0:o.portal)||void 0===t?void 0:t.url)&&o.id){const i=e.portalUrlUtils.getStandardPortalUrl(o.portal.url)+`/home/item.html?id=${o.id}`;window.open(i)}else{const e="feature"===(null==s?void 0:s.type)?`${s.url}/${s.layerId}`:s.url;window.open(e)}},this.id="information",this.title=t,this.className="esri-icon-description",this.group=3,this.widget=i}}var u,p=r(59169),h=r.n(p),g=r(23137),y=function(e,i,t,s){return new(t||(t=Promise))((function(o,a){function r(e){try{n(s.next(e))}catch(e){a(e)}}function l(e){try{n(s.throw(e))}catch(e){a(e)}}function n(e){var i;e.done?o(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(r,l)}n((s=s.apply(e,i||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(u||(u={}));class m extends e.React.PureComponent{constructor(e){super(e),this.isCustomizeOptionValid=e=>{var i;const t=(0,g.getAppConfigAction)().appConfig;for(const s of Object.keys(t.widgets)){const o=t.widgets[s];if("map-layers"===o.manifest.name&&o.id!==this.props.widgetId&&(null===(i=o.useMapWidgetIds)||void 0===i?void 0:i[0])===e)return!1}return!0},this.hideCustomizedLayers=()=>{var e,t,s,o,a;const r=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.config)||void 0===t?void 0:t.customizeLayerOptions)||void 0===s?void 0:s[this.state.jimuMapViewId];if(!this.state.mapViewWidgetId||!(null==r?void 0:r.isEnabled))return;const l=(null===(o=i.MapViewManager.getInstance().getJimuMapViewById(this.state.jimuMapViewId))||void 0===o?void 0:o.jimuLayerViews)||{},n=new Set(null==r?void 0:r.hiddenJimuLayerViewIds);for(const e of Object.keys(l)){const i=null===(a=null==l?void 0:l[e])||void 0===a?void 0:a.layer;(null==r?void 0:r.isEnabled)&&(null==n?void 0:n.has(e))?i.listMode="hide":i.listMode="show"}},this.defineLayerListActions=e=>{const i=e.item,t={};i.actionsSections=[],this.layerListActions.forEach((e=>{if(e.isValid(i)){let i=t[e.group];i||(i=[],t[e.group]=i),i.push({id:e.id,title:e.title,className:e.className})}})),Object.entries(t).sort(((e,i)=>Number(e[0])-Number(i[0]))).forEach((([e,t])=>{i.actionsSections.push(t)}))},this.onLayerListActionsTriggered=e=>{const i=e.action,t=e.item;this.layerListActions.find((e=>e.id===i.id)).execute(t)},this.onActiveViewChange=e=>{const i=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!i?(this.viewFromMapWidget=e&&e.view,this.setState({mapViewWidgetId:i,jimuMapViewId:e.id}),this.updateRenderer()):this.destoryLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id})},this.onCreateDataSourceFailed=e=>{},this.state={mapViewWidgetId:null,mapDataSourceId:null,jimuMapViewId:null,loadStatus:u.Pending},this.renderPromise=Promise.resolve(),this.registerLayerListActions()}componentDidMount(){}componentDidUpdate(){this.updateRenderer()}updateRenderer(){this.props.config.useMapWidget?this.state.mapViewWidgetId===this.currentUseMapWidgetId&&this.syncRenderer(this.renderPromise):this.state.mapDataSourceId===this.currentUseDataSourceId&&this.syncRenderer(this.renderPromise)}createView(){return y(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?yield Promise.resolve(this.viewFromMapWidget):yield this.createViewByDatatSource()}))}createViewByDatatSource(){return y(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource).then((()=>y(this,void 0,void 0,(function*(){return this.dataSource.type===i.DataSourceTypes.WebMap?yield new Promise(((e,i)=>this.createWebMapView(this.MapView,e,i))):this.dataSource.type===i.DataSourceTypes.WebScene?new Promise(((e,i)=>this.createSceneView(this.SceneView,e,i))):Promise.reject()}))))}))}createWebMapView(e,i,t){if(this.mapView)this.mapView.map=this.dataSource.map;else{const i={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(i)}this.mapView.when((()=>{i(this.mapView)}),(e=>t(e)))}createSceneView(e,i,t){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when((()=>{i(this.sceneView)}),(e=>t(e)))}destoryView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return y(this,void 0,void 0,(function*(){return e.type===i.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,i.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===i.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,i.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()}))}destoryLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}componentWillUnmount(){var e,t,s,o,a;const r=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.config)||void 0===t?void 0:t.customizeLayerOptions)||void 0===s?void 0:s[this.state.jimuMapViewId],l=new Set(null==r?void 0:r.hiddenJimuLayerViewIds);if(null==r?void 0:r.isEnabled){const e=(null===(o=i.MapViewManager.getInstance().getJimuMapViewById(this.state.jimuMapViewId))||void 0===o?void 0:o.jimuLayerViews)||{};for(const i of Object.keys(e)){const t=null===(a=null==e?void 0:e[i])||void 0===a?void 0:a.layer;l.has(i)&&(t.listMode="show")}}}createLayerList(e){let t;return t=this.LayerList?Promise.resolve():(0,i.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then((e=>{[this.LayerList]=e})),t.then((()=>{const i=document&&document.createElement("div");i.className="jimu-widget",this.refs.layerListContainer.appendChild(i),this.destoryLayerList();const t=new this.LayerList({view:e,listItemCreatedFunction:this.defineLayerListActions,container:i});this.layerList=t,this.configLayerList(),this.layerList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e)}))}))}registerLayerListActions(){this.layerListActions=[new a(this,this.props.intl.formatMessage({id:"goto",defaultMessage:"Zoom to"})),new n(this,this.props.intl.formatMessage({id:"showLabels",defaultMessage:"Show labels"}),this.props.intl.formatMessage({id:"hideLabels",defaultMessage:"Hide labels"})),new d(this,this.props.intl.formatMessage({id:"increaseTransparency",defaultMessage:"Increase transparency"}),!1),new d(this,this.props.intl.formatMessage({id:"decreaseTransparency",defaultMessage:"Decrease transparency"}),!0),new c(this,this.props.intl.formatMessage({id:"information",defaultMessage:"Details"}))]}configLayerList(){this.props.config.setVisibility&&this.props.config.useMapWidget||(this.layerList._toggleVisibility=function(){})}renderLayerList(){return y(this,void 0,void 0,(function*(){return yield this.createView().then((e=>this.createLayerList(e))).then((()=>{this.setState({loadStatus:u.Fulfilled})})).catch((e=>console.error(e)))}))}syncRenderer(e){this.renderPromise=new Promise(((i,t)=>{e.then((()=>{this.renderLayerList().then((()=>{i(null),this.hideCustomizedLayers()})).catch((()=>t()))}))}))}render(){var o;const a=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],r=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=a,this.currentUseDataSourceId=r&&r.dataSourceId;let l=null;this.props.config.useMapWidget?l=(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null===(o=this.props.useMapWidgetIds)||void 0===o?void 0:o[0],onActiveViewChange:this.onActiveViewChange}):r&&(l=(0,e.jsx)(e.DataSourceComponent,{useDataSource:r,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed}));let n=null;if(this.props.config.useMapWidget?a:r){let i=null;this.state.loadStatus===u.Pending&&(i=(0,e.jsx)("div",{className:"jimu-secondary-loading"})),n=(0,e.jsx)("div",{className:`widget-layerlist widget-layerlist_${this.props.id}`},i,(0,e.jsx)("div",{ref:"layerListContainer"}),(0,e.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},l))}else this.destoryLayerList(),n=(0,e.jsx)("div",{className:"widget-layerlist"},(0,e.jsx)(t.WidgetPlaceholder,{icon:h(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:"Map Layers"}),widgetId:this.props.id}));return(0,e.jsx)("div",{css:s(this.props.theme,this.props.config),className:"jimu-widget"},n)}}})(),l})())}}}));