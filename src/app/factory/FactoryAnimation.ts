'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function FactoryAnimations() {
	useEffect(() => {
		// Берём корневые элементы секций по id
		const heroEl = document.getElementById('factory-hero')
		const qualityEl = document.getElementById('factory-quality')
		const certifiedEl = document.getElementById('factory-certified')
		const ourPowerEl = document.getElementById('factory-our-power')

		// Если чего-то нет на странице — выходим без ошибок
		if (!heroEl || !qualityEl || !certifiedEl || !ourPowerEl) return

		const ctx = gsap.context(() => {
			// === FACTORY HERO ===
			const q = gsap.utils.selector(heroEl)
			const title = q(`.${styles.title}`)[0]
			const text = q(`.${styles.text}`)[0]
			const img = q(`.${styles.leftImg}`)[0]

			gsap.set(title, { x: -500, opacity: 0 })
			gsap.set(text, { x: -500, opacity: 0 })
			gsap.set(img, { x: 500, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: heroEl,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power1.out' },
				})
				.to(title, { x: 0, opacity: 1, duration: 0.8 })
				.to(text, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
				.to(img, { x: 0, opacity: 1, duration: 1 }, '-=1')

			// === QUALITY SECTION ===
			const q2 = gsap.utils.selector(qualityEl)
			const qualityImg = q2(`.${styles.imgWrapper}`)[0]
			const qualityTitle = q2(`.${styles.title}`)[0]
			const qualityText = q2(`.${styles.text}`)[0]
			const qualityBtn = q2(`button`)[0]

			gsap.set(qualityImg, { scale: 0, opacity: 0 })
			gsap.set([qualityTitle, qualityText, qualityBtn], { x: -120, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: qualityEl,
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
			const q3 = gsap.utils.selector(certifiedEl)
			const certifiedImg = q3(`.${styles.imgWrapper}`)[0]
			const certifiedTitle = q3(`.${styles.title}`)[0]
			const certifiedText = q3(`.${styles.text}`)[0]
			const certifiedBtn = q3(`button`)[0]

			gsap.set(certifiedImg, { x: -150, opacity: 0 })
			gsap.set([certifiedTitle, certifiedText, certifiedBtn], {
				x: 150,
				opacity: 0,
			})

			gsap
				.timeline({
					scrollTrigger: {
						trigger: certifiedEl,
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
			const q4 = gsap.utils.selector(ourPowerEl)
			const powerTitle = q4(`.${styles.title}`)[0]
			const powerText = q4(`.${styles.text}`)[0]
			const powerBtn = q4(`button`)[0]
			const powerImg = q4(`.${styles.imgWrapper}`)[0]

			gsap.set([powerTitle, powerText, powerBtn], { x: -150, opacity: 0 })
			gsap.set(powerImg, { x: 150, rotate: 8, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ourPowerEl,
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

	return null
}
