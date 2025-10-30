import productMock from '@/mock/products.json' // создай этот файл
import type { ProductPage } from '@/types/products' // создай этот тип

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchProducts(): Promise<ProductPage> {
	try {
		if (!API_URL) {
			return productMock as ProductPage
		}
		const res = await fetch(`${API_URL}/products`, { cache: 'no-store' })
		if (!res.ok)
			throw new Error('Ошибка при получении данных страницы продуктов')
		return await res.json()
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return productMock as ProductPage
	}
}
