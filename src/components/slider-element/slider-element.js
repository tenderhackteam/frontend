import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImage } from '../../services/service';

import preloaderIcon from '../../assets/svg/preloader.svg';
import errorIcon from '../../assets/svg/error.svg';

const SliderElement = ({ category, name, id, price, count }) => {
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
					width: '160px',
					height: '160px',
				};
		}
	}

	return (
		<Link
			className={css`
				text-decoration: none;
				display: block;
				width: 208px;
				height: 304px;
			`}
			to={`/catalog/${category}/${name}?id=${id}`}
		>
			<div className={css`
				width: 160px;
				height: 160px;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
			>
				<img
					className={css`
						width: ${getSize().width};
						height: ${getSize().height};
						object-fit: cover;
						margin: 0 auto;
					`}
					src={image}
					alt='card' />
			</div>
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
		</Link>
	);
};

SliderElement.propTypes = {
	name: PropTypes.string,
	category: PropTypes.string,
	id: PropTypes.number,
	price: PropTypes.number,
	count: PropTypes.number,
};

export default SliderElement;
