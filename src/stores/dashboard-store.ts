import { create } from 'zustand'
import type { VehicleStatus } from '@/types/database'

interface DashboardState {
  selectedVehicleId: string | null
  selectedTripId: string | null
  statusFilter: VehicleStatus[]
  searchQuery: string
  sidebarView: 'list' | 'detail'
  sidebarTab: 'vehicles' | 'alerts'

  selectVehicle: (id: string | null) => void
  selectTrip: (id: string | null) => void
  setStatusFilter: (statuses: VehicleStatus[]) => void
  toggleStatusFilter: (status: VehicleStatus) => void
  setSearchQuery: (query: string) => void
  setSidebarTab: (tab: 'vehicles' | 'alerts') => void
  clearSelection: () => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  selectedVehicleId: null,
  selectedTripId: null,
  statusFilter: ['active', 'idle', 'maintenance', 'offline'],
  searchQuery: '',
  sidebarView: 'list',
  sidebarTab: 'vehicles',

  selectVehicle: (id) => set({
    selectedVehicleId: id,
    sidebarView: id ? 'detail' : 'list',
    selectedTripId: null,
  }),

  selectTrip: (id) => set({ selectedTripId: id }),

  setStatusFilter: (statuses) => set({ statusFilter: statuses }),

  toggleStatusFilter: (status) => set((state) => {
    const current = state.statusFilter
    const next = current.includes(status)
      ? current.filter((s) => s !== status)
      : [...current, status]
    return { statusFilter: next.length > 0 ? next : current }
  }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSidebarTab: (tab) => set({ sidebarTab: tab }),

  clearSelection: () => set({
    selectedVehicleId: null,
    selectedTripId: null,
    sidebarView: 'list',
  }),
}))
