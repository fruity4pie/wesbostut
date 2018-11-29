import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCGJZKXDoy528nk7e4M41U1ULABy3h0H9w",
	authDomain: "catch-of-the-day-wes-bos-e8f1a.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-wes-bos-e8f1a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;