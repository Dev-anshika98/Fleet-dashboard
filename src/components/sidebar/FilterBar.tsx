import { useDashboardStore } from '@/stores/dashboard-store'
import { STATUS_COLORS } from '@/lib/constants'
import type { VehicleStatus } from '@/types/database'

const STATUSES: { value: VehicleStatus; label: string }[] = [
  { value: 'active', label: 'Active' },
  { value: 'idle', label: 'Idle' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'offline', label: 'Offline' },
]

export function FilterBar() {
  const { statusFilter, toggleStatusFilter } = useDashboardStore()

  return (
    <div className="flex flex-wrap gap-1.5">
      {STATUSES.map(({ value, label }) => {
        const isActive = statusFilter.includes(value)
        return (
          <button
            key={value}
            onClick={() => toggleStatusFilter(value)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              isActive
                ? 'bg-[var(--color-foreground)] text-white'
                : 'bg-[var(--color-secondary)] text-[var(--color-muted-foreground)]'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: STATUS_COLORS[value], opacity: isActive ? 1 : 0.5 }}
            />
            {label}
          </button>
        )
      })}
    </div>
  )
}
