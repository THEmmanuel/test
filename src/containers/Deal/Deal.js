import React from 'react';
import style from './Deal.module.css'


const Deal = () => {
	return (
		<div>
			<div>
				<div className={style.SpinnerWrapper}>
					Spinner
				</div>

				<div>
					<button className={style.DealButton}>DEAL FOR </button>
					<button className={style.RefreshButton}>Refresh</button>
					<button>quick spin</button>
				</div>

				<div>
					<div>
						<span>Chance</span>
						<div>
							stuff
						</div>
					</div>

					<div>
						<span>Price</span>
						<div>
							stuff
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Deal