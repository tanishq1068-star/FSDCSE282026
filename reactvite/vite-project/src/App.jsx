import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {
 

  return (
    <div div style={{border:"10px solid red",height:'500px',width:'300px',backgroundColor:"white",marginTop:"100px"}}>
    
    <h2 style={{color:"green",textAlign:"center"}}>Abes engineering college</h2>
    <h3 style={{color:"blue"}}>roll number: 12345</h3>
    <h4 style={{color:"green"}}>Name: Tanishq</h4>
    <img src="https://www.bing.com/th/id/OIP.fnCmCPk0m964Ynm7U5Y78gAAAA?w=193&h=266&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2" style={{height:100,width:100}}/>
    <h5 style={{color:"green",textAlign:"center"}}>branch: Computer Science and Engineering</h5>
    <h5 style={{color:"green",textAlign:"center"}}>Programming language: JavaScript</h5>
<ICard />
    </div>
  )
}

export default App
