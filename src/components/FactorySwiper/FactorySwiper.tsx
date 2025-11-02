'use client'

import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './FactorySwiper.module.scss'

type FactorySwiperData = {
	slides: { image: string; alt: string }[]
}

type Props = { data: FactorySwiperData }

const FactorySwiper = ({ data }: Props) => {
	const { slides } = data

	return (
		<div className={styles.sliderWrapper}>
			<Swiper
				spaceBetween={40}
				centeredSlides={true}
				slidesPerView={'auto'}
				grabCursor={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className={styles.mySwiper}
			>
				{slides.map((s, i) => (
					<SwiperSlide className={styles.slide} key={i}>
						<Image src={s.image} alt={s.alt} width={600} height={400} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default FactorySwiper
