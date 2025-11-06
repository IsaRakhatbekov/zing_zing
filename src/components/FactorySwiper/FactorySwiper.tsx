'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './FactorySwiper.module.scss'

type FactorySwiperData = {
	slides: { image: string; alt: string }[]
}

type Props = { data: FactorySwiperData }

const FactorySwiper = ({ data }: Props) => {
	const { slides } = data

	return (
		<div className='container'>
			<h1 className='heading'>Flower Gallery</h1>
			<Swiper
				effect='coverflow'
				grabCursor
				centeredSlides
				loop
				slidesPerView='auto'
				coverflowEffect={{
					rotate: 0,
					stretch: 300, // отрицательное = перекрытие
					depth: 300,
					modifier: 1,
					scale: 1, // боковые будут 80% от центральной
				}}
				modules={[EffectCoverflow]}
				className={`swiper_container ${styles.swiper}`}
				style={{ overflow: 'visible' }} // <— ключевая строка
			>
				{slides.map((s, i) => (
					<SwiperSlide className={styles.slide} key={i}>
						<Image
							src={s.image}
							alt={s.alt}
							width={800}
							height={500}
							className={styles.img}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
		// <div className={styles.sliderWrapper}>
		// 	<Swiper
		// 		spaceBetween={-20}
		// 		centeredSlides={true}
		// 		slidesPerView={'auto'}
		// 		grabCursor={true}
		// 		loop={true}
		// 		autoplay={{
		// 			delay: 2500,
		// 			disableOnInteraction: false,
		// 		}}
		// 		modules={[Autoplay]}
		// 		className={styles.mySwiper}
		// 	>
		// 		{slides.map((s, i) => (
		// 			<SwiperSlide className={styles.slide} key={i}>
		// 				<Image src={s.image} alt={s.alt} width={600} height={400} />
		// 			</SwiperSlide>
		// 		))}
		// 	</Swiper>
		// </div>
	)
}

export default FactorySwiper
