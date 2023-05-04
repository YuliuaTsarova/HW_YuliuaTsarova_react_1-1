import styles from './Description.module.css'

export const Description = () => {
    const description = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth'
    return (
        <>
        <p className={styles.description}>{description}</p>

        </>
    )
}