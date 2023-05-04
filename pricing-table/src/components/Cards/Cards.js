import styles from './Cards.module.css'
import { cards } from '../../data/cards'

export const Cards = () => {
    return (
        <div className={styles.cards}>

            {
                cards.map(item => {
                    const cardBorder = item.cardBorder ? styles.cardBorder : styles.card
                    const sale = item.sale ? styles.sale : styles.price
                    const buttoncolor = item.buttoncolor ? styles.buttoncolor : styles.button
                    const statuss = item.statuss ? styles.statuss : ''
                    return (
                        <div>
                            <div className={[styles.card, cardBorder].join(' ')} key={item.id}>
                                <div className={styles.card__name}>
                                    <div className={statuss}><span>{item.statussname}</span></div>
                                    <h3 className={styles.card__title}>{item.card__title}</h3>
                                </div>
                                <div className={[styles.price, sale].join(' ')}><span className={styles.priсe__coin}>{item.priсe__coin}</span>{item.price}</div>
                                <p className={styles.text}>{item.text}</p>
                                <p className={styles.unit}>{item.unit}</p>
                                <button className={[styles.button, buttoncolor].join(' ')}>{item.button}</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}