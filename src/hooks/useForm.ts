import { useState } from 'react'

export default function useForm<T extends string, P = string|number>(defaultValues:Record<T, P>) {
  const [ entries, setEntries ] = useState<Record<T, P>>(defaultValues)

  function setEntry(entry:T,value:P) {
    setEntries({ [entry]:value, ...entries })
  }

  return [ entries, setEntry ] as const
}
