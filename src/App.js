import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <NavbarComponent/>
      <Login>
        
      </Login>
    </div>
  );
}

export default App;
