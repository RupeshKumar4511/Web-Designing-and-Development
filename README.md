# HTML
It stands for Hypertext markup language which is used to create webpages.It uses tags and attributes to provide
structure and format to the webpages.

# Hypertext :

It is a text which contains links to other texts.

# Why Markup language :

It is used to defines the text documents within the tags to structure webpages. Here tags are also called Markup.

# Note :

HTML files are saved with .html or .htm extension.
<br>
combination of html tags and contents are called html elements .
<br>
HTML is called as language of the browser because browser understands html .

<br>
ASP : Active server pages
MDN : Mozilla developer network

# HTML tags and attributes :

Tags are the containers in html for some content or other html tag.
tags are like keywords which defines that how web browser will format and display the content.
<br>
attributes provide the additional information about the tags .

# Types of HTML elements :

1. Block elements
   <br>
   HTML Block elements, are used to structure the main content of a webpage. They typically start on a new line and take up the full width of their container(i.e. body) examples div, p, h1 to h6, and ul, etc.
   <br>
2. Inline elements
   <br>
   It does not start on a new line and takes up only the necessary width.examples : br,span etc

# head tag in Boilerplate code

It is used to write scripting(both client and server) to make dynamic web pages.It also contains page metadata.

# title tag

It is the subtag of head tag. It is used to show the title of webpages.

# formatting tags

These type of tags are applied on the text.

# Types of HTML tags :

Semantic tags : These are the tags which are understandable to what task they actually perform.
ex- header, footer etc
<br>
Non Semantics tags : These are the tags which are not understandable to what task they actually perform.
ex- div tag etc

# Important Point from form :

In radio button id and name are same.

<br>
In form tag , action attribute is used to defines what actions need to be performed when the form is submitted.

<br>

<b>method attribute in form :</b>
<br>
<b>method="GET"</b>This method is used when we want to retrieve data, make a search, or when the form data is not sensitive and can be included in the URL.

<b>method ="POST"</b> It is used when the form data is sensitive, when the form submission will change server-side data, or when you need to send a large amount of data.

<b>for attribute in label in form :</b> is used to associate the label with a specific form control such as input , textarea, select.

<b>name attribute in input form :</b>It is used for server side processing.
<br>
When a form is submitted, the browser sends a key-value pair for each input. The name attribute provides the key, and the value is whatever the user has entered or selected.

<b>id attribute in input form :</b>
The id attribute is commonly used to associate a label with an input field using the for attribute in the label element. This association allows users to click on the label to focus the corresponding input field.
<br>
For this purpose value of for and id attribute same.

# Iframe tag

Iframe tag is used to provide link of another website in one website.
There are some websites link which we cannot use to as a part of our website like google.

# Video tag and audio tag

Video tag is used to show the Video on our websites.
<br><br>
Attributes of Video tag :
<br>

1. src : It is used to provide relative or absolute url.
   <br>
2. controls : It is used to provide extra functionality like play ,download, resize of video etc.
   <br>
3. height and width attributes : It is used for size.

<br>

4. loop :
   It is used when we want to restart the video after complete once.

<br>
5 . autoplay :
It makes video autoplay when the webpage opens.

<br>

6 . muted : for the muted video plays.

# canvas :

The <b>beginPath()</b> method begins a path or resets the current path.
<br>
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
<br>
Here (95,50) is the position of center and 40 is the radius and 0 is the starting angle and 2*Math.PI is the ending angle.
<br>

# difference b/w svg and canvas:





# CSS : Cascading style sheet

CSS is a language which is used to provide styling to a website.

# How to link a html with css files

<link rel="stylesheet" href= "style.css">

# There is id element and element id selector in css:

#main div{background-color:white;}
div#main{color:white;}

# padding :

It is used to fit text in a container properly.

padding:5px 6px  
here 5px is for top and bottom,
6px for Right and left

padding:5px 6px 7px
here 5px is for top ,
6px is for Right and left,
7px is for down

padding:1px 2px 3px 4px
here 1px is for top, 2px for right , 3px for down
and 4px for left

padding-top:5px
padding-right :6px
padding-down :7px
padding-left :3px

