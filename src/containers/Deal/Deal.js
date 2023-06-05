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
					<div>
						<span>Chance</span>
						<div>
							stuff
							<div>
								<button>Min</button>
								<button>10%</button>
								<button>25%</button>
								<button>50%</button>
								<button>Max</button>
							</div>
						</div>
					</div>

					<div>
						<span>Price</span>
						<div>
							slider
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Deal