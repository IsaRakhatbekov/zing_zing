// src/shared/api/fetchReachUs.ts
import { getDomainConfig } from '@/lib/domain-config'
import reachUsMock from '@/mock/reachUs.json'
import type { ReachUs } from '@/types/reachUs'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchReachUs(
	lang: keyof typeof languageMap = 'ENG'
): Promise<ReachUs> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			console.log('Using mock data for reach us')
			return (reachUsMock as any)[lang] as ReachUs
		}

		console.log(
			`Fetching reach us data from: ${API_URL} with lang: ${languageMap[lang]}`
		)

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
		return (reachUsMock as any)[lang] as ReachUs
	}
}
