import Button from '@/components/ui/Button'
import { fetchProducts } from '@/shared/api/fetchProducts'
import Image from 'next/image'
import styles from './page.module.scss'

// Products page
export default async function Page() {
	const data = await fetchProducts()
	const {
		hero,
		secondSectionSmallCard,
		thirdSectionBigCards,
		fourthSectionGrowTogether,
	} = data

	return (
		<>
			{/* HERO */}
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								{hero.mainTitle}
								<span>{hero.mainTitleSpan1}</span>
								<span>{hero.mainTitleSpan2}</span>
							</h2>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image
									src={hero.leftSideImage}
									alt='Hero left'
									width={400}
									height={400}
								/>
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={hero.rightSideImage}
									alt='Hero right'
									width={400}
									height={400}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* МАЛЕНЬКИЕ КАРТОЧКИ */}
			<section className={styles.products}>
				<div className='container'>
					<ul className={styles.list}>
						{secondSectionSmallCard.cards.map((p, index) => (
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
			</section>

			{/* БОЛЬШИЕ БЛОКИ */}
			<section className={styles.productsDetailed}>
				<div className={`${styles.container} container`}>
					<ul className={styles.list}>
						{thirdSectionBigCards?.bigCard?.[0] && (
							<li className={styles.block}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{thirdSectionBigCards.bigCard[0].title}
										<br />
										<span>{thirdSectionBigCards.bigCard[0].titleSpan}</span>
									</h2>
									<p className={styles.text}>
										{thirdSectionBigCards.bigCard[0].text}
									</p>
								</div>
								<div className={styles.rightSide}>
									<h3 className={styles.elementTitle}>
										{thirdSectionBigCards.bigCard[0].titleSpan}
									</h3>
									<div className={styles.imgWrapper}>
										<Image
											src={thirdSectionBigCards.bigCard[0].image}
											alt=''
											width={100}
											height={100}
										/>
									</div>
								</div>
							</li>
						)}
						{thirdSectionBigCards?.bigCard?.[1] && (
							<li className={styles.block}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{thirdSectionBigCards.bigCard[1].title}
										<br />
										<span>{thirdSectionBigCards.bigCard[1].titleSpan}</span>
									</h2>
									<p className={styles.text}>
										{thirdSectionBigCards.bigCard[1].text}
									</p>
								</div>
								<div className={styles.rightSide}>
									<h3 className={styles.elementTitle}>
										{thirdSectionBigCards.bigCard[1].titleSpan}
									</h3>
									<div className={styles.imgWrapper}>
										<Image
											src={thirdSectionBigCards.bigCard[1].image}
											alt=''
											width={100}
											height={100}
										/>
									</div>
								</div>
							</li>
						)}
						{thirdSectionBigCards?.bigCard?.[2] && (
							<li className={styles.block}>
								<div className={styles.content}>
									<h2 className={styles.title}>
										{thirdSectionBigCards.bigCard[2].title}
										<br />
										<span>{thirdSectionBigCards.bigCard[2].titleSpan}</span>
									</h2>
									<p className={styles.text}>
										{thirdSectionBigCards.bigCard[2].text}
									</p>
								</div>
								<div className={styles.rightSide}>
									<h3 className={styles.elementTitle}>
										{thirdSectionBigCards.bigCard[2].titleSpan}
									</h3>
									<div className={styles.imgWrapper}>
										<Image
											src={thirdSectionBigCards.bigCard[2].image}
											alt=''
											width={100}
											height={100}
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
								{fourthSectionGrowTogether.title}{' '}
								<span>{fourthSectionGrowTogether.titleSpan}</span>
							</h2>
							<p className={styles.text}>{fourthSectionGrowTogether.text}</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>

						<div className={styles.imgWrapper}>
							<Image
								src={fourthSectionGrowTogether.image}
								alt='#'
								width={100}
								height={100}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
