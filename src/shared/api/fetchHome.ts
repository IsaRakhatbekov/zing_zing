// src/shared/api/fetchHome.ts
import { getDomainConfig } from '@/lib/domain-config'
import homeMock from '@/mock/home.json'
import type { Home } from '@/types/home'

// Обновленный маппинг языков для бэкенда с поддержкой 5 языков
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
	UZB: 'uz',
	TUR: 'tr',
} as const

// Обновленный тип для языка
type Language = keyof typeof languageMap

export async function fetchHome(lang: Language = 'RUS'): Promise<Home> {
	try {
		// Получаем конфигурацию домена
		const domainConfig = getDomainConfig()
		const API_URL = domainConfig.apiUrl

		if (!API_URL) {
			console.log('Using mock data for home')
			// Fallback на английский если данных для языка нет
			return (homeMock as any)[lang] || (homeMock as any).ENG
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
		// Fallback на английский если данных для языка нет
		return (homeMock as any)[lang] || (homeMock as any).ENG
	}
}
