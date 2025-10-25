import type { Product } from '@/types/product'

export const products: Product[] = [
	{
		id: 1,
		title: 'ZingZing Classic',
		flavor: 'Classic',
		image: '/images/classic.png',
		bgColor: '#F9DC4D',
		textColor: '#FF2684',
	},
	{
		id: 2,
		title: 'ZingZing BBQ',
		flavor: 'BBQ',
		image: '/images/bbq.png',
		bgColor: '#FF2684',
		textColor: '#F9DC4D',
	},
	{
		id: 3,
		title: 'ZingZing Hot Pot',
		flavor: 'Hot Pot',
		image: '/images/hotpot.png',
		bgColor: '#8037DE',
		textColor: '#FFFFFF',
	},
]
