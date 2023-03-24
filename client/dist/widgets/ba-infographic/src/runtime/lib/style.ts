import { IMThemeVariables, css, SerializedStyles } from 'jimu-core'

export function getStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
  .overflow-hidden {
      overflow: hidden
  }

  [calcite-hydrated-hidden] {
      visibility: hidden;
      pointer-events: none
  }

  arcgis-infographic {
      width: 100% !important;
      height: 100% !important;
      overflow: hidden !important;
      /* 16:9 aspect ratio */
      padding-top: 56.25% !important;
      position: relative !important;
  }

  arcgis-infographic iframe {
    border: 0 !important;
    height: 100% !important;
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
    width: 100% !important;
  }
  .bufferInput {
    width: 20% !important;
  }
  .bufferUnits {
    width: 20% !important;
  }
  .stepContentContainerStyle {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: left
  }
  .stepContentStyle {
    padding: 2px 12px;
    width: 100%;
    height: 100%;
    display: flex;
    alignItems: self-start;
    justify-content: left
  }
  
  .selectedSearchResultRow {
    overflow: visible;
    flex: 1 1 auto;
    align-items: stretch;
    max-width: fit-content;
  }
  .selectedSearchResultRowWF {
    position:absolute;
    top:-8px;
    width:calc(100% + 4px);
    overflow: hidden;
    flex: 1 1 auto;
    align-items: stretch;
    max-width: calc(100% + 4px);
    background-color:whitesmoke;
    color:#000;
    z-index:9;
  }
  .container{
    position:relative;
    padding:0px !important;
  }
  .selectedSearchResult {
    background-color: gray;  
    width: 100%;
    padding: 7px 10px;
    color: #fff;
  }
  .selectedSearchResultWF {
    background-color: whitesmoke;  
    width: 100%;
    padding: 7px 10px;
    color: #000;
  }
  .calciteStepperStyle {
    position: absolute;
    top: 6px;
    left: 0;
    padding: 20px;
    height: calc(100% - 8px);
    overflow: hidden;
  }
  .navStyle {
    height: 48px;
    background-color: #fff;
    border-top: 1px solid #dfdfdf;
    padding-right: 0px;
    text-align: right;
    flex: 0 0 auto;
  }
  .navDivStyle {
    justify-content: flex-end;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px !important;
  }
  .navNextButtonStyle {
    display: block;
    padding: 10px 0px;
    margin-left: 15px;
    border-radius: 2px;
  }
  .navRunInfographicStyle {
    display: block;
    padding: 10px 0px;
    margin-left: 15px;
    border-radius: 2px;
  }
  .navPrevButtonStyle {
    display: block;
    padding: 10px 0px;
    border-radius: 2px;
  }
  .containerStyle {
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #fff;
    border: solid 1px #333;
  }
  .row {
    margin-left:0;
    margin-right:0;
  }
  arcgis-infographic {
    padding-top: 0px !important;
  }
  .contentStyle {
    flex: 1 0 auto;
    background-color: #fff;
    height: calc(100% - 32px);
    max-height: calc(100% - 32px);
  }
  .calcite-stepper-content {
    height: calc(100% - 39px) !important;
    overflow:auto;
  }
  .calciteStepperStyle{
    position: absolute;
    top: 6px;
    left: 0px;
    padding: 0 6px;
    height: calc(100% - 6px);
    overflow: hidden;
  }
  .stepContentContainerStyle{
    position: absolute;
    top: 50px;
    left: 0;
    height: calc(100% - 51px);
  }
  
  `
}
