// src/shared/api/fetchReachUs.ts
import reachUsMock from '@/mock/reachUs.json'
import type { ReachUs } from '@/types/reachUs'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchReachUs(
	lang: keyof typeof languageMap = 'ENG'
): Promise<ReachUs> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (reachUsMock as any)[lang] as ReachUs
		}

		const res = await fetch(`${API_URL}/reachUs`, {
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
