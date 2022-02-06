import React, { useState } from 'react'

interface GeneratorProps {
  generator: () => string
}

export default function Generator({ generator }:GeneratorProps ) {
  const [ password, setPassword ] = useState<string>('')

  function createPassword() {
    setPassword(generator())
  }

  return (
    <div>
      <button onClick={createPassword}>
        Generate
      </button>
      <div>
        {password}
      </div>
    </div>
  )
}
