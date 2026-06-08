import { Fuel, Gauge, Clock } from 'lucide-react'
import type { Vehicle } from '@/types/database'
import { STATUS_COLORS } from '@/lib/constants'
import { formatSpeed, timeAgo } from '@/lib/utils'

interface VehicleCardProps {
  vehicle: Vehicle
  onClick: () => void
}

export function VehicleCard({ vehicle, onClick }: VehicleCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-blue-50/30 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: STATUS_COLORS[vehicle.status] }}
            />
            <span className="text-sm font-medium text-[var(--color-foreground)] truncate">
              {vehicle.name}
            </span>
          </div>
          <div className="text-xs text-[var(--color-muted-foreground)] mt-0.5 ml-4">
            {vehicle.plate_number} &middot; {vehicle.driver_name}
          </div>
        </div>
        <span className="text-[10px] font-medium uppercase px-1.5 py-0.5 rounded bg-[var(--color-secondary)] text-[var(--color-muted-foreground)]">
          {vehicle.vehicle_type}
        </span>
      </div>

      <div className="flex items-center gap-4 mt-2 ml-4">
        <span className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)]">
          <Gauge className="w-3 h-3" />
          {formatSpeed(vehicle.last_speed)}
        </span>
        <span className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)]">
          <Fuel className="w-3 h-3" />
          {vehicle.fuel_level}%
        </span>
        <span className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)]">
          <Clock className="w-3 h-3" />
          {timeAgo(vehicle.last_seen)}
        </span>
      </div>
    </button>
  )
}
