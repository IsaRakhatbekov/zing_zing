export type ReachUsPageData = {
	hero: {
		mainTitle: string
		text: string
		leftSideImage1: string
		leftSideImage2: string
		leftSideImage3: string
		rightSideImage: string
	}
	secondSection: {
		title: string
		text: string
		image: string
	}
}

export type ReachUsDataByLanguage = {
	ENG: ReachUsPageData
	RUS: ReachUsPageData
	KAZ: ReachUsPageData
}
