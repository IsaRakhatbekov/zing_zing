/** @type {import('next').NextConfig} */
const nextConfig = {
	// 🔹 Создаёт статическую сборку (папку out/)
	output: 'export',

	// 🔹 Исправляет работу картинок при экспорте
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '89.23.115.13',
				port: '',
				pathname: '/**',
			},
		],
	},

	// 🔹 Настройки для GitHub Pages
	// ЗАМЕНИ "zing_zing" на точное имя репозитория в GitHub
	basePath: '/zing_zing',
	assetPrefix: '/zing_zing/',
}

export default nextConfig
