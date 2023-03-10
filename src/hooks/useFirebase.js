import { useState, useEffect } from 'react';
import { getAuth,RecaptchaVerifier,signInWithPhoneNumber, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    // const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }
    // const signInUsingPhone = () => {
    //     return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //     .then((confirmationResult) => {
    //       // SMS sent. Prompt user to type the code from the message, then sign the
    //       // user in with confirmationResult.confirm(code).
    //       window.confirmationResult = confirmationResult;
    //       // ...
    //     }).catch((error) => {
    //       // Error; SMS not sent
    //       // ...
    //     });
    
    // }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        signInUsingGoogle,
        // signInUsingPhone,
        logOut
    }
}

export default useFirebase;