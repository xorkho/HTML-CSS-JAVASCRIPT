// console.log("Hello world");
// alert("HI I AM UMER")
// console.dir(document.body)
// console.dir(document.body.childNodes[1]);
// document.body.childNodes[3].innerText="umerbhai";
// console.log(document.body)
// let x=document.getElementById("heading");
// console.dir(x)
// let elements=document.getElementsByClassName("headng")
// console.dir(elements)
// console.log(elements)

// let paragrph=document.getElementsByTagName("p")
// console.dir(paragrph)

// let first_element=document.querySelector("p");  //RETURN FIRST ELEMENT
// console.dir(first_element);


// let All_elements=document.querySelectorAll("p");  //RETURN All ELEMENTS AS A NODELIST
// console.dir(All_elements);


// let first_element=document.querySelector(".heading");  //RETURN FIRST ELEMENT
// console.dir(first_element);

// let All_elements=document.querySelectorAll(".heading");  //RETURN All ELEMENTS AS A NODELIST
// console.dir(All_elements);

// let first_element=document.querySelector("[id='101']");  //RETURN FIRST ELEMENT
// console.dir(first_element);  
// let div=document.querySelector('div');
// console.dir(div)

// let heading=document.querySelector("h1")
// console.dir(heading)

// let h2=document.querySelector("h2");
// // console.dir(h2.innerText)
// h2.innerText=h2.innerText+" "+"from apna college"

// let div=document.querySelectorAll(".box")
// // div[0].innerText="Thisssss is my box1"
// // div[1].innerText="This is my box2"
// // div[2].innerText="This is my box3"
// let idx=1;
// for (i of div){
//     i.innerText=`This is my box${idx}`
//     idx++
// };

// ----------------GET ATRRIBUTE METHOD-----------------------

// let div= document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id")
// console.log(id)
// let para= document.querySelector("p");
// // console.log(para.getAttribute("class"));
// let clas=para.getAttribute("class");
// console.log(clas);


// --------------------------------SET ATTRIBUTE---------------------------------------
// let paragraph=document.querySelector("p");
// paragraph.setAttribute("class","newclass")

// let div=document.querySelector("div");
// div.setAttribute("id","newbox")
// let div =document.querySelector("div")
// // console.log(div.style)
// div.style.backgroundColor="purple"
// div.style.color="yellow"
// div.style.width="120px"
// div.innerText="Hello World"
// // div.style.visibility="hidden"

// let newbtn=document.createElement("button")
// newbtn.innerText="Click Me"
// // console.log(newbtn)
// let div=document.querySelector("p")
// div.append(newbtn)  //APPEND BUTTON AT THE END OF DIV (INSIDE)

// div.prepend(newbtn)  //APPEND BUTTON AT THE START OF DIV (INSIDE)

// div.before(newbtn)  //APPEND BUTTON AT THE START OF DIV (OUTSIDE)

// div.after(newbtn)  //APPEND BUTTON AT THE END OF DIV (OUTSIDE)

// let heading=document.createElement("h1")
// heading.innerHTML="<h1> Hi i am learning JS </h1>"
// document.querySelector("body").prepend(heading)   //ADD HEADING IN THE START OF BODY 

// document.querySelector("p").remove()  //DELETE THE SELECTED PARAGRAPH
// document.querySelector("h1").remove()  //DELETE THE SELECTED H1 HEADING


// let newbtn=document.createElement("button")
// newbtn.innerText="click me"
// newbtn.style.color="white"
// newbtn.style.backgroundColor="red"

// document.querySelector("body").prepend(newbtn)

// let para=document.querySelector("p")

// const paragraph = document.removeChild(document.createElement("bpdy"));
// You can append more elements to the paragraph later

// -----------------EVENT IN JS----------------------
// EVENT IS OF VARIOUS TYPE

// let btn1=document.querySelector("#button1")
// btn1.onclick=(e)=>{
//     console.log(e)
//     console.log(e.type)
// }
// let div=document.querySelector("div")
// div.onmouseover=(e)=>{
//     console.log(e)
//     console.log(e.type)
//     // console.log(e.target)
//     console.log(e.clientX,e.clientY)
// }

