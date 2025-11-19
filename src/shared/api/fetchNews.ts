// src/shared/api/fetchNews.ts
import { getDomainConfig } from '@/lib/domain-config'
import newsMock from '@/mock/news.json'
import type { News } from '@/types/news'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
	UZB: 'uz',
	TUR: 'tr',
} as const

type Language = keyof typeof languageMap

export async function fetchNews(lang: Language = 'RUS'): Promise<News> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			return (newsMock as any)[lang] || (newsMock as any).ENG
		}

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
		return (newsMock as any)[lang] || (newsMock as any).ENG
	}
}
