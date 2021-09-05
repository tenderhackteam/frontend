import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
import BreadCrumbsTitle from '../bread-crumbs-title';

import arrow from '../../assets/svg/arrow.svg';

const BreadCrumbs = ({ elements }) => {
	function joinReactElements(array) {
		let array_out = [];

		array.forEach((el, i) => {
			array_out.push(el);

			if(i !== array.length - 1) {
				array_out.push(
					<img
						className={css`
							margin: 0 11px;
						`}
						src={arrow}
						key={i}
						alt='Arrow' />);
			}
		});
		return array_out;
	}

	return (
		<div className={css`
			display: flex;
			flex-wrap: nowrap;
		`}
		>
			{joinReactElements(elements.map((el, i) => <BreadCrumbsTitle title={el} key={10 + i} />))}
		</div>
	);
};

BreadCrumbs.propTypes = {
	elements: PropTypes.arrayOf(PropTypes.string),
};

export default BreadCrumbs;