padding:4px
here padding top,right,down,left are 4px.

# Shorthand for border:

border: 1px solid black;
<br>
In border attribute 1px is width, solid is style and black is color . THis is short hand way.

# overflow :

The CSS overflow property controls what happens to content that is too big to fit into an area.
It works for only Block elements.

# font-weight :

It makes the font lighter or dark .It's value lies b/w 100 -900.

# font-varients :

The font-variant property in CSS is used to control the usage of different font variants in a text. It allows you to enable or disable the use of alternative glyphs within a font, like small caps or old-style numerals.

# font-size:

if font-size :2em in a child div
<br>
then other property like width : 2em then it means width becomes 2 times of its own font-size.It does not depend on parent font-size.

# height : 90 vh and width : 1wh

here vh means viewport height.
<br>
1 vh is equal to 1% of the height of the viewport and same as in vw.

# position: sticky;

when the two elements are overlapping then with the use of z -index ,we can specify which element will be show in upper layer or lower layer .Basically whose z -index is maximum,that will show in upper layer.

# flex-direction:

flex-drection:flex-start;
It means the starts of main axis in the flex container.
<br>
flex-drection:flex-end;
It means the end of main axis in the flex container.

<br>

# justify-content:

Aligns flex items along the main axis.
<br>
flex-start (default): Items are aligned at the start of the container.
<br>
flex-end: Items are aligned at the end of the container.
<br>
center: Items are centered along the main axis.
<br>
space-between: Items are evenly distributed; the first item is at the start, the last at the end, and the space between items is equal.
<br>
space-around: Items are evenly distributed with equal space around each item but the first and last items are separated by space which is half of space in between the other items.
<br>
space-evenly: Items are evenly distributed with equal space between and around items.
<br>

# align-items:

