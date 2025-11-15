// src/shared/api/fetchAboutUs.ts
import { getDomainConfig } from '@/lib/domain-config'
import aboutUsMock from '@/mock/aboutUs.json'
import type { AboutUs } from '@/types/aboutUs'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchAboutUs(
	lang: keyof typeof languageMap = 'ENG'
): Promise<AboutUs> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			console.log('Using mock data for about us')
			return (aboutUsMock as any)[lang] as AboutUs
		}

		console.log(
			`Fetching about us data from: ${API_URL} with lang: ${languageMap[lang]}`
		)

		const res = await fetch(`${API_URL}/api/aboutUs/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Failed to fetch About Us page')
		return (await res.json()) as AboutUs
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return (aboutUsMock as any)[lang] as AboutUs
	}
}
