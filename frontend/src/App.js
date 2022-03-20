import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={LandingPage} exact />
        <Route path='/login/' component={LoginScreen} exact />
        <Route path='/register/' component={RegisterScreen} exact />
        <Route path='/notes/' component={MyNotes} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
