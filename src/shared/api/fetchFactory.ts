import factoryMock from '@/mock/factory.json'
import type { FactoryType } from '@/types/factory'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchFactory(): Promise<FactoryType> {
	try {
		if (!API_URL) {
			return factoryMock as FactoryType
		}
		const res = await fetch(`${API_URL}/factory`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Ошибка при получении данных страницы Factory')
		return (await res.json()) as FactoryType
	} catch (err) {
		console.warn('▲ Используются моки (сервер недоступен):', err)
		return factoryMock as FactoryType
	}
}
