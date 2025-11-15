// components/ui/Button.tsx
'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import styles from './Button.module.scss'

const buttonTranslations = {
	learnMore: {
		ENG: 'Learn More',
		RUS: 'Узнать больше',
		KAZ: 'Толығырақ',
	},
	contactUs: {
		ENG: 'Contact Us',
		RUS: 'Связаться с нами',
		KAZ: 'Бізбен хабарласыңыз',
	},
	readMoreNews: {
		ENG: 'Read More News',
		RUS: 'Читать новости',
		KAZ: 'Жаңалықтарды оқу',
	},
	upcomingEvents: {
		ENG: 'Upcoming Events',
		RUS: 'Предстоящие события',
		KAZ: 'Алдағы оқиғалар',
	},
	visitOurInstagram: {
		ENG: 'Visit Our Instagram',
		RUS: 'Посетите наш Instagram',
		KAZ: 'Біздің Instagram-ға кіріңіз',
	},
	becomeAPartner: {
		ENG: 'Become a Partner',
		RUS: 'Стать партнером',
		KAZ: 'Серіктес болу',
	},
	// Существующие переводы
	readMore: {
		ENG: 'Read More',
		RUS: 'Читать далее',
		KAZ: 'Ары қарай оқу',
	},
	viewAll: {
		ENG: 'View All',
		RUS: 'Смотреть все',
		KAZ: 'Барлығын көру',
	},
	submit: {
		ENG: 'Submit',
		RUS: 'Отправить',
		KAZ: 'Жіберу',
	},
	send: {
		ENG: 'Send',
		RUS: 'Отправить',
		KAZ: 'Жіберу',
	},
	explore: {
		ENG: 'Explore',
		RUS: 'Исследовать',
		KAZ: 'Зерттеу',
	},
} as const

type TranslationKey = keyof typeof buttonTranslations
type Language = 'ENG' | 'RUS' | 'KAZ'

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

	// Если передан translationKey - используем автоматический перевод
	// Если передан text - используем его как есть
	const buttonText = translationKey
		? buttonTranslations[translationKey][currentLang as Language]
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
