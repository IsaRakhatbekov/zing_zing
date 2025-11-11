// src/app/aboutUs/page.tsx
'use client'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchAboutUs } from '@/shared/api/fetchAboutUs'
import type { AboutUs } from '@/types/aboutUs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AboutUsAnimations from './AboutUsAnimations'
import styles from './page.module.scss'

export default function Page() {
	const { currentLang } = useLanguage()
	const [aboutUsData, setAboutUsData] = useState<AboutUs | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setError(null)
				const data = await fetchAboutUs(currentLang)
				if (data) {
					setAboutUsData(data)
				} else {
					setError('Failed to load about us data')
				}
			} catch (err) {
				console.error('Error loading about us data:', err)
				setError('Error loading about us data')
			}
		}
		loadData()
	}, [currentLang])

	// Логируем ошибки но не падаем
	if (error) {
		console.warn('AboutUs page error:', error)
	}

	return (
		<>
			<AboutUsAnimations />

			{/* Рендерим секции только если есть данные */}
			{aboutUsData && (
				<>
					<section className={styles.secondHero} id='aboutUsHero'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.textWrapper}>
									<h2 className={styles.title}>
										{aboutUsData.hero.title1} <br />
										<span className={styles.yellow}>
											{aboutUsData.hero.mainTitleSpan1}
										</span>
										<br />
										{aboutUsData.hero.title2}
										<br />
										<span className={styles.purple}>
											{aboutUsData.hero.mainTitleSpan2}
										</span>
									</h2>
									<p className={styles.text}>{aboutUsData.hero.text}</p>
								</div>

								<div className={styles.imagesWrapper}>
									<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
										<div className={styles.leftImgWrapper}>
											<Image
												src={aboutUsData.hero.leftSideImage1}
												alt='ZingZing product'
												width={400}
												height={300}
												priority
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={aboutUsData.hero.leftSideImage2}
												alt='ZingZing product'
												width={400}
												height={300}
											/>
										</div>
										<div className={styles.leftImgWrapper}>
											<Image
												src={aboutUsData.hero.leftSideImage3}
												alt='ZingZing product'
												width={400}
												height={300}
											/>
										</div>
									</div>
									<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
										<Image
											src={aboutUsData.hero.rightSideImage}
											alt='ZingZing hero'
											fill
											style={{ objectFit: 'contain' }}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.centralAsia}>
						<div className={`${styles.container} container`}>
							<h2 className={styles.title}>
								{aboutUsData.secondSection.mainTitle}{' '}
								<span>{aboutUsData.secondSection.mainTitleSpan}</span>
							</h2>

							<ul className={styles.list}>
								{aboutUsData.secondSection.list.map(item => (
									<li className={styles.item} key={item.id}>
										<div className={styles.imgWrapper}>
											<Image
												src={item.image}
												alt={item.innerTitle}
												width={400}
												height={300}
											/>
										</div>
										<h3 className={styles.innerTitle}>{item.innerTitle}</h3>
										<p className={styles.text}>{item.text}</p>
									</li>
								))}
							</ul>

							<ul className={styles.dropsList}>
								{aboutUsData.secondSection.dropsList.map(d => (
									<li className={styles.dropsItem} key={d.id}>
										<div className={styles.iconWrapper}>
											<Image
												src={d.image}
												alt={d.dropsTitle}
												width={150}
												height={150}
											/>
										</div>
										<h3 className={styles.dropsTitle}>{d.dropsTitle}</h3>
										<p className={styles.dropsText}>{d.dropsText}</p>
									</li>
								))}
							</ul>
						</div>
					</section>

					<section className={styles.ourCommunity}>
						<div className={`${styles.container} container`}>
							{/* Компоненты thirdSection рендерятся только если blocks существует и имеет нужные элементы */}
							{aboutUsData.thirdSection.blocks[0] && (
								<div className={`${styles.wrapper} pink-bg-reverse`}>
									<div className={styles.content}>
										<h2 className={styles.title}>
											{aboutUsData.thirdSection.blocks[0].title}{' '}
											<span>
												{aboutUsData.thirdSection.blocks[0].titleSpan}
											</span>
										</h2>
										<p className={styles.text}>
											{aboutUsData.thirdSection.blocks[0].text}
										</p>
										<Button
											text='Contact Us'
											className='purple'
											href='#aboutUsForm'
										/>
									</div>
									<div className={styles.imgWrapper}>
										<Image
											src={aboutUsData.thirdSection.blocks[0].image}
											alt='Our community'
											width={400}
											height={300}
										/>
									</div>
								</div>
							)}

							{aboutUsData.thirdSection.blocks[1] && (
								<div className={styles.purpleWrapper}>
									<div className={styles.purpleImgWrapper}>
										<Image
											src={aboutUsData.thirdSection.blocks[1].image}
											alt='Why choose us'
											width={400}
											height={300}
										/>
									</div>
									<div className={styles.content}>
										<h2 className={styles.title}>
											{aboutUsData.thirdSection.blocks[1].title}{' '}
											<span>
												{aboutUsData.thirdSection.blocks[1].titleSpan}
											</span>
										</h2>
										<p className={styles.text}>
											{aboutUsData.thirdSection.blocks[1].text}
										</p>
										<Button
											text='Contact Us'
											href='#aboutUsForm'
											className='pink'
										/>
									</div>
								</div>
							)}

							{aboutUsData.thirdSection.blocks[2] && (
								<div className={styles.yellowWrapper}>
									<div className={styles.content}>
										<h2 className={styles.title}>
											{aboutUsData.thirdSection.blocks[2].title}{' '}
											<span>
												{aboutUsData.thirdSection.blocks[2].titleSpan}
											</span>
										</h2>
										<p className={styles.text}>
											{aboutUsData.thirdSection.blocks[2].text}
										</p>
										<Button
											text='Contact Us'
											href='#aboutUsForm'
											className='purple'
										/>
									</div>
									<div className={styles.imgWrapper}>
										<Image
											src={aboutUsData.thirdSection.blocks[2].image}
											alt='Our mission'
											width={400}
											height={300}
										/>
									</div>
								</div>
							)}
						</div>
					</section>
				</>
			)}

			{/* Форма рендерится всегда */}
			<section id='aboutUsForm'>
				<Form />
			</section>
		</>
	)
}
