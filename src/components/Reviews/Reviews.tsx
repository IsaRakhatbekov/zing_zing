'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

// GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Reviews.module.scss'

interface Review {
	id: number
	preview: string
	video?: string
	videoId?: string
}

const reviews: Review[] = [
	{
		id: 1,
		preview: '/images/reviews/reviews-1.png',
		video: '/videos/review1.mp4',
	},
	{ id: 2, preview: '/images/reviews/reviews-2.png', videoId: 'dQw4w9WgXcQ' },
	{ id: 3, preview: '/images/reviews/reviews-3.png', videoId: 'V-_O7nl0Ii0' },
	{
		id: 4,
		preview: '/images/reviews/reviews-4.png',
		video: '/videos/review4.mp4',
	},
]

// SSR-safe моб. флаг
const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth <= breakpoint)
		check()
		window.addEventListener('resize', check)
		return () => window.removeEventListener('resize', check)
	}, [breakpoint])
	return isMobile
}

type Props = {
	/** РУЧНАЯ ширина карточки в пикселях (для свайпера на мобилке) */
	cardWidthPx?: number
	/** Зазор между слайдами */
	gapPx?: number
}

export default function Reviews({ cardWidthPx = 250, gapPx = 16 }: Props) {
	const [playing, setPlaying] = useState<number | null>(null)
	const reviewsRef = useRef<HTMLElement | null>(null)
	const isMobile = useIsMobile(768)

	// GSAP-анимация (десктоп)
	useEffect(() => {
		if (isMobile) return
		const ctx = gsap.context(() => {
			const q = gsap.utils.selector(reviewsRef)
			const cards = q(`.${styles.card}`)
			gsap.set(cards, { y: 80, opacity: 0 })
			gsap
				.timeline({
					scrollTrigger: {
						trigger: reviewsRef.current,
						start: 'top 75%',
						toggleActions: 'play none none none',
					},
					defaults: { ease: 'power3.out' },
				})
				.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.25 })
		}, reviewsRef)
		return () => ctx.revert()
	}, [isMobile])

	const ReviewCard = useMemo(
		() =>
			function ReviewCardInner({ r }: { r: Review }) {
				const isPlaying = playing === r.id
				return (
					<div className={styles.card}>
						{isPlaying ? (
							<>
								{r.video && (
									<video
										src={r.video}
										controls
										autoPlay
										onEnded={() => setPlaying(null)}
										className={styles.video}
									/>
								)}
								{r.videoId && (
									<iframe
										src={`https://www.youtube.com/embed/${r.videoId}?autoplay=1`}
										allow='autoplay'
										allowFullScreen
										title='Review video'
										className={styles.video}
									/>
								)}
							</>
						) : (
							<>
								<Image
									src={r.preview}
									alt={`Review ${r.id}`}
									width={300}
									height={200}
									className={styles.preview}
								/>
								<button
									className={styles.playButton}
									onClick={() => setPlaying(r.id)}
								>
									▶
								</button>
							</>
						)}
					</div>
				)
			},
		[playing]
	)

	return (
		<section className={styles.reviews} ref={reviewsRef}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>Reviews Of Our Followers</h2>

				{/* Десктопная сетка */}
				<div className={styles.cards} aria-hidden={isMobile}>
					{!isMobile && reviews.map(r => <ReviewCard key={r.id} r={r} />)}
				</div>

				{/* Мобильный свайпер (ровно 2 слайда, ширина карточек — вручную) */}
				<div
					className={styles.swiperRoot}
					aria-hidden={!isMobile}
					style={
						{
							// задаёшь вручную:
							'--card-w': `${cardWidthPx}px`,
							'--gap': `${gapPx}px`,
						} as React.CSSProperties
					}
				>
					{isMobile && (
						<div className={styles.viewportClip}>
							<Swiper
								modules={[Pagination]}
								pagination={{ clickable: true }}
								slidesPerView={2} // ровно 2
								centeredSlides={false}
								spaceBetween={gapPx}
								onSlideChange={() => setPlaying(null)}
								className={styles.swiper}
							>
								{reviews.map(r => (
									<SwiperSlide key={r.id} className={styles.slide}>
										{/* Слайд-ячейка: центрируем карточку фикс. ширины */}
										<div className={styles.cell}>
											<ReviewCard r={r} />
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
