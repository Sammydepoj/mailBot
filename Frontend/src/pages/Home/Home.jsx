import { React } from 'react'
import styles from './Home.module.css'
import { useAppContext } from '../../Context/Context'


const Home = () => {

    const { error, data, handleNavigate, handleChange } = useAppContext()

    return (
        <div className={styles.container}>
            <div>
                <h1>Add a Valid Email</h1>

                <div className={styles.formContainer}>
                    <input type="text"
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input type="submit" value='Continue'
                        onClick={handleNavigate}
                    />
                </div>
                {error ? <p>Please insert a valid mail</p> : ''}
            </div>
        </div>
    )
}

export default Home