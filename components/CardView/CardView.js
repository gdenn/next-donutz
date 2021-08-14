import styles from './CardView.module.css'

const CardView = ({children}) => (
    <div className={styles.cardView}>
        {children}
    </div>
)

export default CardView;