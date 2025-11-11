// app/(pages)/reach-us/ReachUsAnimations.tsx
'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function ReachUsAnimations({
	reachUsData,
}: {
	reachUsData: any
}) {
	useLayoutEffect(() => {
		if (!reachUsData) return // Не запускать анимации пока нет данных

		const ctx = gsap.context(() => {
			// Даем время на рендер DOM после получения данных
			setTimeout(() => {
				// === HERO ===
				const heroEl = document.getElementById('reach-hero')
				if (heroEl) {
					const q = gsap.utils.selector(heroEl)
					const heroTitle = q(`.${styles.title}`)[0] as HTMLElement | undefined
					const heroText = q(`.${styles.text}`)[0] as HTMLElement | undefined
					const left1 = q(`.${styles.leftImgWrapper}:nth-child(1)`)[0] as
						| HTMLElement
						| undefined
					const left2 = q(`.${styles.leftImgWrapper}:nth-child(2)`)[0] as
						| HTMLElement
						| undefined
					const left3 = q(`.${styles.leftImgWrapper}:nth-child(3)`)[0] as
						| HTMLElement
						| undefined
					const rightWrap = q(`.${styles.rightImg}`)[0] as
						| HTMLElement
						| undefined

					// Сбрасываем начальные состояния только для существующих элементов
					if (heroTitle) gsap.set(heroTitle, { x: -140, opacity: 0 })
					if (heroText) gsap.set(heroText, { x: -140, opacity: 0 })
					if (rightWrap) gsap.set(rightWrap, { y: 140, opacity: 0 })

					// Левая группа изображений - веерная анимация
					if (left1) {
						gsap.fromTo(
							left1,
							{
								y: -220,
								x: -80,
								rotate: -40,
								opacity: 0,
								transformOrigin: '50% 80%',
							},
							{
								y: 0,
								x: 0,
								rotate: -20,
								opacity: 1,
								duration: 0.9,
								ease: 'power2.out',
								scrollTrigger: {
									trigger: heroEl,
									start: 'top 70%',
									toggleActions: 'play none none none',
								},
							}
						)
					}

					if (left2) {
						gsap.fromTo(
							left2,
							{
								x: 240,
								y: -10,
								rotate: 15,
								opacity: 0,
								transformOrigin: '50% 80%',
							},
							{
								x: 0,
								y: 0,
								rotate: 0,
								opacity: 1,
								duration: 0.95,
								ease: 'power2.out',
								scrollTrigger: {
									trigger: heroEl,
									start: 'top 70%',
									toggleActions: 'play none none none',
								},
								delay: 0.08,
							}
						)
					}

					if (left3) {
						gsap.fromTo(
							left3,
							{
								y: 220,
								x: 60,
								rotate: 10,
								opacity: 0,
								transformOrigin: '50% 80%',
							},
							{
								y: 0,
								x: 0,
								rotate: 20,
								opacity: 1,
								duration: 1.0,
								ease: 'power2.out',
								scrollTrigger: {
									trigger: heroEl,
									start: 'top 70%',
									toggleActions: 'play none none none',
								},
								delay: 0.16,
							}
						)
					}

					// Текст и правая картинка
					const tlTextRight = gsap.timeline({
						scrollTrigger: {
							trigger: heroEl,
							start: 'top 70%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power2.out' },
					})

					if (heroTitle)
						tlTextRight.to(heroTitle, { x: 0, opacity: 1, duration: 0.7 }, 0)
					if (heroText)
						tlTextRight.to(heroText, { x: 0, opacity: 1, duration: 0.6 }, 0.08)
					if (rightWrap)
						tlTextRight.to(rightWrap, { y: 0, opacity: 1, duration: 0.9 }, 0.1)
				}

				// === OUR POWER ===
				const powerEl = document.getElementById('reach-power')
				if (powerEl) {
					const q = gsap.utils.selector(powerEl)
					const title = q(`.${styles.title}`)[0] as HTMLElement | undefined
					const text = q(`.${styles.text}`)[0] as HTMLElement | undefined
					const btn = q(`button`)[0] as HTMLElement | undefined
					const img = q(`.${styles.imgWrapper}`)[0] as HTMLElement | undefined

					if (title) gsap.set(title, { x: -150, opacity: 0 })
					if (text) gsap.set(text, { x: -150, opacity: 0 })
					if (btn) gsap.set(btn, { x: -150, opacity: 0 })
					if (img) gsap.set(img, { x: 150, opacity: 0 })

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: powerEl,
							start: 'top 70%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})

					if (title) tl.to(title, { x: 0, opacity: 1, duration: 0.8 }, 0)
					if (text) tl.to(text, { x: 0, opacity: 1, duration: 0.8 }, 0.2)
					if (btn) tl.to(btn, { x: 0, opacity: 1, duration: 0.7 }, 0.4)
					if (img) tl.to(img, { x: 0, opacity: 1, duration: 1.0 }, 0)
				}
			}, 100) // небольшая задержка для гарантии рендера
		})

		return () => ctx.revert()
	}, [reachUsData]) // Зависимость от данных

	return null
}
