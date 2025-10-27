'use client'
import data from '@/mock/products.json'
import { ProductsPageData } from '@/types/product'
import Image from 'next/image'
import styles from './HomeCards.module.scss'

export default function HomeCards() {
	const { productsDetailed }: ProductsPageData = data

	return (
		<section className={styles.products}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapper}>
					{productsDetailed.map(item => (
						<div key={item.id} className={styles.card}>
							<div className={styles.imgWrapper}>
								<Image
									src={item.image}
									alt={item.title}
									width={400}
									height={300}
									className={styles.img}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.title}>{item.title}</h3>
								<p className={styles.text}>{item.description}</p>
								<a href='#' className={styles.btn}>
									Learn More
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
