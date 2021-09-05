import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const ContainImg = ({ src, alt, size }) => {
	function createSizeProperties() {
		if (size) {
			return `
				width: ${size}px;
				height: ${size}px;
			`;
		}
	}

	return (
		<img
			className={css`
				object-fit: contain;
				cursor: pointer;
				${createSizeProperties()}
			`}
			src={src}
			alt={alt} />
	);
};

ContainImg.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	size: PropTypes.number,
};

export default ContainImg;
