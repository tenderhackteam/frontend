import React from 'react';
import { css } from '@emotion/css';

import fireIcon from '../../assets/svg/fire.svg';

const DemandedProducts = () => {
	return (
		<div className={css`
			padding: 4px 19px;
			box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
			border-radius: 5px;

			display: flex;
			gap: 8px;
		`}
		>	
			<img src={fireIcon} alt='Fire icon' />
			<p className={css`
				font-family: Open Sans;
				font-style: normal;
				font-weight: bold;
				font-size: 14px;
				line-height: 19px;
				/* identical to box height */


				color: #CA3D2E;
			`}
			>
				Востребованная продукция
			</p>
		</div>
	);
};

export default DemandedProducts;
