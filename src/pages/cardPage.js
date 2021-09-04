import React from 'react';
import { css } from '@emotion/css';
import { useParams } from 'react-router';

import BreadCrumbs from '../components/bread-crumbs';
import DemandedProducts from '../components/demanded-products';
import P from '../components/p';
import MarginBottom from '../components/margin-bottom';
import SocialCyrcle from '../components/social-cyrcle';

import demoImage from '../assets/img/demo_image.png';
import printerIcon from '../assets/svg/printer.svg';

const Card = () => {
	const { category, id } = useParams();

	return (
		<div className={css`
			padding: 29px 55px;
		`}
		>
			<BreadCrumbs elements={['Товары', category, id]} />
			<div className={css`
				width: fit-content;
				display: grid;
				grid-template-columns: auto 22px 273px;
				align-items: center;
				column-gap: 30px;
			`}
			>
				<h1 className={css`
					margin: 0;
					padding: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 28px;
					line-height: 38px;
					color: #1A1A1A;
				`}
				>
					Рояль C. Bechstein
				</h1>
				<img src={printerIcon} alt='Printer icon' />
				<DemandedProducts />
			</div>
			<div className={css`
				display: grid;
				grid-template-columns: 410px 274px 138px;
				gap: 20px;
			`}
			>
				<div>
					<P type='regular-grey'>
						Модель: А 228
					</P>
					<P type='regular-grey'>
						Производитель: Bechstein
					</P>
					<img 
						className={css`
							margin-top: 28px;
							width: 410px;
							height: 263px;
							object-fit: cover;
						`}
						src={demoImage}
						alt='card' />
				</div>
				<div className={css`
					margin-top: 30px;
				`}
				>
					<MarginBottom>
						<P type='bold-grey'>
							ID CTE
						</P>
						<P type='regular-black'>
							34262386
						</P>
					</MarginBottom>
					<MarginBottom>
						<P type='bold-grey'>
							Страна происхождения
						</P>
						<P type='regular-black'>
							АЛБАНИЯ
						</P>
					</MarginBottom>
					<MarginBottom>
						<P type='h1-black'>
							739 500 ₽
						</P>
						<P type='regular-black'>
							Штука
						</P>
					</MarginBottom>
					<MarginBottom>
						<P type='bold-black'>
							от 739 500 ₽ до 739 500 ₽
						</P>
						<P type='regular-grey'>
							на основе 1 предложений поставщиков
						</P>
					</MarginBottom>
					<div className={css`
						width: fit-content;
						background: #8D949E;
						box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
						border-radius: 5px;
						padding: 6px 35px;
						cursor: pointer;
					`}
					>
						<p className={css`
							display: inline-block;
							margin: 0;
							font-family: Open Sans;
							font-style: normal;
							font-weight: bold;
							font-size: 14px;
							line-height: 19px;
							color: #FFFFFF;
						`}
						>
							Сообщить об ошибке
						</p>
					</div>
				</div>
				<div>
					<div className={css`
						margin-bottom: 62px;
					`}
					>
						<P type='bold-grey'>
							Контракты
						</P>
						<P type='bold-black'>
							1
						</P>
						<P type='regular-blue'>
							Показать все
						</P>
					</div>
					<div>
						<P type='bold-grey'>
							Сравнить цены
						</P>
						<div className={css`
							display: flex;
							width: 100%;
							justify-content: space-between;
							margin-top: 8px;
						`}
						>
							<SocialCyrcle type='eat' />
							<SocialCyrcle type='google' />
							<SocialCyrcle type='yandex' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
