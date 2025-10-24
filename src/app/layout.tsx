import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import '@/styles/global.scss'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata = {
	title: 'ZingZing',
	description: 'ZingZing — отзывы, видео и анимации',
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
