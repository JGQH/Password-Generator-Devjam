import { useState, useEffect } from 'react'

export default function useClipboard(timeout:number = 1500) {
  const [ success, setSuccess ] = useState(false)

  useEffect(() => {
    if(success) {
      let timer = setTimeout(() => {
        setSuccess(false)
      }, timeout)

      return () => clearTimeout(timer)
    }

  }, [ success ])

  async function setClipboard(text:string) {
    try {
      navigator.clipboard.writeText(text)
      setSuccess(true)
    } catch(e) {
      console.error((e as Error).message)
    }
  }

  return [ success, setClipboard ] as const
}
