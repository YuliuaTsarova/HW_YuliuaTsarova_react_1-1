import styles from './Title.module.css'

export const Title = () => {
    const title = 'Check our Price List'
    return (
        <>
        <h1 className={styles.title}>{title}</h1>

        </>
    )
}