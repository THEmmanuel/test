import React from 'react';
import style from './Deal.module.css'

import Spinner from '../../components/Spinner/Spinner';
import refreshIcon from '../../assets/refresh.svg'


const Deal = () => {
	return (
		<div className={style.DealWrapper}>
			<div className={style.Deal}>
				<div >
					<Spinner />
				</div>

				<div className={style.Buttons}>
					<button className={style.DealButton}>DEAL FOR </button>
					<button className={style.RefreshButton}>
						<img src={refreshIcon} alt="" />
					</button>
				</div>

				<div className={style.ChanceWrapper}>
					<div className={style.ChanceInputWrapper}>
						<span className={style.ChanceInputHeading}>CHANCE</span>
						<div className={style.ChanceInputContainer}>
							<input type="text" className={`${style.ChanceInput} ${style.ChanceInputChance}`} />
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
						<div className={style.ChanceInputWrapper}>
							<span className={style.ChanceInputHeading}>PRICE</span>
							<input type="text" className={style.ChanceInputPrice} />
						</div>


						<div className={style.SliderWrapper}>
							<input type="range" min="0" max="80" value={80} className={style.Slider} />
							<div className={style.SliderRanges}>
								<span>0</span>
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