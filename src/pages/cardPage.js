/*eslint-disable*/
import React, { useRef, useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { useParams, useLocation, useHistory } from 'react-router';
import { getImage, addToSeen, getItemById } from '../services/service';

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

	const [cardData, setCardData] = useState({
		"id": 2,
		"cte_id": 34860341,
		"cte_name": "Светодиодный светильник Geniled",
		"category_id": "Настенно-потолочные светильники",
		"description": null,
		"cte_props": [
		{
		"Name": "Вид климатического исполнения",
		"Id": 363350879,
		"Value": "УХЛ4"
		},
		{
		"Name": "Вид рассеивателя",
		"Id": 363350880,
		"Value": "Опал (матовый)"
		},
		{
		"Name": "Коэффициент мощности",
		"Id": 363350883,
		"Value": "0,92"
		},
		{
		"Name": "Вид товаров",
		"Id": 363465190,
		"Value": "Энергетическое оборудование"
		},
		{
		"Name": "Вид энергетического оборудования",
		"Id": 363465191,
		"Value": "Светильник"
		},
		{
		"Name": "Габаритные размеры (шхгхв)",
		"Id": 363350881,
		"Value": "1200x180x40",
		"Unit": "мм"
		},
		{
		"Name": "Световой поток",
		"Id": 363350884,
		"Value": "472",
		"Unit": "лм"
		},
		{
		"Name": "Цветовая температура",
		"Id": 363350886,
		"Value": "4000",
		"Unit": "К"
		},
		{
		"Name": "Гарантия",
		"Id": 363350882,
		"Value": "5",
		"Unit": "г;^лет"
		},
		{
		"Name": "Степень защиты",
		"Id": 363350885,
		"Value": "40",
		"Unit": "ip"
		}
		],
		"regions": [
		"Свердловская",
		"Москва"
		],
		"made_contracts": 1,
		"suppliers": [
		{
		"SupplierId": 1559525,
		"Name": "Общество с ограниченной ответственностью \"НИКА ГРУПП\"",
		"Inn": "7718882087"
		},
		{
		"SupplierId": 2298333,
		"Name": "Общество с ограниченной ответственностью «СтройЭнергоКомплект»",
		"Inn": "7724338809"
		},
		{
		"SupplierId": 27624355,
		"Name": "ИП Хорзов Владимир Сергеевич",
		"Inn": "860603847301"
		}
		],
		"country": "РОССИЯ",
		"other_items_in_contracts": null,
		"cpgz_id": 12114082,
		"cpgz_code": "01.10.05.03.01.05",
		"model": "ЛПО 1200?180?40 40Вт 5000К Опал",
		"price": null
		});
	const [image, setImage] = useState({});
	const tableRef = useRef();
	const startRef = useRef();
	
	useEffect(() => {
		history.listen((location) => {
			startRef.current.scrollIntoView();
			setImage(null);
			getImage(location.search.slice(location.search.indexOf('=') + 1)).then((data) => {
				if(typeof data === 'string')
					return data;
				else
					return data.text();
			}).then((text) => setImage(text));
		});

		//addToSeen(id);

		getImage(id).then((data) => {
			if(typeof data === 'string')
				return data;
			else
				return data.text();
		}).then((text) => setImage(text));

		getItemById(id)
			.then((data) => data.json())
			.then((data) => {
				setCardData(data[0]);
			});
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
						{cardData.cte_name}
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
							{cardData.cte_props ? cardData.cte_props[0].Name + ': ' + cardData.cte_props[0].Value : ''}
						</P>
						<P type='regular-grey'>
							{cardData.cte_props ? cardData.cte_props[1].Name + ': ' + cardData.cte_props[1].Value : ''}
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
								{cardData.cte_id}
							</P>
						</MarginBottom>
						<MarginBottom>
							<P type='bold-grey'>
								Страна происхождения
							</P>
							<P type='regular-black'>
								{cardData.country}
							</P>
						</MarginBottom>
						<MarginBottom>
							<P type='h1-black'>
								
								1000 ₽
							</P>
							<P type='regular-black'>
								Штука
							</P>
						</MarginBottom>
						<MarginBottom>
							<P type='bold-black'>
								{'от 1 000'}
								
								{' ₽ до '}
								
								{'1 000 ₽'}
							</P>
							<P type='regular-grey'>
								{'на основе '}
								{cardData.made_contracts}
								{' предложений поставщиков'}
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
								{cardData.made_contracts}
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
				{cardData.suppliers ? cardData.suppliers.map((el, i) => {
					return (
						<PriceCard
							key={i}
							item_id={id}
							name={el.Name}
							inn={el.Inn}
							articul={el.Inn + 975}
							region={cardData.regions.join(', ')}
							price={cardData.price}
							callback={() => moveCards(0)} />
					);
				}) : ''}
			</div>
		</>
	);
};

export default Card;
