import styles from './page.module.scss'

import aboutGirl from '@/assets/images/about-girl.png'
import aboutPacket from '@/assets/images/about-packet.png'

import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

import AboutUsAnimations from './AboutUsAnimations'
gsap.registerPlugin(ScrollTrigger)

export default async function page() {
	const data = (await import('@/mock/aboutUs.json')).default as any
	const { hero, secondSection, thirdSection } = data
	const [community, whyUs, mission] = thirdSection.blocks

	return (
		<>
			<AboutUsAnimations />
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								Born from <span className={styles.yellow}>Spice.</span> Built on{' '}
								<span className={styles.purple}>Passion.</span>
							</h2>
							<p className={styles.text}>
								We are ZingZing — a new generation of snack makers who believe
								that great taste can be bold, fun, and crafted with care.
							</p>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image src={aboutPacket} alt='#' />
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image src={aboutGirl} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.centralAsia}>
				<div className={`${styles.container} container`}>
					<h2 className={styles.title}>
						{secondSection.mainTitle} <span>{secondSection.mainTitleSpan}</span>
					</h2>

					<ul className={styles.list}>
						{secondSection.list.map((item: any) => (
							<li className={styles.item} key={item.id}>
								<div className={styles.imgWrapper}>
									{/* imgWrapper должен быть position:relative в CSS */}
									<Image src={item.image} alt='' fill />
								</div>
								<h3 className={styles.innerTitle}>{item.innerTitle}</h3>
								<p className={styles.text}>{item.text}</p>
							</li>
						))}
					</ul>

					<ul className={styles.dropsList}>
						{secondSection.dropsList.map((d: any) => (
							<li className={styles.dropsItem} key={d.id}>
								<div className={styles.iconWrapper}>
									{/* вместо inline SVG — картинка из моков */}
									<Image src={d.image} alt='' fill />
								</div>
								<h3 className={styles.dropsTitle}>{d.dropsTitle}</h3>
								<p className={styles.dropsText}>{d.dropsText}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className={styles.ourCommunity}>
				<div className={`${styles.container} container`}>
					{/* 1) Our Community (pink) */}
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{community.title} <span>{community.titleSpan}</span>
							</h2>
							<p className={styles.text}>{community.text}</p>
							<Button text='Contact Us' className='purple' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={community.image} alt='' fill />
						</div>
					</div>

					{/* 2) Why Choose Us (purple) */}
					<div className={styles.purpleWrapper}>
						<div className={styles.purpleImgWrapper}>
							<Image src={whyUs.image} alt='' fill />
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{whyUs.title} <span>{whyUs.titleSpan}</span>
							</h2>
							<p className={styles.text}>{whyUs.text}</p>
							<Button text='Contact Us' href='#' className='pink' />
						</div>
					</div>

					{/* 3) Our Mission (yellow) */}
					<div className={styles.yellowWrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								{mission.title} <span>{mission.titleSpan}</span>
							</h2>
							<p className={styles.text}>{mission.text}</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={mission.image} alt='' fill />
						</div>
					</div>
				</div>
			</section>
			<Form />
		</>
	)
}
