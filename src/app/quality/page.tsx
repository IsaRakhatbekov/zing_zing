import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'

import { fetchQuality } from '@/shared/api/fetchQuality'
import Image from 'next/image'
import styles from './page.module.scss'

export default async function page() {
	// Quality page

	const data = await fetchQuality()
	const { hero, secondSection, thirdSection, fourthSection } = data

	return (
		<>
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								{hero.mainTitle}
								<span className={styles.purple}>{hero.mainTitleSpan1}</span>
								<br />
								<span className={styles.pink}>{hero.mainTitleSpan2}</span>
							</h2>
							<p className={styles.text}>{hero.text}</p>
						</div>

						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image
									src={hero.leftSideImage1}
									alt='#'
									width={100}
									height={100}
								/>
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image
									src={hero.rightSideImage}
									alt='#'
									width={100}
									height={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.quality}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.imgWrapper}>
							<Image
								src={secondSection.image}
								alt='#'
								width={800}
								height={600}
							/>
						</div>

						<div className={styles.content}>
							<h2 className={styles.title}>
								{secondSection.title} <span>{secondSection.titleSpan}</span>
							</h2>
							<p className={styles.text}>{secondSection.text}</p>
							<Button text='Contact Us' href='#' className='pink' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.drops}>
				<div className={`${styles.container} container`}>
					<ul className={styles.dropsList}>
						{thirdSection.dropsList.map(
							({ id, image, dropsTitle, dropsText }) => (
								<li className={styles.dropsItem} key={id}>
									<div className={styles.iconWrapper}>
										<Image src={image} alt='' width={110} height={110} />
									</div>
									<h3 className={styles.dropsTitle}>{dropsTitle}</h3>
									<p className={styles.dropsText}>{dropsText}</p>
								</li>
							)
						)}
					</ul>
				</div>
			</section>

			<section className={styles.ensureQuality}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{fourthSection.ensure.title}
								<span>{fourthSection.ensure.titleSpan}</span>
							</h2>
							<p className={styles.text}>{fourthSection.ensure.text}</p>
							<Button text='Contact Us' className='purple' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image
								src={fourthSection.ensure.image}
								alt=''
								width={100}
								height={100}
							/>
						</div>
					</div>

					<div className={styles.pinkWrapper}>
						<div className={styles.pinkImgWrapper}>
							<Image
								src={fourthSection.accountability.image}
								alt=''
								width={100}
								height={100}
							/>
						</div>
						<div className={styles.content}>
							<h2 className={`${styles.title} ${styles.pinkTitle}`}>
								{fourthSection.accountability.title}
							</h2>
							<p className={`${styles.text} ${styles.pinkText}`}>
								{fourthSection.accountability.text}
							</p>
							<Button text='Contact Us' href='#' className='yellow' />
						</div>
					</div>

					<div className={styles.purpleWrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{fourthSection.stewardship.title}
							</h2>
							<p className={styles.text}>{fourthSection.stewardship.text}</p>
							<Button text='Contact Us' className='pink' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image
								src={fourthSection.stewardship.image}
								alt=''
								width={100}
								height={100}
							/>
						</div>
					</div>

					<div className={styles.ourCertifications}>
						<div className={styles.imgWrapper}>
							<Image
								src={fourthSection.certifications.image}
								alt=''
								width={100}
								height={100}
							/>
						</div>
						<div className={styles.content}>
							<h2 className={`${styles.title} ${styles.sertificationsTitle}`}>
								{fourthSection.certifications.title}
							</h2>
							<p className={`${styles.text} ${styles.sertificationsText}`}>
								{fourthSection.certifications.text}
							</p>
							<Button text='Contact Us' href='#' className='yellow' />
						</div>
					</div>
				</div>
			</section>

			<Form />
		</>
	)
}
