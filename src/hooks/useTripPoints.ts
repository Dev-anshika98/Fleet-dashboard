import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { TripPoint } from '@/types/database'

export function useTripPoints(tripId: string | null) {
  const [points, setPoints] = useState<TripPoint[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!tripId) {
      setPoints([])
      return
    }

    setLoading(true)
    supabase
      .from('trip_points')
      .select('*')
      .eq('trip_id', tripId)
      .order('seq', { ascending: true })
      .then(({ data }) => {
        setPoints(data ?? [])
        setLoading(false)
      })
  }, [tripId])

  return { points, loading }
}
