import React from 'react';
import { css } from '@emotion/css';

import HeaderBlock from '../header-block';
import HeaderProfile from '../header-profile';
import ContainImg from '../contain-img';

import logoIcon from '../../assets/img/logo.png';
import menuIcon from '../../assets/svg/menu.svg';
import headphonesIcon from '../../assets/svg/headphones.svg';
import lampIcon from '../../assets/svg/lamp.svg';
import navigationIcon from '../../assets/svg/navigation.svg';
import bellIcon from '../../assets/svg/bell.svg';
import cartIcon from '../../assets/svg/cart.svg';

const Header = () => {
	return (
		<div className={css`
			height: 81px;
			box-sizing: border-box;
			padding: 21px 52px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
		`}
		>
			<div className={css`
				display: flex;
				gap: 30px;
			`}
			>
				<ContainImg src={logoIcon} alt='Logo' />
				<HeaderBlock type='menu' title='Меню' icon={menuIcon} />
			</div>
			<div className={css`
				display: flex;
				gap: 30px;
			`}
			>
				<HeaderBlock title='Оставить обращение' icon={headphonesIcon} />
				<HeaderBlock title='Центр поддержки' icon={lampIcon} />
				<HeaderBlock title='г. Москва' icon={navigationIcon} />
			</div>
			<div className={css`
				display: flex;
				gap: 25px;
			`}
			>
				<div className={css`
					display: flex;
					align-items: center;
					gap: 15px;
				`}
				>
					<ContainImg src={bellIcon} alt='Bell icon' />
					<ContainImg size={29} src={cartIcon} alt='Cart icon' />
				</div>
				<HeaderProfile />
			</div>
		</div>
	);
};

export default Header;
