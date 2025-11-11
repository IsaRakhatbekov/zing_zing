'use client'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
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
	const { currentLang } = useLanguage()
	const [forceUpdate, setForceUpdate] = useState(0)

	// Принудительно обновляем компонент при смене языка
	useEffect(() => {
		setForceUpdate(prev => prev + 1)
	}, [currentLang])

	return (
		<section className={styles.HomeCards} key={forceUpdate}>
			{/* Блок для английского языка */}
			{currentLang === 'ENG' && (
				<div className={`${styles.container} ${styles.containerENG} container`}>
					{/* <div className={styles.wrapperTop}>
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
					</div> */}
				</div>
			)}

			{/* Блок для русского языка */}
			{currentLang === 'RUS' && (
				<div className={`${styles.container} ${styles.containerRUS} container`}>
					{/* <div className={styles.wrapperTop}>
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
					</div> */}
				</div>
			)}

			{/* Блок для казахского языка */}
			{currentLang === 'KAZ' && (
				<div className={`${styles.container} ${styles.containerKAZ} container`}>
					{/* <div className={styles.wrapperTop}>
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
					</div> */}
				</div>
			)}
		</section>
	)
}
