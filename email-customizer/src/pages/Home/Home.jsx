import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Add a Valid Email</h1>

                <div className={styles.formContainer}>
                    <input type="text" />
                    <input type="submit" value='Continue' />
                </div>
            </div>
        </div>
    )
}

export default Home