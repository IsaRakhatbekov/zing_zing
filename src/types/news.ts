export type NewsTypes = {
	hero: {
		mainTitle: string
		titleSpan1: string
		titleSpan2: string
		text: string
		leftSideImage1: string
		leftSideImage2: string
		leftSideImage3: string
		rightSideImage: string
	}
	secondSection: {
		firstBlock: {
			title: string
			titleSpan: string
			text: string
			image: string
		}
		secondBlock: {
			image: string
			title: string
			text: string
		}
		thirdBlock: {
			title: string
			text: string
			image: string
		}
	}
}
