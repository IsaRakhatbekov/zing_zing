'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function ReachUsAnimations() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// === HERO ===
			const heroEl = document.getElementById('reach-hero')
			if (heroEl) {
				const q = gsap.utils.selector(heroEl)
				const heroTitle = q(`.${styles.title}`)[0]
				const heroText = q(`.${styles.text}`)[0]
				const heroLeft = q(`.${styles.leftImg}`)[0]
				const heroRight = q(`.${styles.rightImg}`)[0]

				gsap.set([heroTitle, heroText], { x: -150, opacity: 0 })
				gsap.set([heroLeft, heroRight], { y: 150, opacity: 0 })

				gsap
					.timeline({
						scrollTrigger: {
							trigger: heroEl,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(heroTitle, { x: 0, opacity: 1, duration: 0.8 })
					.to(heroText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
					.to(heroLeft, { y: 0, opacity: 1, duration: 1 }, '-=0.4')
					.to(heroRight, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
			}

			// === OUR POWER ===
			const powerEl = document.getElementById('reach-power')
			if (powerEl) {
				const q = gsap.utils.selector(powerEl)
				const powerTitle = q(`.${styles.title}`)[0]
				const powerText = q(`.${styles.text}`)[0]
				const powerBtn = q(`button`)[0]
				const powerImg = q(`.${styles.imgWrapper}`)[0]

				gsap.set([powerTitle, powerText, powerBtn], { x: -150, opacity: 0 })
				gsap.set(powerImg, { x: 150, opacity: 0 })

				gsap
					.timeline({
						scrollTrigger: {
							trigger: powerEl,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(powerTitle, { x: 0, opacity: 1, duration: 0.8 })
					.to(powerText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
					.to(powerBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.4')
					.to(powerImg, { x: 0, opacity: 1, duration: 1 }, '-=0.9')
			}
		})

		return () => ctx.revert()
	}, [])

	return null
}
