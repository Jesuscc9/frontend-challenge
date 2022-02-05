import { createGlobalStyle, keyframes } from 'styled-components'

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.4;
  }

  100% {
    opacity: 0.6;
  }
`

export const CrateCardStyles = createGlobalStyle`
	.crate {
    width: 350px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 9px 16px rgba(0, 20, 44, 0.1);
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
      transform: translate(0.3rem, 0rem)
    }
  }

	.crate--selected .crate__info {
		border: 1px solid rgba(255, 183, 0, 1);
		border-left: 0px;
	}

  .crate__image {
    width: 125px;
    height: 125px;
    object-fit: cover;
  }
  
  .crate__image--skeleton {
    min-width: 125px;
    height: 125px;
    background-color: gray;
		animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .crate__info {
		width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
    padding: 1rem;
		transition: border 0.4s;
		border: 1px solid rgba(255, 255, 255, 0);
		border-left: 0px;

    h3 {
      font-weight: 500;
      font-size: 18px;
      color: #24404F;
      line-height: 36px;
    }

    span {
      display: flex;
      justify-content: end;
    }

    p {
      font-weight: 300;
      font-size: 14px;
      line-height: 36px;
      color: #24404F;
    }
  }

	.crate--skeleton .crate__image {
		min-width: 125px;
		height: 125px;
		background-color: gray;
		animation: ${skeletonAnimation} 0.6s linear infinite alternate;
	}

	.crate--skeleton .crate__info {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: end;
		row-gap: 0.6rem;

	}
	
	.crate--skeleton .crate__text {
		width: 100%;
		height: 10px;
		background-color: gray;
		animation: ${skeletonAnimation} 0.6s linear infinite alternate;
		border-radius: .15rem;
	}

	.crate--skeleton .crate__text:last-child {
		width: 30%;
	}

  @media (max-width: 750px) {
    .crate {
      flex-direction: column;
      justify-content: start;
      min-height: 100%;
      min-width: 125px;
      width: 125px;

      &:hover {
        transform: translate(0rem, 0rem)
      }
    }

    .crate__image {
      min-height: 110px;
    }

    .crate__info {
      height: 100%;
    }

    .crate--selected .crate__info {
      border: 1px solid rgba(255, 183, 0, 1);
      border-top: 0;
	  }
  }
`