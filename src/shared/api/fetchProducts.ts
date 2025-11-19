// src/shared/api/fetchProducts.ts
import { getDomainConfig } from '@/lib/domain-config'
import productMock from '@/mock/products.json'
import type { Products } from '@/types/products'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
	UZB: 'uz',
	TUR: 'tr',
} as const

type Language = keyof typeof languageMap

export async function fetchProducts(lang: Language = 'RUS'): Promise<Products> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			return (productMock as any)[lang] || (productMock as any).ENG
		}

		const res = await fetch(`${API_URL}/api/products/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok)
			throw new Error('Ошибка при получении данных страницы продуктов')
		return (await res.json()) as Products
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return (productMock as any)[lang] || (productMock as any).ENG
	}
}
