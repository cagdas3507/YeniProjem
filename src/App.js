
import './App.css';
import User from "./Compenent/User.js";
import navbar from "./Compenent/Navbar.js";
import footerr from "./Compenent/footer.js";

function App() {
  
  return (
    <div className="App">
      <navbar />
     
      <footerr
      Downtitle="Alt başlık"
      />
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
        <User
      name="aslı"
      salary="35003"
      departmant="IT"
      />
      <funtions/>
    </div>

   
    
  );
  
}

export default App;
