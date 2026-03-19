import react from 'react'
import styles from './BenefitsCard.module.css'

function BenefitsCard({title, text, img, detail, obs, alt, bgVariant, titleVariant, obsVariant}) {
  

  return (
    <div className={`${styles.card} ${styles[bgVariant]}`}>
        <div className={styles.detailsCard}>
            <p className={`${styles.obs} ${styles[obsVariant]}`}>{obs}</p>
            <span>{detail}</span>
        </div>
        <div className={styles.informationCard}>
            <div>
                <img src={img} alt={alt}/>
            </div>
            <div className={styles.textCard}>
                <p className={`${styles.title} ${styles[titleVariant]}`}>{title}</p>
                <p className={styles.textCard}>{text}</p>
            </div>
        </div>
        
    </div>
  )
}

export default BenefitsCard
