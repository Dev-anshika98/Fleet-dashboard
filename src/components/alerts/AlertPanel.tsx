import { AlertTriangle, CheckCircle } from 'lucide-react'
import { useAlerts } from '@/hooks/useAlerts'
import { ALERT_SEVERITY_COLORS } from '@/lib/constants'
import { timeAgo } from '@/lib/utils'

export function AlertPanel() {
  const { alerts, loading, resolveAlert } = useAlerts()

  const unresolved = alerts.filter((a) => !a.resolved)
  const resolved = alerts.filter((a) => a.resolved)

  if (loading) {
    return <div className="p-4 text-center text-sm text-[var(--color-muted-foreground)]">Loading alerts...</div>
  }

  if (alerts.length === 0) {
    return (
      <div className="p-8 text-center">
        <CheckCircle className="w-8 h-8 mx-auto text-[var(--color-status-active)] mb-2" />
        <p className="text-sm text-[var(--color-muted-foreground)]">All clear! No alerts.</p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-3 space-y-4">
      {unresolved.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide mb-2">
            Active ({unresolved.length})
          </h4>
          <div className="space-y-2">
            {unresolved.map((alert) => (
              <div
                key={alert.id}
                className="p-3 rounded-lg border border-[var(--color-border)] bg-white"
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: ALERT_SEVERITY_COLORS[alert.severity] }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded text-white"
                        style={{ background: ALERT_SEVERITY_COLORS[alert.severity] }}
                      >
                        {alert.severity}
                      </span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {timeAgo(alert.triggered_at)}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-foreground)] mt-1">{alert.message}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-[var(--color-muted-foreground)] capitalize">
                        {alert.type.replace('_', ' ')}
                      </span>
                      <button
                        onClick={() => resolveAlert(alert.id)}
                        className="text-[10px] font-medium text-[var(--color-primary)] hover:underline ml-auto"
                      >
                        Resolve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {resolved.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide mb-2">
            Resolved ({resolved.length})
          </h4>
          <div className="space-y-2 opacity-60">
            {resolved.slice(0, 5).map((alert) => (
              <div
                key={alert.id}
                className="p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-secondary)]"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-status-active)]" />
                  <span className="text-xs text-[var(--color-muted-foreground)] truncate">{alert.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
