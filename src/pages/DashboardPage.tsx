import { useState, useCallback } from 'react'
import { List } from 'lucide-react'
import { AppShell } from '@/components/layout/AppShell'
import { StatsBar } from '@/components/stats/StatsBar'
import { FleetMap } from '@/components/map/FleetMap'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { MobileSidebarDrawer } from '@/components/sidebar/MobileSidebarDrawer'
import { useVehicles } from '@/hooks/useVehicles'
import { useAlerts } from '@/hooks/useAlerts'
import { useDashboardStore } from '@/stores/dashboard-store'

export function DashboardPage() {
  const { vehicles, loading } = useVehicles()
  const { alerts } = useAlerts()
  const { selectVehicle, toggleMobileSidebar } = useDashboardStore()
  const [flyToVehicle, setFlyToVehicle] = useState<string | null>(null)

  const handleVehicleSelect = useCallback((id: string) => {
    selectVehicle(id)
    setFlyToVehicle(id)
  }, [selectVehicle])

  const handleFlyComplete = useCallback(() => {
    setFlyToVehicle(null)
  }, [])

  if (loading) {
    return (
      <AppShell>
        <div className="h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
        </div>
      </AppShell>
    )
  }

  return (
    <AppShell>
      <div className="h-full flex flex-col">
        <StatsBar vehicles={vehicles} alerts={alerts} />
        <div className="flex-1 flex overflow-hidden px-2 pb-2 gap-2 md:px-3 md:pb-3 md:gap-3 relative">
          <div className="flex-1 lg:flex-[3] min-w-0 relative">
            <FleetMap
              vehicles={vehicles}
              flyToVehicle={flyToVehicle}
              onFlyComplete={handleFlyComplete}
            />
            <button
              onClick={toggleMobileSidebar}
              className="md:hidden absolute bottom-4 right-4 z-[1000] w-12 h-12 bg-[var(--color-primary)] text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Toggle vehicle list"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:block md:w-[300px] lg:w-[360px] shrink-0 overflow-hidden">
            <Sidebar vehicles={vehicles} onVehicleSelect={handleVehicleSelect} />
          </div>
          <MobileSidebarDrawer vehicles={vehicles} onVehicleSelect={handleVehicleSelect} />
        </div>
      </div>
    </AppShell>
  )
}
