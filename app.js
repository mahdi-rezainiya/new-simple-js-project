// console.log(4 + 4);
// console.log(4 - 4);
// console.log(6 * 2);
// console.log(5 ** 2);
// console.log(5 / 2);
// console.log(5 % 2);
// console.log(4 / "ali");
// let isTrue= "mahdi";

// let text1 = "mahdi";
// let text2 = "ali";
// console.log(`${text1} ${text2}`);
// let x = "      ALi    nouri     ";
// console.log(x.trim());
// console.log(x.toUpperCase());

// let fname = "mahdi rezainiya";

// let result = fname.indexOf("");
// let result = fname.slice(6 , 8);
// let result = fname.replaceAll("i" , "o");
// let result = fname.replace("m" , "n") ;
// let result = fname.repeat(4);

// let result = Math.random() ; 
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.E);
// console.log(Math.abs(-52));
// console.log(Math.sqrt(9));
// console.log(Math.pow(2 , 4));
// console.log(Math.round(2.42));
// console.log(Math.floor(2.8));
// console.log(Math.ceil(2.2));

// console.log(4 !== "4");
// alert("hello world")
// prompt("add a number :")


// console.log(result);
//condition

// document.write("hello world")

// let x = parseInt("1478");
// console.log(x);



// let age = 3 ;
// if (age >= 8){
//     console.log("yes");
// } 
// else if (age >=4){
//     console.log("no");
// }
// else{
//     console.log("yes");
// }

// let day = "monday";

// switch(day){
//     case 'saturday':
//         console.log("sa");
//         break;
//     case 'sunday':
//         console.log("su");
//         break;
//     case 'monday':
//         console.log("mo");
//         break;
//     default :
//         console.log("nooooooooo");
// }

// let arr1 = [1 , 3 , 11 , 57 , 8 , 9 , 87];
// let arr2 = [5 , 84 , 54 , 23 , 64 , 91];
// let concating = arr1.concat(arr2)
// console.log(arr1.length);
// console.log(arr1[1]);
// arr1.push(99);
// arr1.unshift(444);
// arr1.pop();
// arr1.shift();

// console.log(concating);
// console.log(arr1.includes(51));
// console.log(arr1.indexOf(57));
// console.log(arr1.reverse());
// console.log(arr1.slice(0 , 2));
// console.log(arr1.splice(2 , 1 , 56));
// console.log(arr1);

// console.log(arr1.sort((a,b) => {return a - b});

// let a = [1 , 2 , 3 , 4];
// let b = [1 , 2 , 3 , 4];

// console.log(a === b);

// function greet (a , b){
//     return a * b;
// }
// console.log(greet(4 , 5));


// for(let i = 0 ; i < arr1.length ; i++){
//     console.log(arr1[i]);
// }

// for(let i = 0 ; i<3 ; i++){
//     for(let j = 0 ; j < 3 ; j++){
//         console.log(`i : ${i} , j : ${j}`);
//     }
// }

// let i =0 ;
// while(i < 5){
//     console.log(i);
//     i++
// }

// for(let arr of arr1){
//     console.log(arr);
// }

// for(let arr in arr1){
//     console.log(arr1[arr]);
// }

// for(let i = 0 ; i < 20 ; i++){
//     if(i === 8){
//         break;
//     }
//     console.log(i);
// }

// arr1.forEach((i)=>{
//     console.log(i * 2);
// })

// let a = arr1.map((item) => {
//     return item
// })
// console.log(a);


// let filterArr1 = arr1.filter((item) => {
//     return item % 2 === 0 ;
// })
// console.log(filterArr1);


// let findArr1 = arr1.find((item) => {
//     return item > 10
// })
// console.log(findArr1);


// let reduceArr1 = arr1.reduce((sum , cValue) => {
//     return sum + cValue;
// })
// console.log(reduceArr1);


// let someArr1 = arr1.some((item) => {
//     return item % 2 === 0 ;
// }) ;

// let someArr1 = arr1.every((item) => {
//     return item % 2 === 0 ;
// }) ;

// console.log(someArr1);

// function sayHello (){
//     console.log("hello world! hello mahdi !");
// }

