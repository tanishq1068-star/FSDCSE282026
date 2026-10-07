import React from 'react'
import { useState } from 'react'

export default function ChangeBgColor() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [catWidth, setCatWidth] = useState(200);
  const [catHeight, setCatHeight] = useState(250);
  const [catAngle,setCatAngle]=useState(30);
  
  function changeColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
  }

  function enhanceHeight(){
    setCatHeight(catHeight+10);
  }

  function enhanceWidth(){
    setCatWidth(catWidth+10);
  }

  function imageRotate(){
setCatAngle(catAngle+30);
  }

  return (
    <div>
      <h2>Change BuckGround Color</h2>
      
      <div style = {{backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: "2px solid", height: "300px", width: "300px",marginLeft:"460px" }}>
        <img style={{transform:`rotate(${catAngle}deg)`}} height={catHeight} width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcz17CYycPMsSWItYzcm0elQ-eM8n-y82oJkbRvZkKQ&s=10"/>
      </div>

      <button onClick={changeColor} style={{marginLeft:"auto"}}>Change Color</button> 
      <button onClick={enhanceHeight} style={{marginLeft:"auto"}}>enhanceHeight</button> 
      <button onClick={enhanceWidth} style={{marginLeft:"auto"}}>enhanceWidth</button>
      <button onClick={imageRotate}>ImageRotate</button>
      
    </div>
  )
}