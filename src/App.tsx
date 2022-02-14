import React from 'react'
import Generator from '@Components/generator'
import NumberInput from '@Components/numberinput'
import Checkbox from '@Components/checkbox'
import usePassword from '@Hooks/usePassword'
import styles from './App.module.scss'

export default function App() {
  const [ setEntry, generator ] = usePassword()

  return (
    <div className={styles.container}>
      <div className={styles.prompt}>
        <h1>Password Generator</h1>
      </div>
      <NumberInput prompt='Password Length:' onChange={newValue => setEntry('length', newValue)} max={100} min={10} />
      <Checkbox prompt='Include Uppercase letters:' onChange={isChecked => setEntry('uppercase', isChecked)} />
      <Checkbox prompt='Include Lowercase letters:' defaultValue={true} onChange={isChecked => setEntry('lowercase', isChecked)} />
      <Checkbox prompt='Include Numbers:' onChange={isChecked => setEntry('numbers', isChecked)} />
      <Checkbox prompt='Include Symbols:' onChange={isChecked => setEntry('symbols', isChecked)} />
      <Generator generator={generator} />
    </div>
  )
}
