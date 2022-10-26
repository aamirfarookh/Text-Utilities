
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Textform from './components/text-form';
import React, {useState} from 'react'


function App() {
    const [mode,setMode] = useState("light");
    const [btnText,setBtnText] = useState("dark")
    const toggleMode =()=>{
        if(mode==='light'){
            setMode('dark')
            setBtnText("light")
            document.body.style.backgroundColor="#042743";
            
            
        }
        else{
            setMode("light")
            setBtnText("dark")
            document.body.style.backgroundColor="whitesmoke";
           
        }
    }
 return (
  <><Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}></Navbar>
  <Textform heading="Enter your text here" mode={mode}></Textform>
  {/* <About/> */}
  </>
 );
}

export default App;
