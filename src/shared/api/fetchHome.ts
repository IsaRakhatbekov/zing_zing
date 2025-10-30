import homeMock from '@/mock/home.json'
import type { HomePageData } from '@/types/home'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchHome(): Promise<HomePageData> {
	try {
		if (!API_URL) {
			return homeMock as HomePageData
		}
		const res = await fetch(`${API_URL}/home`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Ошибка при получении данных главной страницы')
		return await res.json()
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return homeMock as HomePageData
	}
}
