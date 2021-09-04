import React from 'react';
import ContainImg from '../contain-img';
import { css } from '@emotion/css';

import profile from '../../assets/img/profile.png';

const HeaderProfile = () => {
	return (
		<div className={css`
			display: flex;
			align-items: center;
			gap: 13px;
			cursor: pointer;
		`}
		>
			<div>
				<p className={css`
					margin: 0;
					padding: 0;

					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 16px;
					line-height: 22px;
				`}
				>
					Иванова Людмила
				</p>
				<p className={css`
					margin: 0;
					padding: 0;

					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 12px;
					line-height: 16px;

					color: #666666;
				`}
				>
					ГБОУ “Детский сад № 3”
				</p>
			</div>
			<ContainImg src={profile} alt='Profile icon' />
		</div>
	);
};

export default HeaderProfile;
