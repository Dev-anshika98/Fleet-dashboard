import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import type { Vehicle } from '@/types/database'

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (fetchedRef.current) return
    fetchedRef.current = true

    async function fetchVehicles() {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .order('fleet_id', { ascending: true })

      if (error) {
        setError(error.message)
      } else {
        setVehicles(data ?? [])
      }
      setLoading(false)
    }

    fetchVehicles()
  }, [])

  return { vehicles, loading, error }
}
