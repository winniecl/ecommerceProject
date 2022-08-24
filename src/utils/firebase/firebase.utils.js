import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVXIjGgn-NDvGw1BdUupPeavx0SsmWdzI",
  authDomain: "crown-clothing-db-40db9.firebaseapp.com",
  projectId: "crown-clothing-db-40db9",
  storageBucket: "crown-clothing-db-40db9.appspot.com",
  messagingSenderId: "1096209456577",
  appId: "1:1096209456577:web:293b588cbc98c39963a340",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  return signInWithPopup(auth, googleProvider);
  //const response = await signInWithPopup(auth, googleProvider)
  //console.log (response)
};
export const signInWithGoogleRedirect = async () =>
  signInWithRedirect(auth, googleProvider);
const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //return(console.log(userDocRef)//)
  const userSnapshot = getDoc(userDocRef);
  //console.log(userSnapshot)
  //console.log((await userSnapshot).exists())
  if (!(await userSnapshot).exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating the user ", error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  //console.log(objectsToAdd);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "catagories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categories = querySnapshot.docs.map((doc) => doc.data());
  return categories;
};
