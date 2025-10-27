export interface Hero {
	leftImage: string
	rightImage: string
	title: string
}

export interface Product {
	id: string
	title: string
	flavor: string
	image: string
	description?: string
	bgColor?: string
	textColor?: string
	buttonColor?: 'pink' | 'purple' | 'orange'
}

/** ДАННЫЕ СТРАНИЦЫ /products */
export interface ProductsPageData {
	hero: Hero
	products: Product[]
	productsDetailed: Product[]
}
