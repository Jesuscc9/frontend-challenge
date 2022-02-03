import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 4rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 6rem;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    color: #0b1113;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 3rem;

  .item {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    width: 336px;

    .item__header {
      cursor: pointer;
    }

    .arrow {
      color: #646464;
      transition: transform 0.4s;
      margin-top: 6px;
    }

    .arrow__rotated {
      transform: rotate(180deg);
    }

    .icon {
      background-color: #24404f;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    h2 {
      font-size: 24px;
      line-height: 36px;
      font-weight: normal;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      margin-top: 1rem;
    }
  }
`
