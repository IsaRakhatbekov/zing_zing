// src/shared/api/fetchQuality.ts
import { getDomainConfig } from '@/lib/domain-config'
import qualityMock from '@/mock/quality.json'
import type { Quality } from '@/types/quality'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
	UZB: 'uz',
	TUR: 'tr',
} as const

type Language = keyof typeof languageMap

export async function fetchQuality(lang: Language = 'RUS'): Promise<Quality> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			return (qualityMock as any)[lang] || (qualityMock as any).ENG
		}

		const res = await fetch(`${API_URL}/api/quality/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Failed to fetch quality page')
		return (await res.json()) as Quality
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return (qualityMock as any)[lang] || (qualityMock as any).ENG
	}
}
