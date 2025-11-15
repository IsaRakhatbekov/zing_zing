// src/shared/api/fetchQuality.ts
import qualityMock from '@/mock/quality.json'
import type { Quality } from '@/types/quality'
import { getDomainConfig } from '@/lib/domain-config'

const languageMap = {
  ENG: 'en',
  RUS: 'ru',
  KAZ: 'kk',
} as const

export async function fetchQuality(
  lang: keyof typeof languageMap = 'ENG'
): Promise<Quality> {
  try {
    const domainConfig = getDomainConfig()
    const API_URL = domainConfig.apiUrl

    if (!API_URL) {
      console.log('Using mock data for quality')
      return (qualityMock as any)[lang] as Quality
    }

    console.log(`Fetching quality data from: ${API_URL} with lang: ${languageMap[lang]}`)

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