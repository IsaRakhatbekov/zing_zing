// src/shared/api/fetchAboutUs.ts
import aboutUsMock from '@/mock/aboutUs.json'
import type { AboutUs } from '@/types/aboutUs'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

// Маппинг твоих кодов языков на те, что ожидает бэкенд
const languageMap = {
	ENG: 'en',
	RUS: 'ru',
	KAZ: 'kk',
} as const

export async function fetchAboutUs(
	lang: keyof typeof languageMap = 'ENG'
): Promise<AboutUs> {
	try {
		if (!API_URL) {
			// В мок-режиме берем данные для нужного языка
			return (aboutUsMock as any)[lang] as AboutUs
		}

		const res = await fetch(`${API_URL}/aboutUs`, {
			cache: 'no-store',
			headers: {
				'Accept-Language': languageMap[lang],
			},
		})

		if (!res.ok) throw new Error('Failed to fetch About Us page')
		return (await res.json()) as AboutUs
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return (aboutUsMock as any)[lang] as AboutUs
	}
}
