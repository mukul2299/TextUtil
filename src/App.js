import { useState } from 'react';
import './App.css';
import Navbar from './componetns/Navbar';
import TextForm from './componetns/TextForm';
import Alert from './componetns/Alert';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './componetns/About';
import NoMatch from './componetns/NoMatch';

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 1500)
  }
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = '#621616';
      document.body.style.color = 'white';
      showAlert(`Dark mode enabled`, "success");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(`Light mode enabled`, "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar pageTitle="TextUtils" aboutTitle="About" theme={theme} toggleTheme={toggleTheme} showAlert={showAlert} />
      <Alert alert={alert} />
      {/* <About/> */}
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm formHeading="Enter Text Below:" theme={theme} showAlert={showAlert} />}/>
          <Route path="/about" element={<About theme={theme} />}/>
          <Route element={<NoMatch/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
