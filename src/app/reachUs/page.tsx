// src/app/reachUs/page.tsx
'use client'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchReachUs } from '@/shared/api/fetchReachUs'
import type { ReachUs } from '@/types/reachUs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReachUsAnimations from './ReachUsAnimations'
import styles from './page.module.scss'

export default function Page() {
	const { currentLang } = useLanguage()
	const [reachUsData, setReachUsData] = useState<ReachUs | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setError(null)
				const data = await fetchReachUs(currentLang)
				if (data) {
					setReachUsData(data)
				} else {
					setError('Failed to load data')
				}
			} catch (err) {
				console.error('Error loading reach us data:', err)
				setError('Error loading data')
			}
		}
		loadData()
	}, [currentLang])

	return (
		<>
			{/* Передаем данные в анимации */}
			<ReachUsAnimations reachUsData={reachUsData} />

			{/* Рендерим секции только если есть данные */}
			{reachUsData && (
				<>
					<section className={styles.secondHero} id='reach-hero'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.textWrapper}>
									<h2 className={styles.title}>{reachUsData.hero.mainTitle}</h2>
									<p className={styles.text}>{reachUsData.hero.text}</p>
								</div>

								<div className={styles.imagesWrapper}>
									<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
										<div className={styles.leftImgWrapper}>
											<Image
												src={reachUsData.hero.leftSideImage1}
												alt='Contact ZingZing'
												width={400}
												height={300}
												priority
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={reachUsData.hero.leftSideImage2}
												alt='Contact ZingZing'
												width={400}
												height={300}
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={reachUsData.hero.leftSideImage3}
												alt='Contact ZingZing'
												width={400}
												height={300}
											/>
										</div>
									</div>
									<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
										<Image
											src={reachUsData.hero.rightSideImage}
											alt='ZingZing contact'
											width={400}
											height={300}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.ourPower} id='reach-power'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{reachUsData.secondSection.title}
									</h2>
									<p className={styles.text}>
										{reachUsData.secondSection.text}
									</p>
									<Button
										translationKey='learnMore'
										className='yellow'
										href='#reachUsForm'
									/>
								</div>
								<div className={styles.inner}>
									<div className={styles.imgWrapper}>
										<img
											src={reachUsData.secondSection.image}
											alt={reachUsData.secondSection.title}
											className={styles.image}
											onError={e => {
												const target = e.target as HTMLImageElement
												console.error(
													'Failed to load image:',
													reachUsData.secondSection.image
												)
												target.style.display = 'none'
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			)}

			{/* Форма рендерится всегда */}
			<section id='reachUsForm'>
				<Form />
			</section>
		</>
	)
}
