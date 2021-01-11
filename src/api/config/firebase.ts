import app from 'firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';
import FIREBASE_CONFIG from '../config/config';

const firebaseApp = app.initializeApp(FIREBASE_CONFIG);

const rsf = new ReduxSagaFirebase(firebaseApp);

export { firebaseApp };

export default rsf;
