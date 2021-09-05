import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const MarginBottom = ({ children }) => {
	return (
		<div className={css`
			margin-bottom: 30px;
		`}
		>
			{children}
		</div>
	);
};

MarginBottom.propTypes = {
	children: PropTypes.array,
};

export default MarginBottom;