// setInterval(sayHello , 2000)

// console.log(Math.max(...arr1));

// let age = 20 ;
// let message = (age >= 10) ? "great" : "no";
// console.log(message);

// global scope
// function scope
// block scope

// let obj1 = {
//     fname : "mahdi",
//     lname : "rezainiya",
//     age : 20 ,
//     country : "iran",
//     city : "tabriz"
// }

// obj1.sayHello()

// console.log(obj1.fname);
// console.log(obj1["fname"]);

// let {age} = obj1;
// console.log(age);

// let arrayOne = ["mahdi" , "ali" , "maryam" , "nima" , "kosar" , "leila"] ;

// let {fname , age , country , ...rest} = obj1;
// console.log(fname , age , country);
// console.log(rest);

// let [one , two , three , ...restone] = arrayOne ;

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(restone);


// delete obj1.lname;

// let obj2 = {...obj1 , language : "turkish" , nationality : "persian"};
// let arrayTwo = [...arrayOne , "micheal" , "john"];
// console.log(arrayTwo);
// console.log(obj2);

// const neme = "ali";
// console.log(neme.split("").reverse().join(""));

// // ایجاد یک Array از اعداد
// const numbers = [1, 2, 3, 4, 5];

// // حلقه For Loop برای چاپ اعداد Array
// for (let i = 0; i < numbers.length; i++) {
//     // TODO: 
//     console.log(numbers[i]);
// }

// const userInput = prompt("Please enter a positive integer:");

// const number = parseInt(userInput);

// let currentNumber = 0;

// while (currentNumber < number) {
//     // TODO 
//     if(currentNumber <= number){
//         console.log(currentNumber);
//     }
//     currentNumber++;
// }


// const strings = ["apple", "banana", "cherry"];

// for (let str of strings) {
//     // TODO     
//     for(let char of str){
//         console.log(char);
//     }
// }

// let fname = "mahdi";
// console.log(name.trim());
// console.log(fname.slice(0 , 2));
// let num = "2442";
// let pars = parseInt(num);
// console.log(typeof pars);
// let numbers = [4 , 7 , 8  , 47 , 87 , 89 , 105 , 35];
// console.log(numbers.reverse());
// numbers.forEach((item) => {
//     console.log(item);
// })
// let numExport = numbers.map((item) => {
//     // return `${item + "2"}`;
//     return typeof item;
// })
// console.log(numExport);

// let filterNum = numbers.filter((item) => {
//     return item === 4 ;
// })

// console.log(filterNum);

// let findNum = numbers.find((item) => {
//     return item > 20;
// })

// console.log(findNum);

// let reduceNum = numbers.reduce((sum , cValue) => {
//     return sum += cValue;
// })

// let someNum = numbers.every((item) => {
//     return item > 3  ;
// })

// console.log(someNum);
// console.log(reduceNum);

// setInterval(() => {
//     console.log("hello world");
// }, 2000);

// console.log(Math.min(...numbers));;

// const [first , second , ...rest] = numbers ;
// console.log(first);
// console.log(second);
// console.log(rest);

// let obj1 = {
//     fname : "mahdi",
//     lname : "rezainiya",
//     age : 22 ,
//     country : "Iran",
//     city : "tabriz"
// }
// let obj2 = {
//     fname : "ali",
//     lname : "fateh",
//     age : 23 ,
//     country : "Iran",
//     city : "shiraz"
// }


// const {age , fname , ...rest} = obj1;

// console.log(age , fname , rest);

// let obj = {...obj1 , ...obj2};
// console.log(obj);

// const numbers = [1 , 2 , 3 , 4 , 5];

// for(let i = 0 ; i < numbers.length ; i++){
//     console.log(numbers[i]);
// }

// const userInput = prompt("please enter a positive integer :");
// const number = parseInt(userInput);
// let currentNumber = 0 ;
// while(currentNumber < number){
//     if(currentNumber % 2 === 0){
//         console.log(currentNumber);
//     }
//     currentNumber ++ ;
// }

// const strings = ["apple" , "orange" , "banana" , "cherry"];
// for(let string of strings){
//     for(let str of string){
//         console.log(str);
//     }
// }

