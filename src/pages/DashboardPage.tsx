import { useState, useCallback } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { StatsBar } from '@/components/stats/StatsBar'
import { FleetMap } from '@/components/map/FleetMap'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { useVehicles } from '@/hooks/useVehicles'
import { useAlerts } from '@/hooks/useAlerts'
import { useDashboardStore } from '@/stores/dashboard-store'

export function DashboardPage() {
  const { vehicles, loading } = useVehicles()
  const { alerts } = useAlerts()
  const { selectVehicle } = useDashboardStore()
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
        <div className="flex-1 flex overflow-hidden px-3 pb-3 gap-3">
          <div className="flex-[3] min-w-0">
            <FleetMap
              vehicles={vehicles}
              flyToVehicle={flyToVehicle}
              onFlyComplete={handleFlyComplete}
            />
          </div>
          <div className="w-[360px] shrink-0">
            <Sidebar vehicles={vehicles} onVehicleSelect={handleVehicleSelect} />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
