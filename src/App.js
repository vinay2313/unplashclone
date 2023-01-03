import {BrowserRouter as Router , Routes , Route, BrowserRouter} from 'react-router-dom'

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GlobalProvider } from './context/GlobalContext';
import About from "./pages/About";
import Home from "./pages/Home";
import SinglePhoto from "./pages/SinglePhoto";

function App() {
  
 


  return (
   <GlobalProvider>
    <Router>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/single-photo/:id' element={<SinglePhoto/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
    <Footer/>
   </Router>
   </GlobalProvider>
  );
}

export default App;
