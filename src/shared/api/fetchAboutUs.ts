// src/shared/api/fetchAboutUs.ts
import aboutUsMock from '@/mock/aboutUs.json'
import type { AboutUs } from '@/types/aboutUs'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export async function fetchAboutUs(): Promise<AboutUs> {
	try {
		if (!API_URL) return aboutUsMock as AboutUs
		const res = await fetch(`${API_URL}/aboutUs`, { cache: 'no-store' })
		if (!res.ok) throw new Error('Failed to fetch About Us page')
		return (await res.json()) as AboutUs
	} catch (e) {
		console.warn('▲ Используются моки (сервер недоступен):', e)
		return aboutUsMock as AboutUs
	}
}
