/** @jsx jsx */
import { jsx, DataSourceComponent, Immutable } from 'jimu-core'
import { IMSearchDataConfig, IMConfig } from '../../config'
interface CreateDatasourceProps {
  id: string
  config: IMConfig
}

const CreateDatasource = (props: CreateDatasourceProps) => {
  const { config, id } = props

  const renderDatasourceComponent = (configItem: IMSearchDataConfig) => {
    const { configId } = configItem
    const outputDataSourceId = configItem?.outputDataSourceId
    const useDataSource = configItem?.useDataSource
    const outputDatasource = {
      dataSourceId: outputDataSourceId,
      mainDataSourceId: outputDataSourceId
    }
    return (<div key={`${configId}_con`}>
      {useDataSource && <DataSourceComponent
        useDataSource={Immutable(useDataSource)}
        query={null}
        key={`${configId}_useDataSource`}
        widgetId={id}
      />}
      {outputDataSourceId && <DataSourceComponent
        useDataSource={Immutable(outputDatasource)}
        query={null}
        key={`${configId}_outputDataSource`}
        widgetId={id}
      />}
    </div>)
  }

  return (
    <div>
      {
        config?.datasourceConfig?.map(configItem => {
          return renderDatasourceComponent(configItem)
        })
      }
    </div>
  )
}

export default CreateDatasource
