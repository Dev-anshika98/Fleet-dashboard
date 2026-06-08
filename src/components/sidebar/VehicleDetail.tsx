import { ArrowLeft, Fuel, Gauge, Clock, MapPin, Route } from 'lucide-react'
import type { Vehicle } from '@/types/database'
import { STATUS_COLORS } from '@/lib/constants'
import { formatSpeed, formatDistance, timeAgo } from '@/lib/utils'
import { useTrips } from '@/hooks/useTrips'
import { TripHistory } from './TripHistory'

interface VehicleDetailProps {
  vehicle: Vehicle
  onBack: () => void
}

export function VehicleDetail({ vehicle, onBack }: VehicleDetailProps) {
  const { trips, loading: tripsLoading } = useTrips(vehicle.id)

  const todayTrips = trips.filter((t) => {
    const tripDate = new Date(t.start_time)
    const today = new Date()
    return tripDate.toDateString() === today.toDateString()
  })

  const summaryTrips = todayTrips.length > 0 ? todayTrips : trips
  const todayDistance = summaryTrips.reduce((sum, t) => sum + t.distance_km, 0)
  const todayIdleTime = summaryTrips.reduce((sum, t) => sum + t.idle_time_min, 0)
  const todayHalts = summaryTrips.reduce((sum, t) => sum + t.halt_count, 0)

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="p-3 border-b border-[var(--color-border)] shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-[var(--color-foreground)]">{vehicle.name}</h3>
            <p className="text-xs text-[var(--color-muted-foreground)] mt-0.5">
              {vehicle.plate_number} &middot; {vehicle.driver_name}
            </p>
          </div>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full text-white capitalize"
            style={{ background: STATUS_COLORS[vehicle.status] }}
          >
            {vehicle.status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="flex items-center gap-1.5 text-xs">
            <Fuel className="w-3.5 h-3.5 text-[var(--color-muted-foreground)]" />
            <span className="font-medium">{vehicle.fuel_level}%</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Gauge className="w-3.5 h-3.5 text-[var(--color-muted-foreground)]" />
            <span className="font-medium">{formatSpeed(vehicle.last_speed)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Clock className="w-3.5 h-3.5 text-[var(--color-muted-foreground)]" />
            <span className="font-medium">{timeAgo(vehicle.last_seen)}</span>
          </div>
        </div>
      </div>

      <div className="p-3 border-b border-[var(--color-border)] shrink-0">
        <h4 className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide mb-2">
          {todayTrips.length > 0 ? "Today’s Summary" : "Summary"}
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 p-2 rounded-md bg-[var(--color-secondary)]">
            <Route className="w-4 h-4 text-[var(--color-primary)]" />
            <div>
              <div className="text-sm font-semibold">{formatDistance(todayDistance)}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)]">Distance</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md bg-[var(--color-secondary)]">
            <MapPin className="w-4 h-4 text-[var(--color-status-idle)]" />
            <div>
              <div className="text-sm font-semibold">{summaryTrips.length}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)]">Trips</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md bg-[var(--color-secondary)]">
            <Clock className="w-4 h-4 text-[var(--color-status-maintenance)]" />
            <div>
              <div className="text-sm font-semibold">{todayIdleTime}m</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)]">Idle time</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md bg-[var(--color-secondary)]">
            <MapPin className="w-4 h-4 text-[var(--color-muted-foreground)]" />
            <div>
              <div className="text-sm font-semibold">{todayHalts}</div>
              <div className="text-[10px] text-[var(--color-muted-foreground)]">Halts</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-3">
          <h4 className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide mb-2">
            Trip History
          </h4>
          {tripsLoading ? (
            <div className="text-center py-4 text-sm text-[var(--color-muted-foreground)]">Loading...</div>
          ) : (
            <TripHistory trips={trips} />
          )}
        </div>
      </div>
    </div>
  )
}
