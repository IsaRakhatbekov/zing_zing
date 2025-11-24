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

// Локальные переводы для кнопок
const buttonTranslations = {
	learnMore: {
		ENG: 'Learn More',
		RUS: 'Узнать больше',
		KAZ: 'Көбірек Білу',
		UZB: 'Batafsil',
		TUR: 'Daha Fazla',
	},
}

// Локальный компонент кнопки
interface LocalButtonProps {
	translationKey: keyof typeof buttonTranslations
	href?: string
	className: string
}

const LocalButton = ({
	translationKey,
	href = '/products',
	className,
}: LocalButtonProps) => {
	const { currentLang } = useLanguage()
	const buttonText = buttonTranslations[translationKey][currentLang]

	return (
		<a href={href} className={`${styles.button} ${styles[className]}`}>
			{buttonText}
		</a>
	)
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
			<div className={`container`}>
				{/* ENG */}
				{currentLang === 'ENG' && (
					<>
						<div
							className={`${styles.container} ${styles.containerENG} container`}
						/>
						<div className={styles.buttonsRow}>
							<LocalButton translationKey='learnMore' className='pink' />
							<LocalButton translationKey='learnMore' className='purple' />
							<LocalButton translationKey='learnMore' className='orange' />
						</div>
					</>
				)}

				{/* RUS */}
				{currentLang === 'RUS' && (
					<>
						<div
							className={`${styles.container} ${styles.containerRUS} container`}
						/>
						<div className={styles.buttonsRow}>
							<LocalButton translationKey='learnMore' className='pink' />
							<LocalButton translationKey='learnMore' className='purple' />
							<LocalButton translationKey='learnMore' className='orange' />
						</div>
					</>
				)}

				{/* KAZ */}
				{currentLang === 'KAZ' && (
					<>
						<div
							className={`${styles.container} ${styles.containerKAZ} container`}
						/>
						<div className={styles.buttonsRow}>
							<LocalButton translationKey='learnMore' className='pink' />
							<LocalButton translationKey='learnMore' className='purple' />
							<LocalButton translationKey='learnMore' className='orange' />
						</div>
					</>
				)}

				{/* UZB */}
				{currentLang === 'UZB' && (
					<>
						<div
							className={`${styles.container} ${styles.containerUZB} container`}
						/>
						<div className={styles.buttonsRow}>
							<LocalButton translationKey='learnMore' className='pink' />
							<LocalButton translationKey='learnMore' className='purple' />
							<LocalButton translationKey='learnMore' className='orange' />
						</div>
					</>
				)}

				{/* TUR */}
				{currentLang === 'TUR' && (
					<>
						<div
							className={`${styles.container} ${styles.containerTUR} container`}
						/>
						<div className={styles.buttonsRow}>
							<LocalButton translationKey='learnMore' className='pink' />
							<LocalButton translationKey='learnMore' className='purple' />
							<LocalButton translationKey='learnMore' className='orange' />
						</div>
					</>
				)}
			</div>
		</section>
	)
}
