import React from "react";
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { CssBaseline} from "@mui/material";
import Bar from "./components/Bar";
import Registration from "./components/Registration";
import Login from "./components/Login";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        username: '',
        isLogged: false
    }
  }

  makeLogIn = (newUsename) => {
    this.setState({isLogged: true})
    this.setState({username: newUsename})
  }

  makeLogOut = () => {
    this.setState({isLogged: false})
    this.setState({username: ''})
    window.location.href='/';
  }

  render() { 
    return (
      <>
        <Router>
          <CssBaseline />
          <Bar isLogged={this.state.isLogged} username={this.state.username} makeLogOut={this.makeLogOut} />
          <Routes>
            <Route path='/registration' element={<Registration makeLogIn={this.makeLogIn}/>}/>
            <Route path='/login' element={<Login />}/>
          </Routes>  
        </Router>
      </>
    );
  }
}

export default App;
