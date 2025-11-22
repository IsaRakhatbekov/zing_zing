'use client'
import logo from '@/assets/images/logo.png'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'

type HeaderTranslation = {
	topText: string
	home: string
	products: string
	aboutUs: string
	quality: string
	news: string
	factory: string
	reachUs: string
}

type HeaderTranslations = {
	ENG: HeaderTranslation
	RUS: HeaderTranslation
	KAZ: HeaderTranslation
	UZB: HeaderTranslation
	TUR: HeaderTranslation
}

const Header = () => {
	const [burger, setBurger] = useState(false)
	const [isLangOpen, setIsLangOpen] = useState(false)
	const { currentLang, setCurrentLang } = useLanguage()
	const pathName = usePathname()

	const languages = [
		{ code: 'ENG' as const, name: 'EN', short: 'EN' },
		{ code: 'RUS' as const, name: 'RU', short: 'RU' },
		{ code: 'KAZ' as const, name: 'KZ', short: 'KZ' },
		{ code: 'UZB' as const, name: 'UZ', short: 'UZ' },
		{ code: 'TUR' as const, name: 'TR', short: 'TR' },
	]

	const headerTranslations: HeaderTranslations = {
		ENG: {
			topText:
				"Spicy. Crunchy. Unforgettable. That's the true taste of ZingZing.",
			home: 'Home',
			products: 'Products',
			aboutUs: 'About Us',
			quality: 'Quality',
			news: 'News',
			factory: 'Factory',
			reachUs: 'Reach Us',
		},
		RUS: {
			topText: 'Острый. Хрустящий. Незабываемый. Это настоящий вкус ZingZing.',
			home: 'Главная',
			products: 'Продукция',
			aboutUs: 'О нас',
			quality: 'Качество',
			news: 'Новости',
			factory: 'Фабрика',
			reachUs: 'Контакты',
		},
		KAZ: {
			topText: 'Ащы. Қытырлақ. Ұмытылмас. Міне, ZingZing шынайы дәмі.',
			home: 'Басты бет',
			products: 'Өнімдер',
			aboutUs: 'Біз туралы',
			quality: 'Сапа',
			news: 'Жаңалықтар',
			factory: 'Өндіріс Орны',
			reachUs: 'Байланыс',
		},
		UZB: {
			topText:
				"Achchiq. Qarsillagan. Unutilmas. Mana ZingZing'ning haqiqiy ta'mi.",
			home: 'Bosh Sahifa',
			products: 'Mahsulotlar',
			aboutUs: 'Haqqimizda',
			quality: 'Sifat',
			news: 'Yangiliklar',
			factory: 'Zavod',
			reachUs: 'Aloqa',
		},
		TUR: {
			topText: "Baharatlı. Çıtır. Unutulmaz. İşte ZingZing'in gerçek lezzeti.",
			home: 'Ana Sayfa',
			products: 'Ürünler',
			aboutUs: 'Hakkımızda',
			quality: 'Kalite',
			news: 'Haberler',
			factory: 'Fabrika',
			reachUs: 'İletişim',
		},
	}

	const t = headerTranslations[currentLang]

	// Функция для получения сокращенного кода языка
	const getShortLang = (langCode: string): string => {
		const lang = languages.find(lang => lang.code === langCode)
		return lang ? lang.short : langCode
	}

	// Массив навигационных ссылок для удобного рендеринга
	const navItems: { href: string; key: keyof HeaderTranslation }[] = [
		{ href: '/', key: 'home' },
		{ href: '/products', key: 'products' },
		{ href: '/aboutUs', key: 'aboutUs' },
		{ href: '/quality', key: 'quality' },
		{ href: '/news', key: 'news' },
		{ href: '/factory', key: 'factory' },
		{ href: '/reachUs', key: 'reachUs' },
	]

	useEffect(() => {
		const body = document.body
		if (burger) {
			body.classList.add('lockScroll')
		} else {
			body.classList.remove('lockScroll')
		}

		return () => {
			body.classList.remove('lockScroll')
		}
	}, [burger])

	const handleLangSelect = (
		langCode: 'ENG' | 'RUS' | 'KAZ' | 'UZB' | 'TUR'
	) => {
		setCurrentLang(langCode)
		setIsLangOpen(false)
	}

	const toggleLangMenu = () => {
		setIsLangOpen(!isLangOpen)
	}

	return (
		<header className={styles.Header}>
			<p className={`${styles.topText} ${burger ? styles.topTextActive : ''}`}>
				{t.topText}
			</p>
			<div className={`${styles.container} container`}>
				<nav className={styles.nav}>
					<a className={styles.logoWrapper} href='#'>
						<Image src={logo} alt='ZingZing' />
					</a>
					<ul className={styles.list}>
						{navItems.map(item => (
							<li key={item.href} className={styles.item}>
								<Link
									className={`${styles.link} ${
										pathName === item.href ? styles.activeLink : ''
									}`}
									href={item.href}
									prefetch={false}
								>
									{t[item.key]}
								</Link>
							</li>
						))}
						<li className={`${styles.item} ${styles.langItem}`}>
							<button className={styles.lang} onClick={toggleLangMenu}>
								{getShortLang(currentLang)}
							</button>
							<div
								className={`${styles.langMenu} ${
									isLangOpen ? styles.langMenuActive : ''
								}`}
							>
								{languages.map(lang => (
									<button
										key={lang.code}
										className={`${styles.langOption} ${
											currentLang === lang.code ? styles.langOptionActive : ''
										}`}
										onClick={() => handleLangSelect(lang.code)}
									>
										{lang.name}
									</button>
								))}
							</div>
						</li>
					</ul>
					<button
						onClick={() => setBurger(prev => !prev)}
						className={`${styles.burgerBtn} ${
							burger ? styles.burgerBtnActive : ''
						}`}
					>
						<span></span>
					</button>
				</nav>
			</div>

			{/* === МОБИЛЬНОЕ МЕНЮ === */}
			<div
				className={`${styles.mobMenuWrapper} ${
					burger ? styles.mobMenuWrapperActive : ''
				}`}
			>
				<ul className={styles.list}>
					{navItems.map(item => (
						<li key={item.href} className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === item.href ? styles.activeLink : ''
								}`}
								href={item.href}
								prefetch={false}
								onClick={() => setBurger(false)}
							>
								{t[item.key]}
							</Link>
						</li>
					))}
					<li className={`${styles.item} ${styles.langItem}`}>
						<button className={styles.lang} onClick={toggleLangMenu}>
							{getShortLang(currentLang)}
							<span
								className={`${styles.arrow} ${
									isLangOpen ? styles.arrowActive : ''
								}`}
							>
								▼
							</span>
						</button>
						<div
							className={`${styles.langMenu} ${
								isLangOpen ? styles.langMenuActive : ''
							}`}
						>
							{languages.map(lang => (
								<button
									key={lang.code}
									className={`${styles.langOption} ${
										currentLang === lang.code ? styles.langOptionActive : ''
									}`}
									onClick={() => {
										handleLangSelect(lang.code)
										setBurger(false)
									}}
								>
									{lang.name}
								</button>
							))}
						</div>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
