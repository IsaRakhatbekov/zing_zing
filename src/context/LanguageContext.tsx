// src/context/LanguageContext.tsx
'use client'

import { getDomainConfig } from '@/lib/domain-config'
import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'

export type Language = 'ENG' | 'RUS' | 'KAZ' | 'UZB' | 'TUR'

interface LanguageContextType {
	currentLang: Language
	setCurrentLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// ВАЖНО: и сервер, и первый рендер на клиенте стартуют с RUS
	const [currentLang, setCurrentLang] = useState<Language>('RUS')

	useEffect(() => {
		let initialLang: Language = 'RUS'

		// 1) Пытаемся определить язык по домену (только в браузере)
		try {
			const domainConfig = getDomainConfig()
			initialLang = domainConfig.lang
		} catch (error) {
			console.warn('Error in domain config, using RUS as fallback:', error)
		}

		// 2) Если в localStorage есть сохранённый язык — он важнее домена
		const savedLang = localStorage.getItem('preferredLang') as Language | null
		const allowed: Language[] = ['ENG', 'RUS', 'KAZ', 'UZB', 'TUR']

		if (savedLang && allowed.includes(savedLang)) {
			initialLang = savedLang
		}

		setCurrentLang(initialLang)
	}, [])

	const changeLanguage = (lang: Language) => {
		setCurrentLang(lang)
		if (typeof window !== 'undefined') {
			localStorage.setItem('preferredLang', lang)
		}
	}

	return (
		<LanguageContext.Provider
			value={{ currentLang, setCurrentLang: changeLanguage }}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
