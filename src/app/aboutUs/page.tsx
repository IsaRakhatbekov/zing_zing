import styles from './page.module.scss'

import aboutGirl from '@/assets/images/about-girl.png'
import aboutPacket from '@/assets/images/about-packet.png'
import car from '@/assets/images/Truck.png'

import KazakhstanMap from '@/assets/images/KazakhstanMap.png'
import KyrgyzstanMap from '@/assets/images/KyrgyzstanMap.png'
import RussianMap from '@/assets/images/RussianMap.png'
import UzbekistanMap from '@/assets/images/UzbekistanMap.png'

import Boxes from '@/assets/images/Boxes.png'
import ModelWomanTshirt from '@/assets/images/ModelWomanTshirt.png'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const page = () => {
	// About Us page
	return (
		<>
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
						ZingZing Across <span>Central Asia</span>
					</h2>
					<ul className={styles.list}>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={KazakhstanMap} alt='' />
							</div>
							<h3 className={styles.innerTitle}>Kazakhstan</h3>
							<p className={styles.text}>
								Proudly made and loved in Kazakhstan — where ZingZing began its
								spicy journey. From Almaty to Astana, our snacks bring energy
								and flavor to every moment.
							</p>
						</li>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={RussianMap} alt='' />
							</div>
							<h3 className={styles.innerTitle}>Russia</h3>
							<p className={styles.text}>
								Expanding across Russia with bold taste and colorful energy.
								ZingZing unites spice lovers from every corner — from Moscow
								streets to Vladivostok vibes.
							</p>
						</li>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={KyrgyzstanMap} alt='' />
							</div>
							<h3 className={styles.innerTitle}>Kyrgyzstan</h3>
							<p className={styles.text}>
								Rooted in Kyrgyzstan, inspired by its mountains and vibrant
								youth. ZingZing is more than a snack — it’s a taste of
								creativity and community.
							</p>
						</li>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={UzbekistanMap} alt='' />
							</div>
							<h3 className={styles.innerTitle}>Uzbekistan</h3>
							<p className={styles.text}>
								From Tashkent to Samarkand, ZingZing adds spice to every
								celebration. A snack that connects generations through bold
								flavor and joyful design.
							</p>
						</li>
					</ul>

					<ul className={styles.dropsList}>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='124'
									height='113'
									viewBox='0 0 124 113'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M62 113L53.01 104.871C21.08 76.1134 0 57.085 0 33.8692C0 14.8409 15.004 0 34.1 0C44.888 0 55.242 4.98801 62 12.8087C68.758 4.98801 79.112 0 89.9 0C108.996 0 124 14.8409 124 33.8692C124 57.085 102.92 76.1134 70.99 104.871L62 113Z'
										fill='#6927BE'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Quality with Heart</h3>
							<p className={styles.dropsText}>
								Every batch is made with care, under strict hygiene and safety
								standards.
							</p>
						</li>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='102'
									height='118'
									viewBox='0 0 102 118'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M61.6652 58.8965H17.6719V117.999H61.6652V58.8965Z'
										fill='#9B4DFF'
									/>
									<path
										d='M56.0721 15.1537C56.8633 11.4727 58.762 8.12205 61.5132 5.55174C64.2644 2.98143 67.7363 1.31463 71.4625 0.77524C75.1887 0.235849 78.9908 0.849706 82.3579 2.53435C85.725 4.21899 88.4959 6.89373 90.2985 10.1993C91.4961 12.3923 92.2357 14.8059 92.4725 17.2934C92.7093 19.7809 92.4382 22.2907 91.6759 24.6703L88.5871 36.1486C87.6367 39.7047 85.6966 42.9181 82.9924 45.4155C80.2882 47.9128 76.9309 49.5915 73.3105 50.2566C70.8243 50.6952 68.2721 50.5823 65.8343 49.926C63.3964 49.2696 61.1325 48.0858 59.2026 46.4583C56.3976 44.0796 54.3245 40.9544 53.2237 37.4452C52.1229 33.936 52.0396 30.1867 52.9834 26.6321L56.0721 15.1537Z'
										fill='#6927BE'
									/>
									<path
										d='M54.8708 42.8695C55.5639 41.2813 55.8506 39.5455 55.705 37.8187C55.5594 36.092 54.986 34.4287 54.0367 32.9789C53.0873 31.5292 51.7919 30.3388 50.2673 29.5151C48.7427 28.6913 47.037 28.2602 45.3041 28.2607H12.547C0.154583 28.2607 -4.70806 44.3304 5.5974 51.2007L12.4844 55.7921L18.6827 65.6008L28.5791 66.5191L41.1302 74.892V118H99.5653V72.0871C99.5653 64.3381 96.4871 56.9065 91.0077 51.4272C85.5284 45.9478 78.0967 42.8695 70.3478 42.8695H54.8708Z'
										fill='#6927BE'
									/>
									<path
										d='M57.8249 15.1541C57.3694 12.6447 56.3985 10.2569 54.9736 8.14165C53.5487 6.02638 51.7007 4.22953 49.5463 2.86456C47.3919 1.49958 44.9778 0.596136 42.4566 0.211267C39.9354 -0.173602 37.3617 -0.0315343 34.8982 0.628499C32.4347 1.28853 30.1347 2.45219 28.1436 4.04601C26.1525 5.63982 24.5135 7.62916 23.3301 9.88841C22.1467 12.1477 21.4445 14.6277 21.268 17.1721C21.0915 19.7164 21.4445 22.2697 22.3046 24.6707L25.3933 36.149C26.3484 39.7028 28.2898 42.9136 30.9933 45.4102C33.6967 47.9068 37.0516 49.5872 40.67 50.2569C43.1628 50.6932 45.7208 50.5793 48.165 49.9232C50.6092 49.2671 52.8804 48.0846 54.8196 46.4586C57.6213 44.0783 59.6893 40.9511 60.7829 37.4412C61.8765 33.9313 61.9508 30.1829 60.9971 26.6324L57.8249 15.1541ZM67.8423 69.3318C65.6943 69.3219 63.6172 68.5626 61.9691 67.185C60.321 65.8074 59.2054 63.8978 58.8146 61.7857C58.4239 59.6735 58.7824 57.4912 59.8285 55.6151C60.8747 53.7391 62.5427 52.2869 64.5449 51.5091L89.0459 42.076C91.3 41.3124 93.7621 41.4495 95.9174 42.4587C98.0728 43.4679 99.7547 45.2712 100.612 47.4915C101.468 49.7118 101.434 52.1774 100.515 54.373C99.5968 56.5685 97.8652 58.324 95.6825 59.2726L71.1815 68.7057C70.1171 69.1203 68.9846 69.3326 67.8423 69.3318ZM24.4333 86.4033H56.4475C57.6843 86.3978 58.91 86.6366 60.0542 87.1061C61.1984 87.5756 62.2387 88.2665 63.1152 89.1391C63.9916 90.0117 64.6872 91.0489 65.1617 92.191C65.6363 93.3332 65.8806 94.5578 65.8806 95.7946C65.8368 98.212 64.8457 100.516 63.1205 102.21C61.3953 103.904 59.074 104.852 56.6562 104.852H23.2646C20.5015 104.853 17.7749 104.221 15.2935 103.005C12.812 101.79 10.6415 100.023 8.94801 97.8399C7.24335 95.6627 6.06607 93.1202 5.50847 90.4119C4.95087 87.7035 5.02809 84.9028 5.73407 82.2293L12.4875 55.7498L28.5864 66.4685L23.8072 85.6102C23.7809 85.7051 23.7773 85.8048 23.7968 85.9013C23.8162 85.9977 23.8581 86.0883 23.9191 86.1655C23.9801 86.2428 24.0585 86.3046 24.1478 86.3459C24.2372 86.3872 24.335 86.4068 24.4333 86.4033Z'
										fill='#9B4DFF'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Fun with Purpose</h3>
							<p className={styles.dropsText}>
								We add humor and playfulness without losing our authenticity.
							</p>
						</li>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='100'
									height='100'
									viewBox='0 0 121 126'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M121 83.22V126H72.6V90H48.4V126H0V83.22C0 79.98 1.7545 76.98 4.598 75.42L40.293 55.2C41.624 54.42 43.197 54 44.77 54H63.525V48H72.6V54H76.1695C77.7425 54 79.3155 54.42 80.6465 55.2L116.341 75.42C119.245 77.04 121 79.98 121 83.22ZM35.453 31.5H44.77C52.8165 31.5 60.016 35.7 63.525 42H72.6C70.18 31.2 60.5 23.1 49.005 23.1V14.1C55.055 14.1 60.1975 9 60.1975 3V0H35.453V9C29.403 9 24.2 13.38 24.2 19.5C24.2 25.62 29.403 31.5 35.453 31.5Z'
										fill='#6927BE'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Local Roots, Global Mind</h3>
							<p className={styles.dropsText}>
								Proudly crafted in Central Asia, designed for the world.
							</p>
						</li>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='135'
									height='137'
									viewBox='0 0 135 137'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M54.666 0V0.0183638C78.6809 19.6698 40.0551 30.4247 43.9466 50.2948C38.0282 46.346 35.8636 36.9065 41.4179 28.7834C26.7054 35.0773 20.2729 43.7011 20.637 56.7772C20.9091 66.5702 24.8527 74.4465 30.9598 80.3596C28.1411 72.4839 27.4992 64.366 29.4656 57.4586C39.7593 71.6136 69.1478 51.7217 71.8288 34.7106C71.8161 52.9808 90.2597 68.6691 104.291 49.7387C106.864 60.3466 106.203 71.3468 103.365 80.0641C108.954 74.2287 112.496 66.4836 112.688 56.7775C112.956 43.2552 106.626 30.7239 94.6249 24.4258C99.8521 35.5811 94.4815 43.248 82.0522 48.4564C93.6529 29.0901 86.7714 4.13844 54.6648 0.000573825L54.666 0ZM67.0321 64.937C65.3128 64.9123 63.4137 65.5955 61.0829 67.34C50.0703 75.5822 35.5833 89.4368 32.5259 98.5348C27.1498 97.281 20.097 99.2014 20.097 104.426C20.097 105.002 20.1891 105.542 20.349 106.04C17.4949 105.925 14.5256 107.159 14.5256 109.779C14.5256 114.656 24.8187 114.853 25.4878 110.254C28.4703 111.109 32.0965 110.925 34.7666 109.672C34.5506 110.2 34.4339 110.781 34.4339 111.42C34.4339 117.948 46.7935 118.865 50.058 114.03C52.8035 116.023 58.6389 115.441 59.5171 112.236C64.1164 112.639 68.844 112.74 73.4667 112.514C75.927 114.17 80.6071 113.891 82.2867 111.653C85.9696 111.097 89.4878 110.299 92.7002 109.241C93.2474 113.894 103.671 113.809 103.671 108.856C103.671 108.64 103.657 108.434 103.617 108.237C106.854 109.107 111.277 107.95 111.277 104.722C111.277 101.559 106.78 100.388 103.537 101.27C103.64 93.0559 86.6582 78.0955 73.2783 67.8152C71.15 66.1803 69.2423 64.9688 67.0321 64.9373V64.937ZM121.662 97.19C118.913 97.1779 116.163 98.4181 116.163 100.938C116.163 105.979 127.161 106.025 127.161 100.938C127.161 98.4657 124.412 97.2023 121.662 97.19ZM5.4988 100.059C2.74925 100.047 0 101.287 0 103.808C0 108.848 10.9979 108.894 10.9979 103.808C10.9979 101.335 8.24834 100.072 5.4988 100.059ZM129.501 105.914C126.751 105.902 124.002 107.143 124.002 109.663C124.002 114.703 135 114.749 135 109.663C135 107.19 132.25 105.926 129.501 105.914L129.501 105.914ZM115.19 113.213C112.095 113.2 108.998 114.591 108.998 117.428C108.998 123.102 121.382 123.153 121.382 117.428C121.382 114.644 118.286 113.227 115.19 113.214V113.213ZM92.1599 114.066C89.4101 114.06 86.6608 115.324 86.6608 117.867C86.6608 121.321 92.0286 122.408 95.2646 121.032C97.9726 123.585 105.264 122.887 105.264 118.782C105.263 115.26 99.9043 114.188 96.6686 115.59C95.6237 114.584 93.8931 114.069 92.159 114.065L92.1599 114.066ZM67.0405 114.531C64.2912 114.52 61.5417 115.75 61.5417 118.271C61.5417 123.311 72.5399 123.357 72.5399 118.271C72.5399 115.798 69.7903 114.543 67.0408 114.531L67.0405 114.531ZM29.8527 118.755C26.6127 118.748 23.3727 120.224 23.3727 123.22C23.3727 126.785 28.2197 128.207 31.9853 127.416C34.4869 130.238 42.2094 129.623 42.2094 125.399C42.2094 122.653 38.9434 121.393 35.9724 121.633C35.0433 119.722 32.4482 118.76 29.8524 118.755L29.8527 118.755ZM79.83 122.01C77.4094 121.999 74.9916 122.834 73.998 124.529C69.737 123.353 63.846 124.827 63.846 129.058C63.846 135.168 76.1379 135.693 78.0482 130.492C81.6655 131.158 86.139 129.777 86.139 126.305C86.139 123.47 82.9831 122.023 79.83 122.009V122.01ZM51.894 128.51C48.7985 128.497 45.7106 129.888 45.7106 132.725C45.7106 138.399 58.086 138.451 58.086 132.725C58.086 129.942 54.9894 128.524 51.894 128.51ZM117.594 128.914C114.845 128.902 112.095 130.142 112.095 132.662C112.095 137.703 123.094 137.748 123.094 132.662C123.094 130.19 120.344 128.926 117.594 128.914H117.594Z'
										fill='#6927BE'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Trust & Transparency</h3>
							<p className={styles.dropsText}>
								No hidden ingredients, no empty promises — only honest spice.
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className={styles.ourCommunity}>
				<div className={`${styles.container} container`}>
					<div className={`${styles.wrapper} pink-bg-reverse`}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Our <span>Community</span>
							</h2>
							<p className={styles.text}>
								ZingZing is more than a snack — it’s a community of spice
								lovers, creators, and dreamers. We grow together, share ideas,
								and celebrate every flavor of life. Join us and be part of the
								Zing!
							</p>
							<Button text='Contact Us' className='purple' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={ModelWomanTshirt} alt='#' />
						</div>
					</div>

					<div className={styles.purpleWrapper}>
						<div className={styles.purpleImgWrapper}>
							<Image src={Boxes} alt='#' />
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Why Choose <span>Us</span>
							</h2>
							<p className={styles.text}>
								Because we don’t just make snacks — we make moments. Each flavor
								tells a story of spice, joy, and creativity. When you choose
								ZingZing, you choose to live life with a little extra zing.
							</p>

							<Button text='Contact Us' href='#' className='pink' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.ourMission}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Our <span>Mission</span>
							</h2>
							<p className={styles.text}>
								To become the most trusted spicy snack brand in Central Asia and
								beyond — bringing people together through bold taste, playful
								design, and sincere quality.
							</p>
							<Button text='Contact Us' href='#' className='purple' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={car} alt='#' />
						</div>
					</div>
				</div>
			</section>

			<Form />
		</>
	)
}

export default page
