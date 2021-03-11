
import './App.css';
import Profile from './profile/Profile'

function App() {
  const handleName = (name) => alert(name) ;
  return (
    <div className="App">

      <Profile fullName="Mehdi Habib" bio="I'm a Tunisian man" profession="I'm a fullstack javaSript student" handleName={handleName} > https://st2.depositphotos.com/1531183/5770/v/950/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg </Profile>
      
    </div>
  );
}

export default App;
