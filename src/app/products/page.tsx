'use client'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { fetchProducts } from '@/shared/api/fetchProducts'
import type { Products } from '@/types/products'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import ProductsAnimations from './ProductsAnimations'

export default function Page() {
	const { currentLang } = useLanguage()
	const [productsData, setProductsData] = useState<Products | null>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setError(null)
				const data = await fetchProducts(currentLang)
				if (data) {
					setProductsData(data)
				} else {
					setError('Failed to load products data')
				}
			} catch (err) {
				console.error('Error loading products data:', err)
				setError('Error loading products data')
			}
		}
		loadData()
	}, [currentLang])

	// Логируем ошибки но не падаем
	if (error) {
		console.warn('Products page error:', error)
	}

	return (
		<>
			<ProductsAnimations productsData={productsData} />

			{/* Рендерим секции только если есть данные */}
			{productsData && (
				<>
					{/* HERO */}
					<section className={styles.secondHero} id='products-hero'>
						<div className={`${styles.container} container`}>
							<div className={styles.wrapper}>
								<div className={styles.textWrapper}>
									<h2 className={styles.title}>
										{productsData.hero.title1}
										<br />
										<span className={styles.pink}>
											{productsData.hero.mainTitleSpan1}
										</span>
										<br />
										{productsData.hero.title2}
										<br />
										<span className={styles.yellow}>
											{productsData.hero.mainTitleSpan2}
										</span>
									</h2>
								</div>
								<div className={styles.imagesWrapper}>
									<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
										<Image
											src={productsData.hero.leftSideImage}
											alt='Hero left'
											width={400}
											height={400}
											priority
										/>
									</div>
									<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
										<div className={styles.rightSideImgWrapper}>
											<Image
												src={productsData.hero.rightSideImage1}
												alt='Hero right'
												width={400}
												height={400}
											/>
										</div>
										<div className={styles.rightSideImgWrapper}>
											<Image
												src={productsData.hero.rightSideImage2}
												alt='Hero right'
												width={400}
												height={400}
											/>
										</div>
										<div className={styles.rightSideImgWrapper}>
											<Image
												src={productsData.hero.rightSideImage3}
												alt='Hero right'
												width={400}
												height={400}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* МАЛЕНЬКИЕ КАРТОЧКИ */}
					<section className={styles.products} id='products-small-cards'>
						<div className='container'>
							<ul className={styles.list}>
								{productsData.secondSectionSmallCard.cards.map((p, index) => (
									<li key={index} className={styles.card}>
										<div className={styles.yellow}></div>
										<div className={styles.pink}>
											<h3 className={styles.title}>
												ZingZing <br />
												<span>{p.titleSpan}</span>
											</h3>
											<div className={styles.imgWrapper}>
												<Image
													src={p.image}
													alt={p.titleSpan}
													width={200}
													height={200}
												/>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</section>

					{/* БОЛЬШИЕ БЛОКИ */}
					<section className={styles.productsDetailed}>
						<div className={`${styles.container} container`}>
							<h2 className={styles.productsDetailedTitle}>
								OTHER DELISON <span>PRODUCTS</span>
							</h2>
							<ul className={styles.list}>
								{productsData.thirdSectionBigCards?.bigCard?.[0] && (
									<li className={styles.block}>
										<div className={styles.content}>
											<h2 className={styles.title}>
												{productsData.thirdSectionBigCards.bigCard[0].title}
												<br />
												<span>
													{
														productsData.thirdSectionBigCards.bigCard[0]
															.titleSpan
													}
												</span>
											</h2>
											<p className={styles.text}>
												{productsData.thirdSectionBigCards.bigCard[0].text}
											</p>
										</div>
										<div className={styles.rightSide}>
											<h3 className={styles.elementTitle}>
												{productsData.thirdSectionBigCards.bigCard[0].titleSpan}
											</h3>
											<div className={styles.imgWrapper}>
												<Image
													src={
														productsData.thirdSectionBigCards.bigCard[0].image
													}
													alt={
														productsData.thirdSectionBigCards.bigCard[0]
															.titleSpan
													}
													width={300}
													height={500}
												/>
											</div>
										</div>
									</li>
								)}
								{productsData.thirdSectionBigCards?.bigCard?.[1] && (
									<li className={styles.block}>
										<div className={styles.content}>
											<h2 className={styles.title}>
												{productsData.thirdSectionBigCards.bigCard[1].title}
												<br />
												<span>
													{
														productsData.thirdSectionBigCards.bigCard[1]
															.titleSpan
													}
												</span>
											</h2>
											<p className={styles.text}>
												{productsData.thirdSectionBigCards.bigCard[1].text}
											</p>
										</div>
										<div className={styles.rightSide}>
											<h3 className={styles.elementTitle}>
												{productsData.thirdSectionBigCards.bigCard[1].titleSpan}
											</h3>
											<div className={styles.imgWrapper}>
												<Image
													src={
														productsData.thirdSectionBigCards.bigCard[1].image
													}
													alt={
														productsData.thirdSectionBigCards.bigCard[1]
															.titleSpan
													}
													width={300}
													height={500}
												/>
											</div>
										</div>
									</li>
								)}
								{productsData.thirdSectionBigCards?.bigCard?.[2] && (
									<li className={styles.block}>
										<div className={styles.content}>
											<h2 className={styles.title}>
												{productsData.thirdSectionBigCards.bigCard[2].title}
												<br />
												<span>
													{
														productsData.thirdSectionBigCards.bigCard[2]
															.titleSpan
													}
												</span>
											</h2>
											<p className={styles.text}>
												{productsData.thirdSectionBigCards.bigCard[2].text}
											</p>
										</div>
										<div className={styles.rightSide}>
											<h3 className={styles.elementTitle}>
												{productsData.thirdSectionBigCards.bigCard[2].titleSpan}
											</h3>
											<div className={styles.imgWrapper}>
												<Image
													src={
														productsData.thirdSectionBigCards.bigCard[2].image
													}
													alt={
														productsData.thirdSectionBigCards.bigCard[2]
															.titleSpan
													}
													width={300}
													height={500}
												/>
											</div>
										</div>
									</li>
								)}
							</ul>
						</div>
					</section>

					{/* Остальное как было */}
					<section className={styles.growTogether}>
						<div className={`${styles.container} container`}>
							<div className={`${styles.wrapper} pink-bg-reverse`}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{productsData.fourthSectionGrowTogether.title}{' '}
										<span>
											{productsData.fourthSectionGrowTogether.titleSpan}
										</span>
									</h2>
									<p className={styles.text}>
										{productsData.fourthSectionGrowTogether.text}
									</p>
									<Button
										translationKey='contactUs'
										href='/aboutUs#aboutUsForm'
										className='purple'
									/>
								</div>

								<div className={styles.imgWrapper}>
									<Image
										src={productsData.fourthSectionGrowTogether.image}
										alt='Grow together'
										width={600}
										height={400}
									/>
								</div>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	)
}
