// components/Footer/Footer.tsx
'use client'
import footerLogo from '@/assets/images/footer-logo.svg'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
	const { currentLang } = useLanguage()

	// Переводы для Footer
	const footerTranslations = {
		ENG: {
			shop: 'Shop',
			spicySticks: 'Spicy Sticks',
			bbqFlavor: 'BBQ Flavor',
			seaweedSnacks: 'Seaweed Snacks',
			classicTaste: 'Classic Taste',
			partyMix: 'Party Mix',
			limitedEditions: 'Limited Editions',
			aboutUs: 'About Us',
			ourStory: 'Our Story',
			qualityCertifications: 'Quality & Certifications',
			manufacturingTechnology: 'Manufacturing & Technology',
			newsEvents: 'News & Events',
			careers: 'Careers',
			support: 'Support',
			faqs: 'FAQs',
			contactUs: 'Contact Us',
			findStore: 'Find a Store',
			becomeDistributor: 'Become a Distributor',
			partnershipInquiry: 'Partnership Inquiry',
			followUs: 'Follow Us',
			privacyPolicy: 'Privacy Policy',
			termsOfUse: 'Terms of Use',
			cookiePolicy: 'Cookie Policy',
			quote:
				"From the very first recipe, we've believed that snacks should do more than just fill you up — they should make you smile.",
			bottomText:
				'All products are produced in our certified facility under the Delison Group. Freshness, flavor, and fun — guaranteed in every pack!',
			signature:
				"ZingZing is more than a snack — it's a moment of joy shared with the world.",
			copyright: '© 2025 ZingZing',
		},
		RUS: {
			shop: 'Магазин',
			spicySticks: 'Острые палочки',
			bbqFlavor: 'Вкус барбекю',
			seaweedSnacks: 'Снеки из водорослей',
			classicTaste: 'Классический вкус',
			partyMix: 'Пати микс',
			limitedEditions: 'Лимитированные издания',
			aboutUs: 'О нас',
			ourStory: 'Наша история',
			qualityCertifications: 'Качество и сертификаты',
			manufacturingTechnology: 'Производство и технологии',
			newsEvents: 'Новости и события',
			careers: 'Карьера',
			support: 'Поддержка',
			faqs: 'Частые вопросы',
			contactUs: 'Связаться с нами',
			findStore: 'Найти магазин',
			becomeDistributor: 'Стать дистрибьютором',
			partnershipInquiry: 'Запрос о партнерстве',
			followUs: 'Следите за нами',
			privacyPolicy: 'Политика конфиденциальности',
			termsOfUse: 'Условия использования',
			cookiePolicy: 'Политика cookie',
			quote:
				'С самого первого рецепта мы верили, что закуски должны не просто утолять голод — они должны вызывать улыбку.',
			bottomText:
				'Все продукты производятся на нашем сертифицированном предприятии под группой Delison. Свежесть, вкус и веселье — гарантированы в каждой упаковке!',
			signature:
				'ZingZing — это больше, чем просто закуска — это момент радости, разделенный со всем миром.',
			copyright: '© 2025 ZingZing',
		},
		KAZ: {
			shop: 'Дүкен',
			spicySticks: 'Ащы таяқшалар',
			bbqFlavor: 'Барбекю дәмі',
			seaweedSnacks: 'Балдырлардан жасалған снектер',
			classicTaste: 'Классикалық дәм',
			partyMix: 'Пати миксті',
			limitedEditions: 'Шектеулі басылымдар',
			aboutUs: 'Біз туралы',
			ourStory: 'Біздің тарихымыз',
			qualityCertifications: 'Сапа және сертификаттар',
			manufacturingTechnology: 'Өндіріс және технологиялар',
			newsEvents: 'Жаңалықтар мен оқиғалар',
			careers: 'Мансап',
			support: 'Қолдау',
			faqs: 'Жиі қойылатын сұрақтар',
			contactUs: 'Бізбен хабарласыңыз',
			findStore: 'Дүкенді табу',
			becomeDistributor: 'Дистрибьютор болу',
			partnershipInquiry: 'Серіктестік туралы сұрау',
			followUs: 'Бізді қарап отырыңыз',
			privacyPolicy: 'Құпиялылық саясаты',
			termsOfUse: 'Пайдалану шарттары',
			cookiePolicy: 'Cookie саясаты',
			quote:
				'Алғашқы рецепттен бастап, біз газеттердің тек аштықты басуға ғана емес, сонымен қатар күлкі әкелуі керек деп сендік.',
			bottomText:
				'Барлық өнімдер Delison тобы аясында біздің сертификатталған нысанамызда өндіріледі. Әрбір орамдағыжайлылық, дәм және көңіл-күй — кепілдендірілген!',
			signature:
				'ZingZing — бұл газеттен гөрі — бұл бүкіл әлембен бөлісетін бақыт сәті.',
			copyright: '© 2025 ZingZing',
		},
		UZB: {
			shop: "Do'kon",
			spicySticks: 'Achchiq tayoqchalar',
			bbqFlavor: 'Barbekyu lazzati',
			seaweedSnacks: "Suv o'tlari gazaklari",
			classicTaste: 'Klassik lazzat',
			partyMix: 'Parti aralashmasi',
			limitedEditions: 'Cheklangan nashrlar',
			aboutUs: 'Biz haqimizda',
			ourStory: 'Bizning hikoyamiz',
			qualityCertifications: 'Sifat va sertifikatlar',
			manufacturingTechnology: 'Ishlab chiqarish va texnologiyalar',
			newsEvents: 'Yangiliklar va voqealar',
			careers: 'Karyera',
			support: "Qo'llab-quvvatlash",
			faqs: 'Tez-tez beriladigan savollar',
			contactUs: "Biz bilan bog'lanish",
			findStore: "Do'kon topish",
			becomeDistributor: "Distribyutor bo'lish",
			partnershipInquiry: "Hamkorlik so'rovi",
			followUs: 'Bizni kuzatib boring',
			privacyPolicy: 'Maxfiylik siyosati',
			termsOfUse: 'Foydalanish shartlari',
			cookiePolicy: 'Cookie siyosati',
			quote:
				'Eng birinchi retseptdan boshlab, biz gazaklar nafaqat ochlikni qondirishi, balki tabassum keltirishi kerak deb ishonamiz.',
			bottomText:
				'Barcha mahsulotlar Delison guruhi ostidagi sertifikatlangan inshootimizda ishlab chiqariladi. Har bir paketda yangilik, lazzat va quvonch — kafolatlangan!',
			signature:
				"ZingZing — bu oddiy gazakdan ko'proq — bu butun dunyo bilan baham ko'rilgan quvonch lahzasi.",
			copyright: '© 2025 ZingZing',
		},
		TUR: {
			shop: 'Mağaza',
			spicySticks: 'Baharatlı Çubuklar',
			bbqFlavor: 'Barbekü Lezzeti',
			seaweedSnacks: 'Deniz Yosunu Atıştırmalıkları',
			classicTaste: 'Klasik Lezzet',
			partyMix: 'Parti Karışımı',
			limitedEditions: 'Sınırlı Sayıda Baskılar',
			aboutUs: 'Hakkımızda',
			ourStory: 'Hikayemiz',
			qualityCertifications: 'Kalite ve Sertifikalar',
			manufacturingTechnology: 'Üretim ve Teknolojiler',
			newsEvents: 'Haberler ve Etkinlikler',
			careers: 'Kariyer',
			support: 'Destek',
			faqs: 'Sıkça Sorulan Sorular',
			contactUs: 'Bize Ulaşın',
			findStore: 'Mağaza Bul',
			becomeDistributor: 'Distribütör Olun',
			partnershipInquiry: 'Ortaklık Sorgusu',
			followUs: 'Bizi Takip Edin',
			privacyPolicy: 'Gizlilik Politikası',
			termsOfUse: 'Kullanım Şartları',
			cookiePolicy: 'Cookie Politikası',
			quote:
				'İlk tariften itibaren, atıştırmalıkların sadece karnınızı doyurmaktan daha fazlasını yapması gerektiğine inandık — gülümsetmeliler.',
			bottomText:
				'Tüm ürünler Delison Grubu altındaki sertifikalı tesisimizde üretilir. Tazelik, lezzet ve eğlence — her pakette garanti!',
			signature:
				'ZingZing sadece bir atıştırmalıktan daha fazlası — tüm dünyayla paylaşılan bir neşe anıdır.',
			copyright: '© 2025 ZingZing',
		},
	}

	const t = footerTranslations[currentLang]

	return (
		<footer className={styles.footer}>
			<div className={`${styles.container} container`}>
				<div className={styles.columns}>
					<div className={styles.column}>
						<h3>{t.shop}</h3>
						<ul>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.spicySticks}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.bbqFlavor}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.seaweedSnacks}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.classicTaste}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.partyMix}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.limitedEditions}
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles.column}>
						<h3>{t.aboutUs}</h3>
						<ul>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.ourStory}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.qualityCertifications}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.manufacturingTechnology}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.newsEvents}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.careers}
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles.column}>
						<h3>{t.support}</h3>
						<ul>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.faqs}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.contactUs}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.findStore}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.becomeDistributor}
								</Link>
							</li>
							<li>
								<Link className={styles.links} href={'/'}>
									{t.partnershipInquiry}
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles.column}>
						<h3>{t.followUs}</h3>
					</div>
				</div>

				<div className={styles.bottomLinks}>
					<span>{t.privacyPolicy}</span>
					<span>{t.termsOfUse}</span>
					<span>{t.cookiePolicy}</span>
				</div>

				<div className={styles.quote}>{t.quote}</div>

				<div className={styles.bottom}>
					<div className={styles.bottomInner}>
						<div className={styles.logoWrapper}>
							<span className={styles.logo}>
								<Image src={footerLogo} alt='' width={70} height={40} />
							</span>
							<span>{t.copyright}</span>
						</div>
						<p className={styles.textLeft}>{t.bottomText}</p>
					</div>
					<p className={styles.signature}>{t.signature}</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
