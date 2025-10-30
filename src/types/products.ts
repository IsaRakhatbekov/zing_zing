export type ProductPage = {
	hero: {
		mainTitle: string
		mainTitleSpan1: string
		mainTitleSpan2: string
		leftSideImage: string
		rightSideImage: string
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
