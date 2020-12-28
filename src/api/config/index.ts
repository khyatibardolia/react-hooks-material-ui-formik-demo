import Firebase from './firebase';
import firebase from 'firebase/app';
import 'firebase';

const FB: any = new Firebase();
const Auth = FB.auth;
const provider = new firebase.auth.GoogleAuthProvider();
const Db = firebase.database();
//const storage = firebase.storage();
export default FB;

export {Auth, provider, Db};

