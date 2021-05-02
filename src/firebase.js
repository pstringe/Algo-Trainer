import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAY165uo63GZfQEUoMaf-tmKn-GhbBzkCQ",
    authDomain: "algo-trainer.firebaseapp.com",
    projectId: "algo-trainer",
    storageBucket: "algo-trainer.appspot.com",
    messagingSenderId: "688708357465",
    appId: "1:688708357465:web:2afafa7e8747ebabb05048",
    measurementId: "G-HFRQB59L0R"
});

export const auth = app.auth();
export default app;