// -------------------EVENT LISTENER--------------------

// button1.addEventListener("click",()=>{
//     console.log("button one was clicked")
// })
 
// const hand2=("click",()=>{
//     console.log("button one was clicked handler 2")
// })

// button1.addEventListener("click",hand2)

// button1.removeEventListener("click",hand2)


// ------------------------------PRACTICE QUESTIONS-----------------------------------------------

//CREATE A TOGGLE BUTTON TO SWITCH THE MODE BETWEEN DARK AND LIGHT


// let btn=document.querySelector("#mode")
// let current_mode="light";
// let body=document.querySelector("body")
// const hand1=()=>{
//     // console.log("You are trying to change mode")
//     if (current_mode==="light"){
//         current_mode="dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }
//     else{
//         current_mode="light"
//         body.classList.add("light")
//         body.classList.remove("dark")

//     }
//     console.log(current_mode)
// }
// btn.addEventListener("click",hand1)
 

// -------------------------OBJECT IN JS--------------------------------
// const student={
//     fullname : "Umer",
//     Marks : 102,
//     print_marks: function() {  //this is used to pass object(self)
//         console.log(`Marks = ${this.Marks}`)  //NORMAL FUNCTIONS/METHODS
//     }
// }

// -----------------Creating prototype------------------------------
// const employee={
//     calculate_tax() {
//         console.log("Tax is 10s")
//     }
// }
// const ahmed={
//     salary : 50000,
//     caculate_tax() {
//         console.log("Tax is 20s")
//     }
// }

// ahmed.__proto__=employee  //AHMED CAN ACESS NOW THE METHODS OF EMPLOYEE


// ------------------------Classes in JS------------------------------

// class Toyata{
//     constructor(){
//         console.log("NEW OBJ CREATED")
//     }
//     start(){
//         console.log("Start")
//     }
//     stop(){
//         console.log("Stop")
//     }
//     setbrand(brand){
//         this.brand=brand;
//     }
// };
// let obj1=new Toyata()
// obj1.start()
// obj1.stop()
// obj1.setbrand("Fortuner")
// console.log(obj1.brand)
// let obj2=new Toyata()


// ----------------------INHERITANCE IN JS---------------------

// class parent{
//     name(){
//         console.log("inside parent")
//     }
// }

// class child extends parent{
//     // name(){
//     //     console.log("inside child")
//     // }
    
// }

// let c=new child()
// c.name()

// ----------------------SUPER KEYWORD----------------------
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     intro() {
//         console.log(`i am ${this.name} & i am ${this.age} years old`)  
//     }
// }

// class engineer extends person{
//     constructor(name,age,branch){
//         super(name,age);
//         this.branch=branch;
//     }
//     work(){
//         super.intro()
//         console.log(`i am ${this.branch} my name is ${this.name} & i am ${this.age} years old`)
//     }
// }

// e1=new engineer("umer",13,"software engineer")
// e1.work()
// // e1.intro()

// -----------------PRACTICE QUESTIONS-----------------------------

class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`NAME:${this.name}\nMAIL: ${this.email}`)
    }
}

// p1=new user("Umer","haseeb32087@gmail.com")
// p1.viewData()

// class admin extends user{
//     constructor(newname,newmail){
//         super();
//         this.newname=newname
//         this.newmail=newmail
//     }

//     editData(){
//         super.name=this.newname
//         super.mail=this.newmail
//     }
// }

// p1=new user("Umer","haseeb32087@gmail.com")
// p1.viewData()

// d1=new admin("ahmed","ahmed@gmail.com")
// d1.editData()

// console.log(d1.name)

// -------------------ERROR HANDLING--------------------------

// try{
//     a=5;
//     b=8;
//     console.log(a+b);
//     console.log(a+c);
//     console.log(a+b);
//     console.log(a+b);
//     console.log(a+b);

// }
// catch(err){
//     console.log(err);
// }


