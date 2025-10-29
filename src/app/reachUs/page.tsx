'use client'

import ReachUsContainer from '@/assets/images/Reach-Us-container.png'
import ReachUsModel from '@/assets/images/Reach-Us-model.png'
import ReachUsPacket from '@/assets/images/Reach-Us-packet.png'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
	const heroRef = useRef<HTMLElement | null>(null)
	const ourPowerRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// === HERO ANIMATION ===
			const q1 = gsap.utils.selector(heroRef)

			const heroTitle = q1(`.${styles.title}`)[0]
			const heroText = q1(`.${styles.text}`)[0]
			const heroLeft = q1(`.${styles.leftImg}`)[0]
			const heroRight = q1(`.${styles.rightImg}`)[0]

			// стартовые состояния
			gsap.set([heroTitle, heroText], { x: -150, opacity: 0 })
			gsap.set([heroLeft, heroRight], { y: 150, opacity: 0 })

			// анимация
			gsap
				.timeline({
					scrollTrigger: {
						trigger: heroRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(heroTitle, { x: 0, opacity: 1, duration: 0.8 })
				.to(heroText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(heroLeft, { y: 0, opacity: 1, duration: 1 }, '-=0.4')
				.to(heroRight, { y: 0, opacity: 1, duration: 1 }, '-=0.8')

			// === OUR POWER ANIMATION ===
			const q2 = gsap.utils.selector(ourPowerRef)

			const powerTitle = q2(`.${styles.title}`)[0]
			const powerText = q2(`.${styles.text}`)[0]
			const powerBtn = q2(`button`)[0]
			const powerImg = q2(`.${styles.imgWrapper}`)[0]

			// стартовые состояния
			gsap.set([powerTitle, powerText, powerBtn], { x: -150, opacity: 0 })
			gsap.set(powerImg, { x: 150, opacity: 0 })

			// анимация
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ourPowerRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(powerTitle, { x: 0, opacity: 1, duration: 0.8 })
				.to(powerText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(powerBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.4')
				.to(powerImg, { x: 0, opacity: 1, duration: 1 }, '-=0.9')
		})

		return () => ctx.revert()
	}, [])

	return (
		<>
			<section className={styles.secondHero} ref={heroRef}>
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

			<section className={styles.ourPower} ref={ourPowerRef}>
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

export default Page
