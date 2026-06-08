import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { Vehicle } from '@/types/database'
import { STATUS_COLORS } from '@/lib/constants'
import { formatSpeed, timeAgo } from '@/lib/utils'

interface VehicleMarkerProps {
  vehicle: Vehicle
  isSelected: boolean
  onClick: () => void
}

function createVehicleIcon(vehicle: Vehicle, isSelected: boolean): L.DivIcon {
  const color = STATUS_COLORS[vehicle.status]
  const size = isSelected ? 36 : 28
  const borderColor = isSelected ? '#2563eb' : color
  const borderWidth = isSelected ? 3 : 2

  return L.divIcon({
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: white;
        border: ${borderWidth}px solid ${borderColor};
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transition: all 0.2s ease;
        ${isSelected ? 'box-shadow: 0 0 0 4px rgba(37,99,235,0.2), 0 2px 8px rgba(0,0,0,0.15);' : ''}
      ">
        <div style="
          width: ${size - 12}px;
          height: ${size - 12}px;
          border-radius: 50%;
          background: ${color};
          opacity: ${vehicle.status === 'offline' ? 0.5 : 1};
        "></div>
      </div>
    `,
  })
}

export function VehicleMarker({ vehicle, isSelected, onClick }: VehicleMarkerProps) {
  const icon = createVehicleIcon(vehicle, isSelected)

  return (
    <Marker
      position={[vehicle.last_lat, vehicle.last_lng]}
      icon={icon}
      eventHandlers={{ click: onClick }}
    >
      <Popup>
        <div className="min-w-[180px]">
          <div className="font-semibold text-sm">{vehicle.name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{vehicle.plate_number}</div>
          <div className="flex items-center gap-3 mt-2 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: STATUS_COLORS[vehicle.status] }} />
              {vehicle.status}
            </span>
            <span>{formatSpeed(vehicle.last_speed)}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {vehicle.driver_name} &middot; {timeAgo(vehicle.last_seen)}
          </div>
        </div>
      </Popup>
    </Marker>
  )
}
