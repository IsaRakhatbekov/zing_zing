export type HomePageData = {
	hero: {
		title1: string
		mainTitleSpan1: string
		title2: string
		mainTitleSpan2: string
		firstText: string
		image: string
		secondText: string
	}
	firstSection: {
		image: string
		title: string
		titleSpan: string
		text: string
	}
	secondSection: {
		mainTitle: string
		cardInfo: Array<{
			cardIcon: string
			title: string
			text: string
		}>
	}
	thirdSection: {
		cards: Array<{
			image: string
			text: string
		}>
	}
	fourthSectionGrowTogether: {
		image: string
		title: string
		titleSpan: string
		text: string
	}
}

export type HomeDataByLanguage = {
	ENG: HomePageData
	RUS: HomePageData
	KAZ: HomePageData
}
