'use client'

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
				// loop
				centeredSlides
				slidesPerView='auto'
				spaceBetween={24}
				initialSlide={2} // <-- начинаем с 3-го слайда (индекс 2)
				coverflowEffect={{
					rotate: 0,
					stretch: -30,
					depth: 50,
					modifier: 1.1,
					scale: 0.85,
					slideShadows: false,
				}}
				className={styles.swiper}
			>
				{data.slides.map((s, i) => (
					<SwiperSlide key={i} className={styles.swiperSlideAuto}>
						<div className={styles.slot}>
							<div className={styles.slide}>
								<img
									src={s.image}
									alt={s.alt}
									className={styles.img}
									loading='eager'
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
