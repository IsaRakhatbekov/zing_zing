import Image from 'next/image'
import styles from './page.module.scss'

import factoryCertified from '@/assets/images/Factory-Certified.png'
import factoryHero from '@/assets/images/Factory-hero.png'
import FactoryPower from '@/assets/images/Factory-power.png'
import FactoryQuality from '@/assets/images/Factory-Quality.png'
import FactorySwiper from '@/components/FactorySwiper/FactorySwiper'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'

const page = () => {
	return (
		<>
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								Made with <span className={styles.yellow}>Care.</span> Crafted
								with <span className={styles.purple}>Zing.</span>
							</h2>
							<p className={styles.text}>
								Behind every pack of ZingZing lies a world of precision and
								passion.Our factory blends advanced technology with human touch
								— ensuring every stick, slice, and bite meets the highest
								standards of safety and flavor.
							</p>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image src={factoryHero} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.quality}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>Giveaways</h2>
							<p className={styles.text}>
								We love giving back to our fans! Follow ZingZing on social media
								for monthly giveaways, surprise snack boxes, and limited-edition
								merchandise.
							</p>
							<Button text='Learn More' className='yellowWithPurple' href='#' />
						</div>
						<div className={styles.inner}>
							<div className={styles.imgWrapper}>
								<Image src={FactoryQuality} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.certified}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.imgWrapper}>
							<Image src={factoryCertified} alt='#' />
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>Certified & Safe</h2>
							<p className={styles.text}>
								We proudly operate under ISO-certified food safety systems.
								Regular audits and real-time monitoring keep our processes
								transparent and reliable — so every ZingZing product is safe to
								enjoy.
							</p>
							<Button text='Learn More' className='yellowWithPurple' href='#' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.ourPower}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>Our Power</h2>
							<p className={styles.text}>
								Behind our machines are real people — engineers, testers, and
								dreamers who care deeply about quality. Their skill and spirit
								bring ZingZing to life every single day.
							</p>
							<Button text='Learn More' className='yellow' href='#' />
						</div>
						<div className={styles.inner}>
							<div className={styles.imgWrapper}>
								<Image src={FactoryPower} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<FactorySwiper />

			<Form />
		</>
	)
}

export default page
