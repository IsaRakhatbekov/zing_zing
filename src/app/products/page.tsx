import Image from 'next/image'
import styles from './page.module.scss'

import growTogetherImg from '@/assets/images/growTogether-img.png'
import {
	default as packetYellow,
	default as pruduct1,
} from '@/assets/images/hero-main.png'
import heroGirl from '@/assets/images/products-hero-girl.png'
import heroPacket from '@/assets/images/products-hero-packet.png'
import Button from '@/components/ui/Button'
import { Product } from '@/types/product'

// Products page
const page = () => {
	// здесь нужно будет заменить URL на реальный эндпоинт,
	async function getProducts(): Promise<Product[]> {
		const res = await fetch('http://localhost:3000/api/products', {
			cache: 'no-store',
		})
		if (!res.ok) throw new Error('Failed to fetch products')
		return res.json()
	}
	return (
		<>
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								Crafted with <span className={styles.pink}>Spice</span> Shared
								with <span className={styles.yellow}>Joy</span>
							</h2>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image src={heroGirl} alt='#' />
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image src={heroPacket} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.products}>
				<div className='container'>
					{/* {products.map(product => (
							<div key={product.id} className={styles.card}>
								<div
									className={styles.cardBg}
									style={{ backgroundColor: product.bgColor }}
								/>
								<Image
									src={product.image}
									alt={product.title}
									width={200}
									height={200}
								/>
								<h3 style={{ color: product.textColor }}>{product.title}</h3>
							</div>
						))} */}
					<ul className={styles.list}>
						<li className={styles.card}>
							<div className={styles.yellow}></div>
							<div className={styles.pink}>
								<h3 className={styles.title}>
									ZingZing <br />
									<span>Classic</span>
								</h3>
								<div className={styles.imgWrapper}>
									<Image src={pruduct1} alt='#' />
								</div>
							</div>
						</li>
						<li className={styles.card}>
							<div className={styles.yellow}></div>
							<div className={styles.pink}>
								<h3 className={styles.title}>
									ZingZing <br />
									<span>Classic</span>
								</h3>
								<div className={styles.imgWrapper}>
									<Image src={pruduct1} alt='#' />
								</div>
							</div>
						</li>
						<li className={styles.card}>
							<div className={styles.yellow}></div>
							<div className={styles.pink}>
								<h3 className={styles.title}>
									ZingZing <br />
									<span>Classic</span>
								</h3>
								<div className={styles.imgWrapper}>
									<Image src={pruduct1} alt='#' />
								</div>
							</div>
						</li>
						<li className={styles.card}>
							<div className={styles.yellow}></div>
							<div className={styles.pink}>
								<h3 className={styles.title}>
									ZingZing <br />
									<span>Classic</span>
								</h3>
								<div className={styles.imgWrapper}>
									<Image src={pruduct1} alt='#' />
								</div>
							</div>
						</li>
						<li className={styles.card}>
							<div className={styles.yellow}></div>
							<div className={styles.pink}>
								<h3 className={styles.title}>
									ZingZing <br />
									<span>Classic</span>
								</h3>
								<div className={styles.imgWrapper}>
									<Image src={pruduct1} alt='#' />
								</div>
							</div>
						</li>
						<li className={styles.card}>
							<div className={styles.yellow}></div>
							<div className={styles.pink}>
								<h3 className={styles.title}>
									ZingZing <br />
									<span>Classic</span>
								</h3>
								<div className={styles.imgWrapper}>
									<Image src={pruduct1} alt='#' />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className={styles.productsDetailed}>
				<div className={`${styles.container} container`}>
					<ul className={styles.list}>
						<li className={styles.block}>
							<div className={styles.content}>
								<h2 className={styles.title}>
									ZingZing
									<br />
									<span>Hot Pot</span>
								</h2>
								<p className={styles.text}>
									Inspired by Asia’s favorite sharing dish, our Hot Pot flavor
									blends pepper, broth, and joy — a perfect choice for those who
									like their spice with a story.
								</p>
							</div>
							<div className={styles.rightSide}>
								<h3 className={styles.elementTitle}>Hot Pot</h3>
								<div className={styles.imgWrapper}>
									<Image src={packetYellow} alt='' />
								</div>
							</div>
						</li>
						<li className={styles.block}>
							<div className={styles.content}>
								<h2 className={styles.title}>
									ZingZing
									<br />
									<span>Chill</span>
								</h2>
								<p className={styles.text}>
									A modern twist on our original spice — sleek, balanced, and
									perfectly portioned for your desk break. When you need focus
									and flavor, reach for Chill.
								</p>
							</div>
							<div className={styles.rightSide}>
								<h3 className={styles.elementTitle}>Chill</h3>
								<div className={styles.imgWrapper}>
									<Image src={packetYellow} alt='' />
								</div>
							</div>
						</li>
						<li className={styles.block}>
							<div className={styles.content}>
								<h2 className={styles.title}>
									ZingZing
									<br />
									<span>Joy</span>
								</h2>
								<p className={styles.text}>
									A smoky touch, a joyful bite the perfect choice for family
									moments, parties, or picnics. Crafted for connection.
								</p>
							</div>
							<div className={styles.rightSide}>
								<h3 className={styles.elementTitle}>Joy</h3>
								<div className={styles.imgWrapper}>
									<Image src={packetYellow} alt='' />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className={styles.growTogether}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Let’s Grow <span>Together</span>
							</h2>
							<p className={styles.text}>
								Whether you’re looking to expand your snack portfolio or
								introduce something fresh and exciting to your region, ZingZing
								brings energy, color, and fun that customers can’t resist.
							</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>

						<div className={styles.imgWrapper}>
							<Image src={growTogetherImg} alt='#' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
