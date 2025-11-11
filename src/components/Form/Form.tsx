'use client'
import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'
import styles from './Form.module.scss'

// Типы для переводов Form
type FormTranslation = {
	title: string
	text: string
	emailLabel: string
	emailPlaceholder: string
	phoneLabel: string
	phonePlaceholder: string
	messageLabel: string
	messagePlaceholder: string
	sendButton: string
	sendingButton: string
	successMessage: string
	errorMessage: string
	networkError: string
}

type FormTranslations = {
	ENG: FormTranslation
	RUS: FormTranslation
	KAZ: FormTranslation
}

interface FormProps {
	variant?: 'default' | 'pink'
	title?: string
	text?: string
}

const Form = ({ variant = 'default', title, text }: FormProps) => {
	const { currentLang } = useLanguage()
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	// Переводы для Form компонента
	const formTranslations: FormTranslations = {
		ENG: {
			title: "Let's Grow Together!",
			text: "Whether you're a distributor, retailer, or creative partner — we'd love to hear from you! Join the ZingZing family and bring bold flavor, playful energy, and reliable quality to your region.",
			emailLabel: 'Your/Company email',
			emailPlaceholder: 'name@company.com',
			phoneLabel: 'Phone Number',
			phonePlaceholder: '+997',
			messageLabel: 'Message',
			messagePlaceholder: 'Send Message or Become a Partner',
			sendButton: 'Send',
			sendingButton: 'Sending...',
			successMessage: 'Message sent successfully!',
			errorMessage: 'Failed to send message.',
			networkError: 'Error occurred. Please try again.',
		},
		RUS: {
			title: 'Давайте расти вместе!',
			text: 'Будь вы дистрибьютор, ритейлер или креативный партнер — мы будем рады услышать вас! Присоединяйтесь к семье ZingZing и принесите смелый вкус, игривую энергию и надежное качество в ваш регион.',
			emailLabel: 'Ваш/Компании email',
			emailPlaceholder: 'name@company.com',
			phoneLabel: 'Номер телефона',
			phonePlaceholder: '+7',
			messageLabel: 'Сообщение',
			messagePlaceholder: 'Отправить сообщение или стать партнером',
			sendButton: 'Отправить',
			sendingButton: 'Отправляется...',
			successMessage: 'Сообщение успешно отправлено!',
			errorMessage: 'Не удалось отправить сообщение.',
			networkError: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
		},
		KAZ: {
			title: 'Бірге Өсейік!',
			text: 'Сіз дистрибьютор, сатушы немесе креативтік серіктес болсаңыз да — біз сізді естуге қуаныштымыз! ZingZing отбасына қосылыңыз және өз аймағыңызға батыл дәм, ойыншыл энергия және сенімді сапа әкеліңіз.',
			emailLabel: 'Сіздің/Компания email',
			emailPlaceholder: 'name@company.com',
			phoneLabel: 'Телефон нөмірі',
			phonePlaceholder: '+7',
			messageLabel: 'Хабарлама',
			messagePlaceholder: 'Хабарлама жіберу немесе серіктес болу',
			sendButton: 'Жіберу',
			sendingButton: 'Жіберілуде...',
			successMessage: 'Хабарлама сәтті жіберілді!',
			errorMessage: 'Хабарламаны жіберу сәтсіз аяқталды.',
			networkError: 'Қате орын алды. Қайталап көріңіз.',
		},
	}

	const t = formTranslations[currentLang]

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		const formData = { email, phone, message }

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSuccess(true)
				setEmail('')
				setPhone('')
				setMessage('')
			} else {
				alert(t.errorMessage)
			}
		} catch (error) {
			alert(t.networkError)
		} finally {
			setLoading(false)
		}
	}

	// Используем переданные props или переводы
	const displayTitle = title || t.title
	const displayText = text || t.text

	// Если успех - показываем красивый блок успеха
	if (success) {
		return (
			<div className={`${styles.container} container`}>
				<div className={`${styles.successContainer} ${styles[variant]}`}>
					<div className={styles.successContent}>
						<div className={styles.successIconWrapper}>
							<svg
								className={styles.successIcon}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M22 4L12 14.01L9 11.01'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<h3 className={styles.successTitle}>Success!</h3>
						<p className={styles.successMessage}>{t.successMessage}</p>
						<button
							className={styles.successButton}
							onClick={() => setSuccess(false)}
						>
							Send Another Message
						</button>
					</div>
				</div>
			</div>
		)
	}

	// Иначе показываем обычную форму
	return (
		<div className={`${styles.container} container`}>
			<form
				className={`${styles.form} ${styles[variant]}`}
				onSubmit={handleSubmit}
			>
				<div className={styles.textWrapper}>
					<h2 className={styles.title}>{displayTitle}</h2>
					<p className={styles.text}>{displayText}</p>
				</div>

				<div className={styles.rightSide}>
					<div className={styles.inputsWrapper}>
						<label className={styles.lbl} htmlFor='email'>
							{t.emailLabel}
						</label>
						<input
							className={styles.inp}
							type='email'
							id='email'
							placeholder={t.emailPlaceholder}
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className={styles.inputsWrapper}>
						<label className={styles.lbl} htmlFor='phone'>
							{t.phoneLabel}
						</label>
						<input
							className={styles.inp}
							type='text'
							id='phone'
							placeholder={t.phonePlaceholder}
							value={phone}
							onChange={e => setPhone(e.target.value)}
							required
						/>
					</div>

					<div className={styles.inputsWrapper}>
						<label className={styles.lbl} htmlFor='textarea'>
							{t.messageLabel}
						</label>
						<textarea
							id='textarea'
							className={`${styles.inp} ${styles.textarea}`}
							placeholder={t.messagePlaceholder}
							value={message}
							onChange={e => setMessage(e.target.value)}
							required
						/>
					</div>

					<button type='submit' className={styles.btn} disabled={loading}>
						{loading ? t.sendingButton : t.sendButton}
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
