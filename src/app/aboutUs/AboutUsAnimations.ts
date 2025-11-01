'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUsAnimations() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// чуть подождём, чтобы DOM и изображения смонтировались
			setTimeout(() => {
				// === HERO ===
				const hero = document.querySelector(`.${styles.hero}`)
				if (hero) {
					const title = hero.querySelector(`.${styles.title}`)
					const text = hero.querySelector(`.${styles.text}`)
					const leftImgs = hero.querySelectorAll(`.${styles.leftImg}`)
					const rightImg = hero.querySelector(`.${styles.rightImg}`)
					// если у тебя другие классы — подставь свои

					if (title) gsap.set(title, { x: -60, opacity: 0 })
					if (text) gsap.set(text, { x: -60, opacity: 0 })
					leftImgs.forEach(el => gsap.set(el, { y: 60, opacity: 0 }))
					if (rightImg) gsap.set(rightImg, { y: 80, opacity: 0 })

					const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
					if (title) tl.to(title, { x: 0, opacity: 1, duration: 0.8 })
					if (text) tl.to(text, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')
					leftImgs.forEach((el, i) =>
						tl.to(el, { y: 0, opacity: 1, duration: 0.5 }, i ? '<0.1' : '-=0.2')
					)
					if (rightImg)
						tl.to(rightImg, { y: 0, opacity: 1, duration: 0.9 }, '-=0.1')
				}

				// === CENTRAL ASIA (вторая секция) ===
				const ca = document.querySelector(`.${styles.centralAsia}`)
				if (ca) {
					// заголовок: "ZingZing Across" + span
					gsap.fromTo(
						`.${styles.centralAsia} .${styles.title}`,
						{ y: 40, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 0.8,
							scrollTrigger: {
								trigger: `.${styles.centralAsia}`,
								start: 'top 80%',
								toggleActions: 'play none none none',
							},
						}
					)

					// карточки стран по очереди
					gsap.fromTo(
						`.${styles.centralAsia} .${styles.item}`,
						{ y: 60, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 0.6,
							stagger: 0.15,
							scrollTrigger: {
								trigger: `.${styles.centralAsia} .${styles.list}`,
								start: 'top 75%',
								toggleActions: 'play none none none',
							},
						}
					)

					// «капли» снизу
					gsap.fromTo(
						`.${styles.centralAsia} .${styles.dropsItem}`,
						{ y: 80, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 0.6,
							stagger: 0.15,
							scrollTrigger: {
								trigger: `.${styles.centralAsia} .${styles.dropsList}`,
								start: 'top 75%',
								toggleActions: 'play none none none',
							},
						}
					)
				}
			}, 250)
		})

		return () => ctx.revert()
	}, [])

	return null
}
