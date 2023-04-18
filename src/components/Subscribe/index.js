import React from 'react'
import styles from './subscribe.module.css'
export const Subscribe = () => {
  return (
    <div className={styles.Subscribe_wrapper}>
        <h3>Subscribe</h3>
        <p>By subscribing to our newsletter, you'll gain access to exclusive content, and important updates from our company.</p>
        <form>
            <input type='text' placeholder='Enter Your Email'></input>
            <button>Subscribe</button>
        </form>
    </div>
  )
}
