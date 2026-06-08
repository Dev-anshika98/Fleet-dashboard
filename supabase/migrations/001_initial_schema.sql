-- Fleet Management Dashboard Schema
-- Run this in Supabase SQL Editor to create all tables

-- Vehicles table
CREATE TABLE IF NOT EXISTS vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fleet_id TEXT NOT NULL,
  name TEXT NOT NULL,
  plate_number TEXT NOT NULL UNIQUE,
  vehicle_type TEXT NOT NULL CHECK (vehicle_type IN ('truck', 'van', 'bike', 'auto', 'bus')),
  status TEXT NOT NULL DEFAULT 'idle' CHECK (status IN ('active', 'idle', 'maintenance', 'offline')),
  fuel_level INTEGER CHECK (fuel_level BETWEEN 0 AND 100),
  last_lat DOUBLE PRECISION,
  last_lng DOUBLE PRECISION,
  last_speed DOUBLE PRECISION DEFAULT 0,
  last_heading DOUBLE PRECISION DEFAULT 0,
  last_seen TIMESTAMPTZ DEFAULT now(),
  driver_name TEXT,
  driver_phone TEXT,
  odometer_km DOUBLE PRECISION DEFAULT 0,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_vehicles_status ON vehicles(status);
CREATE INDEX idx_vehicles_user ON vehicles(user_id);

-- Trips table
CREATE TABLE IF NOT EXISTS trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ,
  distance_km DOUBLE PRECISION DEFAULT 0,
  avg_speed_kmh DOUBLE PRECISION DEFAULT 0,
  max_speed_kmh DOUBLE PRECISION DEFAULT 0,
  idle_time_min INTEGER DEFAULT 0,
  halt_count INTEGER DEFAULT 0,
  fuel_consumed_liters DOUBLE PRECISION DEFAULT 0,
  start_location TEXT,
  end_location TEXT,
  start_lat DOUBLE PRECISION,
  start_lng DOUBLE PRECISION,
  end_lat DOUBLE PRECISION,
  end_lng DOUBLE PRECISION,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_trips_vehicle ON trips(vehicle_id);
CREATE INDEX idx_trips_start_time ON trips(start_time DESC);

-- Trip points table (GPS breadcrumbs)
CREATE TABLE IF NOT EXISTS trip_points (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  speed_kmh DOUBLE PRECISION DEFAULT 0,
  heading DOUBLE PRECISION DEFAULT 0,
  timestamp TIMESTAMPTZ NOT NULL,
  seq INTEGER NOT NULL
);

CREATE INDEX idx_trip_points_trip ON trip_points(trip_id);
CREATE INDEX idx_trip_points_seq ON trip_points(trip_id, seq);

-- Alerts table
CREATE TABLE IF NOT EXISTS alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('overspeed', 'long_idle', 'low_fuel', 'geofence_exit', 'maintenance_due', 'harsh_braking')),
  severity TEXT NOT NULL CHECK (severity IN ('critical', 'warning', 'info')),
  message TEXT NOT NULL,
  value DOUBLE PRECISION,
  threshold DOUBLE PRECISION,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  triggered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved BOOLEAN DEFAULT false,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_alerts_vehicle ON alerts(vehicle_id);
CREATE INDEX idx_alerts_unresolved ON alerts(resolved) WHERE resolved = false;

-- Row Level Security
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

-- Policies: users see their own fleet data
CREATE POLICY "Users see own vehicles" ON vehicles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users update own vehicles" ON vehicles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users insert own vehicles" ON vehicles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users see trips for own vehicles" ON trips
  FOR SELECT USING (
    vehicle_id IN (SELECT id FROM vehicles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users see trip_points for own vehicles" ON trip_points
  FOR SELECT USING (
    trip_id IN (
      SELECT t.id FROM trips t
      JOIN vehicles v ON v.id = t.vehicle_id
      WHERE v.user_id = auth.uid()
    )
  );

CREATE POLICY "Users see alerts for own vehicles" ON alerts
  FOR SELECT USING (
    vehicle_id IN (SELECT id FROM vehicles WHERE user_id = auth.uid())
  );

CREATE POLICY "Users update alerts for own vehicles" ON alerts
  FOR UPDATE USING (
    vehicle_id IN (SELECT id FROM vehicles WHERE user_id = auth.uid())
  );
