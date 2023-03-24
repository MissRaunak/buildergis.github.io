import { React, ImmutableArray, Immutable, ReactRedux, IMState, getAppStore, LayoutItemType, IconResult, ImmutableObject } from 'jimu-core'
import { hooks, MultiSelectItem, NavigationVariant } from 'jimu-ui'
import { ViewNavigationStandard, ViewNavigationType, ViewNavigationVariant } from '../runtime/components/view-navigation'
import { searchUtils } from 'jimu-layouts/layout-runtime'
import { getNavigationVariables } from 'jimu-theme'
const { useMemo, useCallback } = React
const END_NUMBER_REGEXP = /\d+$/

export const getAppConfig = () => getAppStore().getState().appStateInBuilder.appConfig

export const toMultiSelectItems = (views: string[]): MultiSelectItem[] => {
  const appConfig = getAppConfig()
  return views?.map(value => {
    const label = appConfig.views?.[value]?.label
    return {
      label,
      value
    }
  }) ?? []
}

export const getEndNumber = (string: string) => {
  const match = string.match(END_NUMBER_REGEXP)
  return match?.[0] ? Number(match[0]) : 0
}

//Get the label of section
export const getSectionLabel = (sectionId: string): string => {
  const appConfig = getAppConfig()
  return appConfig?.sections?.[sectionId]?.label ?? ''
}

//Convert views to the data of multi-select component
export const getViewSelectItems = (views): ImmutableArray<MultiSelectItem> => {
  const selectItems = toMultiSelectItems(views)
  return Immutable(selectItems)
}

export const getViewNavigationVariant = (type: ViewNavigationType, navStyle: string): ViewNavigationVariant => {
  const variants = getNavigationVariables()
  let variant = variants?.[type]?.[navStyle]
  const mixin = {
    item: {
      default: {
        icon: {
          size: '8px'
        },
        size: '14px'
      },
      active: {
        icon: {
          color: 'var(--primary)',
          size: '8px'
        },
        size: '14px'
      },
      hover: {
        icon: {
          color: 'var(--primary)',
          size: '8px'
        },
        size: '14px'
      }
    }
  } as Partial<NavigationVariant>
  variant = Immutable(variant).merge(mixin, { deep: true })
  return variant
}

//Get theme navigation variants from theme
export const useViewNavigationVariant = (type: ViewNavigationType, navStyle: string, advanced: boolean, advanceVariant: ViewNavigationVariant): ViewNavigationVariant => {
  return useMemo(() => {
    if (advanced) return advanceVariant
    return getViewNavigationVariant(type, navStyle)
  }, [advanced, advanceVariant, type, navStyle])
}

export const useContainerSections = (id: string): string[] => {
  const layouts = ReactRedux.useSelector((state: IMState) => state?.appStateInBuilder?.appConfig?.layouts)

  const sections = ReactRedux.useSelector((state: IMState) => state?.appStateInBuilder?.appConfig?.sections)

  const sizeMode = ReactRedux.useSelector((state: IMState) => state?.appStateInBuilder?.browserSizeMode)

  return React.useMemo(() => {
    const appConfig = getAppStore().getState().appStateInBuilder.appConfig
    return searchUtils.getContentsInTheSameContainer(appConfig, id, LayoutItemType.Widget, LayoutItemType.Section, sizeMode) || []
    // We listen for changes in appConfig.sections and appConfig.layouts instead of appConfig, which can reduce the number of times we re render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, sizeMode, sections, layouts])
}

export const useSectionViews = (section?: string) => {
  return ReactRedux.useSelector((state: IMState) => state?.appStateInBuilder?.appConfig?.sections?.[section]?.views)
}

const getIconCustomLabelName = (iconFileName: string) => {
  const map = new Map<string, string>([
    ['dot', 'drawToolDot'],
    ['dot-6', 'drawToolDot'],
    ['dot-10', 'drawToolDot'],
    ['pill', 'pill'],
    ['cube', 'rhombus'],
    ['circle', 'hollowCircle'],
    ['double-circle', 'filledDoubleCircle'],
    ['left-arrow-12', 'arrowLeft12'],
    ['right-arrow-12', 'arrowRight12']
  ])
  return map.get(iconFileName)
}

export const useIconCustomLabels = (translate: ReturnType<typeof hooks.useTranslate>, standard: Immutable.ImmutableObject<ViewNavigationStandard>) => {
  const { alternateIcon, activedIcon, previousIcon, nextIcon } = standard || {}
  const getIconCustomLabel = useCallback((icon: ImmutableObject<IconResult>) => {
    const customLabelName = getIconCustomLabelName(icon?.properties?.filename)
    if (customLabelName) {
      return translate(customLabelName)
    }
  }, [translate])

  const alternate = useMemo(() => getIconCustomLabel(alternateIcon), [alternateIcon, getIconCustomLabel])
  const actived = useMemo(() => getIconCustomLabel(activedIcon), [activedIcon, getIconCustomLabel])
  const previous = useMemo(() => getIconCustomLabel(previousIcon), [previousIcon, getIconCustomLabel])
  const next = useMemo(() => getIconCustomLabel(nextIcon), [nextIcon, getIconCustomLabel])

  return [
    alternate,
    actived,
    previous,
    next
  ] as [string, string, string, string]
}
