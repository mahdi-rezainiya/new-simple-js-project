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

// const person = {name :"mahdi" , city : "tabriz" , age : 22};
// const personOne = {fname :"ali" , city : "tabriz"};
// const personTwo = {lname :"mardani" , uni : "shiraz"};
// for(let item in person){
//     console.log(`${item} : ${person[item]}`);
// }

// const personKeys = Object.keys(person).filter((item , index) => {
    // return item === "lastName";
    // return index ;
// });
// personKeys.forEach((item) => {
    // console.log(item);
// })
// console.log(personKeys); 

// const person = {name :"mahdi" , city : "tabriz" , age : 22};

// const personValues = Object.values(person).filter((value) => {
//     return value === "ali" ? "mahdi" : null
// });
// console.log(personValues);

// convert object to array all of them
// const personEntries = Object.entries(person);
// console.log(personEntries);

// const personOne = {fname :"ali" , city : "tabriz"};
// const personTwo = {lname :"mardani" , uni : "shiraz"};

// const personAssign = Object.assign(personOne , personTwo);
// console.log(personAssign);

// const personCreate = Object.create(person);
// console.log(personCreate.name , personCreate.city);

// const person = {name :"mahdi" , city : "tabriz" , age : 22};

// const personFreeze = Object.freeze(person);
// personFreeze.uni = "tehran";
// delete personFreeze.city;
// personFreeze.city = '';
// console.log(personFreeze);

// const person = {name :"mahdi" , city : "tabriz" , age : 22};

// const personSeal = Object.seal(person);
// personSeal.uni = "mashhad";
// delete personSeal.city ;
// personSeal.city = "";  //=====> this is possible here
// console.log(personSeal);

// const result = person.hasOwnProperty("name");
// console.log(result);

//object vs json
// {
//     "name" "mahdi",
//     "age" : 20 ,
//     "isTrue" : true ;
// }

// DOM
// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByName("");
// document.querySelector("");
// document.querySelectorAll("");

// textContent
// innerHTML
// innerText

// const h1 = document.querySelector(".h1");
// const h2 = document.querySelector(".h2");
// console.log(h1.textContent);
// console.log(h1.innerText);
// console.log(h2.innerHTML);
// console.log(h2.innerText);

// console.log(h1.classList);
// h1.classList.add("mahdi");
// h1.classList.remove("mahdi");
// h1.classList.toggle("h1");
// const result = h1.classList.contains("h1");
// h1.classList.item(2);

// h1.style.backgroundColor = "blue";

// const result = h1.getAttribute("class");
// h1.setAttribute("title" , "mahdi");
// console.log(h1);

// new session




// await & async

// function request (){
    // return  new Promise(() => {});
// }


// async function request(){
// }

// const request = async () => {
//     return [1 , 2 , 3 , 4];
// };

// const request = new Promise((resolve , reject)=>{
//     2 === 2 ? resolve("run server") : reject("error server");
// })

// async function request(){
//     throw "mahdi";
// }

// async function request () {
//     return "mahdi";
//     throw "Error";
// }

// async function request (){
//     if(2 === 2 ){
//         return "run server"
//     }
//     else {
//         throw "error server"
//     }
// }

// request().then(
//     (res)=>{
//         alert(res)
//     }
// )
// .catch(
//     (err) => {
//         alert(err)
//     }
// )
// console.log(request());

// async function userLogin (username , password){
//     if(!username ||  !password){
//         throw "missing credential";
//     }
//     if(password === "hi"){   
//         return "hello";
//     }
//     throw "invalid pass";
// }

// console.log(userLogin("nima" , "hi"));
// userLogin("nima" , "hi").then(
//     (res) => {
//         console.log(res);
//     }
// ).catch(
//     (err) => {
//         console.log(err);
//     }
// );


const passwordUser = prompt("please enter password :")
function userLogin (username , password){
    return new Promise((resolve , reject) => {
        if(! username || !password){
            reject("missing credential")
        }
        if(password === "hi"){
            resolve("hello")
        }
        reject("invalid pass") 
    })
}




// console.log(userLogin("zahra" , "la la"));
// userLogin("maryam" , passwordUser).then((res) => {
//     // console.log("run server");
//     console.log(res);
// }
// ).catch(() => {
//     console.log("error server");
// })

























































