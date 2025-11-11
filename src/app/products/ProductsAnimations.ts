'use client'

import type { Products } from '@/types/products'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import styles from './page.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function ProductsAnimations({
	productsData,
}: {
	productsData: Products | null
}) {
	useLayoutEffect(() => {
		if (!productsData) return

		const ctx = gsap.context(() => {
			/* ================================
			   HERO
			   - title: слева→право
			   - leftImg: снизу→вверх
			   - rightCards (3 шт): снизу→вверх по очереди, потом наклоны
			==================================*/
			const heroRoot = document.getElementById('products-hero')
			if (heroRoot) {
				const q = gsap.utils.selector(heroRoot)
				const title = q(`.${styles.title}`)[0] as HTMLElement
				const leftImg = q(`.${styles.leftImg}`)[0] as HTMLElement
				const rightCards = q(
					`.${styles.rightImg} .${styles.rightSideImgWrapper}`
				) as unknown as HTMLElement[]

				gsap.set(title, { x: -300, opacity: 0 })
				gsap.set(leftImg, { y: 380, opacity: 0 })
				gsap.set(rightCards, { y: 560, opacity: 0, rotation: 0 })

				const tlHero = gsap.timeline({
					scrollTrigger: {
						trigger: heroRoot,
						start: 'top 60%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power1.out' },
				})

				tlHero
					.to(title, { x: 0, opacity: 1, duration: 0.8 }, 0)
					.to(leftImg, { y: 0, opacity: 1, duration: 0.9 }, 0)
					.to(rightCards, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }, 0)
					.to(rightCards[0], { rotation: -30, duration: 0.4 }, '>-0.2')
					.to(rightCards[1], { rotation: 0, duration: 0.4 }, '<')
					.to(rightCards[2], { rotation: 35, duration: 0.4 }, '<')
			}

			/* ==========================================
			   PRODUCTS (маленькие карточки)
			   ТОЛЬКО картинки (внутри .imgWrapper) — снизу→вверх по очереди.
			   Секция должна иметь id="products-small-cards"
			=============================================*/
			const smallCardsRoot = document.getElementById('products-small-cards')
			if (smallCardsRoot) {
				const q2 = gsap.utils.selector(smallCardsRoot)
				const imgWrappers = q2(
					`.${styles.card} .${styles.imgWrapper}`
				) as unknown as HTMLElement[]

				gsap.set(imgWrappers, { y: 100, opacity: 0 })

				gsap.to(imgWrappers, {
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.15,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: smallCardsRoot,
						start: 'top 70%',
						toggleActions: 'play none none none',
					},
				})
			}

			/* ==========================================
			   PRODUCTS DETAILED (большие блоки)
			   Для каждого .block:
			   - .elementTitle: слева→право
			   - .imgWrapper: снизу→вверх
			   Триггер — сам блок, чтобы анимация шла по мере появления.
			=============================================*/
			const detailedSection = document.querySelector(
				`.${styles.productsDetailed}`
			) as HTMLElement | null

			if (detailedSection) {
				const blocks = detailedSection.querySelectorAll(
					`.${styles.block}`
				) as unknown as HTMLElement[]

				blocks.forEach(block => {
					const title = block.querySelector(
						`.${styles.elementTitle}`
					) as HTMLElement | null
					const imgWrap = block.querySelector(
						`.${styles.imgWrapper}`
					) as HTMLElement | null

					if (title) gsap.set(title, { x: -160, opacity: 0 })
					if (imgWrap) gsap.set(imgWrap, { y: 120, opacity: 0 })

					gsap
						.timeline({
							scrollTrigger: {
								trigger: block,
								start: 'top 70%',
								toggleActions: 'play none none none',
							},
							defaults: { ease: 'power1.out' },
						})
						.to(title, { x: 0, opacity: 1, duration: 0.6 })
						.to(imgWrap, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
				})
			}
		})

		return () => ctx.revert()
	}, [productsData])

	return null
}
