// src/shared/api/fetchHome.ts
import { getDomainConfig } from '@/lib/domain-config'
import homeMock from '@/mock/home.json'
import type { Home } from '@/types/home'

// Маппинг языков для бэкенда
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchHome(
	lang: keyof typeof languageMap = 'ENG'
): Promise<Home> {
	try {
		// Получаем конфигурацию домена
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			console.log('Using mock data for home')
			return (homeMock as any)[lang] as Home
		}

		console.log(
			`Fetching home data from: ${API_URL} with lang: ${languageMap[lang]}`
		)

		const res = await fetch(`${API_URL}/api/home/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Ошибка при получении данных главной страницы')
		return (await res.json()) as Home
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return (homeMock as any)[lang] as Home
	}
}
