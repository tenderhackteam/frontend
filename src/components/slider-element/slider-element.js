import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

import demoImage from '../../assets/img/demo_image.png';

const SliderElement = ({ name, price, count }) => {
	return (
		<div className={css`
			width: 208px;
			height: 304px;
		`}
		>
			<img
				className={css`
					width: 160px;
					height: 160px;
					object-fit: cover;
					margin: 0 auto;
				`}
				src={demoImage}
				alt='card' />
			<p className={css`
				margin: 16px 0 2px 0;
				font-family: Open Sans;
				font-style: normal;
				font-weight: bold;
				font-size: 20px;
				line-height: 27px;

				color: #1A1A1A;
			`}
			>
				{price}
				₽
			</p>
			<p className={css`
				margin: 0 0 14px 0;
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 19px;
				color: #1A1A1A;
			`}
			>
				{count}
				{' '}
				предложения
			</p>
			<p className={css`
				font-family: Open Sans;
				font-style: normal;
				font-weight: bold;
				font-size: 16px;
				line-height: 22px;

				color: #1A1A1A;
			`}
			>
				{name}
			</p>
		</div>
	);
};

SliderElement.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	count: PropTypes.number,
};

export default SliderElement;
