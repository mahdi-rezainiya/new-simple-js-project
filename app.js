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

const person = {name : "mahdi" , age : 22 , city : "tabriz"};

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

const heading = document.querySelector('.ako');
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

console.log(heading);