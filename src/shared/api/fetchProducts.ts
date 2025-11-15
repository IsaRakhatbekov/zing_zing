// src/shared/api/fetchProducts.ts
import productMock from '@/mock/products.json'
import type { Products } from '@/types/products'
import { getDomainConfig } from '@/lib/domain-config'

const languageMap = {
  ENG: 'en',
  RUS: 'ru',
  KAZ: 'kk',
} as const

export async function fetchProducts(
  lang: keyof typeof languageMap = 'ENG'
): Promise<Products> {
  try {
    const domainConfig = getDomainConfig()
    const API_URL = domainConfig.apiUrl

    if (!API_URL) {
      console.log('Using mock data for products')
      return (productMock as any)[lang] as Products
    }

    console.log(`Fetching products data from: ${API_URL} with lang: ${languageMap[lang]}`)

    const res = await fetch(`${API_URL}/api/products/`, {
      cache: 'no-store',
      headers: {
        'Accept-Language': languageMap[lang],
      },
    })

    if (!res.ok) throw new Error('Ошибка при получении данных страницы продуктов')
    return (await res.json()) as Products
  } catch (err) {
    console.warn('▲ Используются моки (сервер недоступен):', err)
    return (productMock as any)[lang] as Products
  }
}