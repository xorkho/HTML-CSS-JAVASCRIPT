// ----------------------------PRACTICING JAVASCRIPT---------------
// ----------------------VARIABLE AND DATA TYPES-----------------------

// x=null;
// y=undefined;
// console.log(x)
// console.log(y)
// const Console="umer";
// // fullname="umer";
// console.log(Console)
// {
//     let a=5
//     console.log(a)  
// }
// {
//     let a=Symbol(4324)
//     console.log(a)
//     console.log(typeof a)

// }

// console.log()

// const student={
//     name : "umer",
//     age : 24 ,
//     marks : 100,
//     cgpa : 5.7,
//     ispass : true
// };
// student.age-=1;
// student.name="ahmed";
// // console.log(student)
// // console.log(typeof student)
// // console.log(student["marks"])  
// console.log(student.age);
// console.log(student.name);

// const product={
//     name : "pen",
//     price : 100,
//     isdeal : true,
//     offer : 5 ,
//     rating: 4
// };
// console.log(product)

// const profile={
//     name : "umer",
//     isfollow : false,
//     followers : 10000,
//     following : 700
// }
// console.log(profile);
// console.log(typeof profile);

// ----------------------------OPERATORS IN JS-----------------------
// let a=5;
// // let b=3;
// // let c=a+b;
// // console.log("a + b =",a+b)
// // console.log("a - b =",a-b)
// // console.log("a * b =",a*b)
// // console.log("a / b =",a/b)
// // console.log("a % b =",a%b) //b will be divisior
// // console.log("a ** b =",a**b)
// console.log(++a) //pre increment

// // console.log(a--) //post decrement
// // let a=5;
// // a++
// // console.log(a)

// --------------------ASSIGNEMTN OPERATOR---------------

// let a=5;
// let b=2;
// // console.log(a+=1);
// // console.log(a-=1);
// // console.log(a*=1);
// // console.log(a/=b);
// // console.log(a%=b);
// console.log(a**=b);


// -----------------------COMPARISON OPERATOR---------------------
// let a=5;
// let b="5";
// console.log("a==b",a==b) //true
// console.log("a===b",a===b) //false

// -------------------------------LOGICAL OPERATOR----------------------------------------

// let a=3;
// let b=5;
// let cond1=a==b;
// let cond2=a<b;
// // console.log(cond1 || cond2); //LOGICAL OR
// // console.log(cond1 && cond2); //LOGICAL AND
// console.log(!(cond2));

// ---------------------CONDITIONAL STATEMENT-------------------------
// let age=12;
// if (age < 18) {
//     console.log("YOU CANT VOTE")
// // console.log("YOU CAN VOTE")
// }

// let mode="orangte";
// let color;
// if (mode==="dark"){
//     color="black"
// }
// else if (mode==="blue"){
//     color='blue'
// }
// else if (mode==="pink"){
//     color='pink'
// }
// else {
//     color="white"
// }
// console.log(color)

//CHECKING WHETER THE NUMBER IS ODD OR EVEN
// let num=5;
// if (num%2===0){
//     console.log("Its an Even number")
// }
// else{
//     console.log("Its an odd number")
// }

// -----------------------------TERNARY OPERATORS---------------------------
// let age=2;
// let res=age>18? "adult":"not adult";  //IF TRUE THEN FIRST EXECUTE OTHERWISE SECOND WILL
// console.log(res)  //COMPACT IF ELSE

// ------------------------PRACTICE PROBLEM--------------------
// const prompt = require("prompt-sync")();
// let n =prompt("Enter Number ");
// if (n%5===0) {
//     console.log(n,"is the multiple of 5");
// }
// else{
//     console.log(n,"is not the multiple of 5");
// }

// let score=900;
// if (80<=score && score<=100){
//     console.log("A GRADE")
// }
// else if (70<=score && score<=79){
//     console.log("B GRADE")
// }
// else if (60<=score && score<=69){
//     console.log("C GRADE")
// }
// else if (50<=score && score<=59){
//     console.log("D GRADE")
// }
// else {
//     console.log("FAIL")
// }

// ---------------------LOOPS IN JS--------------------------------------
//SUM TO N NATURAL NUMBERS USING FOR LOOP:
// const prompt = require("prompt-sync")();
// let n =prompt("Enter Number ");
// let total=0;
// for (let i=1;i<=n;i++){
//     total+=i;
// }
// console.log("Total score is ",total)

// --------------------WHILE LOOOP-----------------

// let i =1;
// while(i<=5){
//     console.log("i=",i);
//     i++ //i+=1      //FIRST CONDITION IF CONDITION IS TRUE THEN IT WILL WORK
// }

// -------------DO WHILE LOOP-------------------------

