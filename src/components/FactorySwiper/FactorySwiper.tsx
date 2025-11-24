'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './FactorySwiper.module.scss'

type FactorySwiperData = { slides: { image: string; alt: string }[] }
type Props = { data: FactorySwiperData }

export default function FactorySwiper({ data }: Props) {
	return (
		<div className={styles.viewportClip}>
			<Swiper
				effect='coverflow'
				modules={[EffectCoverflow]}
				loop
				centeredSlides
				slidesPerView='auto' // ширину зададим сами через .slot
				spaceBetween={24}
				coverflowEffect={{
					rotate: 0,
					stretch: -80,
					depth: 90,
					modifier: 1.1,
					scale: 1,
					slideShadows: false,
				}}
				className={styles.swiper}
			>
				{data.slides.map((s, i) => (
					<SwiperSlide key={i} className={styles.swiperSlideAuto}>
						{/* Слот задаёт фактическую ширину для Swiper (5 шт. на экран) */}
						<div className={styles.slot}>
							{/* ТВОЯ карточка — дизайн не меняем */}
							<div className={styles.slide}>
								<Image
									src={s.image}
									alt={s.alt}
									width={800}
									height={500}
									className={styles.img}
									priority={i < 3}
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
