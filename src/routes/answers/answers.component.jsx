import { useState, useEffect } from 'react';

import { getCollection } from '../../utils/firebase/firebase.utils';

import './answers.styles.scss';

const answerInitialState = {
	message: '',
	answer: '',
};

const Answers = () => {
	const [answers, setAnswers] = useState(answerInitialState);

	// useEffect to load all answers, first add answer feature

	return <div>test</div>;
};

export default Answers;
