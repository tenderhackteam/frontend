import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const P = ({ type, children }) => {
	switch(type) {
		case 'regular-grey':
			return (
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 22px;
					color: #8B8B8B;
				`}
				>
					{children}
				</p>
			);
		case 'regular-black':
			return (
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 14px;
					line-height: 19px;
					color: #1A1A1A;
				`}
				>
					{children}
				</p>
			);
		case 'regular-blue':
			return (
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 14px;
					line-height: 19px;
					color: #264B82;
				`}
				>
					{children}
				</p>
			);
		case 'bold-grey':
			return (
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 15px;
					line-height: 20px;
					color: #8B8B8B;
				`}
				>
					{children}
				</p>
			);
		case 'bold-black':
			return (
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 18px;
					line-height: 25px;
					color: #1A1A1A;
				`}
				>
					{children}
				</p>
			);
		case 'h1-black':
			return (
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 28px;
					line-height: 38px;

					color: #1A1A1A;
				`}
				>
					{children}
				</p>
			);
		case 'grid-1':
			return (
				<p className={css`
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 15px;
					line-height: 20px;
					color: #1A1A1A;
				`}
				>
					{children}
				</p>
			);
		default:
			return (
				<p>
					{children}
				</p>
			);
	}
};

P.propTypes = {
	type: PropTypes.oneOf([
		'regular-grey',
		'regular-black',
		'regular-blue',
		'bold-grey',
		'bold-black',
		'h1-black',
		'grid-1',
	]),
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default P;
