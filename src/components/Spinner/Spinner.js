import React, { useState, useEffect } from 'react';
import styles from './Spinner.module.css';
import needleImage from '../../assets/needle-dark.svg';

const CircleProgressBar = ({ progress = 80 }) => {
	const radius = 205;
	const circumference = 2 * Math.PI * radius;
	const [progressRotation, setProgressRotation] = useState(0);
	const [needleRotation, setNeedleRotation] = useState(0);
	const [isRotating, setIsRotating] = useState(false);
	const [isInGreenArea, setIsInGreenArea] = useState(false);

	const handleMouseDown = () => {
		setIsRotating(true);
	};

	const handleMouseUp = () => {
		setIsRotating(false);
	};

	const handleMouseMove = (event) => {
		if (isRotating) {
			const { clientX, clientY } = event;
			const rect = event.target.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const dx = clientX - centerX;
			const dy = clientY - centerY;
			const angle = Math.atan2(dy, dx);
			const degrees = angle * (180 / Math.PI);
			setProgressRotation(degrees);

			// Calculate if the needle is in the green area
			const greenAreaStart = -60; // Starting angle of the green area
			const greenAreaEnd = 60; // Ending angle of the green area
			setIsInGreenArea(degrees >= greenAreaStart && degrees <= greenAreaEnd);
		}
	};


	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [isRotating]);

	const progressStyle = {
		strokeDasharray: circumference,
		strokeDashoffset: (100 - progress) / 100 * circumference,
		transition: 'stroke-dashoffset 0.3s ease',
	};

	const spinNeedle = () => {
		const randomRotation = Math.random() * 360 + 720; // Random rotation with multiple full spins (720 degrees)
		setNeedleRotation(randomRotation);
		setIsInGreenArea(false);
	};


	return (
		<div className={styles.container}>
			<svg
				className={styles.circleProgress}
				width="460"
				height="460"
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<g transform={`translate(230, 230)`}>
					<circle
						className={styles.circleBackground}
						cx="0"
						cy="0"
						r={radius}
					/>
					<g style={{ transform: `rotate(${progressRotation}deg)` }}>
						<circle
							className={styles.circleProgressBar}
							cx="0"
							cy="0"
							r={radius}
							style={progressStyle}
						/>
					</g>
					<g style={{ transform: `rotate(${needleRotation}deg)` }}>
						<image
							className={styles.needleImage}
							href={needleImage}
							x="-45"
							y="-90" // Adjust the y-coordinate to anchor the needle at the bottom
							width="90"
							height="90"
						/>
					</g>
					<foreignObject
						x={-radius}
						y={radius / 2}
						width={radius * 2}
						height={radius}
					>
						<div className={styles.progressTextContainer}>
							<span className={styles.progressText}>{`${progress}%`}</span>
						</div>
						<div className={styles.middleContent}>
							{isInGreenArea ? (
								<span className={styles.resultText}>Result: True</span>
							) : (
								<span className={styles.resultText}>Result: False</span>
							)}
							{/* Add additional content here */}
						</div>
					</foreignObject>
				</g>
			</svg>
			<button onClick={spinNeedle}>Spin</button>
		</div>
	);
};

export default CircleProgressBar;
