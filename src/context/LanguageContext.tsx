'use client'
import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'

type Language = 'ENG' | 'RUS' | 'KAZ'

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
	const [currentLang, setCurrentLang] = useState<Language>('RUS')

	useEffect(() => {
		const savedLang = localStorage.getItem('preferredLang') as Language
		if (savedLang && ['ENG', 'RUS', 'KAZ'].includes(savedLang)) {
			setCurrentLang(savedLang)
		}
	}, [])

	const changeLanguage = (lang: Language) => {
		setCurrentLang(lang)
		localStorage.setItem('preferredLang', lang)
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
