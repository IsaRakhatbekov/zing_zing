import Image from 'next/image'
import styles from './page.module.scss'

import newHeroModel from '@/assets/images/news-hero-model.png'
import newsHeroLeft from '@/assets/images/news-hero-packet.png'
import newsPaper from '@/assets/images/news-paper.png'
import Button from '@/components/ui/Button'
const page = () => {
	// News page
	return (
		<>
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<div className={styles.titleWrapper}>
								<h2 className={styles.title}>STAY </h2>
								<span className={styles.innerTitle}>
									Spicy. <br />
									<span>Updated.</span>
								</span>
							</div>
							<p className={styles.text}>
								At ZingZing, every month brings something new — new flavors, new
								faces, and new adventures. Here you’ll find the latest updates,
								event highlights, and stories from our journey across Central
								Asia and beyond.
							</p>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image src={newsHeroLeft} alt='#' />
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image src={newHeroModel} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.brandNews}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Brand <span>News</span>
							</h2>
							<p className={styles.text}>
								Discover what’s cooking behind the scenes! From product launches
								to packaging updates, our team constantly works to make every
								ZingZing snack fresher, bolder, and better than before.
							</p>
							<Button text='Read More News' className='yellow' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={newsPaper} alt='#' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
