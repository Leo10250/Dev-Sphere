import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer>Footer</Footer>
      </HashRouter>
    </>
  );
}

export default App;
