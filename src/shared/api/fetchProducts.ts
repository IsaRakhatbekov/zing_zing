import productsMock from '@/mock/products.json'
import type { ProductsPageData } from '@/types/product'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchProducts(): Promise<ProductsPageData> {
	try {
		if (!API_URL) {
			return productsMock as ProductsPageData
		}

		const res = await fetch(`${API_URL}/products`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Ошибка при получении данных')

		return (await res.json()) as ProductsPageData
	} catch (err) {
		console.warn('⚠️ Используются моки (сервер недоступен):', err)
		return productsMock as ProductsPageData
	}
}
