import { initializeApp } from 'firebase/app';
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	getAuth,
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	collection,
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

const auth = getAuth();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);

export const createUserDocumentFromAuth = async (user) => {
	if (!user) return;
	const userDocRef = doc(db, 'Users', user.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { email } = user;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}
	return userDocRef;
};

export const createMessageDocument = async (collection, messageToAdd) => {
	if (!messageToAdd) return;
	const { uid, to, email, message } = messageToAdd;
	const messageDocRef = doc(db, collection, uid);
	const docSnapshot = await getDoc(messageDocRef);

	if (!docSnapshot.exists()) {
		try {
			const today = new Date();
			const options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			};
			await setDoc(messageDocRef, {
				email: email,
				to: to,
				message: message,
				sent: today.toLocaleDateString('en-US', options),
			});
		} catch (error) {
			console.log('error creating the message document', error.message);
		}
	}

	return messageDocRef;
};

export const getCollection = async (collectionKey) => {
	const collectionDocRef = collection(db, collectionKey);
	const querySnapshot = await getDocs(collectionDocRef);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createEmployeeDocument = async (collection, employeeToAdd) => {
	if (!employeeToAdd) return;
	const { uid, email, name, tasks, title, imageUrl, surname } = employeeToAdd;
	const employeeDocRef = doc(db, collection, uid);
	const docSnapshot = await getDoc(employeeDocRef);

	if (!docSnapshot.exists()) {
		try {
			const today = new Date();
			const options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			};
			await setDoc(employeeDocRef, {
				email: email,
				name: name,
				surname: surname,
				title: title,
				tasks: tasks,
				image: imageUrl,
				hired: today.toLocaleDateString('en-US', options),
			});
		} catch (error) {
			console.log('error creating the employee document', error.message);
		}
	}

	return employeeDocRef;
};

export const createArticleDocument = async (articleToAdd) => {
	const { title, fileUrl, imageUrl, uid } = articleToAdd;
	const articlesDocRef = doc(db, 'Articles', uid);
	const docSnapshot = await getDoc(articlesDocRef);
	if (!docSnapshot.exists()) {
		try {
			const today = new Date();
			await setDoc(articlesDocRef, {
				title: title,
				fileUrl: fileUrl,
				imageUrl: imageUrl,
				published: today,
			});
		} catch (error) {
			console.log('error creating the article document', error.message);
		}
	}
};
