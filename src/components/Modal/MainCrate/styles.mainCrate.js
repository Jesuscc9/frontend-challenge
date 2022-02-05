import { createGlobalStyle, keyframes } from 'styled-components'

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.7;
  }
`

export const MainCrateStyles = createGlobalStyle`
	.MainCrate {
    width: 100%;
  }
  
  .MainCrate__header-image {
    width: 100%;
    height: 280px;
    background-color: gray;
    background-position: center;
    background-size: cover;
    image-rendering: pixelated;
    object-fit: cover;
  }

  .MainCrate__header-image--skeleton {
    animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .MainCrate--skeleton {
    width: 100%;
  }

  .MainCrate--skeleton .MainCrate__header-image {
    width: 100%;
    animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .MainCrate--skeleton .MainCrate__content {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .MainCrate__content {
    padding: 1.6rem 4rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .MainCrate__title {
    font-size: 68px;
    line-height: 80px;
    color: #403B2C;
    text-align: center;
    text-transform: uppercase;
  }

  .MainCrate__description {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #24404F;
  }
  
  .MainCrate__footer {
    text-align: center;
    margin-top: 2rem;
  }
  
  .MainCrate__button {
    border: 0;
    background-color: #0B1113;
    padding: 0.6rem 4.7rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    margin: 1rem 0rem;
  }

  .MainCrate__tea-items {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
  }
`