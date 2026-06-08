export type VehicleStatus = 'active' | 'idle' | 'maintenance' | 'offline'
export type VehicleType = 'truck' | 'van' | 'bike' | 'auto' | 'bus'
export type AlertType = 'overspeed' | 'long_idle' | 'low_fuel' | 'geofence_exit' | 'maintenance_due' | 'harsh_braking'
export type AlertSeverity = 'critical' | 'warning' | 'info'

export interface Vehicle {
  id: string
  fleet_id: string
  name: string
  plate_number: string
  vehicle_type: VehicleType
  status: VehicleStatus
  fuel_level: number
  last_lat: number
  last_lng: number
  last_speed: number
  last_heading: number
  last_seen: string
  driver_name: string
  driver_phone: string
  odometer_km: number
  user_id: string
  created_at: string
}

export interface Trip {
  id: string
  vehicle_id: string
  start_time: string
  end_time: string | null
  distance_km: number
  avg_speed_kmh: number
  max_speed_kmh: number
  idle_time_min: number
  halt_count: number
  fuel_consumed_liters: number
  start_location: string
  end_location: string
  start_lat: number
  start_lng: number
  end_lat: number
  end_lng: number
  created_at: string
}

export interface TripPoint {
  id: string
  trip_id: string
  lat: number
  lng: number
  speed_kmh: number
  heading: number
  timestamp: string
  seq: number
}

export interface Alert {
  id: string
  vehicle_id: string
  type: AlertType
  severity: AlertSeverity
  message: string
  value: number | null
  threshold: number | null
  lat: number | null
  lng: number | null
  triggered_at: string
  resolved: boolean
  resolved_at: string | null
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      vehicles: { Row: Vehicle; Insert: Omit<Vehicle, 'id' | 'created_at'>; Update: Partial<Vehicle> }
      trips: { Row: Trip; Insert: Omit<Trip, 'id' | 'created_at'>; Update: Partial<Trip> }
      trip_points: { Row: TripPoint; Insert: Omit<TripPoint, 'id'>; Update: Partial<TripPoint> }
      alerts: { Row: Alert; Insert: Omit<Alert, 'id' | 'created_at'>; Update: Partial<Alert> }
    }
  }
}
