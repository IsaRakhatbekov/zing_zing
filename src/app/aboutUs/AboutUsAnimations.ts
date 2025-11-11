'use client'

import type { AboutUs } from '@/types/aboutUs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUsAnimations({
	aboutUsData,
}: {
	aboutUsData: AboutUs | null
}) {
	useLayoutEffect(() => {
		if (!aboutUsData) return

		const ctx = gsap.context(() => {
			// === HERO SECTION ===
			{
				const heroEl = document.getElementById('aboutUsHero')
				if (heroEl) {
					const title = heroEl.querySelector<HTMLElement>(`.${styles.title}`)
					const text = heroEl.querySelector<HTMLElement>(`.${styles.text}`)
					const leftWrappers = heroEl.querySelectorAll<HTMLElement>(
						`.${styles.leftImg} .${styles.leftImgWrapper}`
					)
					const rightWrap = heroEl.querySelector<HTMLElement>(
						`.${styles.rightImg}`
					)
					const rightImg = rightWrap
						? (rightWrap.querySelector('img') as HTMLElement | null)
						: null

					if (title) gsap.set(title, { x: -160, opacity: 0 })
					if (text) gsap.set(text, { x: -160, opacity: 0 })
					if (leftWrappers.length)
						gsap.set(leftWrappers, { y: 160, opacity: 0 })
					if (rightImg) gsap.set(rightImg, { y: 180, opacity: 1 })

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: heroEl,
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

			// === CENTRAL ASIA SECTION ===
			{
				const centralAsiaSection = document.querySelector(
					`.${styles.centralAsia}`
				)
				if (centralAsiaSection) {
					// Main title
					const mainTitle = centralAsiaSection.querySelector<HTMLElement>(
						`.${styles.title}`
					)
					if (mainTitle) {
						gsap.fromTo(
							mainTitle,
							{ y: 50, opacity: 0 },
							{
								y: 0,
								opacity: 1,
								duration: 0.8,
								scrollTrigger: {
									trigger: mainTitle,
									start: 'top 80%',
									toggleActions: 'play none none none',
								},
							}
						)
					}

					// List items
					const listItems = centralAsiaSection.querySelectorAll<HTMLElement>(
						`.${styles.item}`
					)
					if (listItems.length) {
						gsap.fromTo(
							listItems,
							{ y: 80, opacity: 0 },
							{
								y: 0,
								opacity: 1,
								duration: 0.7,
								stagger: 0.2,
								scrollTrigger: {
									trigger: listItems[0],
									start: 'top 80%',
									toggleActions: 'play none none none',
								},
							}
						)
					}

					// Drops list
					const dropsItems = centralAsiaSection.querySelectorAll<HTMLElement>(
						`.${styles.dropsItem}`
					)
					if (dropsItems.length) {
						gsap.fromTo(
							dropsItems,
							{ scale: 0.8, opacity: 0 },
							{
								scale: 1,
								opacity: 1,
								duration: 0.6,
								stagger: 0.15,
								scrollTrigger: {
									trigger: dropsItems[0],
									start: 'top 80%',
									toggleActions: 'play none none none',
								},
							}
						)
					}
				}
			}

			// === OUR COMMUNITY SECTION ===
			{
				const ourCommunitySection = document.querySelector(
					`.${styles.ourCommunity}`
				)
				if (ourCommunitySection) {
					// First block (pink-bg-reverse)
					const firstBlock = ourCommunitySection.querySelector<HTMLElement>(
						`.${styles.wrapper}`
					)
					if (firstBlock) {
						const content = firstBlock.querySelector<HTMLElement>(
							`.${styles.content}`
						)
						const imgWrapper = firstBlock.querySelector<HTMLElement>(
							`.${styles.imgWrapper}`
						)

						if (content) {
							gsap.fromTo(
								content,
								{ x: -100, opacity: 0 },
								{
									x: 0,
									opacity: 1,
									duration: 0.8,
									scrollTrigger: {
										trigger: firstBlock,
										start: 'top 70%',
										toggleActions: 'play none none none',
									},
								}
							)
						}

						if (imgWrapper) {
							gsap.fromTo(
								imgWrapper,
								{ x: 100, opacity: 0 },
								{
									x: 0,
									opacity: 1,
									duration: 0.8,
									scrollTrigger: {
										trigger: firstBlock,
										start: 'top 70%',
										toggleActions: 'play none none none',
									},
								}
							)
						}
					}

					// Second block (purpleWrapper)
					const secondBlock = ourCommunitySection.querySelector<HTMLElement>(
						`.${styles.purpleWrapper}`
					)
					if (secondBlock) {
						const purpleImgWrapper = secondBlock.querySelector<HTMLElement>(
							`.${styles.purpleImgWrapper}`
						)
						const content = secondBlock.querySelector<HTMLElement>(
							`.${styles.content}`
						)

						if (purpleImgWrapper) {
							gsap.fromTo(
								purpleImgWrapper,
								{ x: -100, opacity: 0 },
								{
									x: 0,
									opacity: 1,
									duration: 0.8,
									scrollTrigger: {
										trigger: secondBlock,
										start: 'top 70%',
										toggleActions: 'play none none none',
									},
								}
							)
						}

						if (content) {
							gsap.fromTo(
								content,
								{ x: 100, opacity: 0 },
								{
									x: 0,
									opacity: 1,
									duration: 0.8,
									scrollTrigger: {
										trigger: secondBlock,
										start: 'top 70%',
										toggleActions: 'play none none none',
									},
								}
							)
						}
					}

					// Third block (yellowWrapper)
					const thirdBlock = ourCommunitySection.querySelector<HTMLElement>(
						`.${styles.yellowWrapper}`
					)
					if (thirdBlock) {
						const content = thirdBlock.querySelector<HTMLElement>(
							`.${styles.content}`
						)
						const imgWrapper = thirdBlock.querySelector<HTMLElement>(
							`.${styles.imgWrapper}`
						)

						if (content) {
							gsap.fromTo(
								content,
								{ x: -100, opacity: 0 },
								{
									x: 0,
									opacity: 1,
									duration: 0.8,
									scrollTrigger: {
										trigger: thirdBlock,
										start: 'top 70%',
										toggleActions: 'play none none none',
									},
								}
							)
						}

						if (imgWrapper) {
							gsap.fromTo(
								imgWrapper,
								{ x: 100, opacity: 0 },
								{
									x: 0,
									opacity: 1,
									duration: 0.8,
									scrollTrigger: {
										trigger: thirdBlock,
										start: 'top 70%',
										toggleActions: 'play none none none',
									},
								}
							)
						}
					}
				}
			}
		})

		return () => ctx.revert()
	}, [aboutUsData])

	return null
}
