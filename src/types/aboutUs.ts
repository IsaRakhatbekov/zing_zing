export type AboutUsPageData = {
	hero: {
		title1: string
		mainTitleSpan1: string
		title2: string
		mainTitleSpan2: string
		text: string
		leftSideImage1: string
		leftSideImage2: string
		leftSideImage3: string
		rightSideImage: string
	}
	secondSection: {
		mainTitle: string
		mainTitleSpan: string
		list: Array<{
			id: number
			image: string
			innerTitle: string
			text: string
		}>
		dropsList: Array<{
			id: number
			image: string
			dropsTitle: string
			dropsText: string
		}>
	}
	thirdSection: {
		blocks: Array<{
			id: number
			title: string
			titleSpan: string
			text: string
			image: string
		}>
	}
}

export type AboutUsDataByLanguage = {
	ENG: AboutUsPageData
	RUS: AboutUsPageData
	KAZ: AboutUsPageData
}
