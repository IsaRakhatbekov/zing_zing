// components/ui/Button.tsx
import Link from 'next/link'
import styles from './Button.module.scss'

type ButtonProps = {
	text: string
	href?: string
	className?: string
}

const Button = ({ text, href = '#', className = '' }: ButtonProps) => {
	return (
		<Link
			href={href}
			// scroll можно не указывать: ScrollManager всё перехватит и докрутит куда нужно
			className={`${styles.button} ${styles[className]}`}
			prefetch
		>
			{text}
		</Link>
	)
}

export default Button
