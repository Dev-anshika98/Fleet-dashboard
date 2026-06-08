import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import type { Alert } from '@/types/database'

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (fetchedRef.current) return
    fetchedRef.current = true

    async function fetchAlerts() {
      const { data } = await supabase
        .from('alerts')
        .select('*')
        .order('triggered_at', { ascending: false })

      setAlerts(data ?? [])
      setLoading(false)
    }

    fetchAlerts()
  }, [])

  const resolveAlert = async (alertId: string) => {
    const { error } = await supabase
      .from('alerts')
      .update({ resolved: true, resolved_at: new Date().toISOString() } as never)
      .eq('id', alertId)

    if (!error) {
      setAlerts((prev) =>
        prev.map((a) => a.id === alertId ? { ...a, resolved: true, resolved_at: new Date().toISOString() } : a)
      )
    }
  }

  return { alerts, loading, resolveAlert }
}
