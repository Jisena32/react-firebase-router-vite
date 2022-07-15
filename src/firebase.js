import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDa68zRxmmUYG89eufGwRSmxZ3Ztlj0qdU',
	authDomain: 'reactcurso-141.firebaseapp.com',
	projectId: 'reactcurso-141',
	storageBucket: 'reactcurso-141.appspot.com',
	messagingSenderId: '147041356889',
	appId: '1:147041356889:web:1195ae7a18c8314111b548',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
