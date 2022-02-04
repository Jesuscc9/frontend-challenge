import { createGlobalStyle } from 'styled-components'

export const SectionStyles = createGlobalStyle`

  .section {
    margin-top: 3rem;
    padding: var(--body-padding);
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 4.2rem;
  }
  
  .section__title {
    text-align: center;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    color: #0b1113;
  }
  
  .section__items-container {
    display: flex;
    justify-content: space-around;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .item {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    width: 336px;
  }

  .item__header {
    cursor: pointer;
  }
  
  .item__icon {    
    background-color: #24404f;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .item__arrow {
    color: #646464;
    transition: transform 0.4s;
    margin-top: 6px;
  }

  .item__arrow--rotated {
    transform: rotate(180deg);
  }

  .item__title {
    font-size: 24px;
    line-height: 36px;
    font-weight: normal;
  }
  
  .item__description {    
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    margin-top: 1rem;
  }

`
