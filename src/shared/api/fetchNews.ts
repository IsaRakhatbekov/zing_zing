// src/shared/api/fetchNews.ts
import newsMock from '@/mock/news.json'
import type { News } from '@/types/news'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchNews(
	lang: keyof typeof languageMap = 'ENG'
): Promise<News> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (newsMock as any)[lang] as News
		}

		const res = await fetch(`${API_URL}/api/news/`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Failed to fetch News page')
		return (await res.json()) as News
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return (newsMock as any)[lang] as News
	}
}
