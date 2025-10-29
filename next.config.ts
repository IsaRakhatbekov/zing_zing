/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '89.23.115.13',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
