'use client'
import HomeCards from '@/components/HomeCards/HomeCards'
import Reviews from '@/components/Reviews/Reviews'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import homeData from '@/mock/home.json'
import { HomeDataByLanguage } from '@/types/home'
import Image from 'next/image'
import HomeAnimations from './HomeAnimations'
import styles from './page.module.scss'

export default function Home() {
	const { currentLang } = useLanguage()

	const typedHomeData = homeData as HomeDataByLanguage
	const data = typedHomeData[currentLang] || typedHomeData.ENG

	const {
		hero,
		firstSection,
		secondSection,
		thirdSection,
		fourthSectionGrowTogether,
	} = data

	return (
		<>
			<HomeAnimations />
			<section className={styles.hero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h1 className={styles.title}>
								{hero.title1}
								<span className={styles.yellowSpan}>{hero.mainTitleSpan1}</span>
								<br />
								{hero.title2}
								<span className={styles.pinkSpan}>{hero.mainTitleSpan2}</span>
							</h1>
							<p className={styles.text}>{hero.firstText}</p>
						</div>

						<div className={styles.rightSide}>
							<p className={styles.pinkText}>{hero.secondText}</p>
							<div className={styles.imgWrapper}>
								<Image src={hero.image} alt='#' width={100} height={100} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.whoWeAre}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg`}>
						<div className={styles.imgWrapper}>
							<Image
								src={firstSection.image}
								alt='#'
								width={100}
								height={100}
							/>
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{firstSection.title}
								<span>{firstSection.titleSpan}</span>
							</h2>
							<p className={styles.text}>{firstSection.text}</p>
							<Button text='Learn More' href='/aboutUs' className='yellow' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.Differentiators}>
				<div className={`${styles.container} container`}>
					<h2 className={styles.title}>{secondSection.mainTitle}</h2>

					<div className={styles.cards}>
						{secondSection.cardInfo.map((card, index) => (
							<div key={index} className={styles.card}>
								<div className={styles.iconWrapper}>
									{card.cardIcon && (
										<Image src={card.cardIcon} alt='' width={40} height={40} />
									)}
								</div>
								<h3 className={styles.subtitle}>{card.title}</h3>
								<p className={styles.text}>{card.text}</p>
								<Button text='Learn More' href='/aboutUs' className='purple' />
							</div>
						))}
					</div>
				</div>
			</section>

			<HomeCards thirdSection={thirdSection} />

			<section className={styles.growTogether}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{fourthSectionGrowTogether.title}{' '}
								<span>{fourthSectionGrowTogether.titleSpan}</span>
							</h2>
							<p className={styles.text}>{fourthSectionGrowTogether.text}</p>
							<Button
								text='Contact Us'
								href='/aboutUs#aboutUsForm'
								className='purple'
							/>
						</div>

						<div className={styles.imgWrapper}>
							<Image
								src={fourthSectionGrowTogether.image}
								alt='#'
								width={100}
								height={100}
							/>
						</div>
					</div>
				</div>
			</section>

			<Reviews />
		</>
	)
}
