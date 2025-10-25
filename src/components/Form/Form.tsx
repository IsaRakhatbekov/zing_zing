import styles from './Form.module.scss'
const Form = () => {
	return (
		<div className={`${styles.container} container`}>
			<form className={styles.form}>
				<div className={styles.textWrapper}>
					<h2 className={styles.title}>Let’s Grow Together!</h2>
					<p className={styles.text}>
						Whether you’re a distributor, retailer, or creative partner — we’d
						love to hear from you!Join the ZingZing family and bring bold
						flavor, playful energy, and reliable quality to your region.
					</p>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.inputsWrapper}>
						<label className={styles.lbl} htmlFor='email'>
							Your/Company email
						</label>
						<input
							className={styles.inp}
							type='text'
							placeholder='name@company.com'
							id='email'
						/>
					</div>
					<div className={styles.inputsWrapper}>
						<label className={styles.lbl} htmlFor='phone'>
							Phone Number
						</label>
						<input
							className={styles.inp}
							type='text'
							id='phone'
							placeholder='+997'
						/>
					</div>
					<div className={styles.inputsWrapper}>
						<label className={styles.lbl} htmlFor='textarea'>
							Message
						</label>
						<textarea
							id='textarea'
							className={`${styles.inp} ${styles.textarea}`}
							placeholder='Send Message or Become a Partner'
						></textarea>
					</div>
					<button className={styles.btn}>Send</button>
				</div>
			</form>
		</div>
	)
}

export default Form
