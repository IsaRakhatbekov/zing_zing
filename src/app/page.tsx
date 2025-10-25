'use client'

import growTogetherImg from '@/assets/images/growTogether-img.png'
import heroImg from '@/assets/images/hero-main.png'
import whoWeAreImg from '@/assets/images/whoWeAre.png'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { useState } from 'react'
import styles from './page.module.scss'

interface Review {
	id: number
	preview: string
	video?: string // mp4
	videoId?: string // YouTube ID
}

const reviews: Review[] = [
	{
		id: 1,
		preview: '/images/reviews/reviews-1.png',
		video: '/videos/review1.mp4',
	},
	{
		id: 2,
		preview: '/images/reviews/reviews-2.png',
		videoId: 'dQw4w9WgXcQ',
	},
	{
		id: 3,
		preview: '/images/reviews/reviews-3.png',
		videoId: 'V-_O7nl0Ii0',
	},
	{
		id: 4,
		preview: '/images/reviews/reviews-4.png',
		video: '/videos/review4.mp4',
	},
]

export default function Home() {
	// MAIN PAGE
	const [playing, setPlaying] = useState<number | null>(null)
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
								joyful snacks made to brighten your day. Whether you’re chilling
								with friends or powering through work, ZingZing is your go-to
								for flavor and good vibes.
							</p>
							<Button text='Learn More' href='#' className='yellow' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.differentiators}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<h2 className={styles.title}>Key Differentiators</h2>
						<ul className={styles.list}>
							<li className={styles.item}>
								<div className={styles.imgWrapper}>
									<svg
										width='63'
										height='63'
										viewBox='0 0 63 63'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.449219 62.8393V25.2256L22.3449 15.9199V22.1758L37.9847 15.9199V25.3038H63.0084V62.8393H0.449219ZM28.6008 50.3275H34.8567V37.8156H28.6008V50.3275ZM16.089 50.3275H22.3449V37.8156H16.089V50.3275ZM41.1127 50.3275H47.3686V37.8156H41.1127V50.3275ZM62.3828 20.6119H47.916L50.5747 0.280151H59.8804L62.3828 20.6119Z'
											fill='white'
										/>
									</svg>
								</div>
								<h3 className={styles.innerTitle}>Factory-Direct Quality</h3>
								<p className={styles.text}>
									Produced with care in our own certified facility for maximum
									freshness and consistency.
								</p>
								<Button text='Learn More' className='purple' href='#' />
							</li>
							<li className={styles.item}>
								<div className={styles.imgWrapper}>
									<svg
										width='64'
										height='63'
										viewBox='0 0 64 63'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.79157 39.8652C1.00649 40.6663 1.5308 41.3492 2.2492 41.7638L8.22047 45.2171V52.0955C8.22047 52.925 8.55002 53.7207 9.13663 54.3073C9.72323 54.8939 10.5188 55.2234 11.3484 55.2234H18.2268L21.6801 61.1978C22.0949 61.9162 22.7781 62.4404 23.5794 62.6551C24.3807 62.8698 25.2344 62.7574 25.9529 62.3427L31.9241 58.8925L37.8985 62.3458C38.6169 62.7606 39.4707 62.873 40.272 62.6583C41.0733 62.4436 41.7565 61.9194 42.1713 61.2009L45.6214 55.2297H52.4998C53.3294 55.2297 54.125 54.9001 54.7116 54.3135C55.2982 53.7269 55.6278 52.9313 55.6278 52.1017V45.2233L61.599 41.7701C62.3175 41.3553 62.8417 40.6721 63.0564 39.8708C63.2711 39.0695 63.1587 38.2157 62.7439 37.4973L59.2937 31.5229L62.747 25.5516C63.1618 24.8332 63.2742 23.9794 63.0595 23.1781C62.8448 22.3768 62.3206 21.6936 61.6022 21.2788L55.6309 17.8256V10.9472C55.6309 10.1176 55.3014 9.32199 54.7147 8.73538C54.1281 8.14878 53.3325 7.81923 52.503 7.81923H45.6246L42.1744 1.84795C41.7598 1.12956 41.0769 0.605248 40.2758 0.390327C39.8789 0.283981 39.465 0.256869 39.0576 0.31054C38.6502 0.36421 38.2574 0.497611 37.9017 0.703123L31.9241 4.15326L25.9529 0.699994C25.2348 0.28496 24.3813 0.172082 23.5801 0.386179C22.7788 0.600277 22.0954 1.12382 21.6801 1.8417L18.2268 7.8161H11.3484C10.5188 7.8161 9.72323 8.14565 9.13663 8.73226C8.55002 9.31886 8.22047 10.1145 8.22047 10.9441V17.8224L2.2492 21.2788C1.53132 21.6942 1.00778 22.3776 0.793678 23.1788C0.579581 23.9801 0.692459 24.8336 1.10749 25.5516L4.55763 31.5229L1.10437 37.4942C0.690159 38.2119 0.577662 39.0646 0.79157 39.8652Z'
											fill='white'
										/>
									</svg>
								</div>
								<h3 className={styles.innerTitle}>ISO & Halal Certified</h3>
								<p className={styles.text}>
									Every batch meets international quality and hygiene standards
									because your trust matters.
								</p>
								<Button text='Learn More' className='purple' href='#' />
							</li>
							<li className={styles.item}>
								<div className={styles.imgWrapper}>
									<svg
										width='63'
										height='60'
										viewBox='0 0 63 60'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.2711 59.5181L17.354 37.5442L0.306641 22.7646L22.8279 20.8096L31.5862 0.0869141L40.3445 20.8096L62.8658 22.7646L45.8184 37.5442L50.9013 59.5181L31.5862 47.8665L12.2711 59.5181Z'
											fill='white'
										/>
									</svg>
								</div>
								<h3 className={styles.innerTitle}>Unforgettable Taste</h3>
								<p className={styles.text}>
									A perfect mix of spice, crunch, and happiness — made for those
									who live life with flavor.
								</p>
								<Button text='Learn More' className='purple' href='#' />
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className={styles.growTogether}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Let’s Grow <span>Together</span>
							</h2>
							<p className={styles.text}>
								Whether you’re looking to expand your snack portfolio or
								introduce something fresh and exciting to your region, ZingZing
								brings energy, color, and fun that customers can’t resist.
							</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>

						<div className={styles.imgWrapper}>
							<Image src={growTogetherImg} alt='#' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.reviews}>
				<div className={`${styles.container} container`}>
					<h2 className={styles.title}>Reviews Of Our Followers</h2>
					<div className={styles.cards}>
						{reviews.map(r => (
							<div key={r.id} className={styles.card}>
								{playing === r.id ? (
									<>
										{/* 🎬 Если mp4 */}
										{r.video && (
											<video
												src={r.video}
												controls
												autoPlay
												onEnded={() => setPlaying(null)}
												className={styles.video}
											/>
										)}

										{/* ▶️ Если YouTube */}
										{r.videoId && (
											<iframe
												src={`https://www.youtube.com/embed/${r.videoId}?autoplay=1`}
												allow='autoplay'
												allowFullScreen
												title='Review video'
												className={styles.video}
											/>
										)}
									</>
								) : (
									<>
										<Image
											src={r.preview}
											alt={`Review ${r.id}`}
											width={300}
											height={200}
											className={styles.preview}
										/>
										<button
											className={styles.playButton}
											onClick={() => setPlaying(r.id)}
										>
											▶
										</button>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
