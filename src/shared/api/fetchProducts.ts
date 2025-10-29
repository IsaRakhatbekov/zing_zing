import productsMock from '@/mock/products.json'
import type { ProductsPageData } from '@/types/product'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchProducts(): Promise<ProductsPageData> {
	try {
		if (!API_URL) {
			return productsMock as ProductsPageData
		}

		const res = await fetch(`${API_URL}/shop/products/`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Ошибка при получении данных')

		const products = await res.json()

		// 🔄 Приводим формат данных к твоей старой структуре
		const normalized = {
			hero: {
				leftImage: '/mock/products/products-hero-girl.png',
				rightImage: '/mock/products/products-hero-packet.png',
				title: 'Crafted with Spice Shared with Joy',
			},
			products,
			productsDetailed: products, // можешь потом разделить
		}

		return normalized as ProductsPageData
	} catch (err) {
		console.warn('⚠️ Используются моки (сервер недоступен):', err)
		return productsMock as ProductsPageData
	}
}
