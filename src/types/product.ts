export interface Product {
	id: number // ← было string, ставим number
	title: string
	flavor: string
	image: string
	bgColor?: string
	textColor?: string
}

export interface ProductDetailed extends Product {
	description: string
}

export interface ProductsPageData {
	hero: {
		leftImage: string
		rightImage: string
		title: string
	}
	products: Product[]
	productsDetailed: ProductDetailed[]
}
