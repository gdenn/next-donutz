import styles from './Card.module.css'
import Image from 'next/image'

const Card = ({image, title, price}) => (
    <div className={styles.card}>
        <div className={styles.donutImg}>
            <Image src={image} alt="first donut"/>
        </div>
        <div className={styles.donutSummary}>
            <span className={styles.donutTitle}>{title}</span>
            <span className={styles.donutPrice}>{price}€</span>
        </div>
    </div>
)


export default Card