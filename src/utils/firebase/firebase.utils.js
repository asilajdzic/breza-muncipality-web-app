import { initializeApp } from 'firebase/app';

import {
	getFirestore,
	doc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDWpnbaCs4aKOWObMkAavokjVY5iZYOZdg',
	authDomain: 'municipality-web-app.firebaseapp.com',
	projectId: 'municipality-web-app',
	storageBucket: 'municipality-web-app.appspot.com',
	messagingSenderId: '400085499124',
	appId: '1:400085499124:web:1362bde340ba320a58f2a1',
	measurementId: 'G-Z1WVG8WY96',
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

export const addCollection = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.name);
		batch.set(docRef, object);
	});

	await batch.commit();
};

export const getCollection = async (collectionKey) => {
	const collectionRef = collection(db, collectionKey);
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
