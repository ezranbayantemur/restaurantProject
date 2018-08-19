import firebase from 'firebase'

// We have two data collections (categories, foods) on Google Firebase - Cloud Firestore.
// On "categories" collections we have "id", "categoryName" and "categoryPhoto" fields.
// On "foods" collections we have "id", "foodName", "foodPrice", "foodDetail", "foodPhoto", "categoryID", "onSwiper" fields.

const fireconfig = firebase.initializeApp({
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxx"
})

export default fireconfig;

