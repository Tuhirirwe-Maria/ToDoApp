import firebase from 'firebase/app'
import 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyAdxVeHr8CXmFM-BT-wWXYrVtwAJI80j6c",
        authDomain: "todo-app73.firebaseapp.com",
        projectId: "todo-app73",
        storageBucket: "todo-app73.appspot.com",
        messagingSenderId: "474093246964",
        appId: "1:474093246964:web:1baf33e1e4b743b1d081a1"
      }


firebase.initializeApp(firebaseConfig)

export default firebase