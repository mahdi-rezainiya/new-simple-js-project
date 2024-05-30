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

let arr1 = [1 , 3 , 11 , 57 , 8 , 9 , 87];
let arr2 = [5 , 84 , 54 , 23 , 64 , 91];
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

const names = ["      a  k  o     " , "      fate     meh" , "     n  ima" , "  mahdi  " , "mayam    "];
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


// const obj1 ={
//     fName : "mahdi",
//     lName : "rezainiya",
//     age : 22 ,
// };

// const obj2 = {
//     single : false,
//     country : "Iran",
//     city : "tabriz"
// }

// // object assign for merging
// const mergedObject = Object.assign(obj1 , obj2);
// // for(let item in  obj1){
// //     console.log(`${item} : ${obj1[item]}`);
// // };

// // object keys
// let objKeys = Object.keys(obj1);
// // object values
// let objValues = Object.values(obj1);
// // object entries
// let objEntries = Object.entries(obj1);
// // console.log(objKeys);
// // console.log(objValues);
// // console.log(objEntries);
// // console.log(mergedObject);

// // object create
// const secondObject = Object.create(obj1);
// // console.log(secondObject);
// // console.log(secondObject.fName);
// // secondObject.mahdi = "mahdi";
// // secondObject.sayHello = () => {
// //     console.log(console.log(`Hi my name is ${secondObject.fName}`););
// // }
// // console.log(secondObject.sayHello());


// // object freeze
// // Object.freeze(mergedObject);
// // mergedObject.hello = "hello";
// // console.log(mergedObject);

// // object seal
// // Object.seal(mergedObject);
// // mergedObject.d = 12 ;
// // delete mergedObject.city;

// // mergedObject.city = "tehran";
// // console.log(mergedObject);


// // object hasOwnProperty
// // console.log(mergedObject.hasOwnProperty('age'));


// // const heading = document.createElement('h1');

// // heading.textContent = 'mahdi rezainiya';

// // console.log(heading);


// // console.log(body);

// // const akoClass = document.querySelector('.ako');
// // akoClass.classList.add('team' , 'mahdi');
// // akoClass.classList.remove('mahdi');
// // akoClass.classList.toggle('mahdi')
// // console.log(akoClass.classList);

// // console.log(divAdd.parentElement);

// const body = document.querySelector('body');
// const headerAdd = document.createElement('header');
// const mainAdd = document.createElement('main');
// const footerAdd = document.createElement('footer');
// // const ul = document.createElement('ul');

// // body.prepend(headerAdd);
// // mainAdd.append(ul);
// body.append(mainAdd);
// // body.append(footerAdd);

// // for(let i = 0 ; i < 6 ; i++){
// //     const li = document.createElement('li');
// //     li.textContent = i ;
// //     ul.append(li)
// // }


// for (let i = 0 ; i < 10 ; i++){
//     const para = document.createElement("p");
//     para.setAttribute("class" , `paraClass ${i}`);
//     mainAdd.append(para);
// }
// const paraNode = document.querySelectorAll('.paraClass');
// paraNode.forEach((elem , index) => {
//     if(index % 2 === 0){
//         elem.addEventListener('click' , () => {
//             elem.classList.toggle = 'pinkColor'
//         })
//         elem.textContent = "mahdi";
//         elem.style.backgroundColor = "green";
//     }
//     else{
//         elem.addEventListener('click' , () => {
//             elem.classList.toggle('redColor')
//         })
//         elem.textContent = "rezainiya";
//         elem.style.backgroundColor = "blue"
//     }
// })


// const inputUserName = document.querySelector('#username');
// const h1 = document.createElement("h1");
// const body = document.querySelector("body");
// body.prepend(h1);

// inputUserName.addEventListener("input" , function(){
//     if(inputUserName.value === ""){
//         h1.textContent = "zinari"
//     }
//     else{
//         h1.textContent = this.value ;

//     }
//     // console.log(value);
// })



// const inputUserName = document.querySelector('#username');
// inputUserName.addEventListener("change" , (e) => {
//     console.log(e.target.value);
// })

// const select = document.querySelector("select");
// const products = document.querySelectorAll("section");

// select.addEventListener("change" , (e) => {
//     const value = e.target.value;
//     products.forEach((section) => {
//         if(section.id === value){
//             section.style.display = "block";
//         }
//         else if(value === "all"){
//             section.style.display = "block";
//         }
//         else{
//             section.style.display = "none";
//         }
//     })
// })


// const div = document.querySelector("div");
// div.addEventListener("click" , (e) => {
//     // console.log(e.target.textContent);
//     // console.log(e.target.localName);
//     // console.log(e.target.id);
//     if(e.target.id === "green"){
//         e.target.classList.toggle("green")
//     }
//     else if(e.target.id === "red"){
//         e.target.classList.toggle("red")
//     }
//     else if(e.target.id === "blue"){
//         e.target.classList.toggle("blue")
//     }
//     else{
//         e.target.classList.toggle("pink")
//     }
// })


function firstName () {
    console.log("mahdi");
}
function lastName () {
    firstName()
    console.log("rezainiya");
}
function fullName () {
    lastName();
    // console.log("mahdi rezainiya");


}

fullName();






































