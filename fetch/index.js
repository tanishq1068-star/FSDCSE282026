const root=document.getElementById('container');
console.log(root)
const button=document.getElementById('btn');
console.log(button)
async function getData(){
   // alert("hii")
   const serverData= await fetch("https://fakestoreapi.com/products")
   
  const jsonData= await serverData.json();
//   console.log(jsonData[0].title);
root.innerHTML=`<h2 style=color: red>${jsonData[0].title}</h2>`
}
button.addEventListener('click',getData);