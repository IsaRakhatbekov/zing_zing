import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'

import Image from 'next/image'
import styles from './page.module.scss'
import ReachUsAnimations from './ReachUsAnimations'
import { fetchReachUs } from '@/shared/api/fetchReachUs'

export default async function Page() {
	const data = await fetchReachUs()
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
										alt='reach left'
										width={400}
										height={300}
									/>
								</div>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.leftSideImage2}
										alt='reach left'
										width={400}
										height={300}
									/>
								</div>
								<div className={styles.leftImgWrapper}>
									<Image
										src={hero.leftSideImage3}
										alt='reach left'
										width={400}
										height={300}
									/>
								</div>
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={hero.rightSideImage}
									alt='reach right'
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
							<Button text='Learn More' className='yellow' href='#' />
						</div>
						<div className={styles.inner}>
							<div className={styles.imgWrapper}>
								<Image
									src={secondSection.image}
									alt='#'
									width={100}
									height={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Form />
		</>
	)
}
