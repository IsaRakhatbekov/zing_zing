import sertifications from '@/assets/images/Our-Certifications.png'
import qualityPacket from '@/assets/images/Quality-herio-packet.png'
import qualityModel from '@/assets/images/Quality-model.png'
import doctor from '@/assets/images/doctor.png'
import hat from '@/assets/images/hat.png'
import purpleBox from '@/assets/images/purpleBox.png'
import tree from '@/assets/images/tree.png'
import Form from '@/components/Form/Form'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import styles from './page.module.scss'
const page = () => {
	// Quality page
	return (
		<>
			<section className={styles.secondHero}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.textWrapper}>
							<h2 className={styles.title}>
								Quality You Can
								<span className={styles.purple}> Trust.</span>
								<br />
								Spice You’ll
								<br />
								<span className={styles.pink}> Love.</span>
							</h2>
							<p className={styles.text}>
								We are ZingZing — a new generation of snack makers who believe
								that great taste can be bold, fun, and crafted with care.
							</p>
						</div>
						<div className={styles.imagesWrapper}>
							<div className={`${styles.imgWrapper} ${styles.leftImg}`}>
								<Image src={qualityPacket} alt='#' />
							</div>
							<div className={`${styles.imgWrapper} ${styles.rightImg}`}>
								<Image src={qualityModel} alt='#' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.quality}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.imgWrapper}>
							<Image src={hat} alt='#' />
						</div>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Our <span>Quality</span> Promise
							</h2>
							<p className={styles.text}>
								We don’t just meet standards — we build them into every step.
								From ingredients to packaging, our promise is simple: safe,
								consistent, and delicious.
							</p>
							<Button text='Contact Us' href='#' className='pink' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.drops}>
				<div className={`${styles.container} container`}>
					<ul className={styles.dropsList}>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='106'
									height='106'
									viewBox='0 0 106 106'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M43.1628 4.7283L38.6735 8.02352C37.8826 8.65442 37.0446 9.22406 36.167 9.72749C35.5759 10.0416 34.9565 10.2992 34.3169 10.4966C33.5941 10.7154 32.8448 10.8281 31.3395 11.0602L25.8357 11.9022C21.4923 12.5652 19.3173 12.9034 17.6131 13.9178C16.088 14.8129 14.8215 16.0859 13.9196 17.6108C12.9051 19.3347 12.5735 21.5094 11.9038 25.8323L11.0616 31.3354C10.8295 32.8405 10.7168 33.5963 10.498 34.319C10.299 34.9599 10.0426 35.5743 9.72877 36.1622C9.37069 36.8252 8.92641 37.4418 8.02458 38.6684L4.72892 43.1571C2.12953 46.6976 0.829835 48.4679 0.325871 50.384C-0.108624 52.0962 -0.108624 53.8898 0.325871 55.602C0.823204 57.538 2.12953 59.3149 4.72892 62.829L8.02458 67.3176C8.92641 68.5442 9.37732 69.1608 9.72877 69.8238C10.0382 70.4161 10.2946 71.035 10.498 71.6803C10.7168 72.3964 10.8295 73.1456 11.0616 74.6506L11.9038 80.1537C12.5669 84.4965 12.9051 86.6646 13.9196 88.3752C14.8148 89.9002 16.088 91.1732 17.6131 92.0682C19.3372 93.0827 21.5122 93.4142 25.8357 94.0838L31.3395 94.9259C32.8448 95.1579 33.6007 95.2773 34.3169 95.4961C34.9579 95.6906 35.5746 95.9469 36.167 96.2652C36.8301 96.6166 37.4468 97.0608 38.6735 97.9691L43.1628 101.264C46.7038 103.863 48.4743 105.163 50.3907 105.667C52.1015 106.111 53.8985 106.111 55.6093 105.667C57.5456 105.163 59.3228 103.863 62.8372 101.264L67.3265 97.9691C68.5532 97.0674 69.1699 96.6166 69.833 96.2652C70.4254 95.9469 71.0421 95.6906 71.6831 95.4961C72.4059 95.2773 73.1552 95.1646 74.6605 94.9259L80.1643 94.0838C84.5077 93.4208 86.676 93.0893 88.3869 92.0682C89.912 91.1732 91.1852 89.9002 92.0804 88.3752C93.0949 86.6513 93.4265 84.4766 94.0962 80.1537L94.9384 74.6506C95.1705 73.1456 95.2832 72.3964 95.502 71.6737C95.701 71.0327 95.9574 70.4161 96.2712 69.8238C96.6293 69.1608 97.0736 68.5442 97.9754 67.3176L101.271 62.829C103.87 59.2884 105.17 57.5248 105.674 55.602C106.109 53.8898 106.109 52.0962 105.674 50.384C105.177 48.448 103.87 46.6711 101.271 43.1571L97.9754 38.6684C97.3444 37.8776 96.7747 37.0397 96.2712 36.1622C95.957 35.5712 95.6995 34.9519 95.502 34.3124C95.2387 33.3358 95.0503 32.3406 94.9384 31.3354L94.0962 25.8323C93.4331 21.4895 93.0949 19.3148 92.0804 17.6108C91.1762 16.0913 89.9066 14.8218 88.3869 13.9178C86.6628 12.9034 84.4878 12.5719 80.1643 11.9022L74.6605 11.0602C73.6551 10.9483 72.6598 10.7599 71.6831 10.4966C71.0421 10.3031 70.4223 10.0455 69.833 9.72749C68.9554 9.22406 68.1175 8.65442 67.3265 8.02352L62.8372 4.7283C59.2962 2.12925 57.5257 0.829725 55.6093 0.325828C53.8969 -0.108609 52.1031 -0.108609 50.3907 0.325828C48.4544 0.829725 46.6772 2.12925 43.1628 4.7283ZM78.5065 40.5978C78.8903 40.1297 79.1763 39.5895 79.3477 39.009C79.5191 38.4285 79.5723 37.8196 79.5043 37.2182C79.4363 36.6168 79.2484 36.0351 78.9518 35.5075C78.6551 34.98 78.2557 34.5172 77.7771 34.1466C76.8036 33.3851 75.5712 33.0338 74.3425 33.1676C73.1137 33.3013 71.9858 33.9096 71.1991 34.8627L49.2501 61.7814L37.5131 52.7643C36.5543 51.9841 35.3287 51.6091 34.0974 51.7193C32.8662 51.8296 31.7267 52.4163 30.9218 53.3544C30.5285 53.8144 30.2315 54.3487 30.0483 54.9255C29.865 55.5023 29.7993 56.11 29.8549 56.7126C29.9106 57.3152 30.0865 57.9006 30.3722 58.4341C30.6579 58.9677 31.0477 59.4385 31.5186 59.8188L46.9027 71.8195C47.8742 72.6096 49.1188 72.9834 50.3649 72.8592C51.611 72.735 52.7574 72.1229 53.5537 71.1565L78.4866 40.5249L78.5065 40.5978Z'
										fill='#FF2684'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Certified Facility</h3>
							<p className={styles.dropsText}>
								Produced in an ISO-certified facility under strict hygiene and
								safety control.
							</p>
						</li>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='110'
									height='66'
									viewBox='0 0 110 66'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M64.4298 23.2697V6.59082M64.4298 23.2697V32.7867L64.5529 32.9536M64.4298 23.2697C64.4298 27.2856 64.4298 30.414 64.5529 32.9536M64.5529 32.9536C64.711 36.1172 65.0538 38.3756 65.8271 40.3264C67.3298 44.1139 69.9485 47.1544 73.2174 48.9119C76.2316 50.5288 80.1245 50.5288 87.8927 50.5288H94.8086C95.5643 50.5288 95.9334 50.5288 96.1794 50.5113C101.768 50.0807 105.029 42.9979 102.243 37.365L101.496 36.0205L101.32 35.7305L100.898 35.0011C97.1373 28.7532 90.3269 26.0378 84.0526 28.2962L83.3408 28.5598M64.4298 32.7779V32.9536C64.4298 36.6708 64.4298 39.5443 64.3244 41.873M64.3244 41.873C64.1926 44.6851 63.9114 46.7062 63.2787 48.4637C61.7408 52.7697 58.797 56.1968 55.0974 57.9807C52.3117 59.3164 48.7879 59.3164 41.7403 59.3164M64.3244 41.873L45.5189 19.7722M24.165 6.59082V41.7412C24.165 46.4025 22.3134 50.8728 19.0174 54.1688C15.7214 57.4648 11.2511 59.3164 6.58984 59.3164'
										stroke='#FF2684'
										strokeWidth='13.1814'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Halal Assurance</h3>
							<p className={styles.dropsText}>
								Formulas and processes fully comply with Halal standards.
							</p>
						</li>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='109'
									height='106'
									viewBox='0 0 109 106'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M43.0716 33.7462L46.1044 44.7173C48.9605 55.0523 50.3856 60.2227 54.5844 62.5724C58.7832 64.928 64.1126 63.5382 74.7715 60.7704L86.0782 57.826C96.7371 55.0582 102.067 53.6743 104.493 49.6051C106.919 45.5299 105.494 40.3595 102.632 30.0245L99.605 19.0593C96.7489 8.71843 95.3179 3.54798 91.125 1.19831C86.9203 -1.15725 81.5909 0.23253 70.932 3.0062L59.6253 5.93887C48.9664 8.70665 43.6369 10.0964 41.2166 14.1716C38.7904 18.2408 40.2155 23.4112 43.0716 33.7462Z'
										fill='#FF2684'
									/>
									<path
										d='M0.160107 13.2351C0.31526 12.6758 0.579132 12.1525 0.936638 11.6953C1.29414 11.238 1.73827 10.8557 2.24363 10.5702C2.74898 10.2847 3.30565 10.1017 3.88181 10.0315C4.45797 9.96125 5.04232 10.0053 5.60145 10.1611L15.6302 12.9406C18.2874 13.6641 20.7121 15.0627 22.6686 17.0007C24.6251 18.9386 26.0469 21.3499 26.7956 24L39.4626 69.8509L40.3931 73.0722C44.1487 74.4564 47.3136 77.091 49.356 80.5334L51.1815 79.9681L103.416 66.3941C103.978 66.248 104.562 66.2138 105.137 66.2937C105.712 66.3735 106.265 66.5657 106.765 66.8594C107.266 67.153 107.703 67.5423 108.053 68.0051C108.403 68.4679 108.658 68.995 108.804 69.5565C108.951 70.1179 108.985 70.7027 108.905 71.2773C108.825 71.852 108.633 72.4052 108.339 72.9056C108.046 73.406 107.656 73.8436 107.193 74.1935C106.731 74.5434 106.203 74.7987 105.642 74.9448L53.6019 88.4657L51.6585 89.0664C51.6232 96.5453 46.4586 103.388 38.6441 105.414C29.2807 107.852 19.6524 102.458 17.1437 93.3771C14.635 84.2964 20.1941 74.9507 29.5575 72.5186C30.0247 72.4008 30.4899 72.2988 30.9532 72.2124L18.2802 26.3496C17.9375 25.1722 17.2967 24.1031 16.4198 23.2458C15.5429 22.3885 14.4596 21.772 13.2747 21.456L3.24 18.6705C2.68081 18.516 2.15755 18.2527 1.70011 17.8959C1.24268 17.5391 0.860022 17.0956 0.574011 16.5908C0.288 16.0861 0.104236 15.5299 0.0332169 14.9541C-0.0378019 14.3783 0.00531592 13.7942 0.160107 13.2351Z'
										fill='#FF2684'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Supplier Approval</h3>
							<p className={styles.dropsText}>
								We work only with verified, qualified suppliers.
							</p>
						</li>
						<li className={styles.dropsItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='105'
									height='106'
									viewBox='0 0 105 106'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M15.1698 0.840933C21.2801 0.405156 30.2312 0 42.4 0C54.5688 0 63.5199 0.405156 69.6302 0.840933C77.4036 1.39684 83.4032 7.39409 83.9591 15.1721C84.3948 21.2801 84.8 30.2312 84.8 42.4C84.8 54.5688 84.3948 63.5199 83.9591 69.6302C83.4032 77.4036 77.4059 83.4032 69.6279 83.9591C63.5199 84.3948 54.5688 84.8 42.4 84.8C30.2312 84.8 21.2801 84.3948 15.1698 83.9591C7.39644 83.4032 1.39684 77.4059 0.840933 69.6279C0.405156 63.5199 0 54.5688 0 42.4C0 30.2312 0.405156 21.2801 0.840933 15.1698C1.39684 7.39644 7.39173 1.39684 15.1698 0.840933ZM59.1975 21.2165C60.6155 21.2055 62.0838 21.2 63.6024 21.2C68.4572 21.2 72.8008 21.2636 76.6545 21.3696C77.5913 21.3952 78.4795 21.7919 79.1238 22.4724C79.7681 23.153 80.1157 24.0615 80.0901 24.9983C80.0645 25.9351 79.6677 26.8234 78.9872 27.4677C78.3067 28.112 77.3981 28.4595 76.4613 28.4339C73.3865 28.3475 69.9828 28.2941 66.25 28.2737L80.2349 42.2563C80.8978 42.9192 81.2701 43.8182 81.2701 44.7556C81.2701 45.693 80.8978 46.592 80.2349 47.2548C79.5721 47.9176 78.6731 48.29 77.7357 48.29C76.7983 48.29 75.8993 47.9176 75.2364 47.2548L56.3025 28.3185C47.9473 28.441 41.5332 28.759 36.8762 29.0911C36.0887 29.1445 35.3122 29.3045 34.5678 29.5669L74.3413 69.3476C75.0042 70.0104 75.3766 70.9094 75.3766 71.8468C75.3766 72.7842 75.0042 73.6832 74.3413 74.346C73.6785 75.0089 72.7795 75.3813 71.8421 75.3813C70.9047 75.3813 70.0057 75.0089 69.3428 74.346L29.5669 34.5654C29.3045 35.3098 29.1445 36.0864 29.0911 36.8739C28.759 41.5308 28.4386 47.945 28.3185 56.3001L47.2548 75.2341C47.9176 75.8969 48.29 76.7959 48.29 77.7333C48.29 78.6707 47.9176 79.5697 47.2548 80.2326C46.592 80.8954 45.693 81.2678 44.7556 81.2678C43.8182 81.2678 42.9192 80.8954 42.2563 80.2326L28.2737 66.2476C28.2941 69.982 28.3475 73.3858 28.4339 76.459C28.4595 77.3958 28.112 78.3044 27.4677 78.9849C26.8234 79.6654 25.9351 80.0621 24.9983 80.0877C24.0615 80.1133 23.153 79.7658 22.4724 79.1215C21.7919 78.4772 21.3952 77.5889 21.3696 76.6521C21.2131 70.8337 21.1628 65.013 21.2188 59.1928L4.56742 42.5437C3.90458 41.8808 3.5322 40.9818 3.5322 40.0444C3.5322 39.107 3.90458 38.208 4.56742 37.5452C5.23026 36.8824 6.12927 36.51 7.06667 36.51C8.00407 36.51 8.90307 36.8824 9.56591 37.5452L21.4026 49.3842C21.5628 44.1078 21.7983 39.7948 22.0409 36.3721C22.2089 33.8643 22.9825 31.4347 24.2952 29.2913L10.4563 15.4548C10.1281 15.1266 9.86776 14.737 9.69014 14.3081C9.51251 13.8793 9.42109 13.4197 9.42109 12.9556C9.42109 12.4914 9.51251 12.0318 9.69014 11.603C9.86776 11.1742 10.1281 10.7845 10.4563 10.4563C10.7845 10.1281 11.1742 9.86776 11.603 9.69014C12.0318 9.51251 12.4914 9.42109 12.9556 9.42109C13.4197 9.42109 13.8793 9.51251 14.3081 9.69014C14.737 9.86776 15.1266 10.1281 15.4548 10.4563L29.2913 24.2952C31.3595 23.0232 33.7669 22.227 36.3721 22.0409C39.7948 21.7983 44.1101 21.5628 49.3842 21.4049L37.5452 9.56356C37.217 9.23535 36.9566 8.84571 36.779 8.41689C36.6014 7.98807 36.51 7.52846 36.51 7.06431C36.51 6.12691 36.8824 5.22791 37.5452 4.56507C38.208 3.90223 39.107 3.52985 40.0444 3.52985C40.9818 3.52985 41.8808 3.90223 42.5437 4.56507L59.1975 21.2165ZM42.4 90.6889C54.7007 90.6889 63.7908 90.279 70.0495 89.8315C80.7461 89.0683 89.0683 80.7461 89.8338 70.0472C90.2814 63.7908 90.6889 54.6984 90.6889 42.4C90.6889 34.2639 90.5099 27.5317 90.2602 22.0951C97.7391 22.9125 103.44 28.799 103.981 36.3698C104.417 42.4801 104.822 51.4312 104.822 63.6C104.822 75.7688 104.417 84.7199 103.981 90.8302C103.425 98.6036 97.4281 104.603 89.6525 105.157C83.5421 105.595 74.591 106 62.4222 106C50.2534 106 41.3023 105.595 35.192 105.157C27.4187 104.603 21.4191 98.6059 20.8655 90.8279L20.8184 90.1966C26.4694 90.4792 33.6161 90.6889 42.4 90.6889Z'
										fill='#FF2684'
									/>
								</svg>
							</div>
							<h3 className={styles.dropsTitle}>Transparent Practice</h3>
							<p className={styles.dropsText}>
								We share our certifications openly to build lasting trust.
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className={styles.ensureQuality}>
				<div className={`${styles.container} container`}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								How We Ensure <span>Quality</span>
							</h2>
							<p className={styles.text}>
								From ingredient selection to final packaging, every step of
								production is closely monitored. Our lab conducts routine tests
								for safety, texture, and flavor balance — ensuring that every
								ZingZing snack tastes just as good as the first one.
							</p>
							<Button text='Contact Us' className='purple' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={doctor} alt='#' />
						</div>
					</div>

					<div className={styles.pinkWrapper}>
						<div className={styles.pinkImgWrapper}>
							<Image src={purpleBox} alt='#' />
						</div>
						<div className={styles.content}>
							<h2 className={`${styles.title} ${styles.pinkTitle}`}>
								Accountability
							</h2>
							<p className={`${styles.text} ${styles.pinkText}`}>
								Each pack includes a batch code linked to our records, ensuring
								full traceability for every ZingZing snack — from production to
								its source, because we stand behind every flavor we make.
							</p>

							<Button text='Contact Us' href='#' className='yellow' />
						</div>
					</div>

					<div className={styles.purpleWrapper}>
						<div className={styles.content}>
							<h2 className={styles.title}>Stewardship</h2>
							<p className={styles.text}>
								We care for taste and for the planet. ZingZing continuously
								improves its packaging efficiency, reduces waste, and seeks
								recyclable materials wherever possible.
							</p>
							<Button text='Contact Us' className='pink' href='#' />
						</div>
						<div className={styles.imgWrapper}>
							<Image src={tree} alt='' />
						</div>
					</div>

					<div className={styles.ourCertifications}>
						<div className={styles.imgWrapper}>
							<Image src={sertifications} alt='#' />
						</div>
						<div className={styles.content}>
							<h2 className={`${styles.title} ${styles.sertificationsTitle}`}>
								Our Certifications
							</h2>
							<p className={`${styles.text} ${styles.sertificationsText}`}>
								We proudly hold ISO and Halal certifications.To request copies
								or verify our documents, please contact our quality team.
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

export default page
