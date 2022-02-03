import styled from 'styled-components'

export const HeroContainer = styled.section`
  padding: var(--body-padding);
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .heroInfo {
    width: 615px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 0.2rem;

    h1 {
      color: #fff;
      font-size: 68px;
      line-height: 80px;
    }
  
    p {
      color #fff;
      font-size: 24px;
      line-height: 36px;
    }

    button {
      background-color: #fff;
      padding: 0.6rem 3rem;
      border: none;
      white-space: nowrap;
      width: min-content;
  
      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: var(--main-bg-color)
      }
    }

  }

  .hero__image {
    border: 1px solid white
  }

  .hero-image{
    width: 420px;
    border-radius: 2rem 2rem 0 0;
    transform: scale(1.2) translate(-35px, 80px);
  }
`
