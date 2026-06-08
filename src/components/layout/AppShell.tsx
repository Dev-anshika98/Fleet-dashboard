import { Truck, Bell, LogOut } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useAlerts } from '@/hooks/useAlerts'

export function AppShell({ children }: { children: React.ReactNode }) {
  const { signOut, user } = useAuth()
  const { alerts } = useAlerts()
  const unresolvedCount = alerts.filter((a) => !a.resolved).length

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="h-14 border-b border-[var(--color-border)] bg-white flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-[var(--color-foreground)]">FleetPulse</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="w-5 h-5 text-[var(--color-muted-foreground)]" />
            {unresolvedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-destructive)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unresolvedCount > 9 ? '9+' : unresolvedCount}
              </span>
            )}
          </div>
          <span className="text-sm text-[var(--color-muted-foreground)] hidden sm:block">
            {user?.email}
          </span>
          <button
            onClick={signOut}
            className="p-1.5 rounded-md hover:bg-[var(--color-secondary)] transition-colors"
            title="Sign out"
          >
            <LogOut className="w-4 h-4 text-[var(--color-muted-foreground)]" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
