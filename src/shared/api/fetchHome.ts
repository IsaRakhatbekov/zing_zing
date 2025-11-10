// src/shared/api/fetchHome.ts
import homeMock from '@/mock/home.json'
import type { Home } from '@/types/home'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchHome(
	lang: keyof typeof languageMap = 'ENG'
): Promise<Home> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (homeMock as any)[lang] as Home
		}

		const res = await fetch(`${API_URL}/home`, {
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
