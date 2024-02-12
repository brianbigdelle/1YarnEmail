import emailjs from 'emailjs-com'
import { getDatabase, ref, push, query, orderByChild, equalTo, get } from "firebase/database";
import { initializeApp } from "firebase/app";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://yarn-97698-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);






emailjs.init('YNFtuSWhCaneh9sku')




function emailSubscriptions(e,  sub) {
    e.preventDefault();

    // Check if the email already exists in the database
    const subscribersRef = ref(database, 'subscribers');
    const emailQuery = query(subscribersRef, orderByChild('email'), equalTo(sub));

    get(emailQuery).then((snapshot) => {
        if (snapshot.exists()) {
            console.log('Email already exists in the database');
            // You can handle this case accordingly, e.g., display an error message
            return;
        }

        emailjs.send('service_03vr4j9','template_iaodzuj', {
            subscriber: sub 
        }).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });

        // Store subscriber email in Firebase Realtime Database
        push(ref(database, 'subscribers'), { email: sub }).then((newDataRef) => {
            console.log("Data stored successfully with key:", newDataRef.key);
            // Clear the input field after successful submission
            document.querySelector('input[name="email"]').value = '';
        }).catch((error) => {
            console.error("Error storing data:", error);
        });
    }).catch((error) => {
        console.error("Error querying database:", error);
    });
}

   
 export default emailSubscriptions;

