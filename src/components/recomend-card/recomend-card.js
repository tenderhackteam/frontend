import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImage } from '../../services/service';

import preloaderIcon from '../../assets/svg/preloader.svg';
import errorIcon from '../../assets/svg/error.svg';

const RecomendCard = ({ category, name, id, price, count }) => {
	const [image, setImage] = useState(preloaderIcon);

	useEffect(() => {
		getImage(id).then((res) => {
			if(res === errorIcon)
				return res;
			else
				return res.text();
		}).then((text) => setImage(text));
	}, []);

	function getSize() {
		switch (image) {
			case preloaderIcon:
				return {
					height: '80px',
					width: '55px',
				};
			case errorIcon:
				return {
					height: '70px',
					width: '70px',
				};
			default:
				return {
					width: '215px',
					height: '146px',
				};
		}
	}

	return (
		<Link
			className={css`
				text-decoration: none;
				display: block;
				background: #FFFFFF;
				box-shadow: 5px 5px 20px rgba(137, 137, 137, 0.15);
				border-radius: 10px;
				padding: 17px;
				width: 320px;
				box-sizing: border-box;
			`}
			to={`/catalog/${category}/${name}?id=${id}`}
		>
			<div className={css`
				width: 215px;
				height: 146px;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
			>
				<img
					className={css`
						width: ${getSize().width};
						height: ${getSize().height};
						border-radius: 7px;
						margin: 7px auto 8px auto;
					`}
					src={image}
					alt='demo' />
			</div>
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
		</Link>
	);
};

RecomendCard.propTypes = {
	category: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	price: PropTypes.number,
	count: PropTypes.number,
};

export default RecomendCard;
