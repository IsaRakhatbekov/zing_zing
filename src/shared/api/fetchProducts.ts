// src/shared/api/fetchProducts.ts
import productMock from '@/mock/products.json'
import type { Products } from '@/types/products'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchProducts(
	lang: keyof typeof languageMap = 'ENG'
): Promise<Products> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (productMock as any)[lang] as Products
		}

		const res = await fetch(`${API_URL}/products`, {
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
		return (productMock as any)[lang] as Products
	}
}
