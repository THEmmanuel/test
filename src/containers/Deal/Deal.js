import React from 'react';
import style from './Deal.module.css'


const Deal = () => {
	return (
		<div className={style.DealWrapper}>
			<div className={style.Deal}>
				<div className={style.SpinnerWrapper}>
					Spinner
				</div>

				<div>
					<button className={style.DealButton}>DEAL FOR </button>
					<button className={style.RefreshButton}>Refresh</button>
					<button>quick spin</button>
				</div>

				<div className={style.ChanceWrapper}>
					<div className={style.ChanceInputWrapper}>
						<span className={style.ChanceInputHeading}>CHANCE</span>
						<div className={style.ChanceInputContainer}>
							<input type="text" className={style.ChanceInput} />
							<div className={style.ChanceButtonWrapper}>
								<button className={style.ChanceButton}>Min</button>
								<button className={style.ChanceButton}>10%</button>
								<button className={style.ChanceButton}>25%</button>
								<button className={style.ChanceButton}>50%</button>
								<button className={style.ChanceButton}>Max</button>
							</div>
						</div>
					</div>

					<div>
						<div>
							<span>Price</span>
							<input type="text" className={style.ChanceInput} />
						</div>


						<div className={style.SliderWrapper}>
							<input type="range" min="0" max="100" className={style.Slider} />
							<div className={style.SliderRanges}>
								<span>0</span>
								<span>50</span>
								<span>100</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Deal