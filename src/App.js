import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Textform from "./components/text-form";
import React, { useState } from "react";
import Alert from "./components/alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout((alert) => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Disable");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      setBtnText("Enable");
      document.body.style.backgroundColor = "whitesmoke";
      showAlert("Dark Mode Disabled", "success");
    }
  };
  return (
   <>
      <Router>
      <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        ></Navbar>
        <Alert alert={alert} />
        
        
      <Switch>
          <Route exact path="/about">
            <About mode={mode}  />
          </Route>
          <Route exact path="/">
          <Textform
          heading="Enter your text here"
          mode={mode}
          alert={showAlert}
        />
          </Route>
        </Switch>
      </Router>
       
       
         
       
     </>
  );
}

export default App;
