import { Polyline, CircleMarker, Popup } from 'react-leaflet'
import type { TripPoint } from '@/types/database'

interface RoutePolylineProps {
  points: TripPoint[]
}

function getSpeedColor(speed: number): string {
  if (speed < 20) return '#22c55e'
  if (speed < 40) return '#84cc16'
  if (speed < 60) return '#eab308'
  if (speed < 80) return '#f97316'
  return '#ef4444'
}

export function RoutePolyline({ points }: RoutePolylineProps) {
  if (points.length < 2) return null

  const segments: { positions: [number, number][]; color: string }[] = []
  for (let i = 0; i < points.length - 1; i++) {
    const avgSpeed = (points[i].speed_kmh + points[i + 1].speed_kmh) / 2
    segments.push({
      positions: [
        [points[i].lat, points[i].lng],
        [points[i + 1].lat, points[i + 1].lng],
      ],
      color: getSpeedColor(avgSpeed),
    })
  }

  const startPoint = points[0]
  const endPoint = points[points.length - 1]

  return (
    <>
      {segments.map((seg, i) => (
        <Polyline
          key={i}
          positions={seg.positions}
          pathOptions={{
            color: seg.color,
            weight: 4,
            opacity: 0.8,
          }}
        />
      ))}

      <CircleMarker
        center={[startPoint.lat, startPoint.lng]}
        radius={6}
        pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 1, weight: 2 }}
      >
        <Popup>Start</Popup>
      </CircleMarker>

      <CircleMarker
        center={[endPoint.lat, endPoint.lng]}
        radius={6}
        pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 1, weight: 2 }}
      >
        <Popup>End</Popup>
      </CircleMarker>
    </>
  )
}