Align items along cross axis.
<br>
stretch (default): Flex items stretch to fill the container (if the item's height is not explicitly set).
<br>
flex-start: Items are aligned at the start of the cross axis.
<br>
flex-end: Items are aligned at the end of the cross axis.
<br>
center: Items are centered along the cross axis.
<br>
baseline: Items are aligned such that their baselines align.
<br>

# align-content:

Aligns the flex lines (when there are multiple lines due to wrapping) along the cross axis.
<br>
stretch (default): Lines stretch to fill the container.
<br>
flex-start: Lines are packed at the start of the cross axis.
<br>
flex-end: Lines are packed at the end of the cross axis.
<br>
center: Lines are packed in the center of the cross axis.
<br>
space-between: Lines are evenly distributed with no space at the edges.
<br>
space-around: Lines are evenly distributed with space around them.
<br>
space-evenly: Lines are distributed evenly with equal spacing between and around them.

# align-self

Overrides the align-items property for individual items.
<br>
auto (default): Inherits the align-items value from the container.
<br>
Other values: flex-start, flex-end, center, baseline, stretch.

# order

Controls the order in which flex items appear.
<br>
Default value is 0. Items with lower order values appear first.

# flex-wrap :

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

# display :grid;

Grid display provides a grid-based layout system with rows and columns. Bydefault it provides a single row and column.
<br>
Note : A responsive grid-view often has 12 units of columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.
<br>

# gap property of grid :

Use the gap property to specify the size of the gap between the rows and the columns.like : gap:30px;

# grid-row and grid-column:

grid-column: <start-line> / <end-line>;
grid-row: <start-line> / <end-line>;

grid-row :1/3;
here it means grid starts from 1 line of row and end to third line of row.

# grid-area

A shorthand to define the row and column positions of a grid item. It can also be used in conjunction with named grid areas.

Syntax: grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
Example: grid-area: 1 / 2 / 3 / 4; (the item starts at row line 1, column line 2, and ends at row line 3, column line 4).

# grid-template-areas

Allows you to create named grid areas and define a visual layout by assigning names to different sections of the grid.

Syntax:

Define grid areas using a string of names: grid-template-areas: "header header" "sidebar content" "footer footer";
Assign grid items to areas with the grid-area property.

# Alignment in Grid

justify-items
Aligns grid items along the inline (row) axis.

Values: start, end, center, stretch (default).

<br>
align-items
Aligns grid items along the block (column) axis.

Values: start, end, center, stretch (default).
<br>
justify-content
Aligns the entire grid within the grid container along the row axis.

Values: start, end, center, stretch, space-around, space-between, space-evenly.
<br>
align-content
Aligns the entire grid within the grid container along the column axis.

Values: start, end, center, stretch, space-around, space-between, space-evenly.
<br>
place-items
A shorthand for setting both align-items and justify-items at the same time.

Syntax: place-items: <align-items> <justify-items>;
<br>
place-content
A shorthand for setting both align-content and justify-content at the same time.

Syntax: place-content: <align-content> <justify-content>;

<br>

# Note :

align-items and align-content are used to align the elemets inside the cells of grid.
<br>
justify content and justify-items are used when the element is smaller and container size is maximum.

# minmax()

Defines a size range for a grid track.

Syntax: minmax(min, max);
Example: grid-template-columns: minmax(100px, 1fr); (column will be at least 100px, but grow as much as 1fr).

# fr (Fraction Unit)

The fr unit represents a fraction of the available space in the grid container. It's used to divide remaining space between columns or rows.
<br>
Example: grid-template-columns: 1fr 2fr; (the second column gets twice the space of the first column).

# Some transform properties of grid for 2d:

# translate(x-axis , y-axis);

Here element move right acc. to x-axis and move down acc. to y-axis.
<br>
It can also done by this way.
<br>
translateX();
translateY();

# rotate(20deg);

here deg can be negative.

# scale(width_times,height_times);

scale(2,3);
Here the elements width becomes 2 times and height becomes 3time of its original height.
<br>
It can also done by this way:
<br>
scaleX(2);
scaleY(3);

# skewX(20deg) and skewY(30deg);

The skewX() method skews an element along the X-axis by the given angle.
<br>
The skewY() method skews an element along the Y-axis by the given angle.
<br>
It can also done by this way:
skew(20deg,30deg);

# transform : matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())

Here we can 6 properties in matrix method.

# Some transform properties of grid for 3d:

rotateX(); // rotate along x-axis
<br>
rotateY(); // rotate along Y-axis
<br>
rotateZ(); // rotate along Z-axis.

# media query:

```
@media (min-width:200px) and (max-width:400px){}

It means when the screen size is between 200px and 400px.
```


# aspect-ratio:
ex-> aspect-ratio:16/5; Here it means
<br>
For a width of 1600 pixels, the height would be 
1600÷16/5 =500 pixels.
<br>
For a height of 500 pixels, the width would be 500 ÷ 5/16 =1600 pixels.

# object-fit: cover:
The image or video will fill the container completely.
Parts of the content may be cropped if its aspect ratio doesn't match that of the container.
The content will not be stretched; it will scale proportionally.


# JavaScript
JavaScript is a scripting language that does not require compilation.
<br>
JavaScript is a dynamically typed language.
<br>
ECMAScript is a standard for a scripting language. It specifies the core features that a scripting language should provide and how they works.
<br>
for the convention of variables and methods , we use camel case.
<br>
using let keywords we can declare variables only without intialization.
like : let a;
In this case udefined value is assigned to variables.
<br>
Note : we can also declare variables using const keyword.
<br>
If you re-declare a JavaScript variable, it will not lose its value.

var carName = "Volvo";
var carName;  // Volvo
<br>
JavaScript will try to convert strings to numbers in all numeric operations:
<br>
```bash
var x = "100";
var y = "10";
var z = x / y;       // z will be 10 // type will be number
var z = x * y;       // z will be 1000
var z = x - y;       // z will be 90
var z = x + y;       // z will not be 110 (It will be 10010)
```

<br>
var a = 'This is valid outer in "single Quote " and inner in double quote';

<br>
 In JavaScript, the data type of null is an object.
 <br>

```bash
// some rarely used primitive datatypes
let bigintValue = BigInt(3435);
console.log(bigintValue);

// use for the sentences.

let symbolValue = Symbol("This is for symbol");
console.log(symbolValue);

// Symbol is primarily used to create unique identifiers for object properties. Unlike strings or numbers, each Symbol is guaranteed to be unique, even if they have the same description.

let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2); // false, because every Symbol is unique 

// how to check the detatype
console.log(typeof symbolValue);

```



# String
String are immutable.
every String methods returns a new String.
It does not change in the old ones.

# Important point from JS :

The replace() method does not change the string it is called on. It returns a new string.
By default, the replace() function replaces only the first match:
str = "Please visit Microsoft and Microsoft!";
By default, the replace() function is case sensitive : 
	var n = str.replace("MICROSOFT", “IBM");
To replace case insensitive, use a regular expression with an /i flag (insensitive):
	var n = str.replace(/MICROSOFT/i, “IBM");
To replace all matches, use a regular expression with a /g flag (global match):
	var n = str.replace(/Microsoft/g, “IBM");


# Arrays
Arrays are mutable.
<br>
Most of the array method will change in the existing array.
<br>
Some methods will create a new array.
like : concat(),slice()

<br>
<b>Important point from Arrays method :<b>
splice() method can be used to add,delete,replace the elements.
<br>
splice(4) => It will delete all the items after 3 index means(deletion starts from 4th index).
splice() => It will do nothing.

# Important point from functions and methods:
arrow functions are used to perform small task.
like add, multiply etc.
<br>
Note: arrow function cannot be called above where at which is defined (means if arrow function defined at 12th line then it cannot called before 12th line i.e. on 4th line it cannot be called.) while function defined with 'function' keyword can be called anywhere.

<br>
There are some special method in array.
<br>
arr.forEach(callbackFunction);
<br>
<b>callbackFunction :<b> It is a function which passed as arguments to another functions.It is executed inside outer function.

```bash
let arr = [23,34,43,24];
arr.forEach((value)=>
{
    console.log(value);
});

// This function iterates over each elements of an array.
/* O/P
23
34
43
24
*/


/*

we can pass three arguments in forEach,filter and map method but last two arguments are optional.

*/


const output = arr.forEach((elementsOfArray,indexOfElement,array) =>{
});





let numbers = [10, 20, 30];

let result = numbers.map(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
    return element * 2 + index; // Multiply element by 2 and add its index
});

console.log(result); // Output: [20, 41, 62]






let numbers = [10, 15, 20, 25, 30];

let evenNumbers = numbers.filter(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
    return element % 2 === 0;  // Keep only even numbers
});

console.log(evenNumbers); // Output: [10, 20, 30]

/*
reduce method: It returns a single value.It is used when we want a single value from an array like sum,average,maximum,minimum.
*/

const output = arr.reduce((result,currentValue) =>{
        return result + currentValue;
});

// here result is previous element.

*/

```

<br>

```bash
    function a(){
        console.log("hello");
}

  document.write(a);
  // it will print the whole function.
  ```
<br>
This is because when you pass a function reference (like a) without parentheses, JavaScript treats it as an object. Converting a function to a string gives its source code (the code inside the function) as a string. 
<br>

<b>Higher Order function/methods :<b>
functions which either takes function as an argument or return function as output then it is called as Higher Order function. like forEach(),map(),filter() ,reduce() etc.

# Important from Arrow function:

```bash
let a = (dataId)=>{

    console.log("hello world",dataId)
}
a(9);

```

# Window

Window object is automatically created by the browser.

# DOM (Document object model)

when a html page is loaded then browser create window object and dom of the the page and bom(browser object model). Document object is a suboject of window. Basically it is a model of html code in the form of objects.

<br>
Advantages:
<br>
Note : We can access all the html code in JavaScript in the form of objects which is called Document.
<br>

Dom is used for dynamic changes/manipulation in the website.

<br>
console.dir(window.document);
It prints the object's properties and methods. Here console is also a window's object .
<br>

The console.assert() method in JavaScript is used for testing purposes. It writes an error message to the console if a specified condition evaluates to false. If the condition is true, nothing happens.
<br>

```bash
let y = 10;
console.assert(y < 5, "y is greater than 5"); // This will log an error because the condition is false
```
<br>

<br>
# Browser Object model(BOM):
The BOM allows JavaScript to interact with the browser itself (not just the content of the page, like the DOM). It provides objects for controlling things like browser history, navigation, and the size of the browser window.
<br>
Unlike the DOM, the BOM is not standardized. Different browsers can implement BOM features differently, though many BOM objects and methods are widely supported.
<br>
Key BOM Features:
<br>
window.history: Allows access to the browser’s history (e.g., window.history.back() to go back).
<br>
window.navigator: Provides information about the browser (e.g., browser name, version).
<br>
window.location: Allows access to the current URL and can be used to redirect the browser.
<br>
window.screen: Provides information about the screen’s resolution, size, etc.


<b> Node : </b> each element in the tree structure of dom is called as node .
<br>

```bash
let element1 = document.querySelector("body");
console.dir(element1.children);

// here it prints all the child elements of body.
```

<br>
Note : space is considered as text node by default.
<br>

# Custom Attributes :

when we want to create our own Attributes then we can make with a keyword data-attribute_Name.

```bash
<p data-game = "hello javascript world " data-player = "abc" class = "para"> This is a paragraph. </p>



// We can access the attributes:
let element = document.querySelector(".para");
element.dataset;
element.dataset.game;
element.dataset.player;


```
<br>

# Dom manipulation:

document.querySeletor("we can pass tag name or #id or .class");
document.querySeletorAll("we can pass tag name or #id or .class");

<br>
There are some more append methods:
<br>
node.appendChild(new_html_element); 
<br>
It appends new html element inside the parent node.
<br>
node.removeChild(new_html_element);
<br>
It removes the child node which is inside the parent node.

<br>
We can insertAdjacentHTML/Text/Element with the help of id attributes also and by target the element also.
<br>
```bash
box4.insertAdjacentHTML("beforebegin","<p>THis is a paragraph</p>");


box4.insertAdjacentElement("beforebegin",new_el);

box4.insertAdjacentText("afterend","hello JavaScript");


```

# className and ClassList

```bash
let element2 = document.querySelector("#box4");
element2.className = "text-black red";


// here text-black and red are different class.


element2.classList.toggle("red");
//The classList.toggle() method in JavaScript is used to add or remove a class from an element's class list. If the class is present on the element, it removes it; if it’s not present, it adds it. 

```

# event Handling :
When you click anywhere on the page, the click event is triggered.
<br>
The event.clientX and event.clientY properties return the X and Y coordinates of the mouse pointer relative to the viewport.


# Callback hell:

```bash

function getData(dataId ,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){

            getNextData();
        }

    },3000);

}


/*
while calling the functions , first getData(1) will executes
and then getData(2) and so on.
*/

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        })
    });
});


/* if (getNextData): This checks if the getNextData parameter (which is expected to be a function) is defined and truthy. In JavaScript, functions are objects and are considered truthy, so this condition checks if a callback function was passed to the getData function.

*/

```

# Promise

```bash

function getData2() {
    return new Promise((resolve,rejects) =>{
        console.log("I am a Promise");
        resolve("Success");
        rejects("rejected");
    });
}



// Remember that resolve and rejects are the functions provided by the JavaScript.



let a = getData2();

//executes when promise resolve.
// res shows the resolve message
a.then((res)=>{
    console.log(res);
})

//executes when promise rejected.
// err shows the error message.
a.catch((err)=>{
    console.log(err)
})
```

# Promise chain

```bash
   function getData(dataId){
    return new Promise((resolve,rejects)=>{

        setTimeout(()=>{
        console.log("data",dataId);
        resolve("succes")
    },3000);
})
}


// This is first way to call the function asynchronously.
getData(1).then((res) =>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
   })
 })


// This is better way than first way to call the function asynchronously.
getData(1).then((res) =>{
    return getData(2);
}).then((res)=>{
    return getData(3);

}).then((res)=>{
    console.log(res);
})


```

# async and await

```bash

function getData(dataId){
    return new Promise((resolve,rejects)=>{

        setTimeout(()=>{
        console.log("data",dataId);
        resolve("succes")
    },3000);
})
}




/*
In this function call , first getData(1) calls wait for its promise to settled down and then getData(2) will executes.
*/
async function getFullData() {
    console.log("fetching data 1 ...")
    await getData(1);
    console.log("fetching data 2 ...")
    await getData(2);

}

getFullData();
```


# Prototype

Prototype is a reference to a object.
<br>
We can set the custom Prototype to an object.
<br>

```bash
const employee1 = {

    // This an another way to create a function in objects without function keyword and key.
    calcTax(){
        console.log("Tax rate is 10%");
    }
}

const employee2 = {
    Salary : 30000
}

employee2.__proto__ = employee1;

```

# Classes and object

```bash
class Car{

    constructor(brand){
      console.log("This is a constructor of Car class");
      this.brand = brand;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop")
    }
}

let suzuki = new Car("Suzuki");
console.log(suzuki.start());
// start() method return undefined because if a method does not explicitly return a value then it return undefined automatically in js;

console.log(suzuki.brand);
let Nano = new Car();
// here we do not passing any arguments but this does not show me the error .It actually assigns undefined to brand variable.

Nano.brand = "Nano";  // we can change it.
console.log(Nano.stop());


```

# Inheritance

```bash
// Inheritance
class Person{

    constructor(name){
      this.name = name;
    }

    eat(){
        console.log("eat food")
    }
}

class Engineer extends Person{
    constructor(name,branch){
        super(name);
        this.branch= branch;

    }

    work(){
        console.log("eng work");
    }
}

let enObj1 = new Engineer("David","cs");
console.log(enObj1.name,enObj1.branch);
```


# API

An API (Application Programming Interface) is a set of rules, protocols, and tools that allows one software application to communicate with another. It defines the methods and data formats that programs can use to interact with each other, enabling them to share functionality or data.

<br>
API uses requests and response objects .
<br>

```bash
let promise = fetch(url or endpoints, [options]);

// Options is also an arguments which is used for types of requests.
// fetch() method returns a promise.
// response are in the form of objects.

```


<br>


```bash

        const url = 'https://cat-fact.herokuapp.com/facts';
        const getFacts = async ()=>{
        let response =  await fetch(url);

        console.log(response);// JSON format 
        
        let data = await response.json();
        console.log(data )
        }

        getFacts();

```

# Types of HTTP request methods w: 
1.GET Api request :

Purpose: Used to retrieve data from a server without making any changes to the data.
<br>
Characteristics:
<br>
It is a read-only request.
<br>
Safe to use because it doesn't alter any data.
<br>
Often used to fetch data like user information, product listings, etc.

<br>

2.POST (Create Data)
<br>
Purpose: Used to send data to the server to create a new resource.
<br>
Characteristics:
<br>
Often used when submitting forms or uploading data.
<br>
This request changes the state of the server by adding new data.
<br>
ex: create new user
<br>

3. PUT (Update Data)

Purpose: Used to update an existing resource on the server by sending the full updated data.
<br>
Characteristics:
<br>
Replaces the existing resource with the new data sent in the request.
<br>
Typically used for full updates, meaning you send the entire resource, not just the parts you want to change.
<br>
ex: updating user's information
<br>

4. PATCH (Partial Update)

Purpose: Used to partially update an existing resource. Only the fields that need to be updated are sent in the request.
<br>
Characteristics:
<br>
Changes just specific data in an existing resource, rather than replacing the entire resource (unlike PUT).
<br>
ex: updating user's email
<br>

5. DELETE (Remove Data)

Purpose: Used to delete an existing resource from the server.
<br>
Characteristics:
<br>
Removes the specified resource.
<br>
Cannot be undone, and typically there’s no response body (just a success or failure status).
<br>
ex: deleting a user.


# status code :
200 : success
<br>
400 : url not found
<br>
201 : something missing in the form like in form.
<br>
404 : page not found(api error)
<br>
504 : server error

# AJAX and AJAJ
AJAX : Asynchronous javascript XML
<br>
AJAJ : Asynchronous javascript json


# Bootstrap 
It is a frontend framework which helps to make the website responsive .

# How it works :
It works on grid system.
