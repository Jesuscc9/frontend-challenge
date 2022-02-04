import { createGlobalStyle, keyframes } from 'styled-components'

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.7;
  }
`

export const ModalStyles = createGlobalStyle`
  body{
    overflow-y: hidden;
  }

  .overlay {
    z-index: 99;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }

  .ModalContainer {
    overflow-y: auto;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    width: 100%;
    max-height: 100vh
  }
  
  .modal {
    background-color: #fff;
    padding: 4rem 4rem;
    z-index: 101;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  
  .modal__wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 2.25rem !important;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(14, 56, 80, 0.25);
    position: relative;
  }

  .modal__close-button {
    position: absolute;
    width: 64px;
    height: 64px;
    right: 0;
    background-color: #fff;
    border: 0;
    cursor: pointer;
    z-index: 101;
    border-bottom-left-radius: 50%;
  }

  .modal__side-menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2.2rem;
    background-color: #F7F8F9;
    padding: var(--body-padding);
  }

  .modal__main-crate {
    width: 100%;
  }
  
  .modal__header-image {
    width: 100%;
    height: 280px;
    background-color: gray;
    background-position: center;
    background-size: cover;
    image-rendering: pixelated;
    object-fit: cover;
  }

  .modal__header-image--skeleton {
    animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .modal__main-crate--skeleton {
    width: 100%;
  }

  .modal__main-crate--skeleton .modal__header-image {
    width: 100%;
    animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .modal__main-crate--skeleton .modal__content {
    width: 100%;
    display: flex;
    justify-content: center;
  }


  
  .modal__content {
    padding: 1.6rem 4rem;
    
    h1 {
      color: #403B2C;
      text-align: center;
      text-transform: uppercase;
    }
    
    /* p {
      margin-top: 1rem;
      color: #24404F;
      line-height: 30px;
      font-size: 18px;
    } */
  }

  .loader {
    display: grid;
    place-items: center;
  }

  .modal__tea-items {
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
  }

  .modal__foter {
    text-align: center;
    margin-top: 2rem;
  }
  

  .TeaItem {
    width: 150px;
    background-color: #F9F9F7;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 1rem;
  }

  .TeaItem__image {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
  }

  .TeaItem__image--skeleton {
    min-height: 110px;
    background-color: gray;
    animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .TeaItem__title {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    text-align: left !important;
  }

  .TeaItem__description {
    font-weight: 300;
    font-size: 12px;
    line-height: 17px;
    color: #000000;
  }

  .TeaItem__button {
    background-color: #0B1113;
    padding: 0.6rem 4rem;
    border: none;
    white-space: nowrap;
    width: min-content;

    p {
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
  }

  .TeaItem__rating {
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: end;

    p {
      font-size: 12px;
      font-weight: 300;
      line-height: 17px;
      margin-right: 0.2rem;
    }
  }

  `