// const numbers = [1 , 3 , 5 , 7 , 9 , 11]; 
// for(let number of numbers){
//     console.log(number);
//     if(number > 5){
//         break;
//     }
// }

// const numbers = [1 , 2 , 3 , 4 , 5];
// const powerTwo = (num) => {return num**2};
// for(let number of numbers){
//     console.log(powerTwo(number));
// }

// const names = ["      a  k  o     " , "      fate     meh" , "     n  ima" , "  mahdi  " , "mayam    "];
// const names = "fatemeh";

// console.log(names.split("").reverse().join(""));

// function arrayTrim(array){
//     const newArray = array.map((arr) => {
//         return arr.trim().replaceAll(" " , "")
//     })
//     return newArray;
// }
// console.log(arrayTrim(names));

// let item = 0 ;
// const timer = setInterval(()=>{
//     console.log(item++);
//     if(item ===10){
//         clearInterval(timer)
//     }
// } , 1000)

// session 5

// const person = {name : "mahdi" , age : 22 , city : "tabriz"};

// for in
// for(const key in person){
//     console.log(key , person[key]);
// }

// object keys
// const keys = Object.keys(person);
// console.log(keys);

// object values
// const values = Object.values(person);
// console.log(values);

// object entries
// const entries = Object.entries(person);
// console.log(entries);

// object assign
// const person1 = {fname : "mahdi" , age : 22 };
// const person2 = {lname : "rezainiya" , city : "tabriz"};
// const fullPerson = Object.assign(person1 , person2);
// console.log(fullPerson);

// object create
// const person = {name : "mahdi" , age : 22 , city : "tabriz"};
// const me = Object.create(person);
// console.log(me.name);
// console.log(me.age);
// console.log(me.city);

// object freeze
// Object.freeze(person)
// person.friend = "ali";
// person.name = "";
// delete person.name;
// console.log(person);

// object seal
// Object.seal(person);
// person.friend = "ali";
// delete person.name ;
// person.name = "hamed" // this is okey
// console.log(person);

// hasOwnProperty
// const a = person.hasOwnProperty("name");
// const b = person.hasOwnProperty("mahdi");
// console.log(a);
// console.log(b);

// JSON
// DOM

// const h1 = document.getElementById("h1");
// console.log(h1);
// const h2 = document.getElementsByClassName('h2');
// console.log(h2);
// const heading = document.getElementsByName('h1');
// console.log(heading);
// const heading = document.querySelector(".ako");
// const heading = document.querySelectorAll(".ako");
// console.log(heading);

// const heading = document.querySelector('.ako');
// heading.textContent = "hello world";
// heading.textContent = <P>hello world</P>; //Error
// heading.textContent = '<P>hello world</P>'; //Error
// heading.innerHTML = '<P>hello world</P>';
// heading.innerText = "hello world";
// heading.innerText = <p>hello world</p>;
// heading.innerText = '<p>hello world</p>';
// console.log(heading); 

// const heading = document.querySelector('.ako');
// heading.classList.add("highlight");
// heading.classList.remove("highlight");
// heading.classList.toggle("highlight");
// const contains = heading.classList.contains("ako");
// console.log(contains);
// const first = heading.classList.item(0);
// console.log(first);
// heading.style.color = "red";
// heading.style.backgroundColor = "blue";
// const get = heading.getAttribute('class');
// console.log(get);
// heading.setAttribute('title' , "mahdi rezainiya");

// console.log(heading);

// session 6

// parentElement
// const body = document.querySelector('article').parentElement;
// console.log(body);

// children & childNodes
// const children = document.querySelector('article').children;
// const children = document.querySelector('article').childNodes;
// console.log(children);

// nextSibling & previousSibling
// const sibling = document.querySelector('#one').previousSibling;
// const sibling = document.querySelector('#one').nextSibling;
// console.log(sibling);

// nextElementSibling & previousElementSibling
// const sibling = document.querySelector('#one').nextElementSibling;
// const sibling = document.querySelector('#two').previousElementSibling;
// console.log(sibling);

