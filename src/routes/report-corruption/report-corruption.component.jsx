import MessageForm from '../../components/message-form/message-form.component';

import './report-corruption.styles.scss';

const ReportCorruption = () => {
	return (
		<div className='report-corruption-container'>
			<div className='report-corruption-text-container'>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
					dolorum, placeat magnam cumque ut alias accusantium maiores
					repudiandae cupiditate natus, iusto eum aperiam perferendis tenetur
					accusamus. Vitae officia cupiditate sint! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Ratione quae autem fuga illo
					exercitationem veniam inventore, corporis excepturi amet nemo
					accusamus? Non sed laboriosam inventore reiciendis architecto quae,
					enim culpa?
				</p>
			</div>
			<MessageForm collectionTitle='report-corruption' />
		</div>
	);
};

export default ReportCorruption;
