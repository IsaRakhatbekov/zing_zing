'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPageAnimations() {
	useEffect(() => {
		// === HERO ===
		{
			const root = document.querySelector(
				`.${styles.secondHero}`
			) as HTMLElement | null
			if (root) {
				const title = root.querySelector(
					`.${styles.title}`
				) as HTMLElement | null
				const text = root.querySelector(`.${styles.text}`) as HTMLElement | null
				const leftWrappers = root.querySelectorAll(
					`.${styles.leftImg} .${styles.leftImgWrapper}`
				) as unknown as HTMLElement[]

				// анимируем IMG внутри правого блока, чтобы «выезжало из окна»
				const rightWrap = root.querySelector(
					`.${styles.rightImg}`
				) as HTMLElement | null
				const rightImg = rightWrap
					? (rightWrap.querySelector('img') as HTMLElement | null)
					: null

				if (title) gsap.set(title, { x: -160, opacity: 0 })
				if (text) gsap.set(text, { x: -160, opacity: 0 })
				if (leftWrappers?.length) gsap.set(leftWrappers, { y: 160, opacity: 0 })
				if (rightImg) gsap.set(rightImg, { y: 180, opacity: 1 })

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

		// === CENTRAL ASIA ===
		{
			const root = document.querySelector(
				`.${styles.centralAsia}`
			) as HTMLElement | null
			if (root) {
				const title = root.querySelector(
					`.${styles.title}`
				) as HTMLElement | null
				const items = root.querySelectorAll(
					`.${styles.item}`
				) as unknown as HTMLElement[]
				const drops = root.querySelectorAll(
					`.${styles.dropsItem}`
				) as unknown as HTMLElement[]

				if (title) gsap.set(title, { x: -120, opacity: 0 })
				items.forEach(item => {
					const elTitle = item.querySelector(
						`.${styles.innerTitle}`
					) as HTMLElement | null
					const imgWrap = item.querySelector(
						`.${styles.imgWrapper}`
					) as HTMLElement | null
					const text = item.querySelector(
						`.${styles.text}`
					) as HTMLElement | null
					if (elTitle) gsap.set(elTitle, { x: -100, opacity: 0 })
					if (imgWrap) gsap.set(imgWrap, { y: 100, opacity: 0 })
					if (text) gsap.set(text, { x: -60, opacity: 0 })
				})
				if (drops.length) gsap.set(drops, { y: 80, opacity: 0 })

				if (title) {
					gsap.to(title, {
						x: 0,
						opacity: 1,
						duration: 0.8,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: root,
							start: 'top 80%',
							toggleActions: 'play none none none',
						},
					})
				}

				items.forEach(item => {
					const elTitle = item.querySelector(
						`.${styles.innerTitle}`
					) as HTMLElement | null
					const imgWrap = item.querySelector(
						`.${styles.imgWrapper}`
					) as HTMLElement | null
					const text = item.querySelector(
						`.${styles.text}`
					) as HTMLElement | null

					const tl = gsap.timeline({
						defaults: { ease: 'power2.out' },
						scrollTrigger: {
							trigger: item,
							start: 'top 85%',
							toggleActions: 'play none none none',
						},
					})
					if (elTitle) tl.to(elTitle, { x: 0, opacity: 1, duration: 0.5 }, 0)
					if (imgWrap) tl.to(imgWrap, { y: 0, opacity: 1, duration: 0.6 }, 0.1)
					if (text) tl.to(text, { x: 0, opacity: 1, duration: 0.45 }, 0.15)
				})

				if (drops.length) {
					gsap.to(drops, {
						y: 0,
						opacity: 1,
						duration: 0.6,
						stagger: 0.12,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: root.querySelector(`.${styles.dropsList}`),
							start: 'top 80%',
							toggleActions: 'play none none none',
						},
					})
				}
			}
		}

		// === OUR COMMUNITY ===
		{
			const root = document.querySelector(
				`.${styles.ourCommunity}`
			) as HTMLElement | null
			if (root) {
				// 1) pink: картинка снизу→вверх
				const pink = root.querySelector(
					`.${styles.wrapper}.pink-bg-reverse`
				) as HTMLElement | null
				const pinkImg = pink?.querySelector(
					`.${styles.imgWrapper}`
				) as HTMLElement | null
				if (pinkImg) {
					gsap.set(pinkImg, { y: 120, opacity: 0 })
					gsap.to(pinkImg, {
						y: 0,
						opacity: 1,
						duration: 0.7,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: pink!,
							start: 'top 75%',
							toggleActions: 'play none none none',
						},
					})
				}

				// 2) purple: картинка справа→влево
				const purple = root.querySelector(
					`.${styles.purpleWrapper}`
				) as HTMLElement | null
				const purpleImg = purple?.querySelector(
					`.${styles.purpleImgWrapper}`
				) as HTMLElement | null
				if (purpleImg) {
					gsap.set(purpleImg, { x: 180, opacity: 0 })
					gsap.to(purpleImg, {
						x: 0,
						opacity: 1,
						duration: 0.7,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: purple!,
							start: 'top 75%',
							toggleActions: 'play none none none',
						},
					})
				}

				// 3) yellow: картинка справа→влево
				const yellow = root.querySelector(
					`.${styles.yellowWrapper}`
				) as HTMLElement | null
				const yellowImg = yellow?.querySelector(
					`.${styles.imgWrapper}`
				) as HTMLElement | null
				if (yellowImg) {
					gsap.set(yellowImg, { x: 180, opacity: 0 })
					gsap.to(yellowImg, {
						x: 0,
						opacity: 1,
						duration: 0.7,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: yellow!,
							start: 'top 75%',
							toggleActions: 'play none none none',
						},
					})
				}
			}
		}

		return () => ScrollTrigger.getAll().forEach(t => t.kill())
	}, [])

	return null
}
