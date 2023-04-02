import './footer.styles.scss';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='footer-item'>
				<h1>
					73 km<sup>2</sup>
				</h1>
				<p>
					Ukupna površina <br />
					Općina teritorijalno pripada Zeničko-dobojskom kantonu
				</p>
			</div>
			<div className='footer-item'>
				<h1>14</h1>
				<p>
					Broj mjesnih zajednica
					<br />U svom sastavu ima 14 mjesnih zajednica
				</p>
			</div>
			<div className='footer-item'>
				<h1>14.168</h1>
				<p>
					Broj stanovnika <br />
					Prema posljednjem popisu stanovništva u Bosni i Hercegovini
				</p>
			</div>
		</footer>
	);
};

export default Footer;
