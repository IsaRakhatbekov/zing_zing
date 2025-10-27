export interface NewsData {
	hero: {
		title: string
		subtitle: string
		text: string
		leftImage: string
		rightImage: string
	}
	sections: {
		id: string
		title: string
		text: string
		buttonText: string
		bgColor: string
		textColor: string
		image: string
	}[]
}
