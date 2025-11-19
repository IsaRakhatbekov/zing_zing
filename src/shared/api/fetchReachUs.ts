// src/shared/api/fetchReachUs.ts
import { getDomainConfig } from '@/lib/domain-config'
import reachUsMock from '@/mock/reachUs.json'
import type { ReachUs } from '@/types/reachUs'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
	UZB: 'uz',
	TUR: 'tr',
} as const

type Language = keyof typeof languageMap

export async function fetchReachUs(lang: Language = 'RUS'): Promise<ReachUs> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			return (reachUsMock as any)[lang] || (reachUsMock as any).ENG
		}

		const res = await fetch(`${API_URL}/api/reachUs/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok)
			throw new Error('Ошибка при получении данных страницы Reach Us')
		return (await res.json()) as ReachUs
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return (reachUsMock as any)[lang] || (reachUsMock as any).ENG
	}
}
