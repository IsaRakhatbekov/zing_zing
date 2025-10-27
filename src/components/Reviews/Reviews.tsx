'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './Reviews.module.scss'

interface Review {
	id: number
	preview: string
	video?: string
	videoId?: string
}

const reviews: Review[] = [
	{
		id: 1,
		preview: '/images/reviews/reviews-1.png',
		video: '/videos/review1.mp4',
	},
	{
		id: 2,
		preview: '/images/reviews/reviews-2.png',
		videoId: 'dQw4w9WgXcQ',
	},
	{
		id: 3,
		preview: '/images/reviews/reviews-3.png',
		videoId: 'V-_O7nl0Ii0',
	},
	{
		id: 4,
		preview: '/images/reviews/reviews-4.png',
		video: '/videos/review4.mp4',
	},
]

export default function Reviews() {
	const [playing, setPlaying] = useState<number | null>(null)

	return (
		<section className={styles.reviews}>
			<div className={`${styles.container} container`}>
				<h2 className={styles.title}>Reviews Of Our Followers</h2>
				<div className={styles.cards}>
					{reviews.map(r => (
						<div key={r.id} className={styles.card}>
							{playing === r.id ? (
								<>
									{r.video && (
										<video
											src={r.video}
											controls
											autoPlay
											onEnded={() => setPlaying(null)}
											className={styles.video}
										/>
									)}
									{r.videoId && (
										<iframe
											src={`https://www.youtube.com/embed/${r.videoId}?autoplay=1`}
											allow='autoplay'
											allowFullScreen
											title='Review video'
											className={styles.video}
										/>
									)}
								</>
							) : (
								<>
									<Image
										src={r.preview}
										alt={`Review ${r.id}`}
										width={300}
										height={200}
										className={styles.preview}
									/>
									<button
										className={styles.playButton}
										onClick={() => setPlaying(r.id)}
									>
										▶
									</button>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
