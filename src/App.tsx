import React from 'react'
import usePassword from '@Hooks/usePassword'
import Generator from '@Components/generator'

export default function App() {
  const [ setEntry, generator ] = usePassword()

  return (
    <div>
      <Generator generator={generator} />
    </div>
  )
}
