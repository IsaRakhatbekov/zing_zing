'use client'
import Image from 'next/image'
import styles from './page.module.scss'

import factoryCertified from '@/assets/images/Factory-Certified.png'
import factoryHero from '@/assets/images/Factory-hero.png'
import FactoryPower from '@/assets/images/Factory-power.png'
import FactoryQuality from '@/assets/images/Factory-Quality.png'
import FactorySwiper from '@/components/FactorySwiper/FactorySwiper'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const page = () => {
	const factoryHeroRef = useRef<HTMLElement | null>(null)
	const qualityRef = useRef<HTMLElement | null>(null)
	const certifiedRef = useRef<HTMLElement | null>(null)
	const ourPowerRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const ctx = gsap.context(() => {
			// === FACTORY HERO ===
			const q = gsap.utils.selector(factoryHeroRef)

			const title = q(`.${styles.title}`)[0]
			const text = q(`.${styles.text}`)[0]
			const img = q(`.${styles.leftImg}`)[0]

			gsap.set(title, { x: -500, opacity: 0 })
			gsap.set(text, { x: -500, opacity: 0 })
			gsap.set(img, { x: 500, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: factoryHeroRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power1.out' },
				})
				.to(title, { x: 0, opacity: 1, duration: 0.8 })
				.to(text, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(img, { x: 0, opacity: 1, duration: 1 }, '-=1')

			// === QUALITY SECTION ===
			const q2 = gsap.utils.selector(qualityRef)

			const qualityImg = q2(`.${styles.imgWrapper}`)[0]
			const qualityTitle = q2(`.${styles.title}`)[0]
			const qualityText = q2(`.${styles.text}`)[0]
			const qualityBtn = q2(`button`)[0]

			// стартовые состояния
			gsap.set(qualityImg, { scale: 0, opacity: 0 })
			gsap.set([qualityTitle, qualityText, qualityBtn], { x: -120, opacity: 0 })

			// анимация
			gsap
				.timeline({
					scrollTrigger: {
						trigger: qualityRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(qualityImg, { scale: 1, opacity: 1, duration: 1 })
				.to(qualityTitle, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(qualityText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.4')
				.to(qualityBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')

			// === CERTIFIED SECTION ===
			const q3 = gsap.utils.selector(certifiedRef)

			const certifiedImg = q3(`.${styles.imgWrapper}`)[0]
			const certifiedTitle = q3(`.${styles.title}`)[0]
			const certifiedText = q3(`.${styles.text}`)[0]
			const certifiedBtn = q3(`button`)[0]

			// стартовые состояния
			gsap.set(certifiedImg, { x: -150, opacity: 0 })
			gsap.set([certifiedTitle, certifiedText, certifiedBtn], {
				x: 150,
				opacity: 0,
			})

			// анимация
			gsap
				.timeline({
					scrollTrigger: {
						trigger: certifiedRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(certifiedImg, { x: 0, opacity: 1, duration: 1 })
				.to(certifiedTitle, { x: 0, opacity: 1, duration: 0.8 }, '-=0.6')
				.to(certifiedText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.4')
				.to(certifiedBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')

			// === OUR POWER SECTION ===
			const q4 = gsap.utils.selector(ourPowerRef)

			const powerTitle = q4(`.${styles.title}`)[0]
			const powerText = q4(`.${styles.text}`)[0]
			const powerBtn = q4(`button`)[0]
			const powerImg = q4(`.${styles.imgWrapper}`)[0]

			// стартовые состояния
			gsap.set([powerTitle, powerText, powerBtn], { x: -150, opacity: 0 })
			gsap.set(powerImg, { x: 150, rotate: 8, opacity: 0 })

			// анимация
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ourPowerRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power1.out' },
				})
				.to(powerTitle, { x: 0, opacity: 1, duration: 0.8 })
				.to(powerText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(powerBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.4')
				.to(powerImg, { x: 0, rotate: -8, opacity: 1, duration: 1 }, '-=0.9')
		})

		return () => ctx.revert()
	}, [])

	return (
		<>
			<section className={styles.secondHero} ref={factoryHeroRef}>
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

			<section className={styles.quality} ref={qualityRef}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>Quality Innovation</h2>
							<p className={styles.text}>
								Our production line is designed for efficiency, hygiene, and
								creativity. From ingredient preparation to packaging, each
								process is automated yet carefully supervised by our experienced
								team.
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

			<section className={styles.certified} ref={certifiedRef}>
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
