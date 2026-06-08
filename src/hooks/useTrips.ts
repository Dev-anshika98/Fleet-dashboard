import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Trip } from '@/types/database'

export function useTrips(vehicleId: string | null) {
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!vehicleId) {
      setTrips([])
      return
    }

    setLoading(true)
    supabase
      .from('trips')
      .select('*')
      .eq('vehicle_id', vehicleId)
      .order('start_time', { ascending: false })
      .limit(10)
      .then(({ data }) => {
        setTrips(data ?? [])
        setLoading(false)
      })
  }, [vehicleId])

  return { trips, loading }
}
