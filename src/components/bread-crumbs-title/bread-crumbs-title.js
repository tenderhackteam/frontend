import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';	

const BreadCrumbsTitle = ({ title }) => {
	return (
		<p className={css`
			font-family: Open Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 19px;

			color: #123D7D;
		`}
		>
			{title}
		</p>
	);
};

BreadCrumbsTitle.propTypes = {
	title: PropTypes.string,
};

export default BreadCrumbsTitle;
