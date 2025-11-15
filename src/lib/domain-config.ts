// src/lib/domain-config.ts
type Language = 'ENG' | 'RUS' | 'KAZ'

interface DomainConfig {
	lang: Language
	apiUrl: string
}

// Безопасная конфигурация - если что-то пойдет не так, будет fallback
export const domainConfigs: Record<string, DomainConfig> = {
	'zingzing.kz': {
		lang: 'KAZ',
		apiUrl:
			process.env.NEXT_PUBLIC_APL_URL_KY ||
			process.env.NEXT_PUBLIC_API_URL ||
			'',
	},
	'zingzing.ru': {
		lang: 'RUS',
		apiUrl:
			process.env.NEXT_PUBLIC_APL_URL_RU ||
			process.env.NEXT_PUBLIC_API_URL ||
			'',
	},
	'zingzing.uz': {
		lang: 'KAZ',
		apiUrl:
			process.env.NEXT_PUBLIC_APL_URL_UZ ||
			process.env.NEXT_PUBLIC_API_URL ||
			'',
	},
	localhost: {
		lang: 'RUS',
		apiUrl: process.env.NEXT_PUBLIC_API_URL || '',
	},
}

// Безопасная функция - всегда возвращает валидную конфигурацию
export const getDomainConfig = (): DomainConfig => {
	try {
		if (typeof window === 'undefined') {
			// На сервере возвращаем дефолтную конфигурацию
			return domainConfigs['zingzing.kz']
		}

		const hostname = window.location.hostname.toLowerCase()

		// Проверяем точное совпадение
		if (domainConfigs[hostname]) {
			return domainConfigs[hostname]
		}

		// Проверяем частичное совпадение (для поддоменов)
		for (const domain in domainConfigs) {
			if (hostname.includes(domain)) {
				return domainConfigs[domain]
			}
		}

		// Fallback на дефолтный
		return domainConfigs['zingzing.kz']
	} catch (error) {
		console.warn('Error in domain config, using fallback:', error)
		return domainConfigs['zingzing.kz']
	}
}
