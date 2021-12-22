import Homepage from "./components/homepage/Homepage"
import About from './components/about/About'
import Experience from './components/about/Experience'
import Contact from './components/about/Contact'
import Navbar from "./components/about/Navbar";

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