import { format } from 'date-fns'
import { useDashboardStore } from '@/stores/dashboard-store'
import { formatDistance, formatDuration, formatSpeed } from '@/lib/utils'
import type { Trip } from '@/types/database'

interface TripHistoryProps {
  trips: Trip[]
}

export function TripHistory({ trips }: TripHistoryProps) {
  const { selectedTripId, selectTrip } = useDashboardStore()

  if (trips.length === 0) {
    return (
      <div className="text-center py-4 text-sm text-[var(--color-muted-foreground)]">
        No trips recorded
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {trips.map((trip) => {
        const isSelected = trip.id === selectedTripId
        const startTime = new Date(trip.start_time)
        const endTime = trip.end_time ? new Date(trip.end_time) : null
        const durationMin = endTime
          ? (endTime.getTime() - startTime.getTime()) / 60000
          : 0

        return (
          <button
            key={trip.id}
            onClick={() => selectTrip(isSelected ? null : trip.id)}
            className={`w-full text-left p-2.5 rounded-lg border transition-all ${
              isSelected
                ? 'border-[var(--color-primary)] bg-blue-50/50'
                : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--color-foreground)]">
                {format(startTime, 'h:mm a')}
                {endTime && ` → ${format(endTime, 'h:mm a')}`}
              </span>
              <span className="text-xs text-[var(--color-muted-foreground)]">
                {formatDistance(trip.distance_km)}
              </span>
            </div>
            <div className="text-[11px] text-[var(--color-muted-foreground)] mt-1">
              {trip.start_location} → {trip.end_location}
            </div>
            <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[var(--color-muted-foreground)]">
              <span>{formatDuration(durationMin)}</span>
              <span>Avg {formatSpeed(trip.avg_speed_kmh)}</span>
              <span>Max {formatSpeed(trip.max_speed_kmh)}</span>
              {trip.halt_count > 0 && <span>{trip.halt_count} halts</span>}
            </div>
          </button>
        )
      })}
    </div>
  )
}
