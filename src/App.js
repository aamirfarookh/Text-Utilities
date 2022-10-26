
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
        }
        else{
            setMode("light")
            setBtnText("dark")
        }
    }
 return (
  <><Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText}></Navbar>
  <Textform heading="Enter your text here"></Textform>
  {/* <About/> */}
  </>
 );
}

export default App;
