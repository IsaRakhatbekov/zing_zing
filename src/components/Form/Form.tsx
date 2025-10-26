'use client'
import { useState } from 'react'
import styles from './Form.module.scss'

interface FormProps {
	variant?: 'default' | 'pink'
	title?: string
	text?: string
}

const Form = ({
	variant = 'default',
	title = 'Let’s Grow Together!',
	text = 'Whether you’re a distributor, retailer, or creative partner — we’d love to hear from you! Join the ZingZing family and bring bold flavor, playful energy, and reliable quality to your region.',
}: FormProps) => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		const formData = { email, phone, message }

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSuccess(true)
				setEmail('')
				setPhone('')
				setMessage('')

				// через 3 секунды вернуть форму обратно
				setTimeout(() => setSuccess(false), 3000)
			} else {
				alert('Failed to send message.')
			}
		} catch (error) {
			alert('Error occurred. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className={`${styles.container} container`}>
			<form
				className={`${styles.form} ${styles[variant]}`}
				onSubmit={handleSubmit}
			>
				<div className={styles.textWrapper}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.text}>{text}</p>
				</div>

				<div className={styles.rightSide}>
					{success ? (
						<div className={styles.successBlock}>
							<svg
								className={styles.successIcon}
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle cx='12' cy='12' r='10' />
								<path d='M9 12l2 2 4-4' />
							</svg>
							<p className={styles.successText}>Message sent successfully!</p>
						</div>
					) : (
						<>
							<div className={styles.inputsWrapper}>
								<label className={styles.lbl} htmlFor='email'>
									Your/Company email
								</label>
								<input
									className={styles.inp}
									type='email'
									id='email'
									placeholder='name@company.com'
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
							</div>

							<div className={styles.inputsWrapper}>
								<label className={styles.lbl} htmlFor='phone'>
									Phone Number
								</label>
								<input
									className={styles.inp}
									type='text'
									id='phone'
									placeholder='+997'
									value={phone}
									onChange={e => setPhone(e.target.value)}
									required
								/>
							</div>

							<div className={styles.inputsWrapper}>
								<label className={styles.lbl} htmlFor='textarea'>
									Message
								</label>
								<textarea
									id='textarea'
									className={`${styles.inp} ${styles.textarea}`}
									placeholder='Send Message or Become a Partner'
									value={message}
									onChange={e => setMessage(e.target.value)}
									required
								/>
							</div>

							<button type='submit' className={styles.btn} disabled={loading}>
								{loading ? 'Sending...' : 'Send'}
							</button>
						</>
					)}
				</div>
			</form>
		</div>
	)
}

export default Form
