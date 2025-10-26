'use client' // обязательно!

import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './FactorySwiper.module.scss'

import {
	default as img1,
	default as img2,
	default as img3,
} from '@/assets/images/Factory-Quality.png'

const FactorySwiper = () => {
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
				<SwiperSlide className={styles.slide}>
					<Image src={img1} alt='Factory 1' />
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<Image src={img2} alt='Factory 2' />
				</SwiperSlide>
				<SwiperSlide className={styles.slide}>
					<Image src={img3} alt='Factory 3' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default FactorySwiper
