import React from 'react'
import styles from './styles.module.css'
import Kaka from './Kaka'

export const ExampleComponent = ({ text, tata }) => {
  return (
    <div>
      <h3>Nguyen Van Quang hoho {tata}</h3>
      <h4>Love Dang</h4>
      <div className={styles.test}>Example Component: {text}</div>
      <Kaka />
      <div>Toi muon test thu xem sao</div>
      <div>dong thu 2</div>
      <div>dong thu 3</div>
      <div>viet vi 123</div>
    </div>
  )
}
