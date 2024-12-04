// console.log("hello world");
// console.log();
// a =8;
// console.log(a);
// a =12;
// console.log(a)
// _ds = 34;







// let a =12;
// let i =0 ;
// while(i<2){
//     a += 1
//     console.log(a)
//     i += 1
// }
// console.log(a)




// * how to declare a variable
// var d = 25;

// let variable = 233;

// const value = 23;


// * some rarely used primitive datatypes
// let bigintValue = BigInt(3435);
// console.log(bigintValue);

// let symbolValue = Symbol("This is for symbol");
// console.log(symbolValue);

// how to check the detatype
// console.log(typeof symbolValue);


//how to create non primitive datatype (objects)
// const product ={name :"Pencil",
//     Rating :4,
//     isDeal :true,
//     MRP : 223
// };
// console.log(product["Rating"]);
// console.log(product.name);



// const product ={fullname :{Pencil:"yellow"},
//     Rating :4,
//     isDeal :true,
//     MRP : 223
// };
// console.log(product["fullname"]["Pencil"])

// console.log(123 + "re"); // here concatenation is done


// let a = parseInt(prompt("enter a number"));
// if(a % 5 == 0){
//     console.log("It is multiple of 5");
// }
// else{
//     console.log("not a multiple of 5");
// }




// * let b = parseInt(prompt("enter marks"));
// if(b >= 80 && b <= 100){
//     console.log("first");
// }
// else if(b >=70 && b<=89 ){
//     console.log("second");

// }
// else if(b>=60 && b <=69){
//     console.log("third");
// }
// else if(b>=50 && b<=59){
//     console.log("pass");
// }
// else if(b>=0  && b<=49){
//     console.log("fail");
// }
// else{
//     console.log("invalid marks");
// }




// * use of for of loop 
// let string = "hello world"
// for(let i of  string){
//     console.log(i);
// }

// * use of for in loop 
// const product ={name :"Pencil",
//     Rating :4,
//     isDeal :true,
//     MRP : 223
// };

// for(let key in product){
//     console.log(key);
// }


// for(let i =0 ;i<=100;i=i+2){
//     console.log(i);
// }


// let guessNumber = 35;
// let input = prompt("enter number");
// while(input != guessNumber){
    
//     input = prompt("enter number");
    
// }
// console.log("your guess is correct");


// let templateString = `this is a templete's string " is  " ${1+2}`;
// console.log(templateString);



// let a = "hello world";
// let b = a.replace("hello","hey");
// console.log(b);



// let a = "helo";
// let b = "hrfas";
// let c = a.concat(b,"yes");
// console.log(c);


// let input = prompt("enter your name ");
// console.log("@"+ input + input.length);


// arrays
// let array = [324,4534,534,34];
// let array2 = ["gdfgd",789889,899,"dfjsd"]
// console.log(array);
// console.log(array2);
// console.log(array + array2);
// console.log(array.concat(array2))
// console.log(array2.join(' '));




// let array = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for(let key of array){
//     sum += key;
// }
// let average = sum/array.length;
// console.log(average);


// let array = [100,200,300,400,500];
// for(let i= 0 ; i<array.length;i++){
//      array[i] = array[i] - array[i]*0.1
// }
// console.log(array);



// let array = [100,200,300,400,500];
// let length = array.unshift(534)
// console.log(length);

// let array = [100,200,300,400,500];
// array.splice(2,0,34,56)
// console.log(array)


// let Companies = ["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"];
// Companies.shift();
// Companies.splice(1,1,"ola");
// Companies.push("Amazon");
// console.log(Companies);


// function compareFn(a, b) {
//     if (a >b) {
//       return -1;
//     } else if (a <b) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }
  

// let array = [100,200,300,400,500];
// array.sort(compareFn);
// console.log(array);


// const multiplication = (a,b)=>{
//     return a * b;
// }
// console.log(multiplication(2,3));



// const noOfVowels = (fullname) =>{
//     let vowels  = 'aAeEiIoOuU';
//     let count = 0;
//     for(let i =0 ;i<fullname.length;i++){
//         for(let j of vowels){
//             if(j == fullname[i] ){
//                count++;
//             }
//         }
//     }
//     return count;
    
// }

// let result = noOfVowels("hello");
// console.log(result);


