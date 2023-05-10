import { useState, useEffect, Fragment } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import Spinner from '../../components/spinner/spinner.component';

import './answers.styles.scss';

const answerInitialState = {
	message: '',
	answer: '',
};

const Answers = () => {
	const [answers, setAnswers] = useState([answerInitialState]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getAnswers = async () => {
			setIsLoading(true);
			const data = await getCollection('Answers');
			setAnswers(data);
			setIsLoading(false);
		};
		getAnswers();
	}, []);

	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='answers-container'>
					{answers.map((answer, index) => (
						<div key={index} className='answer-container'>
							<div className='message'>
								<b>Message:</b> {answer.message}
							</div>
							<div className='message'>
								<b>Answer:</b> {answer.answer}
							</div>
						</div>
					))}
				</div>
			)}
		</Fragment>
	);
};

export default Answers;