// let i =10;
// do{
//     console.log("i=",i);
//     i--;
// }while (i>-1);   //FIRST STATEMENT THEN CHECK THE CONDITION

// -----------------------------------FOR OFF LOOOP---------------------
//THIS LOOP IS USED TO ITERATE OVER STRINGS AND ARRAYS
// let length=0;
// let str="JAVASCRIPT";
// for (let i of str){
//     console.log(i);
//     length++;
// }
// console.log("Our strings contains",length,"letters")

// -------------------------------FOR IN LOOP--------------------------------
//ITERATES OVER KEYS
// let student={
//     name : 'Umer',
//     age : 19,
//     cgpa : 3.7,
//     ispass : true
// };
// for (let i in student){
//     console.log(i,":",student[i]);
// }

// let n=10;
// for (let i=0; i<=n ;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

// GUESSING THE NUMBER GAME
// const prompt = require("prompt-sync")();
// let number=10;
// let n =(prompt("Enter Number: "));
// while (n!=number){
//     n =(prompt("you have entered wrong plz Enter Number: "));
// }
// console.log(`You have entered the right value which is ${n}....`)

// ---------------------STRING----------------------------------
// --------------------STRING METHOD OR FUNCTION-----------------------
// let t=" umer                "
// console.log(t.trim()) //USED TO TRIM WHITE SPACES


// let str="abcde";
// console.log(str.slice());  //RETURN THE SLICE OF A STRING

// let str1="Muhammad";
// let str2="Umer";
// let result=str1.replace('M',123);
// console.log(result);

// -------------------------------------------------------------------------------------------

//TAKE A FULL NAME INPUT FROM USER AND CREATE THE USERNAME STARTING WITH @ AND ENDING WITH THE LENGTH OF FULL NAME

// const prompt = require("prompt-sync")();
// let fullname=prompt("ENTER YOUR FULL NAME; ")
// // let len=fullname.length
// let username="@"+fullname+fullname.length
// console.log(`your user name is ${username}`)


// --------------------ARRAYS IN JS----------------------------
// let marks=[32,"abcd",56,75,67];
// // console.log(marks.length);
// // console.log(marks);
// // console.log(typeof marks);
// // marks[2]=234
// // console.log(marks[9]);

// for (let idx=0; idx<marks.length;idx++){
//     console.log(marks[idx]);
// }


//FOR OFF LOOP TO PRINT ELEMENTS OF ARRAYS
// let marks=[32,39,56,75,67];
// for (let mark of marks){
//     console.log(mark);
// }

// let cities=["KARACHI","LAHORE","ISLAMABAD","QUETTA"]
// // for (let i=0 ; i<cities.length ;i++){
//     // console.log(cities[i]);
// // }

// for (city of cities){  //FOR OFF LOOP DIRECTLY ITERATES OVER ELEMENTS
//     console.log(city.toLowerCase())
// }

// for (city in cities){     //CITY ACQUIRE INDEX IN THAT CASE
//     console.log(cities[city])
// }

//------------------------DO THE AVERAGE OF GIVEN ARRAY---------------------

// let marks=[32,39,56,75,67];
// let total=0;
// for (mark of marks){
//     total+=mark
// }
// console.log(`The total average of given marks is ${total/marks.length}`)

// -----------------APPLYING DISC ON THE GIVEN ARRAY OF 10%--------------------
// let prices=[250,645,300,900,50]
// let upd;
// for (price in prices){
//     let upd=prices[price]*0.1
//     prices[price]-=upd
// }
// console.log(prices)

// -------------------ARRAYS METHODS IN JS-----------------
// let l=[2,3,54,5,6,7]
// let x=[45,67,45,8,7,556,63,87]  //CONVERT ARRAY TO STRING
// console.log(x)
// console.log(l.concat(x))
// x.shift(45)   //DELETE FROM THE START 
// x.unshift(4)  //ADD IN THE START  
// console.log(x)
// console.log(x.slice(2,4))  //SLICE THE ARRAY
// console.log(x.slice(4))  //SLICE THE ARRAY

// x.splice(2,4,34,34,34,34) //(startingidx,elemts del,replacemt)
// console.log(x)

// l.splice(2,0,55)  // ADD THE ELEMT ON THE GIVEN INDEX
// console.log(l)

// l.splice(2,11,55)  // REPLACE THE ELEMT ON THE GIVEN INDEX
// console.log(l)

// l.splice(4)   //IT WILL DEL ALL THE ELEMENT AFTR THE 4 IDX
// console.log(l);


// let companies=["bloomerg","microsoft","uber","google","IBM","Netflix"]
// companies.shift()
// companies.splice(1,1,"Ola")
// companies.push("Amazon")
// console.log(companies)

