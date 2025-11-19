export type Products = {
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
			littleImages?: string[]
		}>
	}
	thirdSectionBigCards: {
		sectionTitle: string
		sectionTitleSpan: string
		bigCard: Array<{
			title: string
			titleSpan: string
			text: string
			image: string
		}>
	}
	fourthSectionGrowTogether: {
		title: string
		titleSpan: string
		text: string
		image: string
	}
}
