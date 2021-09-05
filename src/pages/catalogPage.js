import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { generateNeuralByUser, getItemById } from '../services/service';

import Search from '../components/search';
import Category from '../components/category';
import SliderElement from '../components/slider-element';

import category1Image from '../assets/img/category_1.png';
import category2Image from '../assets/img/category_2.png';
import category3Image from '../assets/img/category_3.png';
import category4Image from '../assets/img/category_4.png';

const CatalogPage = () => {
	const [recomends, setRecomeds] = useState();

	useEffect(() => {
		generateNeuralByUser()
			.then((json) => json.map((el, i) => {
				const data = getItemById(el);

				return (
					<SliderElement
						key={i}
						id={data.cte_id}
						category={data.category_id}
						name={data.cte_name}
						price={data.price}
						count={data.made_contracts} />
				);
			}))
			.then((data) => setRecomeds(data));
	}, []);

	return (
		<div className={css`
			margin: 28px 54px;
		`}
		>
			<div className={css`
				display: flex;
				justify-content: space-between;
				align-items: center;
			`}
			>
				<p className={css`
					margin: 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 28px;
					line-height: 38px;

					color: #1A1A1A;
				`}
				>
					Реестр
					{' '}
					<span className={css`
						color: #274B82;
					`}
					>
						товаров
					</span>
				</p>	
				<Search />
			</div>
			<div className={css`
				display: flex;
				justify-content: space-between;
			`}
			>
				<div className={css`
						margin-top: 50px;
						display: flex;
						width: 100%;
						justify-content: space-between;
						flex-wrap: wrap;
					`}
				>
					<Category
						image={category1Image}
						title='Бумага'
						childrens={[
							'Бумага для офисной техники',
							'Бумага для широкоформатных при...',
							'Бумага микалентная',
							'Перфорированная',
							'Бумага писчая',
						]} />
					<Category
						image={category2Image}
						title='Бытовая техника'
						childrens={[
							'Аксессуары для бытовой техники д...',
							'Аксессуары для мелкой техники для...',
							'Бытовая техника для дома',
							'Крупная бытовая техника для кухни',
							'Мелкая бытовая техника для кухни',
						]} />
					<Category
						image={category3Image}
						title='Бытовая химия'
						childrens={[
							'Мыло твёрдое и жидкое',
							'Освежители воздуха и аксессуары ...',
							'Средства дезинсикционные	',
							'Средства дезинфицирующие хозяй...',
							'Средства дератизационные',
						]} />
					<Category
						image={category4Image}
						title='Вещества химические'
						childrens={[
							'Вещества неорганические',
							'Вещества органические',
							'Материалы и реагенты для водооч...',
							'Реагенты сложные диагностически...',
						]} />
				</div>
			</div>
			<p className={css`
				margin-top: 100px;
				font-family: Open Sans;
				font-style: normal;
				font-weight: bold;
				font-size: 28px;
				line-height: 38px;

				color: #1A1A1A;	
			`}
			>
				Рекомендации для вас
			</p>
			<div className={css`
				display: flex;
				justify-content: space-between;
			`}
			>
				{recomends}
			</div>
		</div>
	);
};

export default CatalogPage;
