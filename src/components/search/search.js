
import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

const Search = ({ onSubmit }) => {
	return (
		<input
			className={css`
				border: none;
				background: #E8EEF6;
				outline: none;
				width: 70%;
				height: 39px;
				padding: 8px 25px;
				font-size: 20px;
				color: #1A1A1A;
			`}
			onKeyDown={(e) => {
				if(e.key === 'Enter')
					onSubmit(e);
			}}
			placeholder='Введите название категории или товара' />
	);
};

Search.propTypes = {
	onSubmit: PropTypes.func,
};

export default Search;
