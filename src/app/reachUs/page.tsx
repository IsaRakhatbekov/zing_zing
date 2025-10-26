import ReachUsContainer from '@/assets/images/Reach-Us-container.png'
import ReachUsModel from '@/assets/images/Reach-Us-model.png'
import ReachUsPacket from '@/assets/images/Reach-Us-packet.png'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import styles from './page.module.scss'
const page = () => {
	// Reach Us page
	return (
		<>
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>We’re Just a Message Away!</h2>
							<p className={styles.text}>
								Got a question, an idea, or a business proposal? We’re here to
								help. Whether you’re a distributor, retailer, media partner, or
								simply a ZingZing fan — reach out and we’ll get back to you
								soon!
							</p>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image src={ReachUsPacket} alt='#' />
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image src={ReachUsModel} alt='#' />
							</div>
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
								<Image src={ReachUsContainer} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<Form />
		</>
	)
}

export default page
