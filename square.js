//squareroot of sum
// function squareRootOfSum(a, b) {
//     const sum = a + b;
//     return Math.sqrt(sum);
// }
// console.log(squareRootOfSum(4, 5));
//  const sum = function(a, b){
//     return a+b;
// }
// console.log(sum(4,5));
// const sum = (a, b) => a + b;
// console.log(sum(4, 5));
//
// const sum=(a,b)=>{
//     return Math.sqrt(a+b);
// }
// console.log(sum(4,5));
//IIFE
//(()=>{ console.log("IIFE")})();
//CALLBACK FUNCTION
// function sum(a,b){
//     return a+b;
// }
// function sumwithmsg(clbk,msg){
//     const result=clbk(4,5);
//     console.log(msg, result);
// }

// sumwithmsg(sum, "Sum of 4 and 5 is: ");
// function login(msg,error)
// {
//     if(error){
//         console.log("Error: "+error);
//     }
//     else {
//         console.log("Success: "+msg);
//     }
// }

// function loginhandler( username,password,clbk){
//     // username = "admin";
//     // password = "admin123";
//     if(username === "admin" && password === "admin123"){
//         clbk("Login successful", null);
//     }
//     else{
//         clbk(null, "Invalid username or password");
//     }
// }
// loginhandler("admin", "admin123", login);
// loginhandler("user", "user123", login);
// setTimeout(()=>{
//     console.log ("hello")
//     setTimeout(()=>{
//         console.log("hello2")
//         setTimeout(()=>{
//             console.log("hello3")
//             setTimeout(()=>{
//                 console.log("hello4")
//             }, 1000);
//             setTimeout(()=>{
//                 console.log("hello5")
//             }, 1000);
//             setTimeout(()=>{
//                 console.log("hello6")
//             }, 1000);
//             setTimeout(()=>{
//                 console.log("hello7")
//             }, 1000);
//             setTimeout(()=>{
//                 console.log("hello8")
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
const myPromise = new Promise((resolve, regect) => {
  let username = "tanishq123";
  let password = "1234";
  if (username == "tanishq123" && password == "1234") {
    resolve("sucess");
  } else {
    resolve("invalid");
  }
});
// console.log(myPromise)
// myPromise.then((msg)=>{console.log(msg)})
// .catch(msg=>{console.log(msg)})
// .finally(console.log("resourse closed"))

async function orderreceived() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("one order received");
    }, 1000);
  });
}
async function orderprepared() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order prepared");
    }, 1000);
  });
}
async function orderhandover() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order handed");
    }, 1000);
  });
}
let votp;
async function orderdelivered() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order delivered");
    }, 1000);
  });
}
function otp() {
  votp = Math.floor(1000 + Math.random()* 9000);
  return votp;
}
async function handlelogin() {
  const status = await myPromise;
  console.log(status);
  if (status == "sucess") {
    console.log("hi");
    const orderstatus = await orderreceived();
    console.log(orderstatus);
    const orderstatus2 = await orderprepared();
    console.log(orderstatus2);
    const orderstatus3 = await orderhandover();
    console.log(orderstatus3);
    console.log("generate otp", otp());
    const orderstatus4 = await orderdelivered();
    console.log(orderstatus4);
  }
}
handlelogin();
