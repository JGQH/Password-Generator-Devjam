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
      <div>
        <div>
          Include Uppercase letters:
        </div>
        <div>
          <input type='checkbox' onChange={e => setEntry('uppercase', e.target.checked)} />
        </div>
      </div>
      <div>
        <div>
          Include Lowercase letters:
        </div>
        <div>
          <input type='checkbox' defaultChecked={true} onChange={e => setEntry('lowercase', e.target.checked)} />
        </div>
      </div>
      <div>
        <div>
          Include numbers:
        </div>
        <div>
          <input type='checkbox' onChange={e => setEntry('numbers', e.target.checked)} />
        </div>
      </div>
      <div>
        <div>
          Include symbols:
        </div>
        <div>
          <input type='checkbox' onChange={e => setEntry('symbols', e.target.checked)} />
        </div>
      </div>
      <Generator generator={generator} />
    </div>
  )
}
