'use client'
import { useEffect, useState } from 'react'

type Language = 'ENG' | 'RUS' | 'KAZ'

export const useLanguage = () => {
	const [currentLang, setCurrentLang] = useState<Language>('ENG')

	useEffect(() => {
		const savedLang = localStorage.getItem('preferredLang') as Language
		if (savedLang && ['ENG', 'RUS', 'KAZ'].includes(savedLang)) {
			setCurrentLang(savedLang)
		}
	}, [])

	const changeLanguage = (lang: Language) => {
		setCurrentLang(lang)
		localStorage.setItem('preferredLang', lang)
		window.dispatchEvent(new Event('languageChange'))
	}

	return {
		currentLang,
		setCurrentLang: changeLanguage,
	}
}
