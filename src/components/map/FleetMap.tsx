import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { VehicleMarker } from './VehicleMarker'
import { RoutePolyline } from './RoutePolyline'
import { BANGALORE_CENTER, DEFAULT_ZOOM, MAP_TILE_URL, MAP_ATTRIBUTION, VEHICLE_ZOOM } from '@/lib/constants'
import { useDashboardStore } from '@/stores/dashboard-store'
import { useTripPoints } from '@/hooks/useTripPoints'
import type { Vehicle } from '@/types/database'

interface FleetMapProps {
  vehicles: Vehicle[]
  flyToVehicle: string | null
  onFlyComplete: () => void
}

function MapController({ flyToVehicle, vehicles, onFlyComplete }: { flyToVehicle: string | null; vehicles: Vehicle[]; onFlyComplete: () => void }) {
  const map = useMap()

  useEffect(() => {
    if (flyToVehicle) {
      const vehicle = vehicles.find((v) => v.id === flyToVehicle)
      if (vehicle) {
        map.flyTo([vehicle.last_lat, vehicle.last_lng], VEHICLE_ZOOM, { duration: 0.8 })
        onFlyComplete()
      }
    }
  }, [flyToVehicle, vehicles, map, onFlyComplete])

  return null
}

export function FleetMap({ vehicles, flyToVehicle, onFlyComplete }: FleetMapProps) {
  const { selectedVehicleId, selectedTripId, selectVehicle, statusFilter } = useDashboardStore()
  const { points } = useTripPoints(selectedTripId)

  const filteredVehicles = vehicles.filter((v) => statusFilter.includes(v.status))

  return (
    <MapContainer
      center={[BANGALORE_CENTER.lat, BANGALORE_CENTER.lng]}
      zoom={DEFAULT_ZOOM}
      className="h-full w-full rounded-lg"
      zoomControl={true}
    >
      <TileLayer url={MAP_TILE_URL} attribution={MAP_ATTRIBUTION} />
      <MapController flyToVehicle={flyToVehicle} vehicles={vehicles} onFlyComplete={onFlyComplete} />

      {filteredVehicles.map((vehicle) => (
        <VehicleMarker
          key={vehicle.id}
          vehicle={vehicle}
          isSelected={vehicle.id === selectedVehicleId}
          onClick={() => selectVehicle(vehicle.id)}
        />
      ))}

      {points.length > 0 && <RoutePolyline points={points} />}
    </MapContainer>
  )
}
