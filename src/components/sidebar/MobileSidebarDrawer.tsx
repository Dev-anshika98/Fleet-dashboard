import { X } from 'lucide-react'
import { useDashboardStore } from '@/stores/dashboard-store'
import { Sidebar } from './Sidebar'
import type { Vehicle } from '@/types/database'

interface MobileSidebarDrawerProps {
  vehicles: Vehicle[]
  onVehicleSelect: (id: string) => void
}

export function MobileSidebarDrawer({ vehicles, onVehicleSelect }: MobileSidebarDrawerProps) {
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useDashboardStore()

  return (
    <>
      {isMobileSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-[1001]"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-[1002] bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '75vh' }}
      >
        <div className="flex items-center justify-center p-3 border-b border-[var(--color-border)] relative">
          <div className="w-10 h-1 bg-[var(--color-border)] rounded-full" />
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="absolute right-3 top-3 p-1.5 rounded-md hover:bg-[var(--color-secondary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="h-[calc(75vh-3rem)] overflow-hidden">
          <Sidebar vehicles={vehicles} onVehicleSelect={onVehicleSelect} />
        </div>
      </div>
    </>
  )
}
