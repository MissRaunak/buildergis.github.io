import {
  React,
  ReactRedux,
  DataSourceStatus,
  DataSourceManager,
  FeatureLayerDataSource,
  IMState,
  ImmutableObject,
  UseDataSource,
  DataSource,
  DataSourceTypes,
  SceneLayerDataSource,
  QueriableDataSource,
  FeatureLayerQueryParams,
  dataSourceUtils
} from 'jimu-core'
import { ChartElementLimit, UnprivilegedChart, WebMapWebChart, getSeriesType, WebChartDataFilters } from 'jimu-ui/advanced/chart'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../state'
import { IWebChart } from '../../../config'
import { useSelection, getSeriesWithQuery } from '../utils'
import { hooks } from 'jimu-ui'
import createRecordsFromChartData, { getDataItems } from './convert-chart-data-to-records'
import { ChartComponents } from '../components'

interface WithFeatureLayerChartProps {
  className?: string
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  useDataSource?: ImmutableObject<UseDataSource>
  chartLimits?: Partial<ChartElementLimit>
}

const useDataSourceFeatureLayer = (dataSourceId: string): __esri.FeatureLayer => {
  const cancelable = hooks.useCancelablePromiseMaker()
  const [layer, setLayer] = React.useState<__esri.FeatureLayer>(null)
  const sourceStatus = ReactRedux.useSelector(
    (state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.instanceStatus
  )
  const sourceVersion = ReactRedux.useSelector(
    (state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.sourceVersion
  )
  React.useEffect(() => {
    if (sourceStatus !== DataSourceStatus.Created) return null
    let dataSource = DataSourceManager.getInstance().getDataSource(
      dataSourceId
    ) as FeatureLayerDataSource
    if (!dataSource) {
      console.error(`No data source founded for id: ${dataSourceId}`)
      return
    }
    if ((dataSource as DataSource).type === DataSourceTypes.SceneLayer) {
      dataSource = (dataSource as unknown as SceneLayerDataSource).getAssociatedDataSource()
    }
    cancelable(dataSource.createJSAPILayerByDataSource()).then((featureLayer) => {
      setLayer(featureLayer)
    })
  }, [cancelable, dataSourceId, sourceStatus, sourceVersion])

  return layer
}

const background = [0, 0, 0, 0] as any

function WithFeatureLayerChart (props: WithFeatureLayerChartProps): React.ReactElement {
  const {
    className,
    widgetId,
    webChart: propWebChart,
    useDataSource,
    chartLimits
  } = props

  const chartRef = React.useRef<UnprivilegedChart>(null)
  const type = getSeriesType(propWebChart?.series as any)
  const id = widgetId + '-' + (propWebChart?.id ?? 'chart')
  const dispatch = useChartRuntimeDispatch()
  const { outputDataSource, dataSource, queryVersion } = useChartRuntimeState()
  const dataSourceId = useDataSource?.dataSourceId
  const featureLayer = useDataSourceFeatureLayer(dataSourceId)
  const [version, setVersion] = React.useState(0)

  const webMapWebChart = React.useMemo(
    () => {
      const query = propWebChart.dataSource?.query
      const series = getSeriesWithQuery(propWebChart.series, query, true)
      return propWebChart.without('dataSource').set('series', series).set('id', id).set('background', background) as unknown as ImmutableObject<WebMapWebChart>
    }, [id, propWebChart]
  )

  const queryParams: FeatureLayerQueryParams = React.useMemo(() => {
    return (dataSource as QueriableDataSource)?.getCurrentQueryParams() ?? {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, queryVersion])

  const { where, geometry, gdbVersion, time, distance, units } = queryParams

  const runtimeDataFilters = React.useMemo(() => {
    const runtimeDataFilters: WebChartDataFilters = {}
    if (where) {
      runtimeDataFilters.where = where
    }
    if (geometry) {
      runtimeDataFilters.geometry = geometry as any
      if (distance && units) {
        runtimeDataFilters.distance = distance
        runtimeDataFilters.units = units as any
      }
    }
    return Object.keys(runtimeDataFilters).length ? runtimeDataFilters : undefined
  }, [where, geometry, distance, units])

  hooks.useUpdateEffect(() => {
    if (!chartRef.current || !featureLayer) return
    if (gdbVersion) {
      featureLayer.gdbVersion = gdbVersion
    }
    if (time) {
      featureLayer.timeExtent = dataSourceUtils.changeJimuTimeToJSAPITimeExtent(time)
    }
    setVersion((v) => v + 1)
  }, [featureLayer, gdbVersion, time])

  const hanldleCreated = React.useCallback(
    (chart: UnprivilegedChart) => {
      chartRef.current = chart
      dispatch({ type: 'SET_CHART', value: chart })
    },
    [dispatch]
  )

  const handleDataProcessComplete = hooks.useEventCallback((e) => {
    const dataItems = getDataItems(type, e.detail)
    const records = createRecordsFromChartData(dataItems, outputDataSource)
    dispatch({ type: 'SET_RECORDS', value: records })
  })

  const [selectionData, handleSelectionChange] = useSelection(
    widgetId,
    outputDataSource,
    propWebChart.series?.length
  )

  return (
    <>
      {featureLayer && <ChartComponents
        className={className}
        version={version}
        runtimeDataFilters={runtimeDataFilters}
        webMapWebChart={webMapWebChart}
        featureLayer={featureLayer}
        chartLimits={chartLimits}
        ref={hanldleCreated}
        selectionData={selectionData}
        arcgisChartsSelectionComplete={handleSelectionChange}
        arcgisChartsDataProcessComplete={handleDataProcessComplete}
      />}
    </>
  )
}

export default WithFeatureLayerChart
