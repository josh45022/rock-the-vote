import logo from './logo.svg';
import {useContext} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import AuthForm from "./components/AuthForm.js"
import NavBar from "./components/NavBar.js"
import {UserContext} from "./context/UserContext.js"
function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {token?
            <Redirect to="/profile"/>
            :
            <>
            <Auth />
            </>
          }
        </Route>

        <Route exact path="/profile">
            <h1 className="title">Rock the Vote!</h1>
            <NavBar />
            <Profile />
        </Route>

        <Route exact path="/public">
            <h1 className="title">Rock the Vote!</h1>
            <NavBar />
            <Public />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