// createElement & prepend & append
// const p = document.createElement('p');
// p.textContent = 'mahdi rezainiya';
// const divOne = document.querySelector('#one');
// divOne.prepend(p);
// divOne.append(p);

// remove 
// const body = document.querySelector('body');
// const divOne = document.querySelector('#one');
// const one = document.querySelector('#o');
// console.log(divOne);
// console.log(one);
// divOne.remove()

// replaceWith
// const body = document.querySelector('body');
// const divOne = document.querySelector('#one');
// const p = document.createElement('p');
// p.textContent = 'mahdi rezainiya';
// divOne.replaceWith(p);

// cloneNode
// const clone = body.cloneNode(false); // this just body tag
// const clone= body.cloneNode(true); // this is all of the body tag and insides
// console.log(clone);

// addEventListener
// click & event type
// const one = document.querySelector('#one');
// one.addEventListener('click' , function(e){
    // alert("hello")
    // console.log(e.type);
// })

// dbclick
// const one = document.querySelector('#one');
// one.addEventListener('dblclick' , function(e){
//     alert("hello");
// })

// mouseover
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseover' , function(e){
//     console.log("hello");
// })

// mouseout
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseout' , function(e){
//     console.log("hello");
// })

// mouseout
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter' , function(e){
//     console.log("hello");
// })

// window
// console.log(window);
// console.log(window.location);
// console.log(window.location.pathname);
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// resize
// const heightOutput = document.querySelector("#height");
// const widthOutput = document.querySelector("#width");
// function reportWindowSize() {
//     heightOutput.textContent = window.innerHeight;
//     widthOutput.textContent = window.innerWidth;
// }
// window.onresize = reportWindowSize;
// window.addEventListener("resize", reportWindowSize);

// const body = document.querySelector('body');/
// window.addEventListener("resize", () => {
//     console.log(`width : ${window.innerWidth}`);
//     console.log(`height: ${window.innerHeight}`);
//     if (window.innerWidth > 500) {
//         body.style.backgroundColor = "green";
//     } else {
//         body.style.backgroundColor = "blue";
//     }
// });

// scroll
// window.addEventListener('scroll' , function(){
//     console.log("hello");
// })

// keyup
// const inputOne = document.querySelector('#firstname');
// const inputTwo = document.querySelector('lastname');
// inputOne.addEventListener('keyup' , function(e) {
//     console.log(inputOne.value);
// })

// keydown
// const inputOne = document.querySelector('#firstname');
// const inputTwo = document.querySelector('lastname');
// inputOne.addEventListener('keydown' , function(e) {
//     console.log(inputOne.value);
// })

// this
// const inputOne = document.querySelector('#firstname');
// inputOne.addEventListener('click' , function(e){
//     console.log(this);
// }) // this here output inputOne tag Element

// const inputOne = document.querySelector('#firstname');
// inputOne.addEventListener('click' , (e) => {
//     console.log(this);
// }) // this here output window whole

// bubbling
// const article = document.querySelector("article");
// const section = document.querySelector("section");
// const div = document.querySelector("div");

// article.addEventListener("click", (e) => {
//     alert("article");
// });

// section.addEventListener("click", (e) => {
//     e.stopPropagation()
//     alert("section");
// });

// div.addEventListener("click", (e) => {
//     e.stopPropagation()
//     alert("div");
// });

// submit form
// const form = document.querySelector('#submit');
// form.addEventListener('submit' , (e) => {
//     e.preventDefault();
//     alert('form sent')
// })


// session 7
// const input = document.querySelector('#firstname'); // if not inside a form tag
// console.log(input);
// input.addEventListener('change' , function(e){
//     console.log("changed");
// });

// const form = document.querySelector('#submit');
// form.addEventListener('change' , (e) => {
//     console.log("changed");
// })

// const input = document.querySelector('#firstname'); // if not inside a form tag
// console.log(input);
// input.addEventListener('input' , function(e){
//     console.log("changing...");
// });

// const form = document.querySelector('#submit');
// form.addEventListener('input' , (e) => {
//     console.log("changing...");
// })

// Event delegation

// const div = document.querySelector("div");

