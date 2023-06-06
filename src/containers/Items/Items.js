import React from 'react';
import style from './Items.module.css';
import data from '../../data';

const Items = () => {

	return (
		<div className={style.ItemsSection}>
			<div className={style.Items}>
				<div className={style.ItemsInputWrapper}>
					<h3>Available Items</h3>
					<div className={style.ItemsInputContainer}>
						<div className={style.ItemsInput}>
							<span className={style.ItemsInputText}>SEARCH</span>
							<input type="text" className={style.Input} />
						</div>

						<div className={style.InputSecondaryWrapper}>
							<div className={style.ItemsInputSecondary}>
								<span className={style.ItemsInputText}>PRICE MAX</span>
								<input type="text" className={`${style.InputSecondary}`} />
							</div>

							<div className={style.ItemsInputSecondary}>
								<span className={style.ItemsInputText}>ORDER BY</span>
								<input type="text" className={`${style.InputSecondary}`} />
							</div>
						</div>
					</div>
				</div>

				<div className={style.ItemsContainer}>
					{
						data.map(item =>
							<div className={style.ItemWrapper}>
								<div className={style.ItemImageWrapper}>
									<img src={item.imageLink} alt="" className={style.ItemImage}/>
								</div>
								
								<div className={style.ItemInfo}>
									<span className={style.ItemName}>{item.itemName}</span>
									<span className={style.ItemBrand}>{item.itemBrand}</span>
									<span className={style.ItemPrice}>${item.itemPrice}</span>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Items