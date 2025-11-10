export type FactorySwiperSlide = {
	image: string
	alt: string
}

export type FactoryPageData = {
	hero: {
		title1: string
		titleSpan1: string
		title2: string
		titleSpan2: string
		text: string
		image1: string
		image2: string
		image3: string
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

export type FactoryDataByLanguage = {
	ENG: FactoryPageData
	RUS: FactoryPageData
	KAZ: FactoryPageData
}
