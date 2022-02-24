import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, update, onValue, remove } from "firebase/database";



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

export function signInUser(thisval) {
    const auth = getAuth();
    let that = thisval;
    signInWithEmailAndPassword(
        auth,
        that.$refs.email.value,
        that.$refs.password.value
    )
        .then((userCredential) => {
            const user = userCredential.user;
            that.checkSignedInStatus()
        })
        .catch((error) => {
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
        alert(error.message)
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
            console.log('anime has been added')
        }
    })
}

export function getUserAnimeList(thisval) {
    const auth = getAuth();
    auth.onAuthStateChanged(function (user) {
        if (user) {
            let userID = user.uid;
            const db = getDatabase();
            const userAnimeList = ref(db, 'users/' + userID);
            onValue(userAnimeList, (snapshot) => {
                const data = snapshot.val();
                thisval.animeLists = data;
            });
        } 
    })
}

export function removeAnime(anime) {
    const auth = getAuth();
    auth.onAuthStateChanged(function (user) {
        if (user) {
            let userID = user.uid;
            const db = getDatabase();
            remove(ref(db, 'users/' + userID + `/${anime.title}`))
        }
    })
}
