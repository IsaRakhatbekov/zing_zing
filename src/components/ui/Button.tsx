// components/ui/Button.tsx
'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import styles from './Button.module.scss'

const buttonTranslations = {
	learnMore: {
		ENG: 'Learn More',
		RUS: 'Узнать больше',
		KAZ: 'Көбірек Білу',
		UZB: 'Batafsil',
		TUR: 'Daha Fazla',
	},
	contactUs: {
		ENG: 'Contact Us',
		RUS: 'Свяжитесь с Нами',
		KAZ: 'Байланыс',
		UZB: 'Bog‘lanish',
		TUR: 'İletişim',
	},
	readMoreNews: {
		ENG: 'Read More News',
		RUS: 'Читать больше',
		KAZ: 'Көбірек Оқыңыз',
		UZB: 'Batafsil Yangiliklar',
		TUR: 'Daha Fazla Oku',
	},
	upcomingEvents: {
		ENG: 'Upcoming Events',
		RUS: 'Ближайшие события',
		KAZ: 'UАлдағы Іс-шаралар',
		UZB: 'Kelajak Tadbirlar',
		TUR: 'Yaklaşan Etkinlikler',
	},
	visitOurInstagram: {
		ENG: 'Visit Our Instagram',
		RUS: 'Посетите Инстаграм',
		KAZ: 'Instagram-ға Кіру',
		UZB: 'Instagramga Tashrif',
		TUR: "Instagram'ımızı Görün",
	},
	becomeAPartner: {
		ENG: 'Become a Partner',
		RUS: 'Стать партнером',
		KAZ: 'Серіктес Болыңыз',
		UZB: "Hamkor bo‘ling",
		TUR: 'Partner Ol',
	},
	readMore: {
		ENG: 'Read More',
		RUS: 'Читать далее',
		KAZ: 'Ары қарай оқу',
		UZB: "Ko'proq o'qing",
		TUR: 'Daha Fazla Oku',
	},
	viewAll: {
		ENG: 'View All',
		RUS: 'Смотреть все',
		KAZ: 'Барлығын көру',
		UZB: "Hammasini ko'rish",
		TUR: 'Tümünü Görüntüle',
	},
	submit: {
		ENG: 'Submit',
		RUS: 'Отправить',
		KAZ: 'Жіберу',
		UZB: 'Yuborish',
		TUR: 'Gönder',
	},
	send: {
		ENG: 'Send',
		RUS: 'Отправить',
		KAZ: 'Жіберу',
		UZB: 'Yuborish',
		TUR: 'Gönder',
	},
	explore: {
		ENG: 'Explore',
		RUS: 'Исследовать',
		KAZ: 'Зерттеу',
		UZB: 'Tadqiq qilish',
		TUR: 'Keşfet',
	},
} as const

type TranslationKey = keyof typeof buttonTranslations

type ButtonProps = {
	text?: string
	translationKey?: TranslationKey
	href?: string
	className?: string
}

const Button = ({
	text,
	translationKey,
	href = '#',
	className = '',
}: ButtonProps) => {
	const { currentLang } = useLanguage()

	const buttonText = translationKey
		? buttonTranslations[translationKey][currentLang]
		: text

	return (
		<Link
			href={href}
			className={`${styles.button} ${styles[className]}`}
			prefetch
		>
			{buttonText}
		</Link>
	)
}

export default Button
