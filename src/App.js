import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React ,{useState}from 'react'
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode,setMode] = useState('light');
  const [color,setColor] = useState('dark');
  const[alert,setAlert] = useState(null);

  const showAlert = (message ,type) =>{
      setAlert({
        message: message,
        type: type
      })
       setTimeout(()=>{
        setAlert(null);
      },3000); 
  }

  const toggleMode = () =>{
    if(mode==='light' ){
      setMode('dark');
      setColor('light');
      document.body.style.backgroundColor = 'grey';
      showAlert('DarkMode has been enabled' ,'success');
      document.title = 'TextUtils-Dark Mode';
      /* setInterval(() =>{
        document.title = 'Install TextUtils';
      },2000)
      setInterval(() =>{
        document.title = 'Download TextUtils';
      },1500) */
     
      
    } 
    if(mode==='dark'){
      setMode('light');
      setColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('LightMode has been enabled' ,'success');
      document.title = 'TextUtils-Light Mode';
      
    }
  }
  return (
    <>
    <Router>
    <Navbar title ='TextUtils' homeName = 'Home' aboutUtils ='About' mode={mode} color={color} toggleMode= {toggleMode}/>
    <Alerts alert={alert} showAlert={showAlert}/>
    <div className="container my-3">
       <Routes>
       <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={ <Textform heading = 'Enter the text to analyze' mode={mode} showAlert={showAlert} />}/>
         
          
        </Routes>
      
      </div>
      </Router>
      

      
      
      
      
   </>
  );
}

export default App;
