import { useState, useEffect } from 'react'
import { TeaItem } from '../TeaItem'
import { Loader } from '../..'
import { MainCrateStyles } from './styles.mainCrate'

export const MainCrate = ({ data }) => {
	const [loadingImage, setLoadingImage] = useState(true)

	useEffect(() => {
		setLoadingImage(true)
	}, [data])

	return (
		<>
			<MainCrateStyles />
			<div className='MainCrate'>
				<div className='MainCrate__header'>
					{loadingImage && (
						<div className='MainCrate__header-image MainCrate__header-image--skeleton'></div>
					)}
					<img
						style={{ display: loadingImage ? 'none' : 'block' }}
						className='MainCrate__header-image'
						src={data.picture}
						onLoad={() => setLoadingImage(false)}
					/>
				</div>
				<div className='MainCrate__content'>
					<h1 className='MainCrate__title'>{data.name}</h1>
					<p className='MainCrate__description'>{data.description}</p>
					<div className='MainCrate__tea-items'>
						{data.content.map((e, i) => (
							<TeaItem key={i} selectedCrate={data} data={e} />
						))}
					</div>
					<div className='MainCrate__footer'>
						<button className='MainCrate__button'>
							<p>Sign up</p>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export const SkeletonMainCrate = () => {
	return (
		<>
			<MainCrateStyles />
			<div className='MainCrate--skeleton'>
				<div className='MainCrate__header'>
					<div className='MainCrate__header-image' />
				</div>
				<div className='MainCrate__content'>
					<Loader />
				</div>
			</div>
		</>
	)
}
