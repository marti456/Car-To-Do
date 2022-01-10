import React from "react";
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { CssBaseline} from "@mui/material";
import Bar from "./components/Bar";
import Registration from "./components/Registration";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Router>
      <CssBaseline />
        <Bar />
        <Routes>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        
      </Router>
      
    </>

  );
}

export default App;
