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
		setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
	};

	const prevSlide = () => {
		setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
	};

	if (!Array.isArray(IMAGES) || IMAGES.length <= 0) {
		return null;
	}

	return (
		<section>
			<span className='left-arrow' onClick={prevSlide}>
				&#10092;
			</span>
			<span className='right-arrow' onClick={nextSlide}>
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
