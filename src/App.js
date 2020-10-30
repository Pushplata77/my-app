import profileImage from './img/user.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>My First React App</h2>
     <p>Author Name: Pushplata</p>
     <img src={profileImage} alt="profileImage" className="user-img"/>
    </div>
  );
}

export default App;