// -----------------ASCHRONOUS IN JS---------------------
// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello");
// }, 2000);
// console.log("three")

// ---------------------------------CALLBACK---------------------------------------
// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// // calculator(2,3,sum);  //SUM FUNCTION AS AN ARGUMENT

// // ------------------------------OR------------------------------

// calculator(1,2,(a,b)=>{
//     console.log(a+b)
// })  //THIS STATEMENT CALL THE CALCULATOR FUNCTION BUT THIS TIME WE CREATED AN ARROW FUNCTION


// -----------------------------------CALL BACK HELL-------------------------------
//USING CALL BACK TO FETCH DATA AFTER 2 SECONDS ONE BY ONE

// function getData(getid,getNextData){
//     setTimeout(()=>{
//         console.log("DATA",getid)
//         if (getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{
//     console.log("fetchind data 2...............")
//     getData(2,()=>{
//         console.log("fetchind data 3...............")
//         getData(3)
//     })
// })


// -------------------------PROMISES----------------------------------

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a Promise")
//     reject("OOps! we cant delievered the order")
//     resolve("Sucessfully delievered")
    // reject("OOps! we cant delievered the order")
// })


// function getData(getid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA",getid)
//             // resolve("sucess")
//             reject("OOps! we cant delievered the order")

//         },10000)
//     })
// }
// let promise=getData(123)

// ------------------------.then() & .catch()--------------------------------------

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I AM A PROMISE")
//         // reject("error")
//         resolve("SUCESS")
//     })
// }
// let promise=getPromise()
// promise.then((res)=>{  //res is the msg we pass in the resolve
//     console.log("promise is full filled",res)
// })

// promise.catch((err)=>{   //err is the msg we pass in the reject
//     console.log("OOPS! there is an issue",err)
// })


// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("DATA 1 SHOWNN.....")
//             resolve("Successfully fetched")
//         }, 5000);
//     })
// }

// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("DATA 2 SHOWNN.....")
//             resolve("Successfully fetched")
//         }, 5000);
//     })
// }

//PROMISE CHANING
// console.log("fetching data 1....")
// asyncfunc1().then((res)=>{
//     console.log(res)
//     console.log("fetching data 2....")   //ONE BY ONE FETCHING OF DATA
//     asyncfunc2().then((res)=>{
//     console.log(res)     //CREATING NEW PROMISE
// })
// })


// function getData(getid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA",getid)
//             resolve("Sucessfully Fetched")
//         },2000)
//     })
//     }

// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then((res)=>{
//         console.log(res)
//     })

// })

//ANOTHER SIMPLER WAT OF DOING IT

// getData(1).then((res)=>{
//     return getData(2)})
//     .then((res)=>{
//         return getData(3)})
//     .then((res)=>{
//             return getData(4)})
//     .then((res)=>{
//         console.log(res)
//             })


// ----------------------------ASYNS AWAIT--------------------------------------------

// async function hello(name) {
//     console.log(`Hi ${name}`)    
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("WEATHER DATA")
//             resolve(200)
//         },3000)
//     })
// }
// async function weatherForecast(){
//     await api();  //1ST CALL
//     await api();  //2ND CALL
//     await api();   //3RD CALL

// }

// function getData(getid){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("DATA",getid)
//                 resolve("Sucessfully Fetched")
//             },2000)
//         })
//         }
    
// async function fetchoutput() {
//     console.log("getting data 1.........")
//     await getData(1)
//     console.log("getting data 2.........")
//     await getData(2)
//     console.log("getting data 3.........")
//     await getData(3)
// }


// --------------------FETCHING API----------------------------------------------
const URL="https://cat-fact.herokuapp.com/facts"
let promise=fetch(URL)
console.log(promise)
const factpara=document.querySelector("#fact")
const btn=document.querySelector("#button")

const get_fact =async()=>{
    console.log("getting data........")
    let respone =await fetch(URL)
    console.log(respone)  //RETURN IN JSON FORMAT
    let data= await respone.json() //this mehtod convert in java obj
    factpara.innerText=data[4].text
}
btn.addEventListener("click",get_fact);