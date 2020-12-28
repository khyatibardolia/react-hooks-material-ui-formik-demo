import app from 'firebase/app';
import 'firebase/auth';
import FIREBASE_CONFIG from '../config/config';

class Firebase {

    public auth: any;

    constructor() {
        app.initializeApp(FIREBASE_CONFIG);
        this.auth = app.auth();
    }
}

export default Firebase;
