import { useState } from 'react';
import './image-slider.styles.scss';

const IMAGES = [
	{ image: 'https://i.ibb.co/tDk2HWy/image1.jpg' },
	{ image: 'https://i.ibb.co/jgVFPXh/image2.jpg' },
	{ image: 'https://i.ibb.co/7KKNJgN/image3.jpg' },
	{ image: 'https://i.ibb.co/G7Sms7h/image4.jpg' },
];

const ImageSlider = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const length = IMAGES.length;

	const nextSlide = () => {
		console.log('>');
		setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
	};

	const prevSlide = () => {
		console.log('<');
		setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
	};

	if (!Array.isArray(IMAGES) || IMAGES.length <= 0) {
		return null;
	}

	return (
		<section>
			<span className='arrow left' onClick={prevSlide}>
				&#10092;
			</span>
			<span className='arrow right' onClick={nextSlide}>
				&#10093;
			</span>
			{IMAGES.map((img, index) => {
				return (
					<div
						className={index === currentImage ? 'slide active' : 'slide'}
						key={index}
					>
						{index === currentImage && (
							<img
								src={img.image}
								className='image'
								alt='Error loading resource'
							/>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
