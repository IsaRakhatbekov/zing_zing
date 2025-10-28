'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function NewsAnimations() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// === HERO ===
			const heroLeft = document.querySelector<HTMLElement>(
				`.${styles.secondHero} .${styles.leftImg}`
			)
			const heroRight = document.querySelector<HTMLElement>(
				`.${styles.secondHero} .${styles.rightImg}`
			)

			if (heroLeft) {
				gsap.set(heroLeft, { x: -100, opacity: 0 })
				gsap
					.timeline({
						scrollTrigger: {
							trigger: heroLeft,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(heroLeft, { x: 0, opacity: 1, duration: 1 })
			}

			if (heroRight) {
				gsap.set(heroRight, { y: 120, opacity: 0 })
				gsap
					.timeline({
						scrollTrigger: {
							trigger: heroRight,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(heroRight, { y: 0, opacity: 1, duration: 1 })
			}

			// === BRAND NEWS === (картинка справа → налево)
			const brandImg = document.querySelector<HTMLElement>(
				`.${styles.brandNews} .${styles.imgWrapper}`
			)
			if (brandImg) {
				gsap.set(brandImg, { x: 120, opacity: 0 })
				gsap
					.timeline({
						scrollTrigger: {
							trigger: brandImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power2.out' },
					})
					.to(brandImg, { x: 0, opacity: 1, duration: 1 })
			}

			// === EVENTS === (картинка слева → направо)
			const eventsImg = document.querySelector<HTMLElement>(
				`.${styles.events} .${styles.imgWrapper}`
			)
			if (eventsImg) {
				gsap.set(eventsImg, { x: -120, opacity: 0 })
				gsap
					.timeline({
						scrollTrigger: {
							trigger: eventsImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power2.out' },
					})
					.to(eventsImg, { x: 0, opacity: 1, duration: 1 })
			}

			// === GIVEAWAYS === (картинка снизу → вверх)
			const giveImg = document.querySelector<HTMLElement>(
				`.${styles.giveaways} .${styles.imgWrapper}`
			)
			if (giveImg) {
				gsap.set(giveImg, { y: 100, opacity: 0 })
				gsap
					.timeline({
						scrollTrigger: {
							trigger: giveImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power2.out' },
					})
					.to(giveImg, { y: 0, opacity: 1, duration: 1 })
			}
		})

		return () => ctx.revert()
	}, [])

	return null
}
