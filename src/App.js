import './App.css';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const app = initializeApp({
  apiKey: "AIzaSyAt0wmClJ8jI5N2WW08r-6IM8Ow5eE9VfQ",
  authDomain: "photoupload-a31d4.firebaseapp.com",
  projectId: "photoupload-a31d4",
  storageBucket: "photoupload-a31d4.appspot.com",
  messagingSenderId: "1027022071906",
  appId: "1:1027022071906:web:19672a9ffe120b17ea893b"
});

function App() {
  const storage= getStorage(app);

  return (
    <div className="App">
      <HomeScreen st={storage} />
      {/* <LoginScreen /> */}
    </div>
  );
}

export default App;
