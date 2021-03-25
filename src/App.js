
import './App.css';
import User from "./Compenent/User.js";
import navbar from "./Compenent/Navbar.js";

function App() {
  
  return (
    <div className="App">
      <navbar />
     

      <h4>Çağdaş</h4>
      <User
      name="ÇAğdaş"
      salary="3500"
      departmant="IT"
      />
      <User
      name="Hick"
      salary="35002"
      departmant="Elektrik"
      />
      <funtions/>
    </div>

   
    
  );
  
}

export default App;
