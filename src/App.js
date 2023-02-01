import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import { Home, Contact } from "./pages";
// components
import { Header, Footer } from "./components"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            {/* <Route path="/" element={ <Home/> }/> */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
