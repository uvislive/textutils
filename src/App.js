// import './App.css';
import Navbar from "./components/Navbar.js";
import FormText from './components/FormText';
// import Metamask from "./components/Metamask"
import About from './components/About';
import { useState } from 'react';
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { } from "react-router-dom";


function App() {

  // const [alert, setAlert] = useState();

  // const showAlert = (massage, type) => {
  //   setAlert({
  //     massage: massage,
  //     type: type
  //   })
  // }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // showAlert("dark mode has been enabalec", "success")
      document.title = "textUtils - darkmode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils- Lightmode"
      // showAlert("the light mode has been activated ", "success")
    }
  }

  return (
    <>


      <Navbar title="TextUtils" about="About Us" mode={mode} service="Service" toggleMode={toggleMode} community="community" />
      {/* <Alert alert={alert} /> */}
      <FormText heading="Enter Text Here TO Anylize !" />
      {/* <About /> */}
      {/* <Router>

        <Routes>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <FormText heading="enter TExt here to Anylize !" />
          </Route>


        </Routes>


      </Router>
 */}

    </>

  );
}


export default App;

