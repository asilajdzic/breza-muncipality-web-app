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
	collection,
	writeBatch,
	query,
	getDocs,
	setDoc,
	getDoc,
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
		const docRef = doc(collectionRef, object.category);
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

const auth = getAuth();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
};
