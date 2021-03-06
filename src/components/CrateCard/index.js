import './crateCard.styles.css'
import StarIcon from '../../assets/icons/star.svg'
import { useState } from 'react'

export const CrateCard = ({ data, onSelect, selectedCrateId }) => {
  const [loadingImage, setLoadingImage] = useState(true)

  return (
    <article
      className={`crate ${selectedCrateId === data.crate_id && 'crate--selected'
        }`}
      key={data.crate_id}
      onClick={() => {
        onSelect(data.crate_id)
      }}
    >
      {loadingImage && <div className='crate__image--skeleton'></div>}
      <img
        className='crate__image'
        src={data.picture}
        style={{ display: loadingImage ? 'none' : 'block' }}
        onLoad={() => setLoadingImage(false)}
      />
      <div className='crate__info'>
        <h3 className='crate__title'>{data.name}</h3>
        <div className='crate__rating'>
          <p>{data.rating}/5</p>
          <img src={StarIcon} width='14' />
        </div>
      </div>
    </article>
  )
}

export const SkeletonCrate = () => (
  <article className='crate crate--skeleton'>
    <div className='crate__image'></div>
    <div className='crate__info'>
      <div className='crate__text'></div>
      <div className='crate__text'></div>
    </div>
  </article>
)
