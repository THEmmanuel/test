import React from 'react';
import style from './Items.module.css'

const Items = () => {

	return (
		<div className={style.ItemsSection}>
			<div className={style.ItemsInputWrapper}>
				<h3>Available Items</h3>
				<div className={style.ItemsInputContainer}>
					<div className={style.ItemsInput}>
						<input type="text" className={style.Input} />
					</div>

					<div className={style.InputSecondaryWrappers}>
						<input type="text" className={`${style.InputSecondary}`} />
						<input type="text" className={`${style.InputSecondary}`} />
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
	)
}

export default Items