// let arr = [1,2,3,4,5];
// // ar2 = [67,89];
// arr.forEach((value)=>
// {
//     console.log(value**2);
// });

// let arr = [1,2,3,4,5];
// arr.forEach((value,index,arra)=>
// { 
//     console.log(`value at ${index} is ${value**2}`);
//     console.log(arra);
// });


// let numbers = [10, 20, 30];

// let result = numbers.map(function(element, index, array) {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
//     return element * 2 + index; // Multiply element by 2 and add its index
// });

// console.log(result); // Output: [20, 41, 62]


// let array = [10,20,30,40,90,100];
// const output = array.filter((value)=>{
//        if(value >= 90){
//         return value;
//        }

//        // return value >=90;
// });
// console.log(output);






// let arr = [1,2,3,4,5];
// const output = arr.reduce((result,currentValue) =>{
//     return result + currentValue;
// })

// let arr = [1,2,3,4,5];

// const output = arr.reduce((result,currentValue) =>{
//     return currentValue> result ? currentValue: result;
// });

// console.log(output);


// let input = parseInt(prompt("enter the length"));
// let arr =[];
// for(let i =1 ; i<= input;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let SUM = arr.reduce((result,value)=>{
//     return result + value;
// })
// console.log(SUM);

// let multiplication  =arr.reduce((result1,value)=>{
//     return result1 * value;
// })
// console.log(multiplication);


// let word = 'words'
// let arr = Array.from(word);
// console.log(arr)





// console.dir(window);
// let elements = document.querySelectorAll(".box1");
// elements[0].innerText = "hello "
// elements[1].innerText = "hello "
// elements[2].innerText = "hello "

// for(let div of elements){
//     div.innerText = "hello"
// }



// let el = document.querySelector("div");
// let att = el.getAttribute("class");
// console.log(att);


// let el = document.querySelector("div");
// el.style.backgroundColor = "red";  




// console.dir(elements);


// let new_button = document.createElement("button");

// new_button.innerText = "click me";
// new_button.style.backgroundColor = "red";
// new_button.style.color = "white";
// let position = document.querySelector(".box1");
// position.prepend(new_button);



// let paragraph_element  = document.createElement("p");
// paragraph_element.innerText = "hello javascript "
// paragraph_element.setAttribute("class","box2");

// let position = document.querySelector(".box1");
// paragraph_element.classList.add("box2");
// position.append(paragraph_element);




// let element = document.querySelector("#handle");
// element.onclick = ()=>{
//     alert("hello world");
// }



// let element = document.querySelector("#handle");
// element.addEventListener("click",()=>{
//     console.log("event handled")
// });


// const hanler2 = ()=>{
//     console.log("event handled")
// }
// element.addEventListener("click",hanler2);


// element.removeEventListener("click",hanler2);



// let element = document.querySelector("#mode");
// let root = document.querySelector("body");
// let count = 0;
// element.addEventListener("click",()=>{
//     count++;
//     if(count % 2 != 0){
//     root.style.backgroundColor = "black";
//     root.style.color = "white";
//     }
//     else{
//         root.style.backgroundColor="white"
//         root.style.color ="black";
//     }
// });



// let element = document.querySelector("#mode");
// let root = document.querySelector("body");
// let message = "light";
// element.addEventListener("click",()=>{
    
//     if(message === "light"){
//         message = "dark";
//         root.style.backgroundColor = "black";
//         root.style.color = "white";
//     }
//     else{
//         message = "light";
//         root.style.backgroundColor="white"
//         root.style.color ="black";
//     }
// })



// let element1 = document.querySelector("body");
// console.dir(element1.children);

// console.log(document.body.textContent);


// console.log(document.body);


// let element2 = document.querySelector(".box3");
// element.hidden = true;
// console.log(element2.attributes);

// element2.removeAttribute("hidden");


// let new_el = document.createElement("p");
// new_el.innerText = "hello users";



// let element2 = document.querySelector("#box4");
// box4.insertAdjacentHTML("beforebegin","<p>THis is a paragraph</p>");

// box4.insertAdjacentElement("beforebegin",new_el);



// element2.appendChild(new_el);
// element2.removeChild(new_el);


// let element2 = document.querySelector("#box4");
// element2.className = "text-black red";
// element2.classList.toggle("red");


