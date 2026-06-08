import { Search } from 'lucide-react'
import { useDashboardStore } from '@/stores/dashboard-store'
import { VehicleCard } from './VehicleCard'
import { FilterBar } from './FilterBar'
import type { Vehicle } from '@/types/database'

interface VehicleListProps {
  vehicles: Vehicle[]
  onSelect: (id: string) => void
}

export function VehicleList({ vehicles, onSelect }: VehicleListProps) {
  const { searchQuery, setSearchQuery, statusFilter } = useDashboardStore()

  const filtered = vehicles.filter((v) => {
    if (!statusFilter.includes(v.status)) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return (
        v.name.toLowerCase().includes(q) ||
        v.plate_number.toLowerCase().includes(q) ||
        v.driver_name.toLowerCase().includes(q) ||
        v.fleet_id.toLowerCase().includes(q)
      )
    }
    return true
  })

  return (
    <div className="h-full flex flex-col">
      <div className="p-3 space-y-2 shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vehicles, drivers..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[var(--color-input)] bg-[var(--color-secondary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] focus:border-transparent"
          />
        </div>
        <FilterBar />
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-2">
        {filtered.length === 0 ? (
          <div className="text-center py-8 text-sm text-[var(--color-muted-foreground)]">
            No vehicles match your filters
          </div>
        ) : (
          filtered.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onClick={() => onSelect(vehicle.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}
