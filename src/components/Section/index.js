import { Section as SectionComponent, ItemsContainer } from './styles.section'
import { items } from '../../data/SectionsData'
import { useState } from 'react'
import ArrowIcon from '../../assets/icons/arrow.svg'

export const Section = () => {
  return (
    <SectionComponent>
      <h1>Why Us</h1>
      <ItemsContainer>
        {items.map((e, i) => (
          <Item data={e} key={i} />
        ))}
      </ItemsContainer>
    </SectionComponent>
  )
}

const Item = ({ data }) => {
  const [showDescription, setShowDescription] = useState(data.id === 2 || false)

  const handleClick = () => setShowDescription(!showDescription)

  return (
    <article className='item'>
      <div className='icon' />
      <div onClick={handleClick} className='item__header'>
        <h2>{data.title}</h2>
        <img src={ArrowIcon} className={`arrow ${showDescription && 'arrow__rotated'}`} />
      </div>
      {(showDescription) && <p>{data.description}</p>}
    </article>
  )
}
