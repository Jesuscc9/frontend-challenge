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
    padding: 2.6rem;
    z-index: 100;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
  
  .modalContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 2.25rem !important;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(14, 56, 80, 0.25);
  }

  .modalSidemenu{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    background-color: #F7F8F9;

    .item {
      width: 350px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      box-shadow: 0px 9px 16px rgba(0, 20, 44, 0.1);

      .image {
        width: 125px;
        height: 125px;
        image-rendering: crisp-edges;
      background-position: center;
        background-size: cover;
      }

      .itemInfo{
        display: flex;
        flex-direction: column;
        justify-content: end;
        text-align: right;
        padding: 1rem;

        h3 {
          font-weight: 500;
          font-size: 18px;
          color: #24404F;
          line-height: 36px;
        }

        p {
          font-weight: 300;
          font-size: 14px;
          line-height: 36px;
          color: #24404F;
        }
      }

    }

  }

  .modalHeader{
    width: 830px;

    .image {
      width: 100%;
      height: 280px;
      background-color: gray;
      background-position: center;
      background-size: cover;
      image-rendering: pixelated;
    }
  }

  .modalBody {

    padding: 1.6rem 4rem;

    h1 {
      color: #403B2C;
      text-align: center;
      text-transform: uppercase;
    }

    p{
      margin-top: 1rem;
      color: #24404F;
      line-height: 30px;
      font-size: 18px;
    }
  }

  .modalMainContent{

  }

`
