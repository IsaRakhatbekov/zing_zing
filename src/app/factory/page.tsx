// src/app/factory/page.tsx
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

	useEffect(() => {
		const loadData = async () => {
			const data = await fetchFactory(currentLang)
			setFactoryData(data)
		}
		loadData()
	}, [currentLang])

	if (!factoryData) {
		return <div>Loading...</div>
	}

	const { hero, secondSection, thirdSection, fourthSection, swiper } =
		factoryData

	return (
		<>
			<FactoryAnimations />

			<section className={styles.secondHero} id='factory-hero'>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								{hero.title1}
								<br />
								<span className={styles.yellow}>{hero.titleSpan1}</span> <br />
								{hero.title2}
								<br />
								<span className={styles.purple}>{hero.titleSpan2}</span>
							</h2>
							<p className={styles.text}>{hero.text}</p>
						</div>

						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.image1}
										alt='Factory production 1'
										width={600}
										height={500}
										priority
									/>
								</div>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.image2}
										alt='Factory production 2'
										width={600}
										height={500}
										priority
									/>
								</div>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.image3}
										alt='Factory production 3'
										width={600}
										height={500}
										priority
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
							<h2 className={styles.title}>{secondSection.title}</h2>
							<p className={styles.text}>{secondSection.text}</p>
							<Button text='Learn More' className='yellowWithPurple' href='#' />
						</div>
						<div className={styles.inner}>
							<div className={styles.imgWrapper}>
								<Image
									src={secondSection.image}
									alt={secondSection.title}
									width={100}
									height={100}
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
								src={thirdSection.image}
								alt={thirdSection.title}
								width={100}
								height={100}
							/>
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>{thirdSection.title}</h2>
							<p className={styles.text}>{thirdSection.text}</p>
							<Button text='Learn More' className='purple' href='#' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.ourPower} id='factory-our-power'>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>{fourthSection.title}</h2>
							<p className={styles.text}>{fourthSection.text}</p>
							<Button text='Learn More' className='yellow' href='#' />
						</div>
						<div className={styles.inner}>
							<div className={styles.imgWrapper}>
								<Image
									src={fourthSection.image}
									alt={fourthSection.title}
									width={100}
									height={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FactorySwiper data={swiper} />

			<Form />
		</>
	)
}
