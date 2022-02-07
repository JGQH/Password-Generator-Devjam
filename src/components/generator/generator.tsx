import useClipboard from '@Hooks/useClipboard'
import React, { useState } from 'react'

interface GeneratorProps {
  generator: () => string
}

export default function Generator({ generator }:GeneratorProps ) {
  const [ password, setPassword ] = useState<string>('')
  const [ isCopied, setClipboard ] = useClipboard()

  function createPassword() {
    setPassword(generator())
  }

  function copyToClipboard() {
    setClipboard(password)
  }

  return (
    <div>
      <button onClick={createPassword}>
        Generate
      </button>
      <div>
        {password}
      </div>
      <button onClick={copyToClipboard} disabled={password === ''} >
        Copy
      </button>
      {isCopied && <div>Copied!</div>}
    </div>
  )
}
