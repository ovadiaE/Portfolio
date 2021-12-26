import Homepage from "./components/Homepage"
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from "./components/Navbar";

const App = () => {
    return (
    <>
        <Navbar/>
        <Homepage/>
        <About/>
        <Experience/> 
        <Contact/>
    
    </>
    )
}

export default App