// app/(pages)/quality/QualityAnimations.tsx
'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function QualityAnimations() {
	useEffect(() => {
		// SECOND HERO
		const hero = document.getElementById('quality-hero')
		if (hero) {
			const leftImg = hero.querySelector(
				`.${styles.leftImg}`
			) as HTMLElement | null
			const rightImg = hero.querySelector(
				`.${styles.rightImg}`
			) as HTMLElement | null

			if (leftImg) gsap.set(leftImg, { x: 100, opacity: 0 })
			if (rightImg) gsap.set(rightImg, { y: 100, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: hero,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(leftImg, { x: 0, opacity: 1, duration: 1 }, 0)
				.to(rightImg, { y: 0, opacity: 1, duration: 1 }, 0.3)
		}

		// QUALITY
		const quality = document.getElementById('quality-section')
		if (quality) {
			const hatImg = quality.querySelector(
				`.${styles.imgWrapper}`
			) as HTMLElement | null
			if (hatImg) gsap.set(hatImg, { x: -120, opacity: 0 })
			gsap
				.timeline({
					scrollTrigger: {
						trigger: quality,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(hatImg, { x: 0, opacity: 1, duration: 1 })
		}

		// DROPS (по очереди снизу вверх)
		const drops = document.getElementById('quality-drops')
		if (drops) {
			const items = drops.querySelectorAll(
				`.${styles.dropsItem}`
			) as unknown as HTMLElement[]
			if (items.length) {
				gsap.set(items, { y: 80, opacity: 0 })
				gsap.to(items, {
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.12,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: drops,
						start: 'top 75%',
						toggleActions: 'play none none none',
					},
				})
			}
		}

		// ENSURE QUALITY
		const ensure = document.getElementById('ensure-quality')
		if (ensure) {
			const doctorImg = ensure.querySelector(
				`.${styles.wrapper} .${styles.imgWrapper}`
			) as HTMLElement | null
			const pinkImg = ensure.querySelector(
				`.${styles.pinkWrapper} .${styles.pinkImgWrapper}`
			) as HTMLElement | null
			const purpleImg = ensure.querySelector(
				`.${styles.purpleWrapper} .${styles.imgWrapper}`
			) as HTMLElement | null
			const sertImg = ensure.querySelector(
				`.${styles.ourCertifications} .${styles.imgWrapper}`
			) as HTMLElement | null

			if (doctorImg) gsap.set(doctorImg, { x: 100, opacity: 0 })
			if (pinkImg) gsap.set(pinkImg, { y: 100, opacity: 0 })
			if (purpleImg) gsap.set(purpleImg, { x: -100, opacity: 0 })
			if (sertImg) gsap.set(sertImg, { x: 100, opacity: 0 })

			if (doctorImg)
				gsap
					.timeline({
						scrollTrigger: {
							trigger: doctorImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(doctorImg, { x: 0, opacity: 1, duration: 1 })

			if (pinkImg)
				gsap
					.timeline({
						scrollTrigger: {
							trigger: pinkImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(pinkImg, { y: 0, opacity: 1, duration: 1 })

			if (purpleImg)
				gsap
					.timeline({
						scrollTrigger: {
							trigger: purpleImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(purpleImg, { x: 0, opacity: 1, duration: 1 })

			if (sertImg)
				gsap
					.timeline({
						scrollTrigger: {
							trigger: sertImg,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					.to(sertImg, { x: 0, opacity: 1, duration: 1 })
		}

		return () => ScrollTrigger.getAll().forEach(t => t.kill())
	}, [])

	return null
}
