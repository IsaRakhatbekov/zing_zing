export type ProductPage = {
	hero: {
		title1: string
		mainTitleSpan1: string
		title2: string
		mainTitleSpan2: string
		leftSideImage: string
		rightSideImage1: string
		rightSideImage2: string
		rightSideImage3: string
	}
	secondSectionSmallCard: {
		cards: Array<{
			id: number
			title: string
			titleSpan: string
			image: string
		}>
	}
	thirdSectionBigCards: {
		bigCard: Array<{
			id: number
			title: string
			titleSpan: string
			text: string
			image: string
		}>
	}
	fourthSectionGrowTogether: {
		image: string
		title: string
		titleSpan: string
		text: string
	}
}
