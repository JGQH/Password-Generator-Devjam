import { useState } from 'react'

export default function useForm<T>(defaultValues:T) {
  const [ entries, setEntries ] = useState<T>(defaultValues)

  function setEntry<K extends keyof T>(entry:K, value:T[K]) {
    setEntries({ ...entries, [entry]: value })
  }

  return [ entries, setEntry ] as const
}
