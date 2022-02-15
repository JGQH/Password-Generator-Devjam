import React, { useState, CSSProperties } from 'react'
import styles from './checkbox.module.scss'

interface CheckboxProps {
  prompt: string
  onChange: (isChecked:boolean) => void
  defaultValue?: boolean
}

export default function Checkbox({ prompt, onChange, defaultValue = false}:CheckboxProps) {
  const [ isChecked, setIsChecked ] = useState<boolean>(defaultValue)

  function onClick() {
    setIsChecked(!isChecked)
    onChange(!isChecked)
  }

  return (
    <div className={styles.container}>
      <div className={styles.prompt}>
        {prompt}
      </div>
      <div className={styles.checkbox}>
        <button onClick={onClick}>
          <div className={styles.checker} style={{ '--opacity': isChecked ? 1 : 0 } as CSSProperties}></div>
        </button>
      </div>
    </div>
  )
}
