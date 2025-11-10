// src/shared/api/fetchFactory.ts
import factoryMock from '@/mock/factory.json'
import type { Factory } from '@/types/factory'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchFactory(
	lang: keyof typeof languageMap = 'ENG'
): Promise<Factory> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (factoryMock as any)[lang] as Factory
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
		return (factoryMock as any)[lang] as Factory
	}
}
