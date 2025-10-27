import Image from 'next/image'
import styles from './page.module.scss'

import Button from '@/components/ui/Button'
import { fetchNews } from '@/shared/api/fetchNews'

// === News Page ===
export default async function Page() {
	const data = await fetchNews()
	const { hero, sections } = data

	// Привязываем секции по id
	const brandNews = sections.find(s => s.id === '1')
	const events = sections.find(s => s.id === '2')
	const giveaways = sections.find(s => s.id === '3')

	return (
		<>
			{/* === HERO === */}
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<div className={styles.titleWrapper}>
								<h2 className={styles.title}>{hero.title}</h2>
								<span className={styles.innerTitle}>
									{hero.subtitle.split(' ').map((w, i) => (
										<span key={i}>{w} </span>
									))}
								</span>
							</div>
							<p className={styles.text}>{hero.text}</p>
						</div>

						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image
									src={hero.leftImage}
									alt='hero left'
									width={300}
									height={300}
								/>
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={hero.rightImage}
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
			{brandNews && (
				<section className={styles.brandNews}>
					<div className={`${styles.container} container`}>
						<div className={styles.wrapper}>
							<div className={styles.content}>
								<h2 className={styles.title}>{brandNews.title}</h2>
								<p className={styles.text}>{brandNews.text}</p>
								<Button
									text={brandNews.buttonText}
									className='yellow'
									href='#'
								/>
							</div>
							<div className={styles.imgWrapper}>
								<Image
									src={brandNews.image}
									alt={brandNews.title}
									width={400}
									height={300}
								/>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* === EVENTS === */}
			{events && (
				<section className={styles.events}>
					<div className={`${styles.container} container`}>
						<div className={styles.wrapper}>
							<div className={styles.imgWrapper}>
								<Image
									src={events.image}
									alt={events.title}
									width={400}
									height={300}
								/>
							</div>
							<div className={styles.content}>
								<h2 className={styles.title}>{events.title}</h2>
								<p className={styles.text}>{events.text}</p>
								<Button text={events.buttonText} className='purple' href='#' />
							</div>
						</div>
					</div>
				</section>
			)}

			{/* === GIVEAWAYS === */}
			{giveaways && (
				<section className={styles.giveaways}>
					<div className={`${styles.container} container`}>
						<div className={styles.wrapper}>
							<div className={styles.content}>
								<h2 className={styles.title}>{giveaways.title}</h2>
								<p className={styles.text}>{giveaways.text}</p>
								<button className={styles.btn}>{giveaways.buttonText}</button>
							</div>
							<div className={styles.imgWrapper}>
								<Image
									src={giveaways.image}
									alt={giveaways.title}
									width={400}
									height={300}
								/>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
