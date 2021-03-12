
import './App.css';
import Profile from './profile/Profile'
import image from './profile/image.jpg'
import PropTypes from "prop-types"

function App() {
  const handleName = (name) => alert(name) ;
  return (
    <div className="App">

      
      <Profile fullName="Mehdi Habib" bio="I'm a Tunisian man" profession="I'm a fullstack javaScript student" handleName={handleName} > <img style={{width:"300px", height:"300px"}} src={image} alt="myImage" /></Profile>
      
    </div>
  );
}

export default App;
