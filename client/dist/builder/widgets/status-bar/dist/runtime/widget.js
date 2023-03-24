System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var o={},a={},r={},n={};return{setters:[function(e){o.BrowserSizeMode=e.BrowserSizeMode,o.DialogMode=e.DialogMode,o.PageType=e.PageType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.utils=e.utils},function(e){a.builderAppSync=e.builderAppSync,a.getAppConfigAction=e.getAppConfigAction},function(e){r.Button=e.Button,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.Icon=e.Icon,r.Popper=e.Popper,r.Switch=e.Switch,r.Tooltip=e.Tooltip,r.hooks=e.hooks,r.styleUtils=e.styleUtils},function(e){n.changeCurrentDialog=e.changeCurrentDialog,n.changeCurrentPage=e.changeCurrentPage}],execute:function(){e((()=>{var e={9203:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1H8v3H7V1H1v6h3v1H1v6h6v-3h1v3h6V8h-3V7h3V1ZM1 0a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Z" fill="#000"></path></svg>'},3626:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1h13Zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h13Zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.752-.684L12.207 8H9V7h3.133Z" fill="#000"></path></svg>'},8992:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.5A.5.5 0 0 1 .5 7h14a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#000"></path></svg>'},4750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},8866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},8891:e=>{"use strict";e.exports=o},3137:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=r},7756:e=>{"use strict";e.exports=n}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var s={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(s),i.d(s,{default:()=>C});var e=i(8891),t=i(726),o=i(3137),a=i(7756);function r(o){const{pageId:a,label:r,isInFolder:n,isFolder:i,isActive:s,hasSubPage:l,onSelect:p}=o,c=e.React.useCallback((()=>{p(a)}),[a,p]);return(0,e.jsx)(t.DropdownItem,{className:(0,e.classNames)({"page-item":!i||l,"in-folder":n,folder:i&&!l,"has-subpage":l,active:s}),active:s,header:i&&!l,onClick:c},(0,e.jsx)("div",{className:"text-truncate w-100",title:r},r))}function n(e){(0,a.changeCurrentPage)(e)}function l(t){const a=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.pageStructure})),i=[];if(a){const t=(0,o.getAppConfigAction)().appConfig.pages;a.forEach((o=>{var a,r;const n=Object.keys(o)[0],s=t[n];if(s.type===e.PageType.Normal)if((null===(a=o[n])||void 0===a?void 0:a.length)>0){const a=[];o[n].forEach((o=>{const r=t[o];r.type===e.PageType.Normal&&a.push({pageId:o,label:r.label,isInFolder:!0})})),a.length>0?(i.push({pageId:n,label:s.label,isFolder:!0,hasSubPage:!0}),i.push(...a)):i.push({pageId:n,label:s.label})}else i.push({pageId:n,label:s.label});else if(s.type===e.PageType.Folder){const a=[];(null===(r=o[n])||void 0===r?void 0:r.length)>0&&o[n].forEach((o=>{const r=t[o];r.type===e.PageType.Normal&&a.push({pageId:o,label:r.label,isInFolder:!0})})),a.length>0&&(i.push({pageId:n,label:s.label,isFolder:!0}),i.push(...a))}}))}return(0,e.jsx)(e.React.Fragment,null,i.map((o=>(0,e.jsx)(r,Object.assign({key:o.pageId,onSelect:n,isActive:o.pageId===t.currentPageId},o)))))}function p(e){(0,a.changeCurrentDialog)(e)}function c(o){const a=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.dialogs}));if(!a||0===Object.keys(a).length)return null;const r=[],n=[];return Object.keys(a).forEach((t=>{var o,i;const s=a[t];s.mode===e.DialogMode.Fixed?r.push({id:t,label:s.label,index:null!==(o=s.index)&&void 0!==o?o:0}):s.mode===e.DialogMode.Anchored&&n.push({id:t,label:s.label,index:null!==(i=s.index)&&void 0!==i?i:0})})),r.sort(((e,t)=>e.index-t.index)),n.sort(((e,t)=>e.index-t.index)),(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.DropdownItem,{header:!0,className:"page-header"},o.formatMessage("dialog")),(0,e.jsx)(t.DropdownItem,{className:"folder",header:!0},o.formatMessage("fixedWindows")),r.map((a=>(0,e.jsx)(t.DropdownItem,{key:a.id,className:(0,e.classNames)("page-item in-folder",{active:o.currentDialogId===a.id}),active:o.currentDialogId===a.id,onClick:()=>p(a.id)},(0,e.jsx)("div",{className:"text-truncate w-100",title:a.label},a.label)))),(0,e.jsx)(t.DropdownItem,{className:"folder",header:!0},o.formatMessage("anchoredWindows")),n.map((a=>(0,e.jsx)(t.DropdownItem,{key:a.id,className:(0,e.classNames)("page-item in-folder",{active:o.currentDialogId===a.id}),active:o.currentDialogId===a.id,onClick:()=>p(a.id)},(0,e.jsx)("div",{className:"text-truncate w-100",title:a.label},a.label)))))}var d=i(8992),u=i.n(d);const g=t=>{const o=window.SVG,{className:a}=t,r=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:n,src:u()},r)):e.React.createElement("svg",Object.assign({className:n},r))};var m=i(4750),h=i.n(m);const v=t=>{const o=window.SVG,{className:a}=t,r=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:n,src:h()},r)):e.React.createElement("svg",Object.assign({className:n},r))};var f=i(3626),b=i.n(f);const x=t=>{const o=window.SVG,{className:a}=t,r=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:n,src:b()},r)):e.React.createElement("svg",Object.assign({className:n},r))};var y=i(9203),w=i.n(y);const j=t=>{const o=window.SVG,{className:a}=t,r=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:n,src:w()},r)):e.React.createElement("svg",Object.assign({className:n},r))};var S=i(8866),P=i.n(S);const k=t=>{const o=window.SVG,{className:a}=t,r=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:n,src:P()},r)):e.React.createElement("svg",Object.assign({className:n},r))};function O(a){const{open:r,reference:n,onToggle:i}=a,s=t.hooks.useTranslate(),l=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.useAutoSortInFixedLayout})),p=e.React.useCallback((e=>{(0,o.getAppConfigAction)().setUseAutoSortInFixedLayout(e.target.checked).exec()}),[]);return(0,e.jsx)(t.Popper,{open:r,reference:n,placement:"top-end",offset:[0,10],toggle:i,css:e.css`
        width: 300px;
        padding: 16px;
        background-color: var(--light-400);
        color: var(--dark-800);
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        border: 1px solid var(--light-600);;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
      `},(0,e.jsx)("div",{className:"builder-setting-content d-flex align-items-center"},(0,e.jsx)("div",{className:"flex-grow-1"},s("fixedLayoutTip")),(0,e.jsx)("div",{className:"d-flex align-items-center ml-auto"},(0,e.jsx)(t.Tooltip,{title:s("fixedLayoutDesc")},(0,e.jsx)(t.Button,{icon:!0,type:"tertiary"},(0,e.jsx)(k,null))),(0,e.jsx)(t.Switch,{checked:l,onChange:p}))))}const N="right-sidebar",I=.5;class C extends e.React.PureComponent{constructor(a){super(a),this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e},t),this.onPreviewScaleChange=e=>{e.stopPropagation();const t=this.fromRangeToZoomScale(Number(e.currentTarget.value));this.updateScale(t)},this.zoomout=e=>{e.stopPropagation();const{zoomScale:t}=this.props,o=Math.round(100*t),a=10*Math.floor(o/10);let r;r=o===a?t-.1:a/100,r=Math.round(10*r)/10,r=Math.max(I,r),this.updateScale(r)},this.zoomin=e=>{e.stopPropagation();const{zoomScale:t}=this.props,o=Math.round(100*t),a=10*Math.ceil(o/10);let r;r=o===a?t+.1:a/100,r=Math.round(10*r)/10,r=Math.min(2,r),this.updateScale(r)},this.zoomToFit=e=>{e.stopPropagation();const{viewportSize:t}=this.props;let o=this.calAvailableWidth()/t.width;o=Math.floor(100*o)/100,o=Math.max(.5,Math.min(2,o)),this.updateScale(o)},this.zoomToNormal=e=>{e.stopPropagation(),this.updateScale(1)},this.stopPropgation=e=>{e.stopPropagation()},this.toggleSettingPanel=()=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(N,"collapse",!this.props.settingPanelVisible))},this.toggleTabConfigPopper=()=>{this.setState({isTabConfigPopperOpen:!this.state.isTabConfigPopperOpen})},this.onDropDownToggle=e=>{const{isPageListOpen:t}=this.state;this.setState({isPageListOpen:!t}),e.stopPropagation()},this.handlePageListItemClick=(e,t)=>{e.stopPropagation();const{currentPageId:a}=this.props;t!==a&&(o.builderAppSync.publishChangeSelectionToApp(null),o.builderAppSync.publishPageChangeToApp(t))},this.getDropdownStyle=()=>e.css`
      padding: unset;
      max-width: 240px;

      .page-header {
        height: 2rem;
        background-color: var(--light-700);
        color: var(--dark-800) !important;
        font-size: 14px;
        line-height: 2rem;
        display: flex !important;
        align-items: center;
      }

      .page-item {
        font-size: 13px;
        color: var(--black) !important;
        padding: 0 24px !important;
        height: 2rem;

        &:not(.active):hover {
          background: var(--light-600) !important;
        }

        &.active {
          background: var(--primary);
        }
      }

      .folder {
        font-size: 13px;
        color: var(--dark-500) !important;
        padding: 0 !important;
        margin: 0 24px;
        height: 2rem;
        line-height: 2rem;
      }

      .page-header,
      .folder {
        &:focus {
          outline: none;
        }
      }

      .in-folder {
        padding-left: 2.25rem !important;
      }
    `,this.renderPageList=()=>{var o;const{isPageListOpen:a}=this.state,{pages:r,currentPageId:n,currentDialogId:i,currentDialogLabel:s}=this.props,p=i?s:null===(o=null==r?void 0:r[n])||void 0===o?void 0:o.label;return(0,e.jsx)("div",{className:"d-flex page-list align-items-center ml-3"},(0,e.jsx)("div",{className:"page-label"},i?this.formatMessage("dialog"):this.formatMessage("page"),":"),(0,e.jsx)(t.Dropdown,{direction:"up",size:"sm",toggle:this.onDropDownToggle,isOpen:a,menuItemCheckMode:"singleCheck"},(0,e.jsx)(t.DropdownButton,{className:"text-truncate",title:p,css:e.css`max-width: 240px; font-size: 12px`,size:"sm",type:"tertiary"},p),(0,e.jsx)(t.DropdownMenu,{css:this.getDropdownStyle()},(0,e.jsx)(t.DropdownItem,{header:!0,className:"page-header"},this.formatMessage("page")),(0,e.jsx)(l,{currentPageId:i?null:n}),(0,e.jsx)(c,{currentDialogId:i,formatMessage:this.formatMessage}))))},this.state={isPageListOpen:!1,isTabConfigPopperOpen:!1}}calAvailableWidth(){const e=document.querySelector('div[data-widgetid="app-loader"]').getBoundingClientRect();let o=parseFloat(t.styleUtils.remToPixel("3rem"));return isNaN(o)&&(o=48),e.width-o-10}updateScale(e){o.builderAppSync.publichChangeZoomScaleToApp(e)}percentageZoomScale(){const{zoomScale:t}=this.props;return e.utils.formatPercentageNumber(`${Math.round(100*t)}%`)}mapStep(){return.1}fromZoomScaleToRange(e){return e<1?50*(e-I)/.5+0:e>1?50*(e-1)/1+50:50}fromRangeToZoomScale(e){return e<50?.5*(e-0)/50+I:e>50?1*(e-50)/50+1:1}calBackground(){const t=100*(this.fromZoomScaleToRange(this.props.zoomScale)-0)/100+"%",o=`linear-gradient(to right, var(--dark-600) 0%, var(--dark-600) ${t}, var(--light-800) ${t}, var(--light-600))`;return e.css`
      &::-webkit-slider-runnable-track {
        background: ${o} !important;
      }
      &::-moz-range-track {
        background: ${o} !important;
      }
      &::-ms-track {
        background: ${o} !important;
      }
    `}render(){const{zoomScale:o,settingPanelVisible:a,useAutoSortInFixedLayout:r}=this.props;return(0,e.jsx)("div",{css:(n=this.props.theme,e.css`
    overflow: hidden;
    height: 100%;
    background-color: var(--secondary);
    border-top: 1px solid var(--light-800);

    .zoom-section {
      .percentage-label {
        width: 4rem;
        color: var(--dark-800);
      }
      .form-control-range {
        margin: 0 8px 1px;
      }
    }

    .a11y-btn {
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      &.active {
        background-color: var(--primary) !important;
      }
    }

    .btn {
      padding: 0 0 2px;

      .jimu-icon {
        margin-right: 0;
        margin-left: 0;
      }
    }

    .setting-panel-visible {
      background-color: var(--light-700);
      .btn {
        color: var(--black);
      }
    }

    .jimu-dropdown .jimu-icon {
      transform: rotate(180deg);
    }

    .page-list {
      .page-label {
        color: var(--dark-800);
        font-size: 12px;
        margin-right: 8px;
      }
      .icon-btn {
        color: var(--dark-800);
        &:hover {
          color: var(--black);
        }
        .jimu-icon {
          margin-left: 6px;
        }
      }
    }

    input[type='range'] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type='range']:focus {
      outline: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--light-800);
      border-radius: 2px;
    }
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 12px;
      border-radius: 6px;
      cursor: pointer;
      background: var(--light-300);
      border: 2px solid var(--dark-600);
      margin-top: -5px;

      &:hover {
        border-color: var(--black);
      }
    }
    input[type='range']:focus::-webkit-slider-runnable-track {
      background: var(--light-800);
    }
    input[type='range']::-moz-range-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--light-800);
      border-radius: 2px;
    }
    input[type='range']::-moz-range-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: var(--light-300);
      border: 2px solid var(--dark-600);
      margin-top: -5px;
      &:hover {
        border-color: var(--black);
      }
    }
    input[type='range']::-ms-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: ${null===(s=null===(i=null==n?void 0:n.colors)||void 0===i?void 0:i.palette)||void 0===s?void 0:s.light[800]};
      border-radius: 2px;
    }
    input[type='range']::-ms-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: ${null===(p=null===(l=null==n?void 0:n.colors)||void 0===l?void 0:l.palette)||void 0===p?void 0:p.light[300]};
      border: 2px solid ${null===(d=null===(c=null==n?void 0:n.colors)||void 0===c?void 0:c.palette)||void 0===d?void 0:d.dark[600]};
      margin-top: 0px;
      &:hover {
        border-color: ${null===(u=null==n?void 0:n.colors)||void 0===u?void 0:u.black};
      }
    }
  `),className:"jimu-widget widget-status-bar d-flex"},this.renderPageList(),(0,e.jsx)("div",{className:"zoom-section flex-grow-1 d-flex justify-content-end align-items-center"},(0,e.jsx)(t.Button,{type:"tertiary",onClick:this.toggleTabConfigPopper,className:(0,e.classNames)("a11y-btn mr-2 px-1",{active:r}),ref:e=>{this.a11yBtn=e}},"A11Y"),(0,e.jsx)(O,{open:this.state.isTabConfigPopperOpen,reference:this.a11yBtn,onToggle:this.toggleTabConfigPopper}),(0,e.jsx)(t.Button,{type:"tertiary",disabled:o<=I,title:this.formatMessage("zoomOut"),onClick:this.zoomout},(0,e.jsx)(g,{size:"s"})),(0,e.jsx)("input",{css:this.calBackground(),type:"range",className:"form-control-range",min:0,max:100,step:this.mapStep(),value:this.fromZoomScaleToRange(o),onClick:this.stopPropgation,onChange:this.onPreviewScaleChange}),(0,e.jsx)(t.Button,{type:"tertiary",disabled:o>=2,title:this.formatMessage("zoomIn"),onClick:this.zoomin},(0,e.jsx)(v,{size:"s"})),(0,e.jsx)(t.Dropdown,{direction:"up",size:"sm",className:"ml-2"},(0,e.jsx)(t.DropdownButton,{icon:!0,size:"sm",type:"tertiary"},this.percentageZoomScale()),(0,e.jsx)(t.DropdownMenu,{css:e.css`min-width: 5rem;`},[200,175,150,125,100,75,50].map((o=>(0,e.jsx)(t.DropdownItem,{className:"justify-content-center",key:o,onClick:()=>this.updateScale(o/100)},e.utils.formatPercentageNumber(`${o}%`)))))),(0,e.jsx)(t.Button,{type:"tertiary",className:"ml-2",onClick:this.zoomToNormal,title:this.formatMessage("zoomToNormal")},(0,e.jsx)(j,{size:"s",className:"m-0"})),(0,e.jsx)(t.Button,{type:"tertiary",className:"ml-2",onClick:this.zoomToFit,title:this.formatMessage("zoomToFit")},(0,e.jsx)(x,{size:"s",className:"m-0"}))),(0,e.jsx)("div",{className:(0,e.classNames)("setting-panel-section d-flex justify-content-center align-items-center ml-4 mr-2",{"setting-panel-visible":a})},(0,e.jsx)(t.Button,{type:"tertiary",title:a?this.formatMessage("closeSettingPanel"):this.formatMessage("openSettingPanel"),className:"px-2",onClick:this.toggleSettingPanel},(0,e.jsx)(t.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/setting-panel.svg",width:12,height:12,className:"m-0",autoFlip:!0}))));var n,i,s,l,p,c,d,u}}C.mapExtraStateProps=(t,o)=>{var a,r,n,i,s,l,p,c,d,u,g,m,h,v,f,b,x,y,w,j,S;const P=null!==(n=null===(r=null===(a=t.appStateInBuilder)||void 0===a?void 0:a.appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==n?n:1,k=null!==(s=null===(i=t.appStateInBuilder)||void 0===i?void 0:i.browserSizeMode)&&void 0!==s?s:e.BrowserSizeMode.Large,O=e.utils.findViewportSize(null===(l=t.appStateInBuilder)||void 0===l?void 0:l.appConfig,k),I=null===(c=null===(p=null==t?void 0:t.appStateInBuilder)||void 0===p?void 0:p.appConfig)||void 0===c?void 0:c.pages,C=null===(u=null===(d=null==t?void 0:t.appStateInBuilder)||void 0===d?void 0:d.appConfig)||void 0===u?void 0:u.useAutoSortInFixedLayout,M=null===(m=null===(g=null==t?void 0:t.appStateInBuilder)||void 0===g?void 0:g.appConfig)||void 0===m?void 0:m.pageStructure,z=null===(v=null===(h=null==t?void 0:t.appStateInBuilder)||void 0===h?void 0:h.appRuntimeInfo)||void 0===v?void 0:v.currentPageId,D=null===(b=null===(f=null==t?void 0:t.appStateInBuilder)||void 0===f?void 0:f.appRuntimeInfo)||void 0===b?void 0:b.currentDialogId,T=D?null===(x=null==t?void 0:t.appStateInBuilder)||void 0===x?void 0:x.appConfig.dialogs[D].label:null;return{zoomScale:P,viewportSize:O,settingPanelVisible:null===(j=null===(w=null===(y=t.widgetsState)||void 0===y?void 0:y[N])||void 0===w?void 0:w.collapse)||void 0===j||j,pages:I,pageStructure:M,currentPageId:z,currentDialogId:D,currentDialogLabel:T,useAutoSortInFixedLayout:C,locale:null===(S=null==t?void 0:t.appContext)||void 0===S?void 0:S.locale}}})(),s})())}}}));