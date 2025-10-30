import Image from 'next/image'
import styles from './page.module.scss'

import growTogetherImg from '@/assets/images/growTogether-img.png'
import Button from '@/components/ui/Button'
// import { fetchProducts } from '@/shared/api/fetchProducts'
// import { ProductsPageData } from '@/types/product'

// Products page
export default async function Page() {
	// const data: ProductsPageData = await fetchProducts()

	return (
		<>
			{/* HERO */}
			{/* <section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>{data.hero.title}
								<spam>{data.colord}</spam>
								<spam>{data.colord}</spam>
							</h2>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image
									src={data.hero.leftImage}
									alt='Hero left'
									width={400}
									height={400}
								/>
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={data.hero.rightImage}
									alt='Hero right'
									width={400}
									height={400}
								/>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* МАЛЕНЬКИЕ КАРТОЧКИ */}
			{/* <section className={styles.products}>
				<div className='container'>
					<ul className={styles.list}>
						{data.products.map(p => (
							<li key={p.id} className={styles.card}>
								<div className={styles.yellow}></div>
								<div className={styles.pink}>
									<h3 className={styles.title}>
										ZingZing <br />
										<span>{p.flavor}</span>
									</h3>
									<div className={styles.imgWrapper}>
										<Image
											src={p.image}
											alt={p.title}
											width={200}
											height={200}
										/>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section> */}

			{/* БОЛЬШИЕ БЛОКИ */}
			{/* <section className={styles.productsDetailed}>
				<div className={`${styles.container} container`}>
					<ul className={styles.list}>
						{data.productsDetailed.map(p => (
							<li
								key={p.id}
								className={styles.block}
								style={{ backgroundColor: p.bgColor, color: p.textColor }}
							>
								<div className={styles.content}>
									<h2 className={styles.title}>
										ZingZing
										<br />
										<span>{p.flavor}</span>
									</h2>
									<p className={styles.text}>{p.description}</p>
								</div>
								<div className={styles.rightSide}>
									<h3 className={styles.elementTitle}>{p.flavor}</h3>
									<div className={styles.imgWrapper}>
										<Image
											src={p.image}
											alt={p.title}
											width={260}
											height={260}
										/>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section> */}

			{/* Остальное как было */}
			{/* <section className={styles.growTogether}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Let’s Grow <span>Together</span>
							</h2>
							<p className={styles.text}>
								Whether you’re looking to expand your snack portfolio or
								introduce something fresh and exciting to your region, ZingZing
								brings energy, color, and fun that customers can’t resist.
							</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>

						<div className={styles.imgWrapper}>
							<Image src={growTogetherImg} alt='Grow Together' />
						</div>
					</div>
				</div>
			</section> */}
		</>
	)
}
