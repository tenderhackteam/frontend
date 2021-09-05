import React, { useRef, useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { useParams, useLocation, useHistory } from 'react-router';
import { getImage } from '../services/service';

import BreadCrumbs from '../components/bread-crumbs';
import DemandedProducts from '../components/demanded-products';
import P from '../components/p';
import MarginBottom from '../components/margin-bottom';
import SocialCyrcle from '../components/social-cyrcle';
import MenuItem from '../components/menu-item';
import PriceCard from '../components/price-card';

import printerIcon from '../assets/svg/printer.svg';
import preloaderIcon from '../assets/svg/preloader.svg';
import errorIcon from '../assets/svg/error.svg';

const Card = () => {
	const { category, name } = useParams();
	const id = useLocation().search.slice(useLocation().search.indexOf('=') + 1);
	const history = useHistory();

	const [image, setImage] = useState();
	const tableRef = useRef();
	const startRef = useRef();

	useEffect(() => {
		history.listen((location) => {
			startRef.current.scrollIntoView();
			setImage(null);
			console.log(location.search);
			getImage(location.search.slice(location.search.indexOf('=') + 1)).then((data) => {
				if(typeof data === 'string')
					return data;
				else
					return data.text();
			}).then((text) => setImage(text));
		});
		getImage(id).then((data) => {
			if(typeof data === 'string')
				return data;
			else
				return data.text();
		}).then((text) => setImage(text));
	}, []);

	function moveCards(i) {
		tableRef.current.children[i + 1].style = 'transform: translateY(368px)';
		setTimeout(() => {
			tableRef.current.children[i + 2].style = 'transition: all 0; transform: translateY(20px);';
		}, 600);
	}

	function getImageOrLoader() {
		if(!image) {
			return (
				<div className={css`
					margin-top: 28px;
					width: 410px;
					height: 263px;
					display: flex;
					justify-content: center;
					align-items: center;
				`}
				>
					<img src={preloaderIcon} alt='preloader' />
				</div>
			);
		}
		else {
			return (
				<div className={css`
					display: flex;
					justify-content: center;
					align-items: center;
					width: 410px;
					height: 263px;
				`}
				>
					<img
						className={css`
							margin-top: 28px;
							object-fit: cover;
							width: ${image === errorIcon ? '70px' : '410px'};
							height: ${image === errorIcon ? '70px' : '263px'};
						`}
						src={image}
						alt='card' />
				</div>
			);
		}
	}

	return (
		<>
			<div
				className={css`
					padding: 29px 55px;
				`}
				ref={startRef}
			>
				<BreadCrumbs elements={['Товары', category, name]} />
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
						{getImageOrLoader()}
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
			<div className={css`
				margin-top: 36px;
				padding: 0 200px;
				height: 69px;
				background: #E7EEF7;
				display: flex;
				justify-content: space-between;
			`}
			>
				<MenuItem title='ПРЕДЛОЖЕНИЯ' isSelected count={2} />
				<MenuItem title='ХАРАКТЕРИСТИКИ' />
				<MenuItem title='КЛАССФИКАЦИЯ' />
				<MenuItem title='ПОХОЖИЕ ТОВАРЫ' />
			</div>
			<div className={css`
				margin-top: 28px;
				padding: 0 70px;
				height: 45px;
				background: #E8EEF6;
				display: grid;
				grid-template-columns: minmax(333px, 0) minmax(333px, 0) auto;
				column-gap: 75px;
				align-items: center;
			`}
			>
				<P type='grid-1'>
					Поставщик
				</P>
				<P type='grid-1'>
					Условия поставки
				</P>
				<P type='grid-1'>
					Стоимость с НДС
				</P>	
			</div>
			<div ref={tableRef}>
				<PriceCard
					name='ООО “АРГО”'
					inn={6617787438}
					articul={101010}
					region={`
					г Байконур, АО Чукотский, АО Ямало-Ненецкий, г Москва, Ханты-Мансийский АО - Югра, АО Ненецкий....
					`}
					price={210}
					callback={() => moveCards(0)} />
				<PriceCard
					name='ООО “АРГО”'
					inn={6617787438}
					articul={101010}
					region={`
					г Байконур, АО Чукотский, АО Ямало-Ненецкий, г Москва, Ханты-Мансийский АО - Югра, АО Ненецкий....
					`}
					price={210}
					callback={() => moveCards(0)} />
			</div>
		</>
	);
};

export default Card;
