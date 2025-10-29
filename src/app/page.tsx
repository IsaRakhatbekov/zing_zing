'use client'

import growTogetherImg from '@/assets/images/growTogether-img.png'
import heroImg from '@/assets/images/hero-main.png'
import whoWeAreImg from '@/assets/images/whoWeAre.png'
import HomeCards from '@/components/HomeCards/HomeCards'
import Reviews from '@/components/Reviews/Reviews'
import Button from '@/components/ui/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

import styles from './page.module.scss'

// SERVER COMPONENT
export default function Home() {
	const heroRef = useRef<HTMLElement | null>(null)
	const whoWeAreRef = useRef<HTMLElement | null>(null)
	const growTogetherRef = useRef<HTMLElement | null>(null)
	useEffect(() => {
		const ctx = gsap.context(() => {
			// === HERO ===
			const q = gsap.utils.selector(heroRef)
			const title = q(`.${styles.title}`)[0]
			const text = q(`.${styles.text}`)[0]
			const pinkText = q(`.${styles.pinkText}`)[0]
			const imgWrap = q(`.${styles.imgWrapper}`)[0]

			gsap.set([title, text, pinkText], { x: -60, opacity: 0 })
			gsap.set(imgWrap, { y: 80, opacity: 0 })

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to(title, { x: 0, opacity: 1, duration: 0.8 })
				.to(text, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')
				.to(pinkText, { x: 0, opacity: 1, duration: 0.7 }, '-=0.25')
				.to(imgWrap, { y: 0, opacity: 1, duration: 0.9 }, '-=0.2')

			// === WHO WE ARE ===
			const q2 = gsap.utils.selector(whoWeAreRef)
			const img = q2(`.${styles.imgWrapper}`)[0]
			const title2 = q2(`.${styles.title}`)[0]
			const text2 = q2(`.${styles.text}`)[0]
			const btn2 = q2(`button`)[0]

			gsap.set(img, { x: -100, opacity: 0 })
			gsap.set([title2, text2, btn2], { x: 100, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: whoWeAreRef.current,
						start: 'top 70%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(img, { x: 0, opacity: 1, duration: 1 })
				.to(title2, { x: 0, opacity: 1, duration: 0.8 }, '-=0.4')
				.to(text2, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')
				.to(btn2, { x: 0, opacity: 1, duration: 0.6 }, '-=0.25')

			// === GROW TOGETHER ===
			const q3 = gsap.utils.selector(growTogetherRef)
			const img3 = q3(`.${styles.imgWrapper}`)[0]
			const title3 = q3(`.${styles.title}`)[0]
			const text3 = q3(`.${styles.text}`)[0]
			const btn3 = q3(`button`)[0]

			// стартовые позиции
			gsap.set(img3, { x: 120, opacity: 0 })
			gsap.set([title3, text3, btn3], { x: -100, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: growTogetherRef.current,
						start: 'top 70%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(img3, { x: 0, opacity: 1, duration: 1 })
				.to(title3, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(text3, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')
				.to(btn3, { x: 0, opacity: 1, duration: 0.6 }, '-=0.25')
		})

		return () => ctx.revert()
	}, [])

	return (
		<>
			<section className={styles.hero} ref={heroRef}>
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

			<section className={styles.whoWeAre} ref={whoWeAreRef}>
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

			<section className={styles.Differentiators}>
				<div className='container'>
					<h2 className={styles.title}>Key Differentiators</h2>

					<div className={styles.cards}>
						<div className={styles.card}>
							<div className={styles.iconWrapper}></div>
							<h3 className={styles.subtitle}>Factory-Direct Quality</h3>
							<p className={styles.text}>
								Produced with care in our own certified facility for maximum
								freshness and consistency.
							</p>
							<a href='#' className={styles.btn}>
								Learn More
							</a>
						</div>

						<div className={styles.card}>
							<div className={styles.iconWrapper}></div>
							<h3 className={styles.subtitle}>ISO & Halal Certified</h3>
							<p className={styles.text}>
								Every batch meets international quality and hygiene standards
								because your trust matters.
							</p>
							<a href='#' className={styles.btn}>
								Learn More
							</a>
						</div>

						<div className={styles.card}>
							<div className={styles.iconWrapper}></div>
							<h3 className={styles.subtitle}>Unforgettable Taste</h3>
							<p className={styles.text}>
								A perfect mix of spice, crunch, and happiness — made for those
								who live life with flavor.
							</p>
							<a href='#' className={styles.btn}>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>

			<HomeCards />

			<section className={styles.growTogether} ref={growTogetherRef}>
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
