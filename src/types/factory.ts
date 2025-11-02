// types/factory.ts
export type FactorySwiperSlide = {
	image: string
	alt: string
}

export type FactoryType = {
	hero: {
		mainTitle: string
		titleSpan1: string
		titleSpan2: string
		text: string
		image: string
	}
	secondSection: {
		title: string
		text: string
		image: string
	}
	thirdSection: {
		title: string
		text: string
		image: string
	}
	fourthSection: {
		title: string
		text: string
		image: string
	}
	swiper: {
		slides: FactorySwiperSlide[]
	}
}
