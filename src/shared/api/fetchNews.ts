// src/shared/api/fetchNews.ts
import newsMock from '@/mock/news.json'
import { NewsTypes } from '@/types/news'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchNews(): Promise<NewsTypes> {
	try {
		if (!API_URL) return newsMock as NewsTypes
		const res = await fetch(`${API_URL}/news`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Failed to fetch News page')
		return (await res.json()) as NewsTypes
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return newsMock as NewsTypes
	}
}
