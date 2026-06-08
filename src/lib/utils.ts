import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSpeed(speed: number): string {
  return `${Math.round(speed)} km/h`
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${km.toFixed(1)} km`
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${Math.round(minutes)} min`
  const hrs = Math.floor(minutes / 60)
  const mins = Math.round(minutes % 60)
  return mins > 0 ? `${hrs}h ${mins}m` : `${hrs}h`
}

export function formatFuel(level: number): string {
  return `${level}%`
}

export function timeAgo(date: Date | string): string {
  const now = new Date()
  const then = new Date(date)
  const diffMs = now.getTime() - then.getTime()
  const diffMins = Math.floor(diffMs / 60000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHrs = Math.floor(diffMins / 60)
  if (diffHrs < 24) return `${diffHrs}h ago`
  const diffDays = Math.floor(diffHrs / 24)
  return `${diffDays}d ago`
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'active': return 'var(--color-status-active)'
    case 'idle': return 'var(--color-status-idle)'
    case 'maintenance': return 'var(--color-status-maintenance)'
    case 'offline': return 'var(--color-status-offline)'
    default: return 'var(--color-muted-foreground)'
  }
}
