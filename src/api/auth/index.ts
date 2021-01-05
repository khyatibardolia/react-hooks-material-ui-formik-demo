import {Auth, provider, Db} from '../config';
/**
 * Sign in with email and password
 * @param {*} email
 * @param {*} password
 */
export const loginWithPassword = (email: string, password: string) =>
    Auth.signInWithEmailAndPassword(email, password);

export const loginWithGoogle = () => {
    return Auth.signInWithPopup(provider).then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        console.log('token', token);
        // The signed-in user info.
        const user = result.user;
        console.log('user', user);
        return {
            type: "AUTH_USER_DATA",
            user
        }
        // ...
    }).catch(function(error: any) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
    });
};

export const signUpWithPassword = (email: string, password: string) =>
     Auth.createUserWithEmailAndPassword(email, password);


export const logOut = () => Auth.signOut();
