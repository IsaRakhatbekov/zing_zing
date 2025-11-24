'use client'
import HomeCards from '@/components/HomeCards/HomeCards'
import Reviews from '@/components/Reviews/Reviews'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchHome } from '@/shared/api/fetchHome'
import type { Home } from '@/types/home'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HomeAnimations from './HomeAnimations'
import styles from './page.module.scss'

export default function Home() {
	const { currentLang } = useLanguage()
	const [homeData, setHomeData] = useState<Home | null>(null)

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchHome(currentLang)
			setHomeData(data)
		}
		loadData()
	}, [currentLang])

	// Простая версия
	if (!homeData) {
		return (
			<div className='loading'>
				<div className='loadingContent'>
					<div className='spinner'></div>
					<div className='loadingText'>Loading</div>
				</div>
			</div>
		)
	}

	const {
		hero,
		firstSection,
		secondSection,
		thirdSection,
		fourthSectionGrowTogether,
		reviews, // ДОБАВЛЯЕМ ОТЗЫВЫ
	} = homeData

	return (
		<>
			<HomeAnimations />

			{/* Hero Section с безопасными обращениями */}
			{hero && (
				<section className={styles.hero}>
					<div className={`${styles.container} container`}>
						<div className={styles.wrapper}>
							<div className={styles.content}>
								<h1 className={styles.title}>
									{hero.title1}
									{hero.mainTitleSpan1 && (
										<span className={styles.yellowSpan}>
											{hero.mainTitleSpan1}
										</span>
									)}
									<br />
									{hero.title2}
									{hero.mainTitleSpan2 && (
										<span className={styles.pinkSpan}>
											{hero.mainTitleSpan2}
										</span>
									)}
								</h1>
								{hero.firstText && (
									<p className={styles.text}>{hero.firstText}</p>
								)}
							</div>

							<div className={styles.rightSide}>
								{hero.secondText && (
									<p className={styles.pinkText}>{hero.secondText}</p>
								)}
								<div className={styles.imgWrapper}>
									{hero.image && (
										<Image
											src={hero.image}
											alt='Hero image'
											width={100}
											height={100}
											onError={e => {
												// Обработка ошибки загрузки изображения
												console.error('Failed to load hero image:', hero.image)
											}}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* First Section с безопасными обращениями */}
			{firstSection && (
				<section className={styles.whoWeAre}>
					<div className={`${styles.container} container`}>
						<div className={`${styles.wrapper} pink-bg`}>
							{firstSection.image && (
								<div className={styles.imgWrapper}>
									<Image
										src={firstSection.image}
										alt='First section image'
										width={600}
										height={400}
										onError={e => {
											console.error(
												'Failed to load first section image:',
												firstSection.image
											)
										}}
									/>
								</div>
							)}
							<div className={styles.content}>
								<h2 className={styles.title}>
									{firstSection.title}
									{firstSection.titleSpan && (
										<span>{firstSection.titleSpan}</span>
									)}
								</h2>
								{firstSection.text && (
									<p className={styles.text}>{firstSection.text}</p>
								)}
								<Button
									translationKey='learnMore'
									href='/aboutUs'
									className='yellow'
								/>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Second Section с безопасными обращениями */}
			{secondSection && (
				<section className={styles.Differentiators}>
					<div className={`${styles.container} container`}>
						{secondSection.mainTitle && (
							<h2 className={styles.title}>{secondSection.mainTitle}</h2>
						)}

						{secondSection.cardInfo && (
							<div className={styles.cards}>
								{secondSection.cardInfo.map((card, index) => (
									<div key={index} className={styles.card}>
										<div className={styles.iconWrapper}>
											{card?.cardIcon && (
												<Image
													src={card.cardIcon}
													alt={`Icon for ${card.title}`}
													width={40}
													height={40}
													onError={e => {
														console.error(
															'Failed to load card icon:',
															card.cardIcon
														)
													}}
												/>
											)}
										</div>
										{card?.title && (
											<h3 className={styles.subtitle}>{card.title}</h3>
										)}
										{card?.text && <p className={styles.text}>{card.text}</p>}
										<Button
											translationKey='learnMore'
											href='/aboutUs'
											className='purple'
										/>
									</div>
								))}
							</div>
						)}
					</div>
				</section>
			)}

			{/* Third Section */}
			{thirdSection && <HomeCards thirdSection={thirdSection} />}

			{/* Fourth Section с безопасными обращениями */}
			{fourthSectionGrowTogether && (
				<section className={styles.growTogether}>
					<div className={`${styles.container} container`}>
						<div className={`${styles.wrapper} pink-bg-reverse`}>
							<div className={styles.content}>
								<h2 className={styles.title}>
									{fourthSectionGrowTogether.title}{' '}
									{fourthSectionGrowTogether.titleSpan && (
										<span>{fourthSectionGrowTogether.titleSpan}</span>
									)}
								</h2>
								{fourthSectionGrowTogether.text && (
									<p className={styles.text}>
										{fourthSectionGrowTogether.text}
									</p>
								)}
								<Button
									translationKey='contactUs'
									href='/aboutUs#aboutUsForm'
									className='purple'
								/>
							</div>

							{fourthSectionGrowTogether.image && (
								<div className={styles.imgWrapper}>
									<Image
										src={fourthSectionGrowTogether.image}
										alt='Grow together image'
										width={630} // Измените на максимальную ширину контейнера
										height={400}
										onError={e => {
											console.error(
												'Failed to load grow together image:',
												fourthSectionGrowTogether.image
											)
										}}
									/>
								</div>
							)}
						</div>
					</div>
				</section>
			)}

			{/* Reviews Section - ПЕРЕДАЕМ ДАННЫЕ ИЗ homeData */}
			<Reviews reviewsData={reviews} />
		</>
	)
}
