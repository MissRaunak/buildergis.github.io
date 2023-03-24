System.register(["jimu-core","jimu-ui"],(function(e,t){var n={},o={};return{setters:[function(e){n.BaseVersionManager=e.BaseVersionManager,n.BrowserSizeMode=e.BrowserSizeMode,n.Immutable=e.Immutable,n.LinkType=e.LinkType,n.PageType=e.PageType,n.React=e.React,n.ReactRedux=e.ReactRedux,n.css=e.css,n.jsx=e.jsx,n.polished=e.polished},function(e){o.Button=e.Button,o.Drawer=e.Drawer,o.Icon=e.Icon,o.Navigation=e.Navigation,o.PanelHeader=e.PanelHeader,o.componentStyleUtils=e.componentStyleUtils,o.hooks=e.hooks,o.styleUtils=e.styleUtils,o.utils=e.utils}],execute:function(){e((()=>{var e={78668:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M1 0h3a1 1 0 0 1 1 1v1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Zm0 1v10h10V3H4V1H1Zm0 3.5h10v1H1v-1Z" fill="#000" fill-rule="nonzero"></path></svg>'},3399:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M7.42 8.839a.5.5 0 0 1 0 .71L6 10.966a3.502 3.502 0 0 1-4.967 0 3.501 3.501 0 0 1 0-4.966l1.416-1.422a.504.504 0 0 1 .713.712L1.746 6.713a2.497 2.497 0 0 0-.003 3.545c.983.983 2.56.98 3.544-.003l1.42-1.42a.504.504 0 0 1 .712.004Zm1.415-2.132 1.422-1.416a2.5 2.5 0 0 0 0-3.547 2.502 2.502 0 0 0-3.547 0L5.29 3.163a.504.504 0 0 1-.713-.712l1.42-1.42a3.506 3.506 0 0 1 4.97.003 3.501 3.501 0 0 1 0 4.967L9.547 7.42a.504.504 0 0 1-.713-.712Zm-4.967.71 3.548-3.548a.504.504 0 0 1 .713.713L4.58 8.129a.504.504 0 0 1-.713-.712Z" fill-rule="nonzero"></path></svg>'},22383:e=>{e.exports='<svg viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg"><path d="M1 0h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Zm0 1v10h8V1H1Zm2 2h4a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1Zm0 2.5h4a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1Z" fill="#000" fill-rule="nonzero"></path></svg>'},48891:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=o}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(i),a.d(i,{default:()=>S});var e,t=a(48891);!function(e){e.Icon="ICON",e.Vertical="VERTICAL",e.Horizontal="HORIZONTAL"}(e||(e={}));const n={type:"HORIZONTAL",subOpenMode:"FOLDABLE",main:{alignment:"center",space:{distance:0,unit:"px"},showText:!0,showIcon:!1,iconPosition:"start"},navType:"default",advanced:!1};class o extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"The first release.",upgrader:e=>{var t;if(!e)return n;let o=e;return(null===(t=null==e?void 0:e.main)||void 0===t?void 0:t.variants)&&(o=o.set("advanced",!0)),o}},{version:"1.1.0",description:"Version manager for release 1.1",upgrader:o=>(n=>{var o,a,i,r,l,s,c;if(!n)return;const u=n,p=(0,t.Immutable)({}),d=u.type===e.Icon?"drawer":"nav",v=u.navType,m=u.type!==e.Horizontal,g=null==u?void 0:u.icon,y=null==u?void 0:u.drawerDirection,h=(f=u.type,b=u.subOpenMode,f===e.Horizontal?"dropdown":"EXPAND"===b?"static":"foldable");var f,b;const w=null===(o=null==u?void 0:u.main)||void 0===o?void 0:o.alignment,x=null===(a=null==u?void 0:u.main)||void 0===a?void 0:a.showText,j=null===(i=null==u?void 0:u.main)||void 0===i?void 0:i.showIcon,O=null===(r=null==u?void 0:u.main)||void 0===r?void 0:r.iconPosition,T=null!==(s=null===(l=null==u?void 0:u.main)||void 0===l?void 0:l.space)&&void 0!==s?s:{distance:0,unit:"px"},S={icon:g,anchor:y,submenuMode:h,textAlign:w,showIcon:j,showText:x,iconPosition:O,gap:`${null==T?void 0:T.distance}${null==T?void 0:T.unit}`},P=u.advanced,I=u.paper,R=((e,t)=>{if(!e)return;const n=null==e?void 0:e[t];if(!n)return;let o=n;return n.bg&&(o=o.setIn(["root","bg"],n.bg),o=o.without("bg")),o})(null===(c=null==u?void 0:u.main)||void 0===c?void 0:c.variants,u.navType);return p.set("type",d).set("menuStyle",v).set("vertical",m).set("standard",S).set("advanced",P).set("paper",I).set("variant",R)})(o||n)}]}}const r=new o;var l=a(30726);const{useState:s,useEffect:c,useMemo:u}=t.React,{useSelector:p}=t.ReactRedux,d=a(22383),v=a(3399),m=a(78668),g={[t.PageType.Normal]:d,[t.PageType.Link]:v,[t.PageType.Folder]:m},y=e=>{const n=h(e),o=f(e),a=e.icon||g[e.type];return(0,t.Immutable)({linkType:n,value:o,icon:"[object Object]"===Object.prototype.toString.call(a)?a:l.utils.toIconResult(a,e.type,16),target:e.openTarget,name:e.label})},h=e=>e.type===t.PageType.Link?t.LinkType.WebAddress:e.type===t.PageType.Normal?t.LinkType.Page:e.type===t.PageType.Folder?t.LinkType.None:void 0,f=e=>e.type===t.PageType.Link?e.linkUrl:e.type===t.PageType.Normal?e.id:e.type===t.PageType.Folder?"#":void 0,b=(e,n,o,a)=>u((()=>e?t.css`
      .jimu-nav,
      &.jimu-nav {
        ${l.componentStyleUtils.nav.getRootStyles(null==o?void 0:o.root)};
        ${l.componentStyleUtils.nav.getVariantStyles(n,(e=>(0,t.Immutable)(e).merge({item:{hover:{fontWeight:"400"},active:{fontWeight:"400"}}},{deep:!0}))(o),a,!0)};
        ${l.styleUtils.getButtonStyleByState(null==o?void 0:o.item,!0)}
      }
    `:t.css``),[e,n,o,a]),w={_widgetLabel:"Menu"};const x=e=>{var n,o;const[a,i]=t.React.useState(!1),{icon:r,anchor:s,advanced:c,type:p,variant:d,paper:v,vertical:m}=e,g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(e,["icon","anchor","advanced","type","variant","paper","vertical"]),y=()=>i((e=>!e)),h=((e,n,o)=>{var a,i;const r=null==o?void 0:o.bg,l=null===(i=null===(a=null==n?void 0:n.item)||void 0===a?void 0:a.default)||void 0===i?void 0:i.color;return u((()=>e?t.css`
      .paper {
        background: ${r};
        .header {
          color: ${l};
          padding: ${t.polished.rem(8)};
        }
      }
    `:t.css`
      .paper {
        .header {
          padding: ${t.polished.rem(8)};
        }
      }
    `),[e,r,l])})(c,d,v),f=b(c,p,d,!0),x=l.hooks.useCheckSmallBrowserSzieMode(),j=(e=>u((()=>e?t.css`
      & .jimu-nav-link-wrapper {
        text-overflow: ellipsis !important;
        white-space: nowrap;
        overflow: hidden !important;
      }
    `:t.css`
      &{
        min-width: ${t.polished.rem(240)};
        max-width: ${t.polished.rem(320)};
      }
      & .jimu-nav-link-wrapper {
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        white-space: nowrap;
      }
    `),[e]))(x),O=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId));t.React.useEffect((()=>{i(!1)}),[O]);const T=l.hooks.useTranslate(w);return(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"button-container w-100 h-100 d-flex align-items-center justify-content-center"},(0,t.jsx)(l.Button,{icon:!0,type:"tertiary",onClick:y,"aria-label":T("_widgetLabel"),"aria-haspopup":"menu"},(0,t.jsx)(l.Icon,{className:"caret-icon",icon:null==r?void 0:r.svg,color:null===(n=null==r?void 0:r.properties)||void 0===n?void 0:n.color,size:null===(o=null==r?void 0:r.properties)||void 0===o?void 0:o.size}))),(0,t.jsx)(l.Drawer,{anchor:s,open:a,toggle:y,autoFlip:!1,css:h},(0,t.jsx)(l.PanelHeader,{className:"header",title:"",onClose:y}),(0,t.jsx)(l.Navigation,Object.assign({className:x?"w-100":"menu-navigation",vertical:m,css:[j,f],type:p,showTitle:!0,isUseNativeTitle:!0,right:!0},g))))};const{useMemo:j}=t.React,O=e=>{const{type:n,menuStyle:o,vertical:a,standard:i,advanced:r,paper:u,variant:d}=e,v=(()=>{const[e,t]=s([]),n=p((e=>{var t;return null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.pages})),o=p((e=>{var t;return null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.pageStructure}));return c((()=>{const e=((e,t)=>(e=((e,t)=>(e=e.filter((e=>{const n=Object.keys(e)[0];return(null==t?void 0:t[n]).isVisible}))).map((e=>{const n=Object.entries(e)[0],o=n[0];let a=n[1];return a=a.filter((e=>(null==t?void 0:t[e]).isVisible)),e.set(o,a)})))(e,t),e.map((e=>{const n=Object.entries(e)[0],o=n[0],a=n[1],i=t[o],r=y(i),l=a.map((e=>{const n=t[e];return y(n)}));return r.set("subs",l)}))))(o,n);t(e)}),[n,o]),e})(),m=(()=>{const e=p((e=>{var t;return null===(t=null==e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId}));return t.React.useCallback((t=>(e=>{if(!(null==e?void 0:e.value))return"";const t=e.value.split(",");return(null==t?void 0:t.length)?t[0]:""})(t)===e),[e])})(),{icon:g,anchor:h}=i,f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(i,["icon","anchor"]),w=(e=>p((n=>(null==n?void 0:n.browserSizeMode)===t.BrowserSizeMode.Small?"full":e)))(h),O=(e=>j((()=>t.css`
      width: 100%;
      height: 100%;
      .nav-item {
        &.nav-link {
          width: ${e?"100%":"unset"};
          height: ${e?"unset":"100%"};
        }
        ${!e&&t.css`
          .nav-link:hover {
            position: relative;
            &::before {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              top: -1000px;
              bottom: 100%;
            }
            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              top: 100%;
              bottom: -1000px;
            }
          }
        `}
      }
    `),[e]))(a),T=b(r,o,d,a);return(0,t.jsx)("div",{className:"menu-navigation",css:[O,T]},"nav"===n&&(0,t.jsx)(l.Navigation,Object.assign({role:"menu",data:v,vertical:a,isActive:m,showTitle:!0,isUseNativeTitle:!0,scrollable:!0,right:!0},f,{type:o})),"drawer"===n&&(0,t.jsx)(x,Object.assign({data:v,advanced:r,variant:d,paper:u,type:o,vertical:a,isActive:m,scrollable:!1,icon:g,anchor:w},f)))},T=e=>{const{config:n}=e;return t.React.createElement("div",{className:"widget-menu jimu-widget"},t.React.createElement(O,Object.assign({},n)))};T.versionManager=r;const S=T})(),i})())}}}));