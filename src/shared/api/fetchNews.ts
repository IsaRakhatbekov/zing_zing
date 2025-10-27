import newsMock from '@/mock/news.json'
import type { NewsData } from '@/types/news'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchNews(): Promise<NewsData> {
	try {
		if (!API_URL) {
			// пока нет админки — берём моки
			return newsMock as NewsData
		}

		const res = await fetch(`${API_URL}/news`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Ошибка при получении новостей')

		return (await res.json()) as NewsData
	} catch (err) {
		console.warn('⚠️ Используются моки (сервер недоступен):', err)
		return newsMock as NewsData
	}
}
