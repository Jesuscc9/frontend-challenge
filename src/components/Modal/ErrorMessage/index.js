import './styles.errorMessage.css'
import TeaImage from '../../../assets/images/hero_tea_cup.jpg'

export const ErrorMessage = ({ onBackClick }) => {
	return (
		<section className='ErrorMessage'>
			<div className='ErrorMessage__info'>
				<h1 className='ErrorMessage__title'>
					Something went <br /> wrong :(
				</h1>
				<p className='ErrorMessage__description'>Please try again later.</p>
				<button className='ErrorMessage__button' onClick={onBackClick}>
					Back to home
				</button>
			</div>
			<img
				src={TeaImage}
				alt='Tea Image'
				width='400'
				className='ErrorMessage__image'
			/>
		</section>
	)
}
