export type QualityType = {
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
		image: string
		title: string
		titleSpan: string
		text: string
	}
	thirdSection: {
		dropsList: Array<{
			id: number
			image: string
			dropsTitle: string
			dropsText: string
		}>
	}
	fourthSection: {
		ensure: {
			image: string
			title: string
			titleSpan: string
			text: string
		}
		accountability: {
			image: string
			title: string
			text: string
		}
		stewardship: {
			image: string
			title: string
			text: string
		}
		certifications: {
			image: string
			title: string
			text: string
		}
	}
}
