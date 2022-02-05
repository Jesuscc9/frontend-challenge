import { createGlobalStyle } from 'styled-components'

export const ErrorMessageStyles = createGlobalStyle`
	.ErrorMessage {
		padding: var(--body-padding);
		text-align: center;
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		column-gap: 2rem;
		row-gap: 4rem;
	}

	.ErrorMessage__info {
		display: flex;
		flex-direction: column;
		row-gap: 4rem;
	}

	.ErrorMessage__title {
		font-size: 68px;
		line-height: 80px;
		color: #403B2C;
	}

	.ErrorMessage__button {
		width: min-content;
		white-space: nowrap;
		padding: 0.6rem 4rem;
		margin: auto;
		background-color: #0B1113;
		border: 0;
		color: #fff;
		font-size: 16px;
		line-height: 24px;
	}

	.ErrorMessage__description {
		font-size: 18px;
	}

	.ErrorMessage__image {
		border-radius: 2rem;
		max-width: 100%;
	}

	@media (max-width: 750px) {
    .ErrorMessage__title {
      font-size: 46px;
			line-height: 130%;
    }
    
  }

`