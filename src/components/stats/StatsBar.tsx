import { Truck, Activity, PauseCircle, AlertTriangle } from 'lucide-react'
import type { Vehicle, Alert } from '@/types/database'
import { useDashboardStore } from '@/stores/dashboard-store'

interface StatsBarProps {
  vehicles: Vehicle[]
  alerts: Alert[]
}

export function StatsBar({ vehicles, alerts }: StatsBarProps) {
  const { setStatusFilter } = useDashboardStore()
  const activeCount = vehicles.filter((v) => v.status === 'active').length
  const idleCount = vehicles.filter((v) => v.status === 'idle').length
  const alertCount = alerts.filter((a) => !a.resolved).length

  const stats = [
    {
      label: 'Total Fleet',
      value: vehicles.length,
      icon: Truck,
      color: 'var(--color-primary)',
      onClick: () => setStatusFilter(['active', 'idle', 'maintenance', 'offline']),
    },
    {
      label: 'Active',
      value: activeCount,
      icon: Activity,
      color: 'var(--color-status-active)',
      onClick: () => setStatusFilter(['active']),
    },
    {
      label: 'Idle',
      value: idleCount,
      icon: PauseCircle,
      color: 'var(--color-status-idle)',
      onClick: () => setStatusFilter(['idle']),
    },
    {
      label: 'Alerts',
      value: alertCount,
      icon: AlertTriangle,
      color: 'var(--color-destructive)',
      onClick: () => {},
      pulse: alertCount > 0,
    },
  ]

  return (
    <div className="flex items-center gap-3 p-3 overflow-x-auto shrink-0">
      {stats.map((stat) => (
        <button
          key={stat.label}
          onClick={stat.onClick}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors min-w-[130px]"
        >
          <stat.icon
            className={`w-5 h-5 shrink-0 ${stat.pulse ? 'alert-pulse' : ''}`}
            style={{ color: stat.color }}
          />
          <div className="text-left">
            <div className="text-lg font-semibold text-[var(--color-foreground)] leading-tight">
              {stat.value}
            </div>
            <div className="text-[10px] text-[var(--color-muted-foreground)] uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
