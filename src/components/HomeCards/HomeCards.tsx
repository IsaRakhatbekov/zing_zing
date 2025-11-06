'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import styles from './HomeCards.module.scss'
interface ThirdSectionProps {
	cards: Array<{
		image: string
		text: string
	}>
}

interface HomeCardsProps {
	thirdSection: ThirdSectionProps
}

export default function HomeCards({ thirdSection }: HomeCardsProps) {
	// Получаем thirdSection из пропсов
	return (
		<section className={styles.HomeCards}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapperTop}>
					<div className={styles.imgWrapper}>
						<Image
							src={thirdSection.cards[0].image}
							alt='#'
							width={100}
							height={100}
						/>
					</div>
					<div className={styles.imgWrapper}>
						<Image
							src={thirdSection.cards[1].image}
							alt='#'
							width={100}
							height={100}
						/>
					</div>
					<div className={styles.imgWrapper}>
						<Image
							src={thirdSection.cards[2].image}
							alt='#'
							width={100}
							height={100}
						/>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.contentWrapper}>
						<p>{thirdSection.cards[0].text}</p>
						<Link href={'/products'} className={styles.button}>
							Learn More
						</Link>
					</div>
					<div className={styles.contentWrapper}>
						<p>{thirdSection.cards[1].text}</p>
						<Button className='purple' href='/products' text='Learn More' />
					</div>
					<div className={styles.contentWrapper}>
						<p>{thirdSection.cards[2].text}</p>
						<Button className='orange' href='/products' text='Learn More' />
					</div>
				</div>
			</div>
		</section>
	)
}
