import qualityMock from '@/mock/quality.json'
import { QualityType } from '@/types/quality'
// import type { QualityPage } from '@/types/quality'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchQuality(): Promise<QualityType> {
	try {
		if (!API_URL) return qualityMock as QualityType
		const res = await fetch(`${API_URL}/quality`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Failed to fetch quality page')
		return (await res.json()) as QualityType
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return qualityMock as QualityType
	}
}
