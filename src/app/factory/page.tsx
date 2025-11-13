'use client'
import FactorySwiper from '@/components/FactorySwiper/FactorySwiper'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchFactory } from '@/shared/api/fetchFactory'
import type { Factory } from '@/types/factory'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FactoryAnimations from './FactoryAnimation'
import styles from './page.module.scss'

export default function Page() {
	const { currentLang } = useLanguage()
	const [factoryData, setFactoryData] = useState<Factory | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setError(null)
				const data = await fetchFactory(currentLang)
				if (data) {
					setFactoryData(data)
				} else {
					setError('Failed to load factory data')
				}
			} catch (err) {
				console.error('Error loading factory data:', err)
				setError('Error loading factory data')
			}
		}
		loadData()
	}, [currentLang])

	// Логируем ошибки но не падаем
	if (error) {
		console.warn('Factory page error:', error)
	}

	return (
		<>
			<FactoryAnimations factoryData={factoryData} />

			{/* Рендерим секции только если есть данные */}
			{factoryData && (
				<>
					<section className={styles.secondHero} id='factory-hero'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.textWrapper}>
									<h2 className={styles.title}>
										{factoryData.hero.title1}
										<br />
										<span className={styles.yellow}>
											{factoryData.hero.titleSpan1}
										</span>{' '}
										<br />
										{factoryData.hero.title2}
										<br />
										<span className={styles.purple}>
											{factoryData.hero.titleSpan2}
										</span>
									</h2>
									<p className={styles.text}>{factoryData.hero.text}</p>
								</div>

								<div className={styles.imagesWrapper}>
									<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
										<div className={styles.leftImgWrapper}>
											<Image
												src={factoryData.hero.image1}
												alt='Factory production 1'
												width={600}
												height={500}
												priority
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={factoryData.hero.image2}
												alt='Factory production 2'
												width={600}
												height={500}
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={factoryData.hero.image3}
												alt='Factory production 3'
												width={600}
												height={500}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.quality} id='factory-quality'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{factoryData.secondSection.title}
									</h2>
									<p className={styles.text}>
										{factoryData.secondSection.text}
									</p>
									<Button
										text='Learn More'
										className='yellowWithPurple'
										href='#'
									/>
								</div>
								<div className={styles.inner}>
									<div className={styles.imgWrapper}>
										<Image
											src={factoryData.secondSection.image}
											alt={factoryData.secondSection.title}
											width={500}
											height={360}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.certified} id='factory-certified'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.imgWrapper}>
									<Image
										src={factoryData.thirdSection.image}
										alt={factoryData.thirdSection.title}
										width={350}
										height={350}
									/>
								</div>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{factoryData.thirdSection.title}
									</h2>
									<p className={styles.text}>{factoryData.thirdSection.text}</p>
									<Button text='Learn More' className='purple' href='#' />
								</div>
							</div>
						</div>
					</section>

					<section className={styles.ourPower} id='factory-our-power'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{factoryData.fourthSection.title}
									</h2>
									<p className={styles.text}>
										{factoryData.fourthSection.text}
									</p>
									<Button text='Learn More' className='yellow' href='#' />
								</div>
								<div className={styles.inner}>
									<div className={styles.imgWrapper}>
										<Image
											src={factoryData.fourthSection.image}
											alt={factoryData.fourthSection.title}
											width={500}
											height={360}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<FactorySwiper data={factoryData.swiper} />
				</>
			)}

			{/* Форма рендерится всегда */}
			<Form />
		</>
	)
}
