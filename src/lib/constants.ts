export const BANGALORE_CENTER = {
  lat: 12.9716,
  lng: 77.5946,
} as const

export const DEFAULT_ZOOM = 12
export const VEHICLE_ZOOM = 15

export const MAP_TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

export const STATUS_COLORS = {
  active: '#22c55e',
  idle: '#f59e0b',
  maintenance: '#ef4444',
  offline: '#94a3b8',
} as const

export const ALERT_SEVERITY_COLORS = {
  critical: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
} as const
