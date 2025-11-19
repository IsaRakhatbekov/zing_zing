// src/shared/api/fetchFactory.ts
import { getDomainConfig } from '@/lib/domain-config'
import factoryMock from '@/mock/factory.json'
import type { Factory } from '@/types/factory'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
	UZB: 'uz',
	TUR: 'tr',
} as const

type Language = keyof typeof languageMap

export async function fetchFactory(lang: Language = 'RUS'): Promise<Factory> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			return (factoryMock as any)[lang] || (factoryMock as any).ENG
		}

		const res = await fetch(`${API_URL}/api/factory/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Ошибка при получении данных страницы Factory')
		return (await res.json()) as Factory
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return (factoryMock as any)[lang] || (factoryMock as any).ENG
	}
}
