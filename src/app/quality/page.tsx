// src/app/quality/page.tsx
'use client'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchQuality } from '@/shared/api/fetchQuality'
import type { Quality } from '@/types/quality'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import QualityAnimations from './QualityAnimation'
import styles from './page.module.scss'

export default function Page() {
	const { currentLang } = useLanguage()
	const [qualityData, setQualityData] = useState<Quality | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setError(null)
				const data = await fetchQuality(currentLang)
				if (data) {
					setQualityData(data)
				} else {
					setError('Failed to load quality data')
				}
			} catch (err) {
				console.error('Error loading quality data:', err)
				setError('Error loading quality data')
			}
		}
		loadData()
	}, [currentLang])

	// Логируем ошибки но не падаем
	if (error) {
		console.warn('Quality page error:', error)
	}

	return (
		<>
			<QualityAnimations />

			{/* Рендерим секции только если есть данные */}
			{qualityData && (
				<>
					<section className={styles.secondHero} id='quality-hero'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.textWrapper}>
									<h2 className={styles.title}>
										{qualityData.hero.title1} <br />
										<span className={styles.purple}>
											{qualityData.hero.mainTitleSpan1}
										</span>
										<br />
										{qualityData.hero.title2}
										<br />
										<span className={styles.pink}>
											{qualityData.hero.mainTitleSpan2}
										</span>
									</h2>
									<p className={styles.text}>{qualityData.hero.text}</p>
								</div>

								<div className={styles.imagesWrapper}>
									<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
										<div className={styles.leftImgWrapper}>
											<Image
												src={qualityData.hero.leftSideImage1}
												alt='ZingZing quality'
												width={100}
												height={100}
												priority
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={qualityData.hero.leftSideImage2}
												alt='ZingZing quality'
												width={100}
												height={100}
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={qualityData.hero.leftSideImage3}
												alt='ZingZing quality'
												width={100}
												height={100}
											/>
										</div>
									</div>
									<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
										<Image
											src={qualityData.hero.rightSideImage}
											alt='ZingZing quality hero'
											width={100}
											height={100}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.quality} id='quality-section'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.imgWrapper}>
									<Image
										src={qualityData.secondSection.image}
										alt='Quality standards'
										width={800}
										height={600}
									/>
								</div>

								<div className={styles.content}>
									<h2 className={styles.title}>
										{qualityData.secondSection.title}{' '}
										<span>{qualityData.secondSection.titleSpan}</span>
									</h2>
									<p className={styles.text}>
										{qualityData.secondSection.text}
									</p>
									<Button
										text='Contact Us'
										href='#qualityForm'
										className='pink'
									/>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.drops} id='quality-drops'>
						<div className={`${styles.container} container`}>
							<ul className={styles.dropsList}>
								{qualityData.thirdSection.dropsList.map(
									({ id, image, dropsTitle, dropsText }) => (
										<li className={styles.dropsItem} key={id}>
											<div className={styles.iconWrapper}>
												<Image
													src={image}
													alt={dropsTitle}
													width={110}
													height={110}
												/>
											</div>
											<h3 className={styles.dropsTitle}>{dropsTitle}</h3>
											<p className={styles.dropsText}>{dropsText}</p>
										</li>
									)
								)}
							</ul>
						</div>
					</section>

					<section className={styles.ensureQuality} id='ensure-quality'>
						<div className={`${styles.container} container`}>
							<div className={`${styles.wrapper} ${styles.firsBlock}`}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{qualityData.fourthSection.ensure.title}
										<span>{qualityData.fourthSection.ensure.titleSpan}</span>
									</h2>
									<p className={styles.text}>
										{qualityData.fourthSection.ensure.text}
									</p>
									<Button
										text='Contact Us'
										className='purple'
										href='#qualityForm'
									/>
								</div>
								<div className={styles.imgWrapper}>
									<Image
										src={qualityData.fourthSection.ensure.image}
										alt='Quality assurance'
										width={100}
										height={100}
									/>
								</div>
							</div>

							<div className={styles.pinkWrapper}>
								<div className={styles.pinkImgWrapper}>
									<Image
										src={qualityData.fourthSection.accountability.image}
										alt='Accountability'
										width={100}
										height={100}
									/>
								</div>
								<div className={styles.content}>
									<h2 className={`${styles.title} ${styles.pinkTitle}`}>
										{qualityData.fourthSection.accountability.title}
									</h2>
									<p className={`${styles.text} ${styles.pinkText}`}>
										{qualityData.fourthSection.accountability.text}
									</p>
									<Button
										text='Contact Us'
										href='#qualityForm'
										className='yellow'
									/>
								</div>
							</div>

							<div className={styles.purpleWrapper}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{qualityData.fourthSection.stewardship.title}
									</h2>
									<p className={styles.text}>
										{qualityData.fourthSection.stewardship.text}
									</p>
									<Button
										text='Contact Us'
										className='pink'
										href='#qualityForm'
									/>
								</div>
								<div className={styles.imgWrapper}>
									<Image
										src={qualityData.fourthSection.stewardship.image}
										alt='Stewardship'
										width={100}
										height={100}
									/>
								</div>
							</div>

							<div className={styles.ourCertifications}>
								<div className={styles.imgWrapper}>
									<Image
										src={qualityData.fourthSection.certifications.image}
										alt='Certifications'
										width={100}
										height={100}
									/>
								</div>
								<div className={styles.content}>
									<h2
										className={`${styles.title} ${styles.sertificationsTitle}`}
									>
										{qualityData.fourthSection.certifications.title}
									</h2>
									<p className={`${styles.text} ${styles.sertificationsText}`}>
										{qualityData.fourthSection.certifications.text}
									</p>
									<Button
										text='Contact Us'
										href='#qualityForm'
										className='yellow'
									/>
								</div>
							</div>
						</div>
					</section>
				</>
			)}

			{/* Форма рендерится всегда */}
			<section id='qualityForm'>
				<Form />
			</section>
		</>
	)
}
