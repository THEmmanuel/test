import React from 'react';
import style from './Items.module.css'

const Items = () => {
	return (
		<div className={style.ItemsContainer}>
			<div>
				<span>Available Items</span>
				<div>
					<div className=''>
						<input type="text" />
					</div>

					<div>
						<input type="text" />
						<input type="text" />
					</div>
				</div>

				<div>
					items
				</div>
			</div>
		</div>
	)
}

export default Items