// div.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log(event.target.localName);
//   console.log(event.target.id);
//     if (event.target.id === "btn-1") {
//         event.target.style.backgroundColor = "green";
//     } else if (event.target.id === "btn-2") {
//         event.target.style.backgroundColor = "red";
//     } else if (event.target.id === "btn-3") {
//         event.target.style.backgroundColor = "pink";
//     } else if (event.target.id === "btn-4") {
//         event.target.style.backgroundColor = "blue";
//     } else {
//         event.target.style.backgroundColor = "black";
//     }
// });

// const div = document.querySelector("div");

// div.addEventListener("click", (event) => {
    // console.log(event.target);
    // console.log(event.target.localName);
    // console.log(event.target.id);
//     switch (event.target.id) {
//     case "btn-1":
//         event.target.style.backgroundColor = "green";
//         break;
//     }
// });

// CALL STACK
// function a(){
//     console.log("hello everyone");
//     b();
// }
// function b(){
//     console.log("how are you ?");
// }
// a();

// JS IS SINGLE THREADED
// console.log("first");
// setTimeout(function(){console.log("second");} , 1000);
// setInterval(function(){console.log("second");} , 1000);
// console.log("third");

// window.onload = () => {
//     alert("opened");
// };

//PROMISE
// let objectPromise = new Promise((resolve , reject) => {
//     let a = "mahdi";
//     let b = false;
//     if(!b){
//         resolve(a);
//     }
//     else{
//         reject(b);
//     }
// })

// console.log(objectPromise);
// objectPromise();

// objectPromise
// .then(
//     (data) => {console.log(data);}
// )
// .catch(
//     (error) => {console.log(error);}
// );

// ASYNC & AWAIT
// async function name (a){
//     return a;
// }
// console.log(name("mahdi"));;

// name('mahdi').then((data) => {console.log(data);})

// async function sayHello(){
//     let promise = new Promise((resolve , reject) => {
//         let error = "not found";
//         if(true){
//             setTimeout(function (){resolve("Hello") , 2000})
//         }        
//         else{
//             reject(error)
//         }
//     });
//     let result = await promise;
//     return result;
// }

// sayHello()
// .then(
//     (data) => {console.log(data);}
// )
// .catch(
//     (error) => {console.log(error);}
// )

// TRY & CATCH
// try{
//     let result = 10 / x ;
//     console.log(result + "this is result");
// }
// catch(error){
//     console.log(error.message);
// }

// async function fetchData(){
//     try{
//         let result = await promise.reject("Data fetch failed")
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchData()

// RESTful APIs ====> use json;
// SOAP APIs ====> use XML in http & smtp;
// graphQL APIs ====> is programming language for server & client;

// API KEY
// OAuth
// JWT(JSON WEB TOKENS)

// Postman & SoapUI

// asynchronous javascript and xml ====> AJAX
// extensible markup language ====> XML

// XMLHttpRequest

// document.getElementById('loadData').addEventListener('click' , function(){
//     const request = new XMLHttpRequest();
//     request.open()
//     request.send();
//     request.onreadystatechange = function(){
//         if(request.readyState === 4 && request.status ===200){
//             const data = JSON.parse(request.responseText);
//             document.getElementById('result').innerHTML = `
//                 <h2>${data.title}<h2/>
//                 <p>${data.body}<p/>
//             `
//         }
//     }
// })

// asynchronous javascript and json ====> AJAJ
// JSON vs XML
// JSON.parse VS JSON.stringify

// let obj = {
//     name : "ali",
//     age : 20 ,
//     city : "shiraz"
// }
// console.log(obj);
// let objTojson = JSON.stringify(obj); //====> covert object to json type
// console.log(objTojson);
// let objAgain = JSON.parse(objTojson);
// console.log(objAgain);

// fetch('https://6675350fa8d2b4d072ef1a6e.mockapi.io/family')
    // .then(response => response.json())
    // .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/')
    // .then(response => response.json())
    // .then(json => console.log(json))



