import React from 'react'
import usePassword from '@Hooks/usePassword'
import Generator from '@Components/generator'

export default function App() {
  const [ setEntry, generator ] = usePassword()

  return (
    <div>
      <div>
        <h1>Password Generator</h1>
      </div>
      <div>
        <div>
          Password Length:
        </div>
        <div>
          <input type='number' min='10' max='100' defaultValue='20' onChange={e => setEntry('length', +e.target.value)} />
        </div>
      </div>
      <Generator generator={generator} />
    </div>
  )
}
