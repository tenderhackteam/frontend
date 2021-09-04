import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

import demoImage from '../../assets/img/demo_image.png';

const RecomendCard = ({ category, name, price, count }) => {
	return (
		<div className={css`
			cursor: pointer;
			background: #FFFFFF;
			box-shadow: 5px 5px 20px rgba(137, 137, 137, 0.15);
			border-radius: 10px;
			padding: 17px;
			width: 320px;
			box-sizing: border-box;
		`}
		>
			<img
				className={css`
					width: 215px;
					height: 146px;
					border-radius: 7px;
					margin: 7px auto 8px auto;
				`}
				src={demoImage}
				alt='demo' />
			<p className={css`
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 16px;
				color: #8B8B8B;
				margin-bottom: 2px;
			`}
			>
				{category}
			</p>
			<div className={css`
				display: flex;
				justify-content: space-between;
			`}
			>
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 14px;
					line-height: 19px;

					color: #1A1A1A;
				`}
				>
					{name}
				</p>
				<div>
					<p className={css`
						margin: 0;
						font-family: Open Sans;
						font-style: normal;
						font-weight: bold;
						font-size: 14px;
						line-height: 19px;
						color: #1A1A1A;
						margin-bottom: 2px;
					`}
					>
						{price}
						{' '}
						руб
					</p>
					<p className={css`
						margin: 0;
						font-family: Open Sans;
						font-style: normal;
						font-weight: normal;
						font-size: 12px;
						line-height: 16px;
						color: #1A1A1A;
					`}
					>
						За штуку
					</p>
				</div>
			</div>
			<p className={css`
				margin: 0;
				font-family: Open Sans;
				font-style: normal;
				font-weight: bold;
				font-size: 12px;
				line-height: 16px;

				color: #264B82;
			`}
			>
				{count}
				{' '}
				предложений
			</p>
		</div>
	);
};

RecomendCard.propTypes = {
	category: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	count: PropTypes.number,
};

export default RecomendCard;
