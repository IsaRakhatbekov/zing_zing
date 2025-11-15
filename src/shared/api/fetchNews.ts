// src/shared/api/fetchNews.ts
import { getDomainConfig } from '@/lib/domain-config'
import newsMock from '@/mock/news.json'
import type { News } from '@/types/news'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchNews(
	lang: keyof typeof languageMap = 'ENG'
): Promise<News> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			console.log('Using mock data for news')
			return (newsMock as any)[lang] as News
		}

		console.log(
			`Fetching news data from: ${API_URL} with lang: ${languageMap[lang]}`
		)

		const res = await fetch(`${API_URL}/api/news/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Failed to fetch News page')
		return (await res.json()) as News
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return (newsMock as any)[lang] as News
	}
}
