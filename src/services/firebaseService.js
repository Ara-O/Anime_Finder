import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";



export function registerUser(thisval) {
    const auth = getAuth();
    let that = thisval;
    createUserWithEmailAndPassword(
        auth,
        that.$refs.email.value,
        that.$refs.password.value
    )
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user ", user);
            that.checkSignedInStatus()
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

}

export function checkStatus() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        return true
    } else {
        return false
    }
}

export function logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signed out")
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}

export function storeUserData(anime) {
    const auth = getAuth();
    auth.onAuthStateChanged(function (user) {
        if (user) {
            let userID = user.uid;
            const db = getDatabase();
            update(ref(db, 'users/' + userID), {
                [anime.title]: anime,
            });
        }
    })
}