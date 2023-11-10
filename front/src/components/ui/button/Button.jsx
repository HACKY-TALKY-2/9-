import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <div className={styles.button} onClick={()=>{props.onClick();}}>{props.text}</div>
  )
}

export default Button