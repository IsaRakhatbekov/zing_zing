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

import { useLanguage } from '@/context/LanguageContext'
import styles from './Reviews.module.scss'

interface Review {
	id: number
	preview: string
	video: string | null
	videoId: string
}

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
	/** Данные секции отзывов (старая структура - массив) */
	reviewsData: Review[]
	/** РУЧНАЯ ширина карточки в пикселях (для свайпера на мобилке) */
	cardWidthPx?: number
	/** Зазор между слайдами */
	gapPx?: number
}

// Типы и переводы заголовка для Reviews
type ReviewsTranslation = {
	title: string
}

type ReviewsTranslations = {
	ENG: ReviewsTranslation
	RUS: ReviewsTranslation
	KAZ: ReviewsTranslation
	UZB: ReviewsTranslation
	TUR: ReviewsTranslation
}

const reviewsTranslations: ReviewsTranslations = {
	ENG: {
		title: 'Reviews Of Our Followers',
	},
	RUS: {
		title: 'отзывы наших подписчиков',
	},
	KAZ: {
		title: 'Біздің ізбасарлардың пікірлері',
	},
	UZB: {
		title: 'Izohlar va sharhlar',
	},
	TUR: {
		title: 'Takipçilerimizin Yorumları',
	},
}

export default function Reviews({
	reviewsData,
	cardWidthPx = 250,
	gapPx = 16,
}: Props) {
	const [playing, setPlaying] = useState<number | null>(null)
	const reviewsRef = useRef<HTMLElement | null>(null)
	const isMobile = useIsMobile(768)
	const { currentLang } = useLanguage()
	const t = reviewsTranslations[currentLang]

	// Если нет отзывов - не рендерим компонент
	if (!reviewsData || reviewsData.length === 0) {
		return null
	}

	const reviews = reviewsData

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
				{/* ЗАГОЛОВОК ТЕПЕРЬ СТАТИЧНЫЙ - БУДЕТ ПЕРЕВОДИТЬСЯ НА ФРОНТЕ */}
				<h2 className={styles.title}>{t.title}</h2>

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
								loop={true} // ← Добавьте эту строку
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
