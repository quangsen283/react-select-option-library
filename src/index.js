import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, tata }) => {
  return (
    <div>
      <h3>Nguyen Van Quang hoho {tata}</h3>
      <h4>Love Dang</h4>
      <div className={styles.test}>Example Component: {text}</div>
    </div>
  )
}
