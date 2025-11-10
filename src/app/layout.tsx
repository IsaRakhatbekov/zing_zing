import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { LanguageProvider } from '@/context/LanguageContext'
import '@/styles/global.scss'
import { Inter, Montserrat, Roboto } from 'next/font/google'

const roboto = Roboto({
	variable: '--font-family',
	subsets: ['latin'],
})

const inter = Inter({
	variable: '--second-family',
	subsets: ['latin'],
})

const montserrat = Montserrat({
	variable: '--third-family',
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
			<body
				className={`${inter.variable} ${roboto.variable} ${montserrat.variable}`}
			>
				<LanguageProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	)
}
