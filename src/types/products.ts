// src/types/products.ts
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
			// максимум 2 штуки, но бэку это не важно – просто массив строк
			littleImages?: string[]
		}>
	}
	thirdSectionBigCards: {
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
