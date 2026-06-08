import { useDashboardStore } from '@/stores/dashboard-store'
import { VehicleList } from './VehicleList'
import { VehicleDetail } from './VehicleDetail'
import { AlertPanel } from '../alerts/AlertPanel'
import type { Vehicle } from '@/types/database'

interface SidebarProps {
  vehicles: Vehicle[]
  onVehicleSelect: (id: string) => void
}

export function Sidebar({ vehicles, onVehicleSelect }: SidebarProps) {
  const { sidebarView, sidebarTab, selectedVehicleId, setSidebarTab, clearSelection } = useDashboardStore()

  const selectedVehicle = vehicles.find((v) => v.id === selectedVehicleId) ?? null

  return (
    <div className="h-full flex flex-col bg-white border-l border-[var(--color-border)]">
      {sidebarView === 'detail' && selectedVehicle ? (
        <VehicleDetail vehicle={selectedVehicle} onBack={clearSelection} />
      ) : (
        <>
          <div className="flex border-b border-[var(--color-border)] shrink-0">
            <button
              onClick={() => setSidebarTab('vehicles')}
              className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                sidebarTab === 'vehicles'
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]'
                  : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
              }`}
            >
              Vehicles
            </button>
            <button
              onClick={() => setSidebarTab('alerts')}
              className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                sidebarTab === 'alerts'
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]'
                  : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
              }`}
            >
              Alerts
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            {sidebarTab === 'vehicles' ? (
              <VehicleList vehicles={vehicles} onSelect={onVehicleSelect} />
            ) : (
              <AlertPanel />
            )}
          </div>
        </>
      )}
    </div>
  )
}
