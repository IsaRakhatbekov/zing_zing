'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function NewsAnimations() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// === HERO (как на About Us) ===
			{
				const root = document.querySelector<HTMLElement>(
					`.${styles.secondHero}`
				)
				if (root) {
					const title = root.querySelector<HTMLElement>(`.${styles.title}`)
					const text = root.querySelector<HTMLElement>(`.${styles.text}`)
					const leftWrappers = root.querySelectorAll<HTMLElement>(
						`.${styles.leftImg} .${styles.leftImgWrapper}`
					)
					const rightWrap = root.querySelector<HTMLElement>(
						`.${styles.rightImg}`
					)
					const rightImg = rightWrap
						? (rightWrap.querySelector('img') as HTMLElement | null)
						: null

					if (title) gsap.set(title, { x: -160, opacity: 0 })
					if (text) gsap.set(text, { x: -160, opacity: 0 })
					if (leftWrappers.length)
						gsap.set(leftWrappers, { y: 160, opacity: 0 })
					if (rightImg) gsap.set(rightImg, { y: 180, opacity: 1 }) // «выплывает» из контейнера

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: root,
							start: 'top 65%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power2.out' },
					})

					tl.to(
						[title, text],
						{ x: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
						0
					).to(
						leftWrappers,
						{ y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
						0
					)

					if (rightImg) tl.to(rightImg, { y: 0, duration: 0.7 }, 0)
				}
			}

			// === BRAND NEWS ===
			{
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
			}

			// === EVENTS ===
			{
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
			}

			// === GIVEAWAYS ===
			{
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
			}
		})

		return () => ctx.revert()
	}, [])

	return null
}
