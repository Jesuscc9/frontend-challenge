import { SectionStyles } from './styles.section'
import { items } from '../../data/SectionsData'
import { useState } from 'react'
import ArrowIcon from '../../assets/icons/arrow.svg'

export const WhyUsSection = () => (
  <>
    <SectionStyles />
    <section className='section'>
      <h1 className='section__title'>Why Us</h1>
      <div className='section__items-container'>
        {items.map((e, i) => (
          <SectionItem data={e} key={i} />
        ))}
      </div>
    </section>
  </>
)

const SectionItem = ({ data }) => {
  const [showDescription, setShowDescription] = useState(data.id === 2 || false)

  const handleClick = () => setShowDescription(!showDescription)

  return (
    <>
      <SectionStyles />
      <article className='item'>
        <div className='item__icon' />
        <div onClick={handleClick} className='item__header'>
          <h2 className='item__title'>{data.title}</h2>
          <img src={ArrowIcon} className={`item__arrow ${showDescription && 'item__arrow--rotated'}`} />
        </div>
        {(showDescription) && <p className='item__description'>{data.description}</p>}
      </article>
    </>
  )
}
