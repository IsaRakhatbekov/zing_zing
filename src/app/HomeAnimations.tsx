'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function HomeAnimations() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			setTimeout(() => {
				// === HERO ===
				const hero = document.querySelector(`.${styles.hero}`)
				if (hero) {
					// только secondText и картинка
					const pinkText = hero.querySelector(
						`.${styles.pinkText}`
					) as HTMLElement | null
					const imgWrap = hero.querySelector(
						`.${styles.imgWrapper}`
					) as HTMLElement | null
					if (pinkText) gsap.set(pinkText, { x: -60, opacity: 0 })
					if (imgWrap) gsap.set(imgWrap, { y: 480, opacity: 0 })

					const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
					if (pinkText) tl.to(pinkText, { x: 0, opacity: 1, duration: 0.7 }, 0)
					if (imgWrap) tl.to(imgWrap, { y: 0, opacity: 1, duration: 0.9 }, 0.1)
				}

				// === WHO WE ARE ===
				const whoSection = document.querySelector(`.${styles.whoWeAre}`)
				if (whoSection) {
					gsap.fromTo(
						`.${styles.whoWeAre} .${styles.imgWrapper}`,
						{ x: -100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 1,
							scrollTrigger: {
								trigger: `.${styles.whoWeAre}`,
								start: 'top 50%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.whoWeAre} .${styles.title}`,
						{ x: 100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 0.8,
							scrollTrigger: {
								trigger: `.${styles.whoWeAre}`,
								start: 'top 80%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.whoWeAre} .${styles.text}`,
						{ x: 100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 0.7,
							scrollTrigger: {
								trigger: `.${styles.whoWeAre}`,
								start: 'top 80%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.whoWeAre} button`,
						{ x: 100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 0.6,
							scrollTrigger: {
								trigger: `.${styles.whoWeAre}`,
								start: 'top 80%',
								toggleActions: 'play none none none',
							},
						}
					)
				}

				// === GROW TOGETHER ===
				const growSection = document.querySelector(`.${styles.growTogether}`)
				if (growSection) {
					gsap.fromTo(
						`.${styles.growTogether} .${styles.imgWrapper}`,
						{ x: 120, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 1,
							scrollTrigger: {
								trigger: `.${styles.growTogether}`,
								start: 'top 80%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.growTogether} .${styles.title}`,
						{ x: -100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 0.8,
							scrollTrigger: {
								trigger: `.${styles.growTogether}`,
								start: 'top 50%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.growTogether} .${styles.text}`,
						{ x: -100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 0.7,
							scrollTrigger: {
								trigger: `.${styles.growTogether}`,
								start: 'top 50%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.growTogether} button`,
						{ x: -100, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 0.6,
							scrollTrigger: {
								trigger: `.${styles.growTogether}`,
								start: 'top 50%',
								toggleActions: 'play none none none',
							},
						}
					)
				}

				// === DIFFERENTIATORS ===
				const diffSection = document.querySelector(`.${styles.Differentiators}`)
				if (diffSection) {
					gsap.fromTo(
						`.${styles.Differentiators} .${styles.title}`,
						{ y: 50, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 0.8,
							scrollTrigger: {
								trigger: `.${styles.Differentiators}`,
								start: 'top 50%',
								toggleActions: 'play none none none',
							},
						}
					)

					gsap.fromTo(
						`.${styles.Differentiators} .${styles.card}`,
						{ y: 460, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 0.7,
							stagger: 0.2,
							scrollTrigger: {
								trigger: `.${styles.Differentiators}`,
								start: 'top 50%',
								toggleActions: 'play none none none',
							},
						}
					)
				}
			}, 300)
		})
		return () => ctx.revert()
	}, [])

	return null
}
