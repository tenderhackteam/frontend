import React, { useState, useRef } from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import P from '../p';
import RecomendCard from '../recomend-card';

import succesIcon from '../../assets/svg/success.svg';
import minusIcon from '../../assets/svg/minus.svg';
import plusIcon from '../../assets/svg/plus.svg';

const PriceCard = ({ name, inn, articul, region, price, callback }) => {
	const [animState, setAnimState] = useState(0);
	const [recomendBlock, setRecomendBlock] = useState();
	const [score, setScore] = useState(1);

	const buttonRef = useRef();
	const successRef = useRef();
	const scoreRef = useRef();
	const recomendBlockRef = useRef();

	function getButton() {
		switch(animState) {
			case 0:
				return (
					<button
						className={css`
							width: 131px;
							height: 36px;
							border: 1px solid #DEDEDF;
							box-sizing: border-box;
							background: transparent;
							outline: none;
							cursor: pointer;

							display: flex;
							justify-content: center;
							align-items: center;

							transition: all .2s;
						`}
						ref={buttonRef}
						onClick={(e) => clickButton(e)}
					>
						<p className={css`
							font-family: Open Sans;
							font-style: normal;
							font-weight: normal;
							font-size: 15px;
							line-height: 20px;

							color: #6E6E6E;
						`}
						>
							В корзину
						</p>
					</button>
				);
			case 1:
				return (
					<div
						className={css`
							opacity: 0;
							transition: all .2s;
						`}
						ref={successRef}
					>
						<img
							className={css`
								display: block;
								margin: 0 auto;
							`}
							src={succesIcon}
							alt='success' />
						<p className={css`
							margin: 5px 0 0 0;
							width: 176px;
							font-family: Open Sans;
							font-style: normal;
							font-weight: bold;
							font-size: 15px;
							line-height: 20px;
							text-align: center;
							color: #56B40D;
						`}
						>
							Товар успешно добавлен в корзину
						</p>
					</div>
				);
			case 2:
				return (
					<div
						className={css`
							display: flex;
							width: 131px;
							height: 36px;
							background: #E7EEF7;
							border: 1px solid #DEDEDF;
							box-sizing: border-box;

							opacity: 0;
							transition: all .2s;
						`}
						ref={scoreRef}
					>
						<button
							className={css`
								padding: 0 0 2px 0;
								cursor: pointer;
								width: 36px;
								height: 36px;
								background: #FFFFFF;
								border: 1px solid #DEDEDF;
								box-sizing: border-box;
								outline: none;
							`}
							onClick={(e) => minusButton(e)}
						>
							<img src={minusIcon} alt='minus' />
						</button>
						<div className={css`
							width: 61px;
							height: 100%;
							display: flex;
							justify-content: center;
							align-items: center;
						`}
						>
							<p className={css`
								margin: 0;
								font-family: Open Sans;
								font-style: normal;
								font-weight: bold;
								font-size: 15px;
								line-height: 20px;
								color: #1A1A1A;
							`}
							>
								{score}
							</p>
						</div>
						<button
							className={css`
								padding: 0;
								cursor: pointer;
								width: 36px;
								height: 36px;
								background: #FFFFFF;
								border: 1px solid #DEDEDF;
								box-sizing: border-box;
								outline: none;
							`}
							onClick={(e) => plusButton(e)}
						>
							<img src={plusIcon} alt='plus' />
						</button>
					</div>
				);
			default:
				return null;
		}
	}

	function clickButton(e) {
		e.preventDefault();
		buttonRef.current.style = 'opacity: 0;';
		setTimeout(() => {
			setAnimState(1);
			successRef.current.style = 'opacity: 1';
		}, 200);
		setTimeout(() => {
			successRef.current.style = 'opacity: 0';
		}, 1800);
		setTimeout(() => {
			callback();
			setAnimState(2);
			scoreRef.current.style = 'opacity: 1';
		}, 2100);
		setTimeout(() => {
			setRecomendBlock(
				<Link
					className={css`
						display: block;
						text-decoration: none;
						transition: all .4s;
						padding: 0 54px;
						opacity: 0;
					`}
					ref={recomendBlockRef}
				>
					<p className={css`
						font-family: Open Sans;
						font-style: normal;
						font-weight: bold;
						font-size: 20px;
						line-height: 27px;
						color: #1A1A1A;
					`}
					>
						С этим товаром часто покупают
					</p>
					<div className={css`
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
					`}
					>
						<RecomendCard
							category='Банкетки'
							name='Банкетка фортепианная Yamaha BC-2647'
							price={12129}
							id={34860341}
							count={2} />
						<RecomendCard
							category='Педали для рояля'
							name='Педаль Vision AP-PD03'
							price={1530}
							id={34860341}
							count={19} />
						<RecomendCard
							category='Мелкие аксессуары'
							name='Держатель для планшета на рояль Vision AD-SA28'
							price={1130}
							id={34860341}
							count={17} />
						<RecomendCard
							category='Банкетки'
							name='Банкетка фортепианная Yamaha CX-6742'
							price={9150}
							id={34860341}
							count={3} />
					</div>
				</Link>);
			recomendBlockRef.current.style = 'opacity: 1';
		}, 2700);
	}

	function minusButton(e) {
		e.preventDefault();
		if(score !== 1)
			setScore(score - 1);
	}

	function plusButton(e) {
		e.preventDefault();
		setScore(score + 1);
	}

	return (
		<>
			<div className={css`
				padding: 14px 70px;
				display: grid;
				grid-template-columns: minmax(333px, 0) minmax(333px, 0) 230px auto;
				column-gap: 75px;
				border-bottom: 1px solid #C4C4C4;
				transition: all .6s;
			`}
			>
				<div>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='bold-black'
					>
						{name}
					</P>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						ИНН:
						{inn}
					</P>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						Артикул:
						{articul}
					</P>
				</div>
				<div>
					<P 
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						Номер предложения: №
						{articul}
					</P>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						Сроки поставки: 1 - 60 дней
					</P>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						Регион поставки:
						{region}
					</P>
				</div>
				<div>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='h1-black'
					>
						{price}
						₽
					</P>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						В том числе НДС 20% (
						{price * 0.2}
						₽)
					</P>
					<P
						className={css`
							margin-bottom: 8px;
						`}
						type='regular-grey'
					>
						Доступно для физ. лиц
						Доступно для гос. заказчиков
						с 21.05.2021 по 21.08.2021
					</P>
				</div>
				<div className={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
				`}
				>
					{getButton()}
				</div>
			</div>
			{recomendBlock}
		</> 
	);
};

PriceCard.propTypes = {
	name: PropTypes.string,
	inn: PropTypes.number,
	articul: PropTypes.number,
	region: PropTypes.string,
	price: PropTypes.number,
	callback: PropTypes.func,
};

export default PriceCard;