// ---------------------------FUNCTION IN JS-----------------------------------------------

// function myfucntion(n1,n2){
//     return n1+n2

// }
// console.log(myfucntion(1,"efedsf"));

// ------------------------ARROW FUNCTIONN--------------------
//THEY ARE USED IN MODERN JS
// const myfucntion=(n1,n2)=>{
//     return n1+n2;
// }
// myfucntion(3,4);

// const mul=(N1,N2)=>{
//     return N1*N2;
// }
// console.log(mul(2,5));

// -----------------------PRACTICE-----------------------
// FUNCTION TAKE STRING AS AN ARGUMENT AND RETURN THE NO OF VOWELS IN IT

// function vowels_counter(str){
//     let count=0
//     for (let alpha of str.toLowerCase()){
//         if (alpha == "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u") {
//             count++;
//         }
//     }
//     return `total vowels is ${count}`
// }
// console.log(vowels_counter("UMER123"))

// vowels_counter=(str)=>{
//     let count=0
//     for (let alpha of str.toLowerCase()){
//         if (alpha == "a" || alpha == "e" || alpha == "i" || alpha == "o" || alpha == "u") {
//             count++;
//         }
//     }
//     return `total vowels is ${count}`
// }
// console.log(vowels_counter("PAKISTAN ZINDABAD"))


//FUNCTION CAN BE PASSED TO ANOTHER FUNCTION AS AN ARGUMENT

// function hello(){
//     console.log("hello");
// }

// function greet(fn){
//     fn()
//     console.log("GOOD MORNING")
// }

// let arr=[2,56,44,3,2,43];
// arr.forEach(function printval (val){     //PASS ARGUMENT AS A NORMAL FUNCTION IN FOR EACH
//     console.log(val);
// })

// let arr=["ahmed","owais","yousuf"];    //FOR EACH PASS ARG AS AN ARROW FUNCTION
// arr.forEach((val)=>{
//     console.log(val.toUpperCase())   //THEY AEE CALLED HIGHER ORDER FUNC
// })

//GIVING THE SQUARE BY USING FOR EACH LOOP

// let arr=[1,2,3,4,5,6];
// arr.forEach((val)=>{
//     console.log(val*val)
// })


// let arr=[1,2,3,4,5,6];

// let calcsquare=(num)=>{
//     console.log(num*num)
// }

// arr.forEach(calcsquare); 


// ----------------------------MAP METHOD-----------------------

// let nums=[2,4,5,6]
// let newarr=nums.map((val)=>{   //MAP ALSO DO OPERANDS ON THE SINGLE ELEMNT OF NUMS
//     return val*val;
// })
// console.log(newarr)  //MAP IS USED TO CREATE A NEW ARRAY


// --------------------FILTER METHOD------------------------------

// let nums=[2,4,5,6,3,9]    //FILTER THE EVEN NUMBER
// let EvenArr=nums.filter((val)=>{  
//     return val%2==0;
// })
// console.log(EvenArr)

// -------------------REDUCED METHOD-----------------------
// REDUCE IS USED TO CONSOLE THE SINGLE OUTPUT LIKE LARGEST SMALLEST MAXIMUM MINIMUM

// arr=[1,2,3,4]
// const output=arr.reduce((prev,current)=>{
//     return prev+current
// })
// console.log(output)    //SUM OF ARRAY USING REDUCE METHOD

// arr=[1,2,300,4.3,67,89]
// const output=arr.reduce((prev,current)=>{
//     return prev>current ? prev:current;   //TERNARY CONDITION
// })
// console.log(output) //PRINT THE MAXIMUM NUMBER IN ARRAY USING REDUCE

// ------------------------------PRACTICE QUESTIONSSS--------------------------
// FILTER OUT WHOSE NUMBER IS 90+

// let arr=[56,93,34,98,89,99];
// const output=arr.filter((num)=>{
//     return num>=90;
// })
// console.log(output)

//ASK USER TO INPUT N CREATE 1 TO N NUMBER OF ARRAY THEN CALCULATE SUM & PRODUCT OF ALL NUMBERS
// const prompt = require("prompt-sync")();
// let arr=[]
// let n=prompt("Enter N:");
// for (let i=1; i<=n; i++){
//     arr[i-1]=i
// };
// console.log(arr)

// const sum_of_arr =arr.reduce((prev,curr)=>{    //CALCULATE SUM
//     return prev+curr
// })
// console.log(sum_of_arr);

// const prod_of_arr =arr.reduce((prev,curr)=>{    //CALCULATE PRODUCT
//     return prev*curr
// })
// console.log(prod_of_arr);
prompt=prompt("")