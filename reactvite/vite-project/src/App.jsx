import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'

function App() {
 

  return (
   <div>
    
    {/* // <h2 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>Abes engineering college</h2>
    // <h3 style={{color:"blue",fontWeight:"bold"}}>Roll number: 12345</h3>
    // <h4 style={{color:"black",fontWeight:"bold"}}>Name: Tanishq</h4>
    // <h5 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>Course: B.Tech</h5>
    // <img src="https://www.bing.com/th/id/OIP.fnCmCPk0m964Ynm7U5Y78gAAAA?w=193&h=266&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2" style={{height:100,width:100}}/>
    // <h5 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>Branch: Computer Science and Engineering</h5>
    // <h5 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>Programming language: JavaScript</h5>
    // <h6 style={{color:"black",fontWeight:"bold"}}>Section: 28</h6> */}
{/* <h2 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>welcome to react vite</h2> */}
<ICardGallery/>
    </div>
  )
}

export default App
