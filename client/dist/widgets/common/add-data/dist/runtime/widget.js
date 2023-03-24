System.register(["jimu-core","jimu-ui","jimu-core/data-source","jimu-ui/basic/item-selector","jimu-core/react"],(function(e,t){var a={},o={},r={},s={},n={};return{setters:[function(e){a.DataSourceManager=e.DataSourceManager,a.DataSourceStatus=e.DataSourceStatus,a.DataSourceTypes=e.DataSourceTypes,a.DataSourcesChangeMessage=e.DataSourcesChangeMessage,a.DataSourcesChangeType=e.DataSourcesChangeType,a.Immutable=e.Immutable,a.MessageManager=e.MessageManager,a.MutableStoreManager=e.MutableStoreManager,a.React=e.React,a.ReactRedux=e.ReactRedux,a.ServiceManager=e.ServiceManager,a.SupportedItemTypes=e.SupportedItemTypes,a.SupportedLayerServiceTypes=e.SupportedLayerServiceTypes,a.classNames=e.classNames,a.css=e.css,a.dataSourceUtils=e.dataSourceUtils,a.defaultMessages=e.defaultMessages,a.esri=e.esri,a.getAppStore=e.getAppStore,a.i18n=e.i18n,a.jsx=e.jsx,a.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,a.requestUtils=e.requestUtils,a.uuidv1=e.uuidv1},function(e){o.Alert=e.Alert,o.Button=e.Button,o.DataActionDropDown=e.DataActionDropDown,o.Dropdown=e.Dropdown,o.DropdownButton=e.DropdownButton,o.DropdownItem=e.DropdownItem,o.DropdownMenu=e.DropdownMenu,o.Icon=e.Icon,o.Input=e.Input,o.Label=e.Label,o.Loading=e.Loading,o.LoadingType=e.LoadingType,o.MobilePanel=e.MobilePanel,o.PanelHeader=e.PanelHeader,o.Popper=e.Popper,o.Tab=e.Tab,o.Tabs=e.Tabs,o.TextInput=e.TextInput,o.UrlInput=e.UrlInput,o.defaultMessages=e.defaultMessages,o.hooks=e.hooks},function(e){r.DataSourceTypes=e.DataSourceTypes},function(e){s.ItemSelector=e.ItemSelector,s.ItemSelectorMode=e.ItemSelectorMode},function(e){n.useEffect=e.useEffect}],execute:function(){e((()=>{var e={73982:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0V1.5Zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062Zm-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643L3.176 2.436ZM6.244 10.6H5.43h.814ZM.961 9.8h4.88c.211 0 .359.19.359.4a1.8 1.8 0 0 0 3.555.4h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755c.03-.129.045-.263.045-.4 0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228L.961 9.8Zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356h9.544Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},96009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},59216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},54357:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6ZM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1Zm0 3V1H5v2h6Zm1.895 1h-9.79l.8 11h8.19l.8-11Z" fill="#000"></path></svg>'},44429:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi43MTI1IDAuMjVIMC42MjVWMzEuNzVIMjUuMzc1VjguOTExMzhMMTYuNzEyNSAwLjI1Wk0yNC4yNSAzMC42MjVIMS43NVYxLjM3NUgxNS4yNVYxMC4zNzVIMjQuMjVWMzAuNjI1Wk0xNi4zNzUgOS4yNVYxLjM3NUwyNC4yNSA5LjI1SDE2LjM3NVpNOS42MjUgMTIuNjI1SDUuMTI1VjE3LjEyNUg2LjI1VjIzLjg3NUg1LjEyNVYyOC4zNzVIOS42MjVWMjcuMjVIMTYuMzc1VjI4LjM3NUgyMC44NzVWMjMuODc1SDE5Ljc1VjE3LjEyNUgyMC44NzVWMTIuNjI1SDE2LjM3NVYxMy43NUg5LjYyNVYxMi42MjVaTTYuMjUgMTMuNzVIOC41VjE2SDYuMjVWMTMuNzVaTTYuMjUgMjcuMjVWMjVIOC41VjI3LjI1SDYuMjVaTTE5Ljc1IDI3LjI1SDE3LjVWMjVIMTkuNzVWMjcuMjVaTTE5Ljc1IDEzLjc1VjE2SDE3LjVWMTMuNzVIMTkuNzVaTTE2LjM3NSAxNC44NzVWMTcuMTI1SDE4LjYyNVYyMy44NzVIMTYuMzc1VjI2LjEyNUg5LjYyNVYyMy44NzVINy4zNzVWMTcuMTI1SDkuNjI1VjE0Ljg3NUgxNi4zNzVaIiBmaWxsPSIjMDc2RkU1Ii8+DQo8L3N2Zz4NCg=="},76740:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzcuNSAxNi41MjdWMTEuNTQ4NUwyNS45NSAwSDQuNDk5OThWMTYuNTI3SDAuMDI2OTc3NVYzOC45NzNINC40OTk5OFY0MkgzNy41VjM4Ljk3M0g0MS45NzNWMTYuNTI3SDM3LjVaTTI1LjUgMS41TDM2IDEySDI1LjVWMS41Wk01Ljk5OTk4IDEuNUgyNFYxMy41SDM2VjE2LjUyN0g1Ljk5OTk4VjEuNVpNMzYgNDAuNUg1Ljk5OTk4VjM4Ljk3M0gzNlY0MC41Wk00MC41MjcgMzcuNTI3SDEuNDcyOThWMTcuOTczSDQwLjUyN1YzNy41MjdaTTEwLjI3NSAzMS45MDJDOS4wMzI3NCAzMC43MDUzIDguNTMzNTcgMjguOTMxMSA4Ljk2OTYxIDI3LjI2MjNDOS40MDU2NSAyNS41OTM0IDEwLjcwODkgMjQuMjkwMiAxMi4zNzc4IDIzLjg1NDFDMTQuMDQ2NiAyMy40MTgxIDE1LjgyMDggMjMuOTE3MyAxNy4wMTc1IDI1LjE1OTVMMTUuOTU3IDI2LjIyQzE1LjEzMzEgMjUuMzg1MSAxMy45MjQ5IDI1LjA1NTcgMTIuNzkxMiAyNS4zNTY5QzExLjY1NzUgMjUuNjU4MSAxMC43NzIyIDI2LjU0MzcgMTAuNDcxMyAyNy42Nzc1QzEwLjE3MDUgMjguODExMyAxMC41MDAzIDMwLjAxOTMgMTEuMzM1NSAzMC44NDNDMTIuNjI3OSAzMi4wNzgxIDE0LjY2MzEgMzIuMDc4MSAxNS45NTU1IDMwLjg0M0wxNy4wMTc1IDMxLjkwMzVDMTYuMTIzNiAzMi43OTgxIDE0LjkxMDkgMzMuMzAwOCAxMy42NDYyIDMzLjMwMDhDMTIuMzgxNiAzMy4zMDA4IDExLjE2ODggMzIuNzk4MSAxMC4yNzUgMzEuOTAzNVYzMS45MDJaTTMwLjA2IDMyLjk3NkwyNi40OTkgMjRIMjguMTEzTDMwLjc2NSAzMC42Nzk1TDMzLjQ1NiAyNEgzNS4wNzNMMzEuNDU1IDMyLjk3OUwzMC4wNiAzMi45NzZaTTIzLjk0OSAzMC42OTE1QzI0LjA3NiAzMC4zNTY0IDI0LjA1MzYgMjkuOTgzIDIzLjg4NzUgMjkuNjY1NUMyMy41MzM4IDI5LjI0MTEgMjMuMDIwMSAyOC45ODIgMjIuNDY4NSAyOC45NUMyMC41MzUgMjguNjUzIDE5LjUzOSAyNy43NzQgMTkuNTA3NSAyNi4zMzU1QzE5LjQ5NDUgMjUuNjYyOSAxOS43NTQyIDI1LjAxMzYgMjAuMjI3NSAyNC41MzU1QzIwLjczNzUgMjQuMDA0NCAyMS40NDExIDIzLjcwMjkgMjIuMTc3NSAyMy43QzIzLjM2MzEgMjMuNjczIDI0LjQ2NDMgMjQuMzExIDI1LjAzMDUgMjUuMzUzTDIzLjc1NCAyNi4xNDJDMjMuNDYxMSAyNS41NDQ1IDIyLjg0NCAyNS4xNzUzIDIyLjE3OSAyNS4yQzIxLjg1IDI1LjIgMjEuNTM1NSAyNS4zMzUgMjEuMzA5IDI1LjU3MzVDMjEuMTE2NiAyNS43NjEzIDIxLjAwOCAyNi4wMTg3IDIxLjAwNzUgMjYuMjg3NUMyMS4wMTM1IDI2LjU5NjUgMjEuMDI4NSAyNy4yMTE1IDIyLjY5NjUgMjcuNDY2NUMyMy42OTcyIDI3LjUzOTEgMjQuNjA5OSAyOC4wNjUgMjUuMTc0NSAyOC44OTQ1QzI1LjU3MTIgMjkuNTk0NyAyNS42NDAzIDMwLjQzMzggMjUuMzYzNSAzMS4xODk1QzI0LjgzNzIgMzIuNDQ5MSAyMy41Njk5IDMzLjIzNjMgMjIuMjA3NSAzMy4xNUMyMC44NjUzIDMzLjIwMzkgMTkuNjEyMSAzMi40Nzk4IDE4Ljk4ODUgMzEuMjlMMjAuMjg0NSAzMC41MzI1QzIwLjY0MjIgMzEuMjU4IDIxLjQgMzEuNjk4NCAyMi4yMDc1IDMxLjY1QzIyLjkzMDcgMzEuNzIzIDIzLjYyMzYgMzEuMzQwNyAyMy45NDc1IDMwLjY5TDIzLjk0OSAzMC42OTE1Wk0zLjc0OTk4IDMyLjI1QzMuNzQ5OTggMzEuNDIxNiA0LjQyMTU1IDMwLjc1IDUuMjQ5OTggMzAuNzVDNi4wNzg0IDMwLjc1IDYuNzQ5OTggMzEuNDIxNiA2Ljc0OTk4IDMyLjI1QzYuNzQ5OTggMzMuMDc4NCA2LjA3ODQgMzMuNzUgNS4yNDk5OCAzMy43NUM0LjQyMjI0IDMzLjc0ODMgMy43NTE2MyAzMy4wNzc3IDMuNzQ5OTggMzIuMjVaIiBmaWxsPSIjMDc2RkU1Ii8+DQo8L3N2Zz4NCg=="},93119:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUuMzc1IDguOTExMzdMMTYuNzEyNSAwLjI1SDAuNjI1VjMxLjc1SDI1LjM3NVY4LjkxMTM3Wk0yNC4yNSAzMC42MjVIMS43NVYxLjM3NUgxNS4yNVYxMC4zNzVIMjQuMjVWMzAuNjI1Wk0xNi4zNzUgOS4yNVYxLjM3NUwyNC4yNSA5LjI1SDE2LjM3NVpNNi41IDhDNy4zMjg0MyA4IDggNy4zMjg0MyA4IDYuNUM4IDUuNjcxNTcgNy4zMjg0MyA1IDYuNSA1QzUuNjcxNTcgNSA1IDUuNjcxNTcgNSA2LjVDNSA3LjMyODQzIDUuNjcxNTcgOCA2LjUgOFpNNi41IDlDNy44ODA3MSA5IDkgNy44ODA3MSA5IDYuNUM5IDUuMTE5MjkgNy44ODA3MSA0IDYuNSA0QzUuMTE5MjkgNCA0IDUuMTE5MjkgNCA2LjVDNCA3Ljg4MDcxIDUuMTE5MjkgOSA2LjUgOVpNMjAgMTRINFYxM0gyMFYxNFpNMTQgMTlINVYyNUgxNFYxOVpNNCAxOFYyNkgxNVYxOEg0WiIgZmlsbD0iIzA3NkZFNSIvPg0KPC9zdmc+"},48891:e=>{"use strict";e.exports=a},11840:e=>{"use strict";e.exports=r},51315:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=o},20878:e=>{"use strict";e.exports=s}},t={};function i(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var l={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(l),i.d(l,{default:()=>Be});var e=i(48891),t=i(30726),a=i(73982),o=i.n(a);const r=t=>{const a=window.SVG,{className:r}=t,s=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",r);return a?e.React.createElement(a,Object.assign({className:n,src:o()},s)):e.React.createElement("svg",Object.assign({className:n},s))},s={_widgetLabel:"Add Data",urlType:"Type",arcgisUrl:"ArcGIS Server Web Service",csvUrl:"CSV Layer",geojsonUrl:"GeoJSON Layer",kmlUrl:"KML Layer",wfsUrl:"WFS OGC Web Service",wmsUrl:"WMS OGC Web Service",wmtsUrl:"WMTS OGC Web Service",dropOrBrowse:"Drop or browse",defaultPlaceholderText:"There is currently no added data.",dropOrBrowseToUpload:"Drop or browse to upload",upload:"Upload",notSupportedFileTypeError:"The file type of {fileName} is not supported.",failedToUploadError:"The file {fileName} cannot be successfully uploaded.",exceedMaxSizeError:"The file size exceeds the maximum limit.",exceedMaxRecordsError:"The number of records exceeds the maximum threshold.",cannotBeAddedError:"{layerName} cannot be added. Support for adding this type is not yet available.",supportedTypesHint:"Supported formats: Shapefile, CSV, GeoJSON.",fileIsUploading:"{fileName} is uploading",clickToAddData:"Click to add data",sampleUrl:"Sample URL"};var n=i(11840),c=function(e,t,a,o){return new(a||(a=Promise))((function(r,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,i)}l((o=o.apply(e,t||[])).next())}))};function d(t){return e.DataSourceManager.getInstance().getDataSource(t)}function u(t,a,o=!0){return c(this,void 0,void 0,(function*(){if(!t||0===t.length)return Promise.resolve([]);let r,s,n;if(t.some((e=>e.restLayer))){const t=yield(0,e.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/Graphic","esri/layers/support/Field"]);r=t[0],s=t[1],n=t[2]}const i=t.map((t=>{var a,o,i,l,c;return t.restLayer&&r&&s&&n?{id:t.dataSourceJson.id,dataSourceJson:(0,e.Immutable)(t.dataSourceJson),layer:new r({source:(null===(o=null===(a=t.restLayer.featureSet)||void 0===a?void 0:a.features)||void 0===o?void 0:o.map((e=>s.fromJSON(e))))||[],objectIdField:null===(i=t.restLayer.layerDefinition)||void 0===i?void 0:i.objectIdField,fields:null===(c=null===(l=t.restLayer.layerDefinition)||void 0===l?void 0:l.fields)||void 0===c?void 0:c.map((e=>n.fromJSON(e))),sourceJSON:t.restLayer.layerDefinition,title:t.dataSourceJson.label||t.dataSourceJson.sourceLabel})}:{id:t.dataSourceJson.id,dataSourceJson:(0,e.Immutable)(t.dataSourceJson)}}));return Promise.allSettled(i.map((t=>e.DataSourceManager.getInstance().createDataSource(t)))).then((e=>e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)))).then((r=>{if(o&&r.length>0){const t=new e.DataSourcesChangeMessage(a,e.DataSourcesChangeType.Create,r);e.MessageManager.getInstance().publishMessage(t)}return r.length<t.length?Promise.reject("Failed to create some data source."):r}))}))}function p(t,a,o=!0){const r=t.map((e=>d(e))).filter((e=>!!e));if(o&&r.length>0){const t=new e.DataSourcesChangeMessage(a,e.DataSourcesChangeType.Remove,r);e.MessageManager.getInstance().publishMessage(t)}return Promise.resolve().then((()=>{t.forEach((t=>{e.MutableStoreManager.getInstance().updateStateValue("setFilter",t,null),e.DataSourceManager.getInstance().destroyDataSource(t)}))}))}function m(e){var t;e.stopPropagation(),e.preventDefault(),null===(t=e.nativeEvent)||void 0===t||t.stopImmediatePropagation()}function g(t){const a=e.React.useRef(),o=e.React.useRef();return Object.is(o.current,t)||(a.current=o.current,o.current=t),a.current}function M(e,t){return`add-data-${e}-${t}-${(new Date).getTime()}`}function j(e,t,a,o,r,s){var i,l,c;const d=((null==t?void 0:t.layers)||[]).concat((null==t?void 0:t.tables)||[]),u=`${(null===(i=d[0])||void 0===i?void 0:i.id)||0}`,p=`${e}/${u}`,m={id:a,type:n.DataSourceTypes.FeatureLayer,url:p,layerId:u,sourceLabel:o||(null===(l=d[0])||void 0===l?void 0:l.name),geometryType:null===(c=d[0])||void 0===c?void 0:c.geometryType};return r&&(m.itemId=r),s&&(m.portalUrl=s),m}var S=i(34750),y=i.n(S);const v=t=>{const a=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:s,src:y()},r)):e.React.createElement("svg",Object.assign({className:s},r))};var x=i(20878),N=function(e,t,a,o){return new(a||(a=Promise))((function(r,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,i)}l((o=o.apply(e,t||[])).next())}))};const{useMemo:h,useState:f}=e.React,{useSelector:I}=e.ReactRedux,b=(0,e.Immutable)([e.SupportedItemTypes.FeatureService,e.SupportedItemTypes.MapService,e.SupportedItemTypes.SceneService,e.SupportedItemTypes.FeatureCollection,e.SupportedItemTypes.ImageService,e.SupportedItemTypes.VectorTileService,e.SupportedItemTypes.CSV,e.SupportedItemTypes.GeoJSON,e.SupportedItemTypes.KML,e.SupportedItemTypes.WFS,e.SupportedItemTypes.WMS,e.SupportedItemTypes.WMTS]),D=t=>{const{widgetId:a,multiDataOptions:o,portalUrl:r,nextOrder:s,onChange:n}=t,i=I((e=>e.dataSourcesInfo)),[l,c]=f([]),d=h((()=>(0,e.Immutable)(o.filter((t=>{var a;return t.dataSourceJson.itemId&&(null===(a=null==i?void 0:i[t.dataSourceJson.id])||void 0===a?void 0:a.instanceStatus)===e.DataSourceStatus.NotCreated})).map((e=>e.dataSourceJson.itemId)).concat(l))),[o,i,l]),u=h((()=>(0,e.Immutable)(o.map((e=>e.dataSourceJson.itemId)).filter((e=>!d.some((t=>t===e)))))),[o,d]);return(0,e.jsx)("div",{className:"data-item-search w-100 h-100",css:w},(0,e.jsx)(x.ItemSelector,{mode:x.ItemSelectorMode.Simple,itemType:b,portalUrl:r,isMultiple:!0,onSelect:(t,r)=>N(void 0,void 0,void 0,(function*(){c(l.concat(null==r?void 0:r.id));const t=yield function(t,a){var o,r,s,n;return N(this,void 0,void 0,(function*(){try{if(!a)return Promise.resolve(null);if(a.type===e.SupportedItemTypes.FeatureService&&e.dataSourceUtils.isSupportedWholeArcGISService(a.url)){const i=a.url.split("?")[0].replace(/^http:/,"https:").replace(/\/$/,""),l=yield e.ServiceManager.getInstance().fetchServiceInfo(i).then((e=>e.definition));if(1===((null==l?void 0:l.layers)||[]).concat((null==l?void 0:l.tables)||[]).length&&(1===(null===(o=null==l?void 0:l.layers)||void 0===o?void 0:o.length)&&(null===(s=null===(r=null==l?void 0:l.layers)||void 0===r?void 0:r[0])||void 0===s?void 0:s.type)===e.SupportedLayerServiceTypes.FeatureLayer||1===(null===(n=null==l?void 0:l.tables)||void 0===n?void 0:n.length)))return j(i,l,t,a.title,a.id,a.portalUrl)}return Promise.resolve(e.dataSourceUtils.getDsJsonFromItem(t,a,a.portalUrl).asMutable({deep:!0}))}catch(e){return console.error("Failed to create data source",e),Promise.resolve(null)}}))}(M(a,s),r);c(l.filter((e=>e!==(null==r?void 0:r.id)))),n(o.concat({dataSourceJson:t,order:s}).filter((e=>!!e.dataSourceJson)))})),onRemove:(e,t)=>{n(o.filter((e=>e.dataSourceJson.itemId!==t.id)))},selectedItems:u,loadingItems:d,disableDetailPopper:!0,allowAllSceneService:!0}))},w=e.css`
  position: relative;
`;var z,T=function(e,t,a,o){return new(a||(a=Promise))((function(r,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,i)}l((o=o.apply(e,t||[])).next())}))};!function(e){e.NotSupportedType="addDataErrorNotSupported",e.FailedToFetch="invalidResourceItem",e.CannotBeAdded="cannotBeAddedError"}(z||(z={}));const{useState:O,useMemo:L,useRef:A}=e.React;var U;!function(e){e.ArcGISWebService="arcgisUrl",e.WMS="wmsUrl",e.WMTS="wmtsUrl",e.WFS="wfsUrl",e.KML="kmlUrl",e.CSV="csvUrl",e.GeoJSON="geojsonUrl"}(U||(U={}));const k={[U.ArcGISWebService]:"https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",[U.WMS]:"https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?service=WMS&request=GetCapabilities",[U.WMTS]:"https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/45134/%7Blevel%7D/%7Brow%7D/%7Bcol%7D",[U.WFS]:"https://dservices.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/services/JapanPrefectures2018/WFSServer",[U.KML]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_animated.kml",[U.CSV]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",[U.GeoJSON]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"},E=["https"],C=a=>{const{widgetId:o,onChange:r,setErrorMsg:n,nextOrder:i,multiDataOptions:l}=a,c=t.hooks.useTranslate(e.defaultMessages,t.defaultMessages,s),[d,u]=O(U.ArcGISWebService),[p,m]=O({value:"",valid:!0}),[g,S]=O(!1),y=A(null),v=L((()=>{const e={};return Object.values(U).forEach((t=>{e[t]=c(t)})),e}),[c]),x=e=>{e.target.value!==d&&(u(e.target.value),m({value:"",valid:p.valid}))},N=t=>{const a=function(t,a){return!t||!a||(a!==U.ArcGISWebService?/^https:\/\//.test(t):e.dataSourceUtils.isSupportedArcGISService(t)||V(t))}(t,d);return{valid:a,msg:!a&&c("invalidUrlMessage")}};return(0,e.jsx)("div",{className:"data-url-input w-100 h-100 p-3",css:P},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"url-input-label"},c("urlType")),(0,e.jsx)(t.Dropdown,{className:"w-100"},(0,e.jsx)(t.DropdownButton,{size:"sm",className:"text-left"},v[d]),(0,e.jsx)(t.DropdownMenu,null,Object.keys(v).map(((a,o)=>(0,e.jsx)(t.DropdownItem,{key:o,value:a,onClick:x},v[a])))))),(0,e.jsx)("div",{className:"mt-3"},(0,e.jsx)("div",{className:"url-input-label"},c("url")),(0,e.jsx)(t.UrlInput,{className:(0,e.classNames)({"with-error":!p.valid}),height:80,schemes:E,value:p.value,checkValidityOnChange:N,checkValidityOnAccept:N,onChange:e=>{m(e)}})),(0,e.jsx)("div",{className:"mt-3"},(0,e.jsx)(t.Button,{onClick:()=>T(void 0,void 0,void 0,(function*(){var t;const a=null==p?void 0:p.value;if(a)try{S(!0);const t=yield function(t,a,o){return T(this,void 0,void 0,(function*(){return a&&o?(a=a.replace(/^http:/,"https:"),Object.keys(F).some((e=>e===o))?{id:t,type:F[o],sourceLabel:a.split("?")[0].split("/").filter((e=>!!e)).reverse()[0],url:a}:o===U.ArcGISWebService?V(a=a.split("?")[0])?function(t,a){return T(this,void 0,void 0,(function*(){if(!t||!a)return Promise.reject(z.NotSupportedType);const o=t.match(/(?<portalUrl>.+)content\/items\/.+\/resources\/styles\/root.json/).groups.portalUrl,r=t.match(/.+\/content\/items\/(?<itemId>.+)\/resources\/styles\/root.json/).groups.itemId,s=yield e.requestUtils.requestWrapper(o,(t=>e.esri.restPortal.getItem(r,{portal:o,authentication:t})));return"Vector Tile Service"!==s.type?Promise.reject(z.NotSupportedType):{id:a,type:e.DataSourceTypes.VectorTileService,sourceLabel:s.title,url:t,itemId:r,portalUrl:o.replace("/sharing/rest/","")}}))}(a,t):function(t,a){var o,r,s,n;return T(this,void 0,void 0,(function*(){if(!t||!a)return Promise.reject(z.NotSupportedType);const i=yield e.ServiceManager.getInstance().fetchServiceInfo(t).then((e=>e.definition));return e.dataSourceUtils.isSupportedWholeArcGISService(t)&&e.dataSourceUtils.getDsTypeFromArcGISWholeServiceUrl(t)===e.DataSourceTypes.FeatureService&&1===((null==i?void 0:i.layers)||[]).concat((null==i?void 0:i.tables)||[]).length&&(1===(null===(o=null==i?void 0:i.layers)||void 0===o?void 0:o.length)&&(null===(s=null===(r=null==i?void 0:i.layers)||void 0===r?void 0:r[0])||void 0===s?void 0:s.type)===e.SupportedLayerServiceTypes.FeatureLayer||1===(null===(n=null==i?void 0:i.tables)||void 0===n?void 0:n.length))?j(t.split("?")[0].replace(/^http:/,"https:").replace(/\/$/,""),i,a):function(t,a,o){let r;if((a||o.type!==e.SupportedLayerServiceTypes.GroupLayer)&&(a||o.type!==e.SupportedLayerServiceTypes.FeatureLayer&&o.type!==e.SupportedLayerServiceTypes.Table)?e.dataSourceUtils.isSupportedSingleArcGISLayerService(a)?r=e.dataSourceUtils.getSingleDsJsonFromLayerDefinition(t,a,o).asMutable({deep:!0}):e.dataSourceUtils.isSupportedWholeArcGISService(a)&&(r=e.dataSourceUtils.getSingleDsJsonFromWholeServiceDefinition(t,a,o).asMutable({deep:!0})):r=e.dataSourceUtils.getSingleDsJsonFromLayerDefinition(t,a,o).asMutable({deep:!0}),r)return r;throw new Error(z.FailedToFetch)}(a,t,i)}))}(a,t):Promise.reject(z.NotSupportedType)):Promise.reject("Need URL.")}))}(M(o,i),a,d);if(y.current=t,t.type===e.DataSourceTypes.GroupLayer)throw new Error(z.CannotBeAdded);t&&r(l.concat({dataSourceJson:t,order:i}))}catch(e){e.message===z.NotSupportedType?n(c(z.NotSupportedType)):e.message===z.CannotBeAdded?n(c(z.CannotBeAdded,{layerName:null===(t=y.current)||void 0===t?void 0:t.sourceLabel})):n(c(z.FailedToFetch))}finally{y.current=null,S(!1)}})),type:"primary",disabled:!p.value||!p.valid,className:"px-3 w-100",title:c("add"),"aria-label":c("add")},c("add"))),(0,e.jsx)("div",{className:"mt-3"},(0,e.jsx)("div",{className:"url-input-label mb-1"},c("sampleUrl")),(0,e.jsx)("div",{className:"sample-url"},k[d])),g&&(0,e.jsx)("div",{className:"upload-loading-container"},(0,e.jsx)("div",{className:"upload-loading-content"},(0,e.jsx)(t.Loading,{className:"upload-loading",type:t.LoadingType.Primary,width:30,height:28}))))};function V(e){return!(!e||!/^https:\/\//.test(e))&&/\/content\/items\/.+\/resources\/styles\/root.json/.test(e)}const F={[U.CSV]:e.DataSourceTypes.CSV,[U.GeoJSON]:e.DataSourceTypes.GeoJSON,[U.KML]:e.DataSourceTypes.KML,[U.WFS]:e.DataSourceTypes.WFS,[U.WMS]:e.DataSourceTypes.WMS,[U.WMTS]:e.DataSourceTypes.WMTS},P=e.css`
  position: relative;
  overflow: auto;

  .upload-loading-container {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .upload-loading-content {
    position: absolute;
    top: 0;
    bottom: 60px;
    right: 0;
    left: 0;
  }
  .upload-loading {
    .donut-loading {
      background-color: var(--white);
    }
  }

  .sample-url {
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
    word-break: break-all;
  }

  .url-input.with-error {
    margin-bottom: 60px;
  }
  .url-input-label {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--dark-800);
  }
`;var J,R=function(e,t,a,o){return new(a||(a=Promise))((function(r,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,i)}l((o=o.apply(e,t||[])).next())}))};!function(e){e.CSV="csv",e.GeoJson="geojson",e.Shapefile="shapefile"}(J||(J={}));const W={[J.CSV]:10485760,[J.GeoJson]:10485760,[J.Shapefile]:2097152};var Y;!function(e){e.NotSupportedType="notSupportedFileTypeError",e.FailedToUpload="failedToUploadError",e.ExceedMaxSize="exceedMaxSizeError",e.ExceedMaxRecords="exceedMaxRecordsError"}(Y||(Y={}));const{useState:B,useEffect:G,useMemo:Z,useRef:Q}=e.React,H=Object.values(J).map((e=>q(e))).join(","),$=a=>{var o,r;const{onChange:n,setErrorMsg:l,nextOrder:c,portalUrl:d,widgetId:u,multiDataOptions:p}=a,g=t.hooks.useTranslate(e.defaultMessages,s),j=Z((()=>`${u}-drag-to-upload`),[u]),S=Z((()=>`${u}-click-to-upload`),[u]),[y,x]=B(!1),N=Q(null),h=Q([]);G((()=>{n(p)}),[p,n]);const f=t=>R(void 0,void 0,void 0,(function*(){var a,o,r,s,i,m,j;if(t.target.files)try{x(!0);const o=function(t){const a=function(e){return Object.values(J).find((t=>null==e?void 0:e.endsWith(q(t))))}(t.name),o=t.name.replace(`.${a}`,""),r=new FormData;return r.set("file",t),r.set("filetype",a),r.set("f","json"),{id:(0,e.uuidv1)(),type:a,name:o,data:r,size:t.size}}(t.target.files[0]);if(N.current=o,!o.type)throw new Error(Y.NotSupportedType);if(o.size>W[o.type])throw new Error(Y.ExceedMaxSize);const r=yield function(t,a){var o,r,s,n;return R(this,void 0,void 0,(function*(){const i=yield(0,e.loadArcGISJSAPIModule)("esri/request"),l=`${a}/sharing/rest/content/features/analyze`;t.data.set("analyzeParameters",JSON.stringify({enableGlobalGeocoding:!0,sourceLocale:null!==(r=null===(o=(0,e.getAppStore)().getState().appContext)||void 0===o?void 0:o.locale)&&void 0!==r?r:"en"}));const c=yield i(l,{body:t.data,method:"post"});t.data.delete("analyzeParameters");const d=null===(s=null==c?void 0:c.data)||void 0===s?void 0:s.publishParameters,u=`${a}/sharing/rest/content/features/generate`;t.data.set("publishParameters",JSON.stringify(Object.assign(Object.assign({},d),{name:t.name})));const p=yield i(u,{body:t.data,method:"post"});return t.data.delete("publishParameters"),null===(n=null==p?void 0:p.data)||void 0===n?void 0:n.featureCollection}))}(o,d);if(h.current.some((e=>e.id===o.id)))return void(h.current=h.current.filter((e=>e.id!==o.id)));(null===(a=null==r?void 0:r.layers)||void 0===a?void 0:a.length)>0&&n(p.concat(r.layers.map(((t,a)=>{var r;return{dataSourceJson:{id:M(u,c+a),type:e.DataSourceTypes.FeatureLayer,sourceLabel:(null===(r=t.layerDefinition)||void 0===r?void 0:r.name)||(0===a?o.name:`${o.name} ${a}`)},order:c+a,restLayer:t}}))))}catch(e){e.message===Y.NotSupportedType?l(g(Y.NotSupportedType,{fileName:null===(o=N.current)||void 0===o?void 0:o.name})):e.message===Y.ExceedMaxSize||(null===(i=null===(s=null===(r=e.details)||void 0===r?void 0:r.messages)||void 0===s?void 0:s[0])||void 0===i?void 0:i.includes("max size"))?l(g(Y.ExceedMaxSize)):e.message===Y.ExceedMaxRecords||(null===(m=e.message)||void 0===m?void 0:m.includes("maximum number"))?l(g(Y.ExceedMaxRecords)):l(g(Y.FailedToUpload,{fileName:null===(j=N.current)||void 0===j?void 0:j.name}))}finally{x(!1),N.current=null,t.target.value=null}}));return(0,e.jsx)("div",{className:"data-file-upload w-100 h-100 pb-3 pt-5 px-3",css:_},(0,e.jsx)("div",{className:"supported-type-icons d-flex justify-content-around align-items-center px-5 mb-3"},(0,e.jsx)(t.Icon,{width:25,height:31,icon:i(44429)}),(0,e.jsx)(t.Icon,{width:42,height:42,icon:i(76740)}),(0,e.jsx)(t.Icon,{width:25,height:31,icon:i(93119)})),(0,e.jsx)("div",{className:"supported-types"},g("supportedTypesHint")),(0,e.jsx)("div",{className:"mt-3 drag-area-container"},(0,e.jsx)(t.Label,{for:j,className:"drag-area text-center"},(0,e.jsx)("div",{className:"font-14"},g("dropOrBrowseToUpload")),(0,e.jsx)("div",{className:"upload-btn-container w-75",title:g("upload")},(0,e.jsx)(t.Label,{for:S,className:"upload-btn text-center mt-3 mb-0 text-truncate"},(0,e.jsx)(v,{size:15,className:"mr-2"}),(0,e.jsx)("span",null,g("upload"))),(0,e.jsx)(t.Input,{id:S,title:"",className:"upload-btn-file-input",type:"file",accept:H,onChange:f}))),(0,e.jsx)(t.Input,{id:j,onClick:m,title:"",className:"drag-area-file-input",type:"file",accept:H,onChange:f})),y&&(0,e.jsx)("div",{className:"upload-loading-container",title:g("fileIsUploading",{fileName:null===(o=N.current)||void 0===o?void 0:o.name})},(0,e.jsx)("div",{className:"upload-loading-content"},(0,e.jsx)(t.Loading,{className:"upload-loading",type:t.LoadingType.Primary,width:30,height:28}),(0,e.jsx)("div",{className:"upload-loading-file-name d-flex justify-content-center align-items-center"},(0,e.jsx)("div",{className:"w-100 font-14 text-center"},g("fileIsUploading",{fileName:(0,e.jsx)("div",{className:"w-100 multiple-lines-truncate font-16"},null===(r=N.current)||void 0===r?void 0:r.name)}))),(0,e.jsx)("div",{className:"upload-loading-btn d-flex justify-content-center"},(0,e.jsx)(t.Button,{type:"danger",onClick:()=>{h.current.push(N.current),N.current=null,x(!1)}},g("cancel"))))))};function q(e){return"shapefile"===e?".zip":`.${e}`}const _=e.css`
  position: relative;
  color: var(--dark-500);

  .font-14 {
    font-size: 14px;
  }

  .font-16 {
    font-size: 16px;
    font-weight: 500;
  }

  .upload-loading-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--white);
    z-index: 2;
  }
  .upload-loading-content {
    position: absolute;
    top: 0;
    bottom: 60px;
    right: 0;
    left: 0;
  }
  .upload-loading-file-name {
    position: absolute;
    width: 200px;
    height: 100px;
    right: calc(50% - 100px);
    top: 80px;
    word-break: break-all;
    overflow: hidden;
  }
  .upload-loading-btn {
    position: absolute;
    width: 200px;
    height: 32px;
    right: calc(50% - 100px);
    top: calc(50% + 80px);
    button.btn-danger {
      background-color: var(--danger-500);
      border: 0;
    }
  }

  .supported-types {
    font-size: 13px;
  }

  .drag-area-container {
    width: 100%;
    height: 280px;
  }
  .drag-area {
    border: 1px dashed var(--light-400);
    padding-top: 50%;
    width: 100%;
    height: 100%;
    user-select: none;
  }
  .upload-btn {
    border: 1px solid var(--light-400);
    color: var(--dark-800);
    background-color: var(--white);
    border-radius: 2px;
    line-height: 28px;
    padding-left: 16px;
    padding-right: 16px;
    height: 30px;
    user-select: none;
    max-width: 100%;
  }
  .upload-btn-container:hover {
    .upload-btn {
      background-color: var(--light-200) !important;
    }
  }
  .drag-area-container, .upload-btn-container {
    position: relative;
    display: inline-block;
    z-index: 1;
  }
  .upload-btn-file-input, .drag-area-file-input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  .upload-btn-file-input {
    cursor: pointer;
  }
`;var X=i(59788),K=i.n(X);const ee=t=>{const a=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:s,src:K()},r)):e.React.createElement("svg",Object.assign({className:s},r))};var te=i(96009),ae=i.n(te);const oe=t=>{const a=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:s,src:ae()},r)):e.React.createElement("svg",Object.assign({className:s},r))};var re=i(55339),se=i.n(re);const ne=t=>{const a=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:s,src:se()},r)):e.React.createElement("svg",Object.assign({className:s},r))},{useState:ie,useEffect:le}=e.React,{useSelector:ce}=e.ReactRedux,de=a=>{const{multiDataOptions:o,widgetId:r,onFinish:s,onRemove:n,setErrorMsg:i}=a,l=t.hooks.useTranslate(t.defaultMessages),[c,d]=ie(!1),[m,M]=ie(!1),j=g(o);le((()=>{p(((null==j?void 0:j.filter((e=>!o.some((t=>t.dataSourceJson.id===e.dataSourceJson.id)))))||[]).map((e=>e.dataSourceJson.id)),r,!1),M(!0),u(o.filter((e=>!(null==j?void 0:j.some((t=>e.dataSourceJson.id===t.dataSourceJson.id))))),r,!1).catch((e=>{i(l("dataSourceCreateError"))})).finally((()=>{M(!1)}))}),[r,o,j,i,l]);const S=()=>{s(o)};return(0,e.jsx)("div",{className:"data-collapse",css:pe},o.length>0&&(0,e.jsx)("div",{className:"data-container surface-2 p-3"},(0,e.jsx)("div",{className:"d-flex justify-content-between align-items-center"},(0,e.jsx)("div",{className:"d-flex align-items-center n-selected"},(0,e.jsx)("span",{className:"mr-2"},o.length),(0,e.jsx)("span",{className:"text-truncate",title:l("selected")},l("selected")),(0,e.jsx)(t.Button,{type:"tertiary",size:"sm",icon:!0,onClick:()=>{d(!c)},title:l(c?"down":"up")},c?(0,e.jsx)(ee,{size:"s"}):(0,e.jsx)(oe,{size:"s"}))),(0,e.jsx)("div",{className:"small-done-btn"},!c&&(0,e.jsx)(t.Button,{onClick:S,disabled:m,type:"primary",className:"text-truncate w-100 px-2",title:l("done")},l("done")))),c&&(0,e.jsx)("div",{className:"data-items"},o.map(((t,a)=>(0,e.jsx)(ue,{key:a,isLoading:m,onRemove:n,dsJson:(0,e.Immutable)(t.dataSourceJson)})))),c&&(0,e.jsx)("div",{className:"big-done-btn w-100"},(0,e.jsx)(t.Button,{onClick:S,disabled:m,type:"primary",className:"text-truncate w-100",title:l("done"),"aria-label":l("done")},l("done")))))};function ue({dsJson:a,isLoading:o,onRemove:r}){const s=t.hooks.useTranslate(t.defaultMessages),n=e.i18n.getIntl(),i=d(a.id),l=ce((e=>{var t;return null===(t=e.dataSourcesInfo)||void 0===t?void 0:t[a.id]})),c=l?l.instanceStatus===e.DataSourceStatus.CreateError:!i&&!o,u=l?l.instanceStatus===e.DataSourceStatus.NotCreated:!i&&o;return(0,e.jsx)("div",{className:"d-flex align-items-center justify-content-between w-100 data-item"},(0,e.jsx)("div",{className:"d-flex align-items-center flex-grow-1 text-truncate",title:e.dataSourceUtils.getDsTypeString(null==a?void 0:a.type,n)},c&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-error"},(0,e.jsx)(t.Alert,{className:"flex-shrink-0",css:e.css`padding-left: 0 !important; padding-right: 0 !important;`,buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:s("dataSourceCreateError")})),u&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-loading"},(0,e.jsx)(t.Loading,{type:t.LoadingType.Donut,width:16,height:16})),!c&&!u&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-thumbnail"},(0,e.jsx)(t.Icon,{icon:e.dataSourceUtils.getDsIcon(a),color:"#FFFFFF",size:"12"})),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate pl-2 data-label",title:a.label||a.sourceLabel},a.label||a.sourceLabel)),(0,e.jsx)("div",{className:"d-flex align-items-center flex-shrink-0"},(0,e.jsx)(t.Button,{type:"tertiary",size:"sm",icon:!0,onClick:()=>r(a.id),title:s("remove"),"aria-label":s("remove")},(0,e.jsx)(ne,{size:14,color:"var(--dark-800)"}))))}const pe=e.css`
  .data-container {
    background-color: var(--white);
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.16) !important;
    border: 0 !important;
    z-index: 10;
    .n-selected {
      font-size: 14px;
      max-width: 130px;
    }
    .data-items {
      max-height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
      .data-thumbnail {
        width:  26px;
        height:  26px;
        background-color: #0095DB;
      }
      .data-loading, .data-error {
        position: relative;
        width: 24px;
        height: 24px;
        border: 1px solid #0095DB;
      }
      .data-label {
        font-size: 13px;
        color: var(--dark-800);
      }
      .data-item {
        height: 26px;
        margin-bottom: 12px;
      }
    }
    .small-done-btn {
      max-width: 90px;
    }
  }
`;var me=i(51315);const{useState:ge,useMemo:Me,useRef:je}=e.React,Se=["search","url","file"],ye=a=>{const{portalUrl:o,widgetId:r,buttonSize:n,hiddenTabs:i,popperReference:l,nextOrder:c,onFinish:d}=a,[u,p]=ge(!1),[m,g]=ge(null),[M,j]=ge([]),[S,y]=ge([]),[x,N]=ge([]),h=Me((()=>M.concat(S).concat(x).sort(((e,t)=>e.order-t.order))),[M,S,x]),f=Me((()=>h.length>0?Math.max(...h.map((e=>e.order)))+1:c),[h,c]),I=Me((()=>Se.filter((e=>!(null==i?void 0:i.some((t=>e===t)))))),[i]),b=t.hooks.useTranslate(t.defaultMessages,e.defaultMessages,s),D=je(null),w=t.hooks.useCheckSmallBrowserSzieMode();(0,me.useEffect)((()=>{m&&!D.current&&(D.current=setTimeout((()=>{g(null),D.current=null}),5e3))}),[m]);const z=e=>{M.some((t=>t.dataSourceJson.id===e))&&j(M.filter((t=>t.dataSourceJson.id!==e))),S.some((t=>t.dataSourceJson.id===e))&&y(S.filter((t=>t.dataSourceJson.id!==e))),x.some((t=>t.dataSourceJson.id===e))&&N(x.filter((t=>t.dataSourceJson.id!==e)))},T=e=>{d(e),O()},O=()=>{const e=!u;p(e),e||(j([]),y([]),N([]))},L=()=>(0,e.jsx)(xe,{mobile:w,errorMsg:m,translate:b,tabs:I,togglePopper:O,onFinish:T,onRemove:z,portalUrl:o,widgetId:r,nextOrder:f,multiDataOptions:h,multiDataOptionsFromSearch:M,multiDataOptionsFromUrl:S,multiDataOptionsFromFile:x,setErrorMsg:g,setMultiDataOptionsFromSearch:j,setMultiDataOptionsFromUrl:y,setMultiDataOptionsFromFile:N});return(0,e.jsx)("div",{className:"add-data-popper",css:Ne},"lg"===n&&(0,e.jsx)(t.Button,{type:"primary",className:"flex-grow-1 text-center",onClick:O,"aria-label":b("addData")},(0,e.jsx)("div",{className:"w-100 px-2 d-flex align-items-center justify-content-center"},(0,e.jsx)(v,{size:"m"}),(0,e.jsx)("div",{className:"text-truncate",title:b("clickToAddData")},b("clickToAddData")))),"sm"===n&&(0,e.jsx)(t.Button,{type:"primary",className:"d-flex justify-content-center align-items-center small-add-btn",onClick:O,"aria-label":b("addData")},(0,e.jsx)(v,{size:"m",className:"m-0"})),w?(0,e.jsx)(t.MobilePanel,{open:u,toggle:O,title:b("addData")},L()):(0,e.jsx)(t.Popper,{open:u,toggle:O,reference:l,placement:"right-start"},L()))},ve=({tab:t,portalUrl:a,widgetId:o,nextOrder:r,multiDataOptionsFromSearch:s,multiDataOptionsFromUrl:n,multiDataOptionsFromFile:i,setMultiDataOptionsFromSearch:l,setMultiDataOptionsFromUrl:c,setMultiDataOptionsFromFile:d,setErrorMsg:u})=>"search"===t?(0,e.jsx)(D,{portalUrl:a,widgetId:o,onChange:l,nextOrder:r,multiDataOptions:s}):"url"===t?(0,e.jsx)(C,{widgetId:o,onChange:c,nextOrder:r,multiDataOptions:n,setErrorMsg:u}):"file"===t?(0,e.jsx)($,{portalUrl:a,widgetId:o,nextOrder:r,onChange:d,multiDataOptions:i,setErrorMsg:u}):void 0,xe=({mobile:a,errorMsg:o,translate:r,tabs:s,togglePopper:n,onFinish:i,onRemove:l,portalUrl:c,widgetId:d,nextOrder:u,multiDataOptions:p,multiDataOptionsFromSearch:m,multiDataOptionsFromUrl:g,multiDataOptionsFromFile:M,setMultiDataOptionsFromSearch:j,setMultiDataOptionsFromUrl:S,setMultiDataOptionsFromFile:y,setErrorMsg:v})=>(0,e.jsx)("div",{css:e.css`
    width: ${a?"100%":"240px"};
    height: ${a?"100%":"600px"};
    .add-data-popper-content {
      position: relative;
      height: ${a?"100%":"calc(100% - 56px)"};
    }
    .tab-content {
      overflow: hidden;
    }
    .jimu-nav {
      border-bottom: 1px solid var(--light-400);
    }
    .multiple-lines-truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-word;
      word-wrap: break-word;
    }
    .item-selector-search {
      .text-input-prefix {
        svg {
          margin-left: 0 !important;
          color: var(--light-800) !important;
        }
      }
    }
  `},!a&&(0,e.jsx)(t.PanelHeader,{title:r("addData"),showClose:!0,onClose:n,level:1,className:"p-3"}),(0,e.jsx)("div",{className:"add-data-popper-content"},s.length>1&&(0,e.jsx)(t.Tabs,{type:"underline",className:"w-100 h-100",fill:!0,defaultValue:s[0]},s.map(((a,o)=>(0,e.jsx)(t.Tab,{key:o,id:a,title:r(a)},(0,e.jsx)(ve,{tab:a,portalUrl:c,widgetId:d,nextOrder:u,setErrorMsg:v,multiDataOptionsFromSearch:m,multiDataOptionsFromUrl:g,multiDataOptionsFromFile:M,setMultiDataOptionsFromSearch:j,setMultiDataOptionsFromUrl:S,setMultiDataOptionsFromFile:y}))))),1===s.length&&(0,e.jsx)("div",{className:"w-100 h-100"},(0,e.jsx)(ve,{tab:s[0],portalUrl:c,widgetId:d,nextOrder:u,setErrorMsg:v,multiDataOptionsFromSearch:m,multiDataOptionsFromUrl:g,multiDataOptionsFromFile:M,setMultiDataOptionsFromSearch:j,setMultiDataOptionsFromUrl:S,setMultiDataOptionsFromFile:y})),o&&(0,e.jsx)(t.Alert,{className:"w-100",css:e.css`position: absolute; top: ${1===s.length?0:"33px"}; left: 0; right: 0; z-index: 1;`,closable:!0,form:"basic",onClose:()=>v(null),open:!0,text:o,type:"warning",withIcon:!0})),(0,e.jsx)(de,{multiDataOptions:p,widgetId:d,onFinish:i,onRemove:l,setErrorMsg:v})),Ne=e.css`
  .small-add-btn {
    border-radius: 16px;
    width: 32px;
    height: 32px;
    padding: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;var he=i(54357),fe=i.n(he);const Ie=t=>{const a=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:s,src:fe()},r)):e.React.createElement("svg",Object.assign({className:s},r))};var be=i(59216),De=i.n(be);const we=t=>{const a=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return a?e.React.createElement(a,Object.assign({className:s,src:De()},r)):e.React.createElement("svg",Object.assign({className:s},r))},{useLayoutEffect:ze,useState:Te,useRef:Oe}=e.React,{useSelector:Le}=e.ReactRedux,Ae=a=>{const{multiDataOptions:o,enableDataAction:r,isLoading:s,onRemoveData:n,onChangeData:i,widgetId:l}=a,c=t.hooks.useTranslate(t.defaultMessages,e.defaultMessages),[u,p]=Te(null),m=Oe(null),M=Le((e=>e.dataSourcesInfo)),j=g(m),S=e.i18n.getIntl();ze((()=>{u&&m.current&&(null==j?void 0:j.current)!==m.current&&(m.current.focus(),m.current.select())}),[m,j,u]);const y=e=>{p((null==u?void 0:u.dataSourceJson.id)===(null==e?void 0:e.dataSourceJson.id)?null:e)};return(0,e.jsx)("div",{className:"data-list",css:Ue},o.map(((a,o)=>{var p;const g=d(a.dataSourceJson.id),j=null==M?void 0:M[a.dataSourceJson.id],v=j?j.instanceStatus===e.DataSourceStatus.CreateError:!g&&!s,x=j?j.instanceStatus===e.DataSourceStatus.NotCreated:!g&&s,N=(null==u?void 0:u.dataSourceJson.id)===a.dataSourceJson.id,h=a.dataSourceJson.label||a.dataSourceJson.sourceLabel,f=r&&g;return(0,e.jsx)("div",{key:a.dataSourceJson.id,className:(0,e.classNames)("d-flex justify-content-between align-items-center data-item",{"pt-12":0!==o})},(0,e.jsx)("div",{className:"flex-grow-1 text-truncate d-flex justify-content-start align-items-center"},x&&(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-center align-items-center mr-1 data-item-loading"},(0,e.jsx)(t.Loading,{type:t.LoadingType.Donut,width:16,height:16})),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate d-flex align-items-center",title:e.dataSourceUtils.getDsTypeString(null===(p=a.dataSourceJson)||void 0===p?void 0:p.type,S)},!x&&(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-center align-items-center data-thumbnail"},(0,e.jsx)(t.Icon,{icon:e.dataSourceUtils.getDsIcon((0,e.Immutable)(a.dataSourceJson)),color:"#FFFFFF",size:"12"})),v&&(0,e.jsx)(t.Alert,{className:"flex-shrink-0",css:e.css`padding-left: 0 !important; padding-right: 0 !important;`,buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:c("dataSourceCreateError")}),(0,e.jsx)("div",{className:(0,e.classNames)("flex-grow-1 text-truncate data-label",{"pl-2":!v}),title:u?"":h},N?(0,e.jsx)(t.TextInput,{className:"w-100",size:"sm",defaultValue:h,onAcceptValue:e=>((e,t)=>{y(e),i(Object.assign(Object.assign({},e),{dataSourceJson:Object.assign(Object.assign({},e.dataSourceJson),{label:t})}))})(a,e),ref:m}):h))),(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-end align-items-center data-item-operations"},!x&&!v&&(0,e.jsx)(t.Button,{type:"tertiary",size:"sm",icon:!0,onClick:()=>y(a),title:c("rename")},(0,e.jsx)(we,{size:"m"})),f&&(0,e.jsx)(t.DataActionDropDown,{widgetId:l,dataSet:{dataSource:g,records:[],name:g.getDataSourceJson().label||g.getDataSourceJson().sourceLabel},size:"sm",type:"tertiary"}),(0,e.jsx)(t.Button,{type:"tertiary",size:"sm",icon:!0,onClick:()=>n(a.dataSourceJson.id),title:c("remove")},(0,e.jsx)(Ie,{size:"m"}))))})))},Ue=e.css`
  max-height: calc(100% - 35px);
  overflow: auto;

  .pt-12 {
    padding-top: 12px;
  }

  .data-item {
    width: 100%;
    overflow: hidden;
  }
  .data-item-loading {
    position: relative;
    width: 24px;
    height: 24px;
    border: 1px solid #0095DB;
  }
  .data-thumbnail {
    width:  26px;
    height:  26px;
    background-color: #0095DB;
  }
  .data-label {
    font-size: 13px;
    color: var(--dark-800);
  }
`;class ke{constructor(t){this.db=null,this.closed=!1,this.dbName=function(t){var a,o;return`exb-${(null===(a=window.jimuConfig)||void 0===a?void 0:a.isBuilder)?null===(o=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.appId:(0,e.getAppStore)().getState().appId}-add-data-${t}-cache`}(t),this.storeName="added-data"}init(){return indexedDB?Promise.resolve().then((()=>{const e=indexedDB.open(this.dbName);return e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(this.storeName)||t.createObjectStore(this.storeName)},Ee(e)})).then((e=>{this.closed?e.close():this.db=e})):Promise.reject()}initialized(){return null!=this.db}close(){this.db&&(this.db.close(),this.db=null),this.closed=!0}put(e,t){return null==this.db?Promise.reject("indexedb:not-initialized"):Ee(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(t,e)).then()}putAll(e){if(null==this.db)return Promise.reject("indexedb:not-initialized");const t=this.db.transaction([this.storeName],"readwrite");return e.forEach((e=>{t.objectStore(this.storeName).put(e.value,e.key)})),Ce(t)}get(e){return null==this.db?Promise.reject("indexedb:not-initialized"):Ee(this.db.transaction([this.storeName],"readonly").objectStore(this.storeName).get(e))}getAll(){return null==this.db?Promise.reject("indexedb:not-initialized"):Ee(this.db.transaction([this.storeName],"readonly").objectStore(this.storeName).getAll())}delete(e){return null==this.db?Promise.reject("indexedb:not-initialized"):Ee(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(e))}deleteAll(e){if(null==this.db)return Promise.reject("indexedb:not-initialized");const t=this.db.transaction([this.storeName],"readwrite");return e.forEach((e=>{t.objectStore(this.storeName).delete(e)})),Ce(t)}clear(){return null==this.db?Promise.reject("indexedb:not-initialized"):Ee(this.db.transaction([this.storeName],"readwrite").objectStore(this.storeName).clear())}destroy(){this.db&&this.db.deleteObjectStore(this.storeName),this.close()}}function Ee(e){return new Promise(((t,a)=>{"done"===e.readyState?null!=e.error?a(e.error):t(e.result):(e.onsuccess=()=>t(e.result),e.onerror=()=>a(e.error))}))}function Ce(e){return new Promise(((t,a)=>{e.oncomplete=()=>t(),e.onerror=()=>a(e.error),e.onabort=()=>a(e.error)}))}const{useState:Ve,useEffect:Fe,useMemo:Pe,useRef:Je,useCallback:Re}=e.React,{useTranslate:We}=t.hooks,Ye=!window.jimuConfig.isInBuilder,Be=a=>{const{portalUrl:o,id:n,enableDataAction:i=!0,config:l,mutableStateProps:m}=a,g=Pe((()=>(null==m?void 0:m.multiDataOptions)||[]),[null==m?void 0:m.multiDataOptions]),M=Re((t=>{e.MutableStoreManager.getInstance().updateStateValue(n,"multiDataOptions",t)}),[n]),j=We(t.defaultMessages,s),[S,y]=Ve(!1),v=Pe((()=>{const e=[];return l.disableAddBySearch&&e.push("search"),l.disableAddByUrl&&e.push("url"),l.disableAddByFile&&e.push("file"),e}),[l.disableAddBySearch,l.disableAddByUrl,l.disableAddByFile]),x=Pe((()=>g.length>0?Math.max(...g.map((e=>e.order)))+1:0),[g]),N=e.React.useRef(null),h=Je(null);Fe((()=>(h.current=new ke(n),Ye&&h.current.init().then((()=>{return e=void 0,t=void 0,o=function*(){const e=yield h.current.getAll();e.length>0&&(y(!0),u(e,n).catch((e=>{console.error("Failed to create data source",e)})).finally((()=>{y(!1)})),M(e.sort(((e,t)=>e.order-t.order))))},new((a=void 0)||(a=Promise))((function(r,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,i)}l((o=o.apply(e,t||[])).next())}));var e,t,a,o})).catch((e=>{console.error("Failed to read cache.",e)})),()=>{h.current.close()})),[n,M]);const f=e=>{h.current.initialized()&&h.current.putAll(e.map((e=>({key:e.dataSourceJson.id,value:e})))),y(!0),u(e,n).catch((e=>{console.error("Failed to create data source",e)})).finally((()=>{y(!1)})),M(g.concat(e))};return(0,e.jsx)("div",{className:"widget-add-data jimu-widget d-flex align-items-center justify-content-center surface-1",css:Ge,ref:N},0===g.length&&(0,e.jsx)("div",{className:"no-data-placeholder w-100"},(0,e.jsx)("div",{className:"no-data-placeholder-icon"},(0,e.jsx)(r,{size:32,color:"var(--dark-500)"})),(0,e.jsx)("div",{className:"no-data-placeholder-text"},(0,e.jsx)("span",null,l.placeholderText||j("defaultPlaceholderText"))),(0,e.jsx)("div",{className:"no-data-placeholder-btn"},(0,e.jsx)(ye,{buttonSize:"lg",portalUrl:o,widgetId:n,onFinish:f,hiddenTabs:v,popperReference:N,nextOrder:x}))),g.length>0&&(0,e.jsx)("div",{className:"w-100 h-100 p-3"},(0,e.jsx)(Ae,{multiDataOptions:g,enableDataAction:i,isLoading:S,widgetId:n,onRemoveData:e=>{h.current.initialized()&&h.current.deleteAll([e]),p([e],n).catch((e=>{console.error("Failed to remove data source",e)})),M(g.filter((t=>t.dataSourceJson.id!==e)))},onChangeData:t=>{h.current.initialized()&&h.current.put(t.dataSourceJson.id,t),y(!0),function(t,a){return c(this,void 0,void 0,(function*(){return t&&0!==t.length?Promise.resolve().then((()=>{t.forEach((t=>{const a=d(t.dataSourceJson.id);a&&e.DataSourceManager.getInstance().updateDataSourceByDataSourceJson(a,(0,e.Immutable)(t.dataSourceJson))}))})):Promise.resolve()}))}([t]).catch((e=>{console.error("Failed to update data source",e)})).finally((()=>{y(!1)})),M(g.map((e=>e.dataSourceJson.id===t.dataSourceJson.id?t:e)))}}),(0,e.jsx)("div",{className:"w-100 d-flex justify-content-end add-by-search-samll"},(0,e.jsx)(ye,{buttonSize:"sm",portalUrl:o,widgetId:n,onFinish:f,hiddenTabs:v,popperReference:N,nextOrder:x}))))},Ge=e.css`
  background-color: var(--white);
  position: relative;

  .add-by-search-samll {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .no-data-placeholder {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .no-data-placeholder-text, .no-data-placeholder-icon, .no-data-placeholder-btn{
      display: table;
      margin: 0 auto;
    }
    .no-data-placeholder-text {
      color: var(--dark-500);
      font-size: 13px;
      margin-top: 16px;
      text-align: center;
    }
    .no-data-placeholder-icon {
      color: var(--dark-800);
    }
    .no-data-placeholder-btn {
      margin-top: 16px;
    }
  }
`})(),l})())}}}));