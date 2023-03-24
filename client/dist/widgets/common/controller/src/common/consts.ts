import { ControlPosition } from 'jimu-ui'

// Width of placeholder when dragging
export const DROP_ZONE_PLACEHOLDER_WIDTH = 5
// Widgets layout name in controller
export const BASE_LAYOUT_NAME = 'controller'
// The layout name for open widget panel
export const CONTAINER_LAYOUT_NAME = '_openwidget'

// Three sizes of widget cards
export const WIDGET_ITEM_SIZES = {
  sm: 24,
  default: 32,
  lg: 48
}
// Minimum size of open widget panel
export const MIN_PANEL_SIZE = { width: 150, height: 120 }
// The default size of the widget panel
export const DEFAULT_PANEL_SIZE = { width: 300, height: 300 }
// The starting position for widget panel of multiple mode
export const DEFAULT_WIDGET_START_POSITION: ControlPosition = {
  x: 70,
  y: 70
}
// Spacing between panels of multiple mode
export const DEFAULT_PANEL_SPACE = { x: 30, y: 30 }
