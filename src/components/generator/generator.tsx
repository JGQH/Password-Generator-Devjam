import React, { useState } from 'react'
import useClipboard from '@Hooks/useClipboard'
import styles from './generator.module.scss'

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
    <div className={styles.container}>
      <button className={styles.generate} onClick={createPassword}>
        Generate
      </button>
      <div className={styles.display}>
        <div className={styles.content}>
          {password}
        </div>
      </div>
      <button className={styles.copy} onClick={copyToClipboard} disabled={password === ''} >
        Copy
      </button>
      {isCopied && <div className={styles.success}>Copied!</div>}
    </div>
  )
}
