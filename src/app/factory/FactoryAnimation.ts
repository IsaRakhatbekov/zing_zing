'use client'

import type { Factory } from '@/types/factory'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function FactoryAnimations({
	factoryData,
}: {
	factoryData: Factory | null
}) {
	useLayoutEffect(() => {
		if (!factoryData) return

		const ctx = gsap.context(() => {
			// === FACTORY HERO ===
			{
				const heroEl = document.getElementById('factory-hero')
				if (heroEl) {
					const q = gsap.utils.selector(heroEl)
					const title = q(`.${styles.title}`)[0] as HTMLElement | undefined
					const text = q(`.${styles.text}`)[0] as HTMLElement | undefined

					// wrapper'ы картинок слева (по твоему CSS они задают порядок и позиционирование)
					const w1 = q(
						`.${styles.leftImg} .${styles.leftImgWrapper}:nth-child(1)`
					)[0] as HTMLElement | undefined
					const w2 = q(
						`.${styles.leftImg} .${styles.leftImgWrapper}:nth-child(2)`
					)[0] as HTMLElement | undefined
					const w3 = q(
						`.${styles.leftImg} .${styles.leftImgWrapper}:nth-child(3)`
					)[0] as HTMLElement | undefined

					// стартовые состояния
					if (title) gsap.set(title, { x: -140, opacity: 0 })
					if (text) gsap.set(text, { x: -140, opacity: 0 })

					if (w1)
						gsap.set(w1, { y: -240, opacity: 0, rotate: '+=14', scale: 0.96 })
					if (w2)
						gsap.set(w2, { x: 260, opacity: 0, rotate: '-=18', scale: 0.96 })
					if (w3)
						gsap.set(w3, { y: 240, opacity: 0, rotate: '+=12', scale: 0.96 })

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: heroEl,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power2.out' },
					})

					// текст
					if (title) tl.to(title, { x: 0, opacity: 1, duration: 0.7 }, 0)
					if (text) tl.to(text, { x: 0, opacity: 1, duration: 0.65 }, 0.1)

					// картинки (1 — сверху, 2 — справа, 3 — снизу), каждая с микросеттлом
					if (w1) {
						tl.to(
							w1,
							{ y: 0, opacity: 1, rotate: '-=8', scale: 1, duration: 0.85 },
							0.05
						).to(w1, { rotate: '+=3', duration: 0.28 }, '>-0.18')
					}
					if (w2) {
						tl.to(
							w2,
							{ x: 0, opacity: 1, rotate: '+=10', scale: 1, duration: 0.9 },
							0.15
						).to(w2, { rotate: '-=4', duration: 0.28 }, '>-0.18')
					}
					if (w3) {
						tl.to(
							w3,
							{ y: 0, opacity: 1, rotate: '-=7', scale: 1, duration: 0.95 },
							0.25
						).to(w3, { rotate: '+=3', duration: 0.28 }, '>-0.18')
					}
				}
			}

			// === QUALITY SECTION ===
			{
				const qualityEl = document.getElementById('factory-quality')
				if (qualityEl) {
					const q = gsap.utils.selector(qualityEl)
					const qualityImg = q(`.${styles.imgWrapper}`)[0] as
						| HTMLElement
						| undefined
					const qualityTitle = q(`.${styles.title}`)[0] as
						| HTMLElement
						| undefined
					const qualityText = q(`.${styles.text}`)[0] as HTMLElement | undefined
					const qualityBtn = q(`button`)[0] as HTMLElement | undefined

					if (qualityImg) gsap.set(qualityImg, { scale: 0.9, opacity: 0 })
					if (qualityTitle) gsap.set(qualityTitle, { x: -120, opacity: 0 })
					if (qualityText) gsap.set(qualityText, { x: -120, opacity: 0 })
					if (qualityBtn) gsap.set(qualityBtn, { x: -120, opacity: 0 })

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: qualityEl,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					if (qualityImg)
						tl.to(qualityImg, { scale: 1, opacity: 1, duration: 1 }, 0)
					if (qualityTitle)
						tl.to(qualityTitle, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
					if (qualityText)
						tl.to(qualityText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.4')
					if (qualityBtn)
						tl.to(qualityBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')
				}
			}

			// === CERTIFIED SECTION ===
			{
				const certifiedEl = document.getElementById('factory-certified')
				if (certifiedEl) {
					const q = gsap.utils.selector(certifiedEl)
					const certifiedImg = q(`.${styles.imgWrapper}`)[0] as
						| HTMLElement
						| undefined
					const certifiedTitle = q(`.${styles.title}`)[0] as
						| HTMLElement
						| undefined
					const certifiedText = q(`.${styles.text}`)[0] as
						| HTMLElement
						| undefined
					const certifiedBtn = q(`button`)[0] as HTMLElement | undefined

					if (certifiedImg) gsap.set(certifiedImg, { x: -150, opacity: 0 })
					if (certifiedTitle) gsap.set(certifiedTitle, { x: 150, opacity: 0 })
					if (certifiedText) gsap.set(certifiedText, { x: 150, opacity: 0 })
					if (certifiedBtn) gsap.set(certifiedBtn, { x: 150, opacity: 0 })

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: certifiedEl,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power3.out' },
					})
					if (certifiedImg)
						tl.to(certifiedImg, { x: 0, opacity: 1, duration: 1 }, 0)
					if (certifiedTitle)
						tl.to(certifiedTitle, { x: 0, opacity: 1, duration: 0.8 }, '-=0.6')
					if (certifiedText)
						tl.to(certifiedText, { x: 0, opacity: 1, duration: 0.8 }, '-=0.4')
					if (certifiedBtn)
						tl.to(certifiedBtn, { x: 0, opacity: 1, duration: 0.7 }, '-=0.3')
				}
			}

			// === OUR POWER SECTION ===
			{
				const ourPowerEl = document.getElementById('factory-our-power')
				if (ourPowerEl) {
					const q = gsap.utils.selector(ourPowerEl)
					const tEl = q(`.${styles.title}`)[0] as HTMLElement | undefined
					const pEl = q(`.${styles.text}`)[0] as HTMLElement | undefined
					const bEl = q(`button`)[0] as HTMLElement | undefined
					const iEl = q(`.${styles.imgWrapper}`)[0] as HTMLElement | undefined

					if (tEl) gsap.set(tEl, { x: -150, opacity: 0 })
					if (pEl) gsap.set(pEl, { x: -150, opacity: 0 })
					if (bEl) gsap.set(bEl, { x: -150, opacity: 0 })
					if (iEl) gsap.set(iEl, { x: 150, rotate: 8, opacity: 0 })

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: ourPowerEl,
							start: 'top 60%',
							toggleActions: 'play none none none',
						},
						defaults: { ease: 'power1.out' },
					})
					if (tEl) tl.to(tEl, { x: 0, opacity: 1, duration: 0.8 }, 0)
					if (pEl) tl.to(pEl, { x: 0, opacity: 1, duration: 0.8 }, '-=0.5')
					if (bEl) tl.to(bEl, { x: 0, opacity: 1, duration: 0.7 }, '-=0.4')
					if (iEl)
						tl.to(iEl, { x: 0, rotate: -8, opacity: 1, duration: 1 }, '-=0.9')
				}
			}
		})

		return () => ctx.revert()
	}, [factoryData])

	return null
}
