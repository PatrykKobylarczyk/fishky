import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAWGF9sx9A2WJi3tkBpMEs6J7w_JI91lrA",
    authDomain: "fishky-aa1d4.firebaseapp.com",
    projectId: "fishky-aa1d4",
    storageBucket: "fishky-aa1d4.appspot.com",
    messagingSenderId: "908322473446",
    appId: "1:908322473446:web:756705010c074044940227"
})

export const auth = app.auth()
export default app