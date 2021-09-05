import React from 'react';
import PropTypes from 'prop-types';
import ContainImg from '../contain-img';
import { css } from '@emotion/css';

const HeaderBlock = ({ type = 'classic', title, icon }) => {
	function getSize() {
		switch(title) {
			case 'г. Москва':
				return 25;
			default:
				return 30;
		}
	}

	switch(type) {
		case 'menu':
			return (
				<div className={css`
					display: flex;
					align-items: center;
					gap: 17px;
				`}
				>
					<ContainImg src={icon} alt='menu icon' />
					<p className={css`
						margin: 0;
						padding: 0;

						font-family: Open Sans;
						font-style: normal;
						font-weight: bold;
						font-size: 15px;
						line-height: 20px;
						cursor: pointer;
		
						color: #1A1A1A;
					`}
					>
						{title}
					</p>
				</div>
			);
		default:
			return (
				<div className={css`
					display: flex;
					align-items: center;
					gap: 10px;
				`}
				>
					<ContainImg src={icon} alt='menu icon' size={getSize()} />
					<p className={css`
						margin: 0;
						padding: 0;

						font-family: Open Sans;
						font-style: normal;
						font-weight: bold;
						font-size: 12px;
						line-height: 16px;
						cursor: pointer;

						color: #2E4B7E;
					`}
					>
						{title}
					</p>
				</div>
			);
	}
};

HeaderBlock.propTypes = {
	type: PropTypes.oneOf(['menu']),
	title: PropTypes.string,
	icon: PropTypes.string,
};

export default HeaderBlock;
