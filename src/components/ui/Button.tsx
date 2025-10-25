import Link from 'next/link'
import styles from './Button.module.scss'

type ButtonProps = {
	text: string
	href?: string
	className?: string
}

const Button = ({ text, href = '#', className = '' }: ButtonProps) => {
	return (
		<Link href={href} className={`${styles.button} ${styles[className]}`}>
			{text}
		</Link>
	)
}

export default Button
