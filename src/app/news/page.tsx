'use client'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchNews } from '@/shared/api/fetchNews'
import type { News } from '@/types/news'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NewsAnimations from './NewsAnimations'
import styles from './page.module.scss'

export default function Page() {
	const { currentLang } = useLanguage()
	const [newsData, setNewsData] = useState<News | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setError(null)
				const data = await fetchNews(currentLang)
				if (data) {
					setNewsData(data)
				} else {
					setError('Failed to load news data')
				}
			} catch (err) {
				console.error('Error loading news data:', err)
				setError('Error loading news data')
			}
		}
		loadData()
	}, [currentLang])

	// Логируем ошибки но не падаем
	if (error) {
		console.warn('News page error:', error)
	}

	return (
		<>
			<NewsAnimations newsData={newsData} />

			{/* Рендерим секции только если есть данные */}
			{newsData && (
				<>
					<section className={styles.secondHero}>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.textWrapper}>
									<div className={styles.titleWrapper}>
										<h2 className={styles.title}>{newsData.hero.mainTitle}</h2>
										<span className={styles.innerTitle}>
											<span className={styles.pink}>
												{newsData.hero.titleSpan1}
											</span>
											<span className={styles.yellow}>
												{newsData.hero.titleSpan2}
											</span>
										</span>
									</div>

									<p className={styles.text}>{newsData.hero.text}</p>
								</div>

								<div className={styles.imagesWrapper}>
									<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
										<div className={styles.leftImgWrapper}>
											<Image
												src={newsData.hero.leftSideImage1}
												alt='ZingZing news'
												width={120}
												height={200}
												priority
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={newsData.hero.leftSideImage2}
												alt='ZingZing news'
												width={120}
												height={200}
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={newsData.hero.leftSideImage3}
												alt='ZingZing news'
												width={120}
												height={200}
											/>
										</div>
									</div>

									<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
										<Image
											src={newsData.hero.rightSideImage}
											alt='ZingZing news hero'
											width={300}
											height={300}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* === BRAND NEWS === */}
					<section className={styles.brandNews}>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{newsData.secondSection.firstBlock.title}
										<span>{newsData.secondSection.firstBlock.titleSpan}</span>
									</h2>
									<p className={styles.text}>
										{newsData.secondSection.firstBlock.text}
									</p>
									<Button
										text='Contact Us'
										className='yellow'
										href='/reachUs'
									/>
								</div>
								<div className={styles.imgWrapper}>
									<Image
										src={newsData.secondSection.firstBlock.image}
										alt={`${newsData.secondSection.firstBlock.title}${newsData.secondSection.firstBlock.titleSpan}`}
										width={400}
										height={300}
									/>
								</div>
							</div>
						</div>
					</section>

					{/* === EVENTS === */}
					<section className={styles.events}>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.imgWrapper}>
									<Image
										src={newsData.secondSection.secondBlock.image}
										alt={newsData.secondSection.secondBlock.title}
										width={400}
										height={300}
									/>
								</div>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{newsData.secondSection.secondBlock.title}
									</h2>
									<p className={styles.text}>
										{newsData.secondSection.secondBlock.text}
									</p>
									<Button
										text='Contact Us'
										className='purple'
										href='/reachUs'
									/>
								</div>
							</div>
						</div>
					</section>

					{/* === GIVEAWAYS === */}
					<section className={styles.giveaways}>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{newsData.secondSection.thirdBlock.title}
									</h2>
									<p className={styles.text}>
										{newsData.secondSection.thirdBlock.text}
									</p>
									<Button text='Contact Us' className='pink' href='/reachUs' />
								</div>
								<div className={styles.imgWrapper}>
									<Image
										src={newsData.secondSection.thirdBlock.image}
										alt={newsData.secondSection.thirdBlock.title}
										width={400}
										height={300}
									/>
								</div>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	)
}