// other side of xmlHttpRequest & fetch
// const url = 'https://jsonplaceholder.typicode.com/todos';
// const request = new XMLHttpRequest();
// request.open('GET', url);
// request.send();
// request.onload = function(){
//     if(request.status === 200){
//         const data = JSON.parse(request.responseText)
//         // data.forEach(element => {
//         //     console.log(element);
//         // });
//         console.log(data);
//         for(let element of data){
//             console.log(element);
//         }
//     }
//     else{
//         console.log("Not Found");
//     }
// }

// console.log(request);

// callback & callback hell

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplacehoder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

// const getTodos = (url , callback) => {
//     const request = new XMLHttpRequest();
//     request.open('GET' , url);
//     request.send();
//     request.onload = function(){
//         if(request.status === 200){
//             const elements = JSON.parse(request.responseText);
//             // for(let element of elements){
//             //     // console.log(element);
//             //     callback(undefined , element)
//             // }
//             // console.log(elements);
//             callback(undefined , elements)
//         }
//         else{
//             callback("Not Found . . ." , undefined);
//         }
//     }
// }

// callback hell is not good for host
// getTodos(url1 , function(error , exp){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(exp);
//         getTodos(url3 , function(error , exp){
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log(exp);
//                 getTodos(url2 , function(error , exp){
//                     if(error){
//                         console.log(error);
//                     }
//                     else{
//                         console.log(exp);
//                     }
//                 });
//             }
//         });        
//     }
// });

// better to use promise

// const getTodos = (url) => {
//     return new Promise((resolve , reject) => {
//         const request = new XMLHttpRequest();
//         request.open('GET' , url);
//         request.send();
//         request.onload = () => {
//             const data = JSON.parse(request.responseText);
//             if(resolve) {
//                 resolve(data)
//             }
//             else{
//                 reject(error)
//             }
//         }
//     })
// }

// console.log(getTodos(url1)); // ====> this is promise
// we can have callback hell again or use another one that's better

// getTodos(url1)
// .then(
//     (response) => {
//         console.log(response);
//         getTodos(url3)
//         .then((response) => {console.log(response);
//             getTodos(url2)
//                 .then((response) => {console.log(response);})
//                 .catch((error) => {console.log(error);}
//         );
//     }
// )
// .catch(
//     (error) => {console.log(error);}
// );
//     }
// )
// .catch(
//     (error) => {console.log(error);}
// );

// best one


// getTodos(url1)
// .then(
//     (response) => {console.log(response) ; return getTodos(url3)}
// )
// .then(
//     (response) => {console.log(response); return getTodos(url2)}
// )
// .then(
//     (response) => {console.log(response);}
// )
// .catch(
//     (error) => {console.log(error);}
// );


// FETCH
// const getTodos = fetch(url1);
// console.log(getTodos); // return promise

// fetch(url1)
// .then(
//     (response) => {
//         if(response.status === 200){
//             return response.json();
//         }
//         else{
//             throw new Error("Not Found . . .")
//         }
//     }
// )
// .then((response) => {
//     console.log(response);
// })
// .catch(
//     (error) => {
//         console.log(error.message);
//     }
// );


// Await & Async
// const getTodos = async function (url){
//     const response = await fetch(url)
//     if(response.status === 200){
//         const data = await response.json();
//         return data
//     }
//     else{
//         throw new Error("Not Found . . . ")
//     }
// }
// getTodos(url1)
// .then((response)=>{console.log(response);})
// .catch((error) => {console.log(error);})
















    // const API = "https://6675350fa8d2b4d072ef1a6e.mockapi.io/family";
    // const API_JOKE = "https://icanhazdadjoke.com/";
    
    // const get = axios.get(API);
    
    // console.log(get);
    // _____________________________________________
    
    // async function fetchApi() {
    //   const res1 = await axios.get(API);
    //   const res2 = await fetch(API);
    //   console.log(res2);
    // }
    
    // fetchApi();
    // ______________________________________
    // async function fetchApi() {
    //   const res = await axios.get(API);
    //   console.log(res.data);
    // }
    
    // fetchApi();
    // _______________________________
    // async function fetchApi() {
    //   const res = await fetch(API);
    //   const data = await res.json();
    //   console.log(data);
    // }
    
    // fetchApi();
    






































