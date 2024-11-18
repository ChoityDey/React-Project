import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/custom.css'
import './assets/css/bootstrap.min.css'
import './assets/css/responsive.css'
import  Banner from './components/Banner/Banner'
import Analysis from './components/Analysis/Analysis'
import Services from './components/Services/Services'
import Services2 from './components/Services/Services2'
import Sidemenu from './components/Sidemenu/Sidemenu'
// import TopNavigation from './components/TopNavigation/TopNavigation'
import About from './components/About/About'
import Sponsor from './components/Sponsor/Sponsor'
import Counter from './components/Counter/Counter'
import Contactnew from './components/Contactnew/Contactnew'
import Footer from './components/Footer/Footer'

// import Contact from './components/Contact/Contact'











function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TopNavigation /> */}
    <Sidemenu />
    
    <Banner />
    <Analysis />
    <Services />
    {/* <Services2 /> */}
    <About />
    <Sponsor />
    <Counter />
    <Contactnew />
    <Footer />
   

    {/* <Contact /> */}
   


    



    




    </>
  )
}

export default App
