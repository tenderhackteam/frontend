import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

const MenuItem = ({ isSelected, title, count }) => {
	function getBorder() {
		if(isSelected) {
			return (
				<div className={css`
					position: absolute;
					bottom: 0;
					height: 3px;
					width: 100%;
					background: #264B82;
					border-radius: 10px;
				`}
				></div>
			);
		}
	}

	function getColor() {
		if(isSelected)
			return '#264B82';
		else
			return '#868686';
	}

	function getCount() {
		if(title === 'ПРЕДЛОЖЕНИЯ') {
			return (
				<p className={css`
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 14px;
					line-height: 19px;
					color: #889CBD;
				`}
				>
					{count}
				</p>
			);
		}
	}
	return (
		<div className={css`
			cursor: pointer;
			position: relative;
			width: fit-content;
			display: flex;
			gap: 10px;
			align-items: center;
			justify-content: space-between;
		`}
		>	
			<p className={css`
				font-family: Open Sans;
				font-style: normal;
				font-weight: bold;
				font-size: 14px;
				line-height: 19px;
				color: ${getColor()};
			`}
			>
				{title}
			</p>
			{getCount()}
			
			{getBorder()}
		</div>
	);
};

MenuItem.propTypes = {
	isSelected: PropTypes.bool,
	title: PropTypes.string,
	count: PropTypes.number,
};

export default MenuItem;
