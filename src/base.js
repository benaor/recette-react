import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClWurXzcIGKpcH8AqDYqm0-XS0NOQeHJU",
  authDomain: "benaor-recette.firebaseapp.com",
  databaseURL: "https://benaor-recette.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
