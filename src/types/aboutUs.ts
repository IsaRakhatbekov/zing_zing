export type AboutUs = {
	hero: {
		mainTitle: string
		mainTitleSpan1: string
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
			id: number // 1 — Our Community, 2 — Why Choose Us, 3 — Our Mission
			title: string
			titleSpan: string // один спан
			text: string
			image: string
		}>
	}
}
