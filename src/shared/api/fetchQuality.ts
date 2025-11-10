// src/shared/api/fetchQuality.ts
import qualityMock from '@/mock/quality.json'
import type { Quality } from '@/types/quality'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchQuality(
	lang: keyof typeof languageMap = 'ENG'
): Promise<Quality> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (qualityMock as any)[lang] as Quality
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
		return (qualityMock as any)[lang] as Quality
	}
}
