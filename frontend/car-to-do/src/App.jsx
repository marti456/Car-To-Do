import { useState } from "react";
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { CssBaseline} from "@mui/material";
import Bar from "./components/Bar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Activities from "./components/Activities";


const App = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"))

  const makeLogIn = (newUsename) => {
    setUsername(newUsename)
    localStorage.setItem("username", newUsename)
  }

  const makeLogOut = () => {
    localStorage.removeItem("username")
    window.location.href='/';
  }

  return (
    <>
      <Router>
        <CssBaseline />
        <Bar username={username} makeLogOut={makeLogOut} />
        <Routes>
          <Route path='/registration' element={<Registration makeLogIn={makeLogIn} username={username}/>}/>
          <Route path='/login' element={<Login makeLogIn={makeLogIn} username={username}/>}/>
          <Route path='/' element={<Activities username={username}/>}/>
        </Routes>  
      </Router>
    </>
  );
}

export default App;
