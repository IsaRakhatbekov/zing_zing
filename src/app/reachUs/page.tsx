'use client'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import reachUsData from '@/mock/reachUs.json'
import { ReachUsDataByLanguage } from '@/types/reachUs'
import Image from 'next/image'
import ReachUsAnimations from './ReachUsAnimations'
import styles from './page.module.scss'

export default function Page() {
	const { currentLang } = useLanguage()

	const typedReachUsData = reachUsData as ReachUsDataByLanguage
	const data = typedReachUsData[currentLang] || typedReachUsData.ENG

	const { hero, secondSection } = data

	return (
		<>
			<ReachUsAnimations />
			<section className={styles.secondHero} id='reach-hero'>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>{hero.mainTitle}</h2>
							<p className={styles.text}>{hero.text}</p>
						</div>

						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.leftSideImage1}
										alt='Contact ZingZing'
										width={400}
										height={300}
									/>
								</div>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.leftSideImage2}
										alt='Contact ZingZing'
										width={400}
										height={300}
									/>
								</div>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.leftSideImage3}
										alt='Contact ZingZing'
										width={400}
										height={300}
									/>
								</div>
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={hero.rightSideImage}
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
							<h2 className={styles.title}>{secondSection.title}</h2>
							<p className={styles.text}>{secondSection.text}</p>
							<Button
								text='Learn More'
								className='yellow'
								href='#reachUsForm'
							/>
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

			<section id='reachUsForm'>
				<Form />
			</section>
		</>
	)
}
