import { useState, useEffect } from 'react'
import './styles.teaItem.css'
import StarIcon from '../../../assets/icons/star.svg'

export const TeaItem = ({ data, selectedCrate }) => {
  const [loadingImage, setLoadingImage] = useState(true)

  useEffect(() => {
    setLoadingImage(true)
  }, [selectedCrate])

  return (
    <article className='TeaItem'>
      {loadingImage && (
        <div className='TeaItem__image TeaItem__image--skeleton'></div>
      )}
      <img
        src={data.picture}
        style={{ display: loadingImage ? 'none' : 'block' }}
        onLoad={() => setLoadingImage(false)}
        className='TeaItem__image'
      />
      <div className='TeaItem__info'>
        <h3 className='TeaItem__title'>{data.name}</h3>
        <p className='TeaItem__description'>{data.description}</p>
      </div>
      <span className='TeaItem__rating'>
        <p>{data.rating}/5</p>
        <img src={StarIcon} width='16' />
      </span>
    </article>
  )
}
