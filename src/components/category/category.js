import React from 'react';
import { css } from '@emotion/css';

const Category = ({ image, title, childrens }) => {
	return(
		<div className={css`
			position: relative;
			width: 317px;
			height: 468px;
		`}
		>
			<div className={css`
				position: absolute;
				z-index: 2;
				top: 0;
				width: 100%;
				display: flex;
				justify-content: center;
			`}
			>
				<img src={image} alt='logo' />
			</div>
			<div className={css`
				position: absolute;
				z-index: 1;
				top: 85px;
				width: 100%;
				height: 391px;
				background: #E8EEF6;
				border-radius: 5px;
				padding: 67px 28px 0 38px;
				box-sizing: border-box;
			`}
			>
				<p className={css`
					text-transform: uppercase;
					margin: 0 0 10px 0;
					font-family: Open Sans;
					font-style: normal;
					font-weight: bold;
					font-size: 17px;
					line-height: 19px;
					color: #1A1A1A;
				`}
				>
					{title}
				</p>
				<ul className={css`
					list-style-type: none;
					padding: 0;
					margin: 5px 0 0 0;
				`}
				>
					{childrens.map((el, i) => {
						return (
							<li
								className={css`
									font-family: Open Sans;
									font-style: normal;
									font-weight: normal;
									font-size: 15px;
									line-height: 19px;
									color: #274B82;
									margin-bottom: 10px;
								`}
								key={i}
							>
								{el}
							</li>
						);
					})}
				</ul>
				<div className={css`
					width: 139px;
					position: absolute;
					bottom: 30px;
					left: 28px;
					height: 49px;
					background: #FFFFFF;
					border: 1px solid #D2D9E4;
					box-sizing: border-box;
					border-radius: 5px;
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
						font-size: 14px;
						line-height: 19px;
						color: #274B82;
					`}
					>
						Смотреть все
					</p>
				</div>
			</div>
		</div>
	);
};

export default Category;
