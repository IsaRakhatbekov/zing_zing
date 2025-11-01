'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function QualityAnimation() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			// === SECOND HERO ===
			const q1 = gsap.utils.selector(secondHeroRef)
			const leftImg = q1(`.${styles.leftImg}`)[0]
			const rightImg = q1(`.${styles.rightImg}`)[0]

			gsap.set(leftImg, { x: 100, opacity: 0 })
			gsap.set(rightImg, { y: 100, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: secondHeroRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(leftImg, { x: 0, opacity: 1, duration: 1 })
				.to(rightImg, { y: 0, opacity: 1, duration: 1 }, '-=0.7')

			// === QUALITY ===
			const q2 = gsap.utils.selector(qualityRef)
			const hatImg = q2(`.${styles.imgWrapper}`)[0]

			gsap.set(hatImg, { x: -120, opacity: 0 })

			gsap
				.timeline({
					scrollTrigger: {
						trigger: qualityRef.current,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(hatImg, { x: 0, opacity: 1, duration: 1 })

			// === ENSURE QUALITY ===
			const q3 = gsap.utils.selector(ensureQualityRef)

			const doctorImg = q3(`.${styles.imgWrapper}`)[0]
			const pinkImg = q3(`.${styles.pinkWrapper} .${styles.pinkImgWrapper}`)[0]
			const purpleImg = q3(`.${styles.purpleWrapper} .${styles.imgWrapper}`)[0]
			const sertImg = q3(
				`.${styles.ourCertifications} .${styles.imgWrapper}`
			)[0]

			// стартовые состояния
			gsap.set(doctorImg, { x: 100, opacity: 0 })
			gsap.set(pinkImg, { y: 100, opacity: 0 })
			gsap.set(purpleImg, { x: -100, opacity: 0 })
			gsap.set(sertImg, { x: 100, opacity: 0 })

			// doctor (справа налево)
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

			// pinkWrapper (снизу вверх)
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

			// purpleWrapper (слева направо)
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

			// ourCertifications (справа налево)
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
		})

		return () => ctx.revert()
	}, [])
	return null
}
