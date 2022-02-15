import React, {useState} from 'react'
import styles from './numberinput.module.scss'

interface NumberInputProps {
  prompt: string
  onChange: (newValue:number) => void
  max: number
  min: number
}

export default function NumberInput({ prompt, onChange, max, min }:NumberInputProps) {
  const [ inputValue, setInputValue ] = useState<number>(min)

  function changeValue(value:string) {
    try {
      const numValue = +value

      if(isNaN(numValue)) return

      const newValue = Math.max(min, Math.min(numValue, max)) // Make sure value is between interval
      setInputValue(newValue)
      onChange(newValue)
    } catch (e) {
      // Do not admit values that are not integers
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.prompt}>
        {prompt}
      </div>
      <div className={styles.display}>
        <input type='text' onChange={e => changeValue(e.target.value)} value={inputValue} />
      </div>
    </div>
  )
}
