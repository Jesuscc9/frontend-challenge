import { createGlobalStyle } from 'styled-components'

export const ModalStyles = createGlobalStyle`
  body {
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
    transition: opacity 0.3s;
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
    border-radius: 2.25rem;
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

  @media (max-width: 1220px) {
    .modal {
      padding: 3rem 3rem;
    }

    .modal__close-button {
      top: 0px;
    }

    .modal__wrapper {
      flex-direction: column-reverse;
    }

  }

  @media (max-width: 640px) {
    .modal {
      padding: 0rem;
    }

    .modal__close-button {
      position: fixed;
      top: 0px;
      right: 0px;
    }

    .modal__wrapper {
      border-radius: 0;
    }
  }

  @media (max-width: 750px) {
    .modal__side-menu {
      padding: 3rem 2rem;
      overflow-x: auto;
      flex-direction: row;
      justify-content: flex-start;
      align-items: stretch;
      column-gap: 3rem;
      width: 100%;
    }
  }

`
