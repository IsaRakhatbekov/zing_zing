import Button from '@/components/ui/Button'
import { fetchNews } from '@/shared/api/fetchNews'
import Image from 'next/image'
import NewsAnimations from './NewsAnimations'
import styles from './page.module.scss'

// === News Page ===
export default async function Page() {
	const data = await fetchNews()
	const {
		hero,
		secondSection: { firstBlock, secondBlock, thirdBlock },
	} = data

	return (
		<>
			<NewsAnimations />

			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<div className={styles.titleWrapper}>
								<h2 className={styles.title}>{hero.mainTitle}</h2>

								{/* Просто два спана с текстом */}
								<span className={styles.innerTitle}>
									<span>{hero.titleSpan1}</span>
									<span>{hero.titleSpan2}</span>
								</span>
							</div>

							<p className={styles.text}>{hero.text}</p>
						</div>

						<div className={styles.imagesWrapper}>
							{/* leftImg: три картинки */}
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image
									src={hero.leftSideImage1}
									alt='hero left 1'
									width={300}
									height={300}
								/>
								<Image
									src={hero.leftSideImage2}
									alt='hero left 2'
									width={300}
									height={300}
								/>
								<Image
									src={hero.leftSideImage3}
									alt='hero left 3'
									width={300}
									height={300}
								/>
							</div>

							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={hero.rightSideImage}
									alt='hero right'
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
								{firstBlock.title}
								<span>{firstBlock.titleSpan}</span>
							</h2>
							<p className={styles.text}>{firstBlock.text}</p>
							<Button text='Contact Us' className='yellow' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image
								src={firstBlock.image}
								alt={`${firstBlock.title}${firstBlock.titleSpan}`}
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
								src={secondBlock.image}
								alt={secondBlock.title}
								width={400}
								height={300}
							/>
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>{secondBlock.title}</h2>
							<p className={styles.text}>{secondBlock.text}</p>
							<Button text='Contact Us' className='purple' href='#' />
						</div>
					</div>
				</div>
			</section>

			{/* === GIVEAWAYS === */}
			<section className={styles.giveaways}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>{thirdBlock.title}</h2>
							<p className={styles.text}>{thirdBlock.text}</p>
							<Button text='Contact Us' className='pink' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image
								src={thirdBlock.image}
								alt={thirdBlock.title}
								width={400}
								height={300}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
