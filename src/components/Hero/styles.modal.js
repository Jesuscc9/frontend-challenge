import { createGlobalStyle } from 'styled-components'

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
    background-color: #000;
    opacity: 0.6;
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1.8rem;
    z-index: 100;
    max-width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .modalSidemenu{
    width: 100%;

    img {
      width: 100%;
    }
  }



  .modalHeader{
    width: 830px;

    img {
      width: 100%;
    }
  }

  .modalMainContent{
    border: 1px solid;
  }

`
