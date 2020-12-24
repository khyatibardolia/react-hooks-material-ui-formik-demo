import app from 'firebase/app';

const firebase = () => {
    let config = {
        apiKey: process.env,
        authDomain: "stable-hybrid-299410.firebaseapp.com",
        projectId: "stable-hybrid-299410",
        storageBucket: "stable-hybrid-299410.appspot.com",
        messagingSenderId: "638477788138",
        appId: "1:638477788138:web:a42361119d15c2bff00893",
        measurementId: "G-2TM4Q4KMK6"
    };
    app.initializeApp(config);
    app.analytics();
};
export default firebase;


