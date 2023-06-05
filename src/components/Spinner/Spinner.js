import React, { useState } from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
	const [isSpinning, setIsSpinning] = useState(false);
	const [progressValue, setProgressValue] = useState(60);
	const minValue = 0;
	const maxValue = 100;

	const handleMouseDown = () => {
		setIsSpinning(true);
	};

	const handleMouseUp = () => {
		setIsSpinning(false);
	};

	const handleMouseMove = (event) => {
		if (isSpinning) {
			const circle = document.getElementById('circle');
			const progressBar = document.getElementById('progress-bar');
			const rect = circle.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const mouseX = event.clientX;
			const mouseY = event.clientY;
			const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
			const degrees = (angle * 180) / Math.PI;
			circle.style.transform = `rotate(${degrees}deg)`;

			const currentProgressValue = Math.floor(
				((degrees + 360) % 360) * ((maxValue - minValue) / 360)
			);
			setProgressValue(currentProgressValue);
			progressBar.style.transform = `rotate(${degrees}deg)`;
		}
	};

	return (
		<div className={styles.container}>
			<div
				id="circle"
				className={styles.circle}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
			<div className='circle-bar'>
				kkdkdk
			</div>
				<div
					id="progress-bar"
					className={styles.progressBar}
					style={{
						background: `linear-gradient(90deg, #42a5f5 ${progressValue}%, transparent ${progressValue}%)`,
					}}
				></div>
			</div>
		</div>
	);
};

export default Spinner;
