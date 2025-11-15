// src/shared/api/fetchFactory.ts
import { getDomainConfig } from '@/lib/domain-config'
import factoryMock from '@/mock/factory.json'
import type { Factory } from '@/types/factory'

const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchFactory(
	lang: keyof typeof languageMap = 'ENG'
): Promise<Factory> {
	try {
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			console.log('Using mock data for factory')
			return (factoryMock as any)[lang] as Factory
		}

		console.log(
			`Fetching factory data from: ${API_URL} with lang: ${languageMap[lang]}`
		)

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
		return (factoryMock as any)[lang] as Factory
	}
}
