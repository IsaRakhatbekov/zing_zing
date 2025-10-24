'use client'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
	const [burger, setBurger] = useState(false)
	const [isLangOpen, setIsLangOpen] = useState(false)
	const [currentLang, setCurrentLang] = useState('ENG')
	const pathName = usePathname()

	const languages = [
		{ code: 'ENG', name: 'English' },
		{ code: 'RUS', name: 'Русский' },
		{ code: 'KAZ', name: 'Қазақша' },
	]

	const handleLangSelect = (langCode: string) => {
		setCurrentLang(langCode)
		setIsLangOpen(false)
	}

	const toggleLangMenu = () => {
		setIsLangOpen(!isLangOpen)
	}

	return (
		<header className={styles.Header}>
			<p className={`${styles.topText} ${burger ? styles.topTextActive : ''}`}>
				Spicy. Crunchy. Unforgettable. That's the true taste of ZingZing.
			</p>
			<div className={`${styles.container} container`}>
				<nav className={styles.nav}>
					<a className={styles.logoWrapper} href='#'>
						<Image src={logo} alt='ZingZing' />
					</a>
					<ul className={styles.list}>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/' ? styles.activeLink : ''
								}`}
								href='/'
							>
								Home
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/products' ? styles.activeLink : ''
								}`}
								href='/products'
							>
								Products
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/aboutUs' ? styles.activeLink : ''
								}`}
								href='/aboutUs'
							>
								About Us
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/quality' ? styles.activeLink : ''
								}`}
								href='/quality'
							>
								Quality
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/news' ? styles.activeLink : ''
								}`}
								href='/news'
							>
								News
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/factory' ? styles.activeLink : ''
								}`}
								href='/factory'
							>
								Factory
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								className={`${styles.link} ${
									pathName === '/reachUs' ? styles.activeLink : ''
								}`}
								href='/reachUs'
							>
								Reach Us
							</Link>
						</li>
						<li className={`${styles.item} ${styles.langItem}`}>
							<button className={styles.lang} onClick={toggleLangMenu}>
								{currentLang}
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
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/' ? styles.activeLink : ''
							}`}
							href='/'
							onClick={() => setBurger(false)}
						>
							Home
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/products' ? styles.activeLink : ''
							}`}
							href='/products'
							onClick={() => setBurger(false)}
						>
							Products
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/aboutUs' ? styles.activeLink : ''
							}`}
							href='/aboutUs'
							onClick={() => setBurger(false)}
						>
							About Us
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/quality' ? styles.activeLink : ''
							}`}
							href='/quality'
							onClick={() => setBurger(false)}
						>
							Quality
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/news' ? styles.activeLink : ''
							}`}
							href='/news'
							onClick={() => setBurger(false)}
						>
							News
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/factory' ? styles.activeLink : ''
							}`}
							href='/factory'
							onClick={() => setBurger(false)}
						>
							Factory
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={`${styles.link} ${
								pathName === '/reachUs' ? styles.activeLink : ''
							}`}
							href='/reachUs'
							onClick={() => setBurger(false)}
						>
							Reach Us
						</Link>
					</li>
					<li className={`${styles.item} ${styles.langItem}`}>
						<button className={styles.lang} onClick={toggleLangMenu}>
							{currentLang}
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