// const a = setTimeout(()=>{
//     alert("hello")
// },1000);
// // clearTimeout(a);


// let a = (dataId)=>{
   
//     console.log("hello world",dataId)
// }
// a(9);



// function getData(dataId ,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     },3000);

// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     });
// });



/* if (getNextData): This checks if the getNextData parameter (which is expected to be a function) is defined and truthy. In JavaScript, functions are objects and are considered truthy, so this condition checks if a callback function was passed to the getData function.
*/


// function getData2() {
//     return new Promise((resolve,rejects) =>{
//         console.log("I am a Promise");
//         resolve("Success");
//         rejects("rejected");
//     });
// }


// let a = getData2();

// //executes when promise resolve.
// // res shows the resolve message
// a.then((res)=>{
//     console.log(res);
// })

// //executes when promise rejected.
// // err shows the error message.
// a.catch((err)=>{
//     console.log(err)
// })




// function getData(dataId){
//     return new Promise((resolve,rejects)=>{

//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("succes")
//     },3000);
// })
// }

// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })
   

// getData(1).then((res) =>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
    
// }).then((res)=>{
//     console.log(res);
// })



// async function api() {
//     console.log("hello")
    
// }
// api();






// function getData(dataId){
//     return new Promise((resolve,rejects)=>{

//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("succes")
//     },3000);
// })
// }

// async function getFullData() {
//     console.log("fetching data 1 ...")
//     await getData(1);
//     console.log("fetching data 2 ...")
//     await getData(2);
    
// }

// getFullData();



// let age =13;
// try{
//     if(age < 18){
//         throw new SyntaxError("Invalid Age");
//     }
//     else{
//         console.log("You are eligible to vote..")
//     }
//     }catch{
//         console.log("this is syntax error");
//     }


// function test(dataId){
//     return new Promise((resolve,rejects) =>{
//         setTimeout(()=>{
//           console.log("data",dataId);
//           resolve("sucess")
//         },3000)
//     })
// };

// async function testData(dataId){
//     await test(dataId);
//     await test(dataId);
// }

// testData(2);


// const employee1 = {

//     // This an another way to create a function in objects without function keyword and key.
//     calcTax(){
//         console.log("Tax rate is 10%");
//     }
// }

// const employee2 = {
//     Salary : 30000
// } 

// employee2.__proto__ = employee1;



// class Car{

//     constructor(brand){
//       console.log("This is a constructor of Car class");
//       this.brand = brand;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop")
//     }
// }

// let suzuki = new Car("Suzuki");
// console.log(suzuki.start());
// // start() method return undefined because if a method does not explicitly return a value then it return undefined automatically in js;

// console.log(suzuki.brand);
// let Nano = new Car();
// // here we do not passing any arguments but this does not show me the error .It actually assigns undefined to brand variable.
// console.log(Nano.stop());

// Inheritance

// class Person{

//     constructor(name){
//       this.name = name;
//     }
   
//     eat(){
//         console.log("eat food")
//     }
// }

// class Engineer extends Person{
//     constructor(name,branch){
//         super(name);
//         this.branch= branch;
    
//     }

//     work(){
//         console.log("eng work");
//     }
// }

// let enObj1 = new Engineer("David","cs");
// console.log(enObj1.name,enObj1.branch);








// const obj = {a:1,b:3};
// const {a,b}= obj;
// console.log(typeof a);
// console.log(b);

// const a = "the" ;
// const b = "no";
// const c = {a,b};
// console.log(c);




        // const url = 'https://cat-fact.herokuapp.com/facts';
        // const getFacts = async ()=>{
        // let response =  await fetch(url);

        // //console.log(response);// JSON format 
        
        // let data = await response.json();
        // console.log(data[3].text);
        // }

        // getFacts();



// let a = true;
// let b = false;
// console.log(a/b);
// console.log(typeof (a/b));
// console.log(typeof (a*b));
// console.log(typeof (a+b));
// console.log(typeof (a-b));
// console.log(a*b);
// console.log(typeof (a*b));


/* Output
Infinity
number
number
number
number
0
number
*/

// const a = 'the' ;
// const b = 'number';
// const c = { a, b};
// console.log(c);

// output 

// { a: 'the', b: 'number' }