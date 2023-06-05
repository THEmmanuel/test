import React from 'react';
import style from './Items.module.css'

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
					<div className={style.ItemWrapper}>
						<div className={style.ItemImage}>image</div>
						<div className={style.ItemInfo}>
							<span className={style.ItemName}>Name</span>
							<span className={style.ItemBrand}>Brand</span>
							<span className={style.ItemPrice}>Price</span>
						</div>
					</div>

					<div>
						item
					</div>

					<div>
						item
					</div>
				</div>
			</div>
		</div>
	)
}

export default Items