import React from 'react';
import styles from './Spinner.module.css';

const CircleProgressBar = ({ progress }) => {
	const circumference = 2 * Math.PI * 45;
	const offset = circumference - (90 / 100) * circumference;

	const progressStyle = {
		strokeDasharray: circumference,
		strokeDashoffset: offset,
		transition: 'stroke-dashoffset 0.3s ease',
	};

	return (
		<svg className={styles.circleProgress} width="100" height="100">
			<circle className={styles.circleBackground} cx="50" cy="50" r="45" />
			<circle
				className={styles.circleProgressBar}
				cx="50"
				cy="50"
				r="45"
				style={progressStyle}
			/>
		</svg>
	);
};

export default CircleProgressBar;
