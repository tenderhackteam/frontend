import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

import eatLogo from '../../assets/img/eat.png';
import googleLogo from '../../assets/img/google.png';
import yandexLogo from '../../assets/img/yandex.png';

const SocialCyrcle = ({ type }) => {
	function getImage() {
		switch(type) {
			case 'eat':
				return eatLogo;
			case 'google':
				return googleLogo;
			case 'yandex':
				return yandexLogo;
			default:
				return null;
		}
	}

	return (
		<div className={css`
			cursor: pointer;
			padding: 8px;
			width: 42px;
			height: 42px;
			border: 1px solid #C5C5C5;
			box-sizing: border-box;
			border-radius: 180px;
		`}
		>
			<img src={getImage()} alt='social network logo' />
		</div>
	);
};

SocialCyrcle.propTypes = {
	type: PropTypes.oneOf(['eat', 'google', 'yandex']),
};

export default SocialCyrcle;
