 const root=document.getElementById('root')
console.log(root)
const btn = document.getElementById('btn');
console.log(btn);
 const h1=document.createElement('h1');
// const h3=document.createElement('h3');
// const img=document.createElement('img');
const loader=document.createElement('h1');

 async function showData(){
    try{
        loader.innerHTML = "<h3>Loading Data....</h3>";
        root.appendChild(loader);
         const serverData= await fetch("https://fakestoreapi.com/products")
   
  const jsonData= await serverData.json();
  let table = `<table border='2px'>
 ${
    jsonData.map((ele) =>(
     `<tr> 
    <td><img src=${ele.image} height=200 width=200></img></td>
<td>${ele.id}</td>
<td>${ele.title}</td>
<td>${ele.price}</td>
    </tr>`
 ))
}
  </table>`
  h1.innerHTML=table;

//   console.log(jsonData);
//   h1.innerHTML = `<h3 style=color: red>${jsonData[0].title}</h3>`;

// h2.innerHTML='welcome to DOM manipulation';
// h3.innerHTML='abes engineering college';
// root.appendChild(h2)
// root.appendChild(h3)
// img.src =
//   "https://www.bing.com/th/id/OIP.fnCmCPk0m964Ynm7U5Y78gAAAA?w=193&h=266&c=8&rs=1&qlt=90&o=6&dpr=2&pid=ImgAns&rm=2";
// img.setAttribute('height',200);
// img.setAttribute('width',200);
// root.appendChild(img);
// alert("hi");
root.appendChild(h1);
    }
    catch(e){
        console.log(e)

    }
    finally{
root.removeChild(loader);
    }

}
btn.addEventListener('click',showData);