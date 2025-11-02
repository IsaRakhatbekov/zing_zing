import reachUsMock from '@/mock/reachUs.json'
import type { ReachUs } from '@/types/reachUs'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchReachUs(): Promise<ReachUs> {
	try {
		if (!API_URL) return reachUsMock as ReachUs
		const res = await fetch(`${API_URL}/reach-us`, { cache: 'no-store' })
		if (!res.ok)
			throw new Error('Ошибка при получении данных страницы Reach Us')
		return (await res.json()) as ReachUs
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return reachUsMock as ReachUs
	}
}
