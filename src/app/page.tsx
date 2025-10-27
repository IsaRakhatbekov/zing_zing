import growTogetherImg from '@/assets/images/growTogether-img.png'
import heroImg from '@/assets/images/hero-main.png'
import whoWeAreImg from '@/assets/images/whoWeAre.png'
import HomeCards from '@/components/HomeCards/HomeCards'
import Reviews from '@/components/Reviews/Reviews'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import styles from './page.module.scss'

// SERVER COMPONENT
export default async function Home() {
	return (
		<>
			<section className={styles.hero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h1 className={styles.title}>
								Bring the <span className={styles.yellowSpan}>Joy.</span> Feel
								the <span className={styles.pinkSpan}>Zing.</span>
							</h1>
							<p className={styles.text}>
								Bold, crunchy, and bursting with flavor — ZingZing turns every
								bite into a moment of happiness!
							</p>
						</div>
						<div className={styles.rightSide}>
							<p className={styles.pinkText}>
								ZingZing isn’t just a snack — it’s a spark of happiness that
								wakes up your taste buds!
							</p>
							<div className={styles.imgWrapper}>
								<Image src={heroImg} alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.whoWeAre}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg`}>
						<div className={styles.imgWrapper}>
							<Image src={whoWeAreImg} alt='' />
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Who Are <span>We</span>?
							</h2>
							<p className={styles.text}>
								ZingZing is where flavor meets fun! We craft tasty, spicy, and
								joyful snacks made to brighten your day.
							</p>
							<Button text='Learn More' href='#' className='yellow' />
						</div>
					</div>
				</div>
			</section>

			<HomeCards />

			<section className={styles.growTogether}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Let’s Grow <span>Together</span>
							</h2>
							<p className={styles.text}>
								Whether you’re looking to expand your snack portfolio or
								introduce something fresh and exciting to your region, ZingZing
								brings energy, color, and fun that customers can’t resist.
							</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>

						<div className={styles.imgWrapper}>
							<Image src={growTogetherImg} alt='#' />
						</div>
					</div>
				</div>
			</section>

			<Reviews />
		</>
	)
}
