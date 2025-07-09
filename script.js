console.log("hlo i am going to start javascript")
document.getElementsByClassName('btn')

console.warn("this is waring")
console.error("it is error")
console.clear()






// project 1 add and remove wishlist


// variables
let button1 = document.querySelector('.btn1')
let button2 = document.querySelector('.btn2')
let button3 = document.querySelector('.btn3')

// logic
let number = 0;
var paragraph = document.querySelector('p').innerText =  (`your bag has ${number} items`)

let addone1 = () =>{
  number++;
  document.querySelector('p').innerText =  (`your bag has ${number} items`)
}


let adddouble = () =>{
   number += 2;
  document.querySelector('p').innerText =  (`your bag has ${number} items`)
}


let removeone = () =>{
   number--;
  document.querySelector('p').innerText =  (`your bag has ${number} items`)
}


// eventlistner

button1.addEventListener("click" , addone1)
button2.addEventListener("click" , adddouble)
button3.addEventListener("click" , removeone)


console.log(eval(5+4))




// project 2 calculator
// variables

let input = document.querySelector('.feild').value
let btnc = document.querySelector('.calc-btnC')
let btn1 = document.querySelector('.calc-btn1')
let btn2 = document.querySelector('.calc-btn2')
let btn3 = document.querySelector('.calc-btn3')
let btn4 = document.querySelector('.calc-btn4')
let btn5 = document.querySelector('.calc-btn5')
let btn6 = document.querySelector('.calc-btn6')
let btn7 = document.querySelector('.calc-btn7')
let btn8 = document.querySelector('.calc-btn8')
let btn9 = document.querySelector('.calc-btn9')
let btnten = document.querySelector('.calc-btnt')
let btnplus = document.querySelector('.calc-btnpls')
let btnminus = document.querySelector('.calc-btnmin')
let btnmultpl = document.querySelector('.calc-btnmul')
let btndivid = document.querySelector('.calc-btndi')
let btnstop = document.querySelector('.calc-btndot')
let btnequal = document.querySelector('.calc-btneq')



// logic
let clear = () =>{
  input = '';
  document.querySelector('.feild').value = input;
}
let addone = () =>{
  input = input + '1';
  document.querySelector('.feild').value = input;
}
let addtwo = () =>{
   input = input + '2';
  document.querySelector('.feild').value = input;
}
let addthree = () =>{
   input = input + '3';
  document.querySelector('.feild').value = input;
}
let addfour = () =>{
   input = input + '4';
  document.querySelector('.feild').value = input;
}
let addfive = () =>{
   input = input + '5';
  document.querySelector('.feild').value = input;
}
let addsix = () =>{
   input = input + '6';
  document.querySelector('.feild').value = input;
}
let addseven = () =>{
   input = input + '7';
  document.querySelector('.feild').value = input;
}
let addeight = () =>{
   input = input + '8';
  document.querySelector('.feild').value = input;
}
let addnine = () =>{
   input = input + '9';
  document.querySelector('.feild').value = input;
}
let addten = () =>{
   input = input + '0';
  document.querySelector('.feild').value = input;
}
let addplus = () =>{
   input = input + '+';
  document.querySelector('.feild').value = input;
}
let addminus = () =>{
   input = input + '-';
  document.querySelector('.feild').value = input;
}
let addmultiply = () =>{
   input = input + '*';
  document.querySelector('.feild').value = input;
}
let adddivid = () =>{
   input = input + '/';
  document.querySelector('.feild').value = input;
}
let adddot = () =>{
   input = input + '.';
  document.querySelector('.feild').value = input;
}
let addequal = () =>{
   input = eval(input)
  document.querySelector('.feild').value = input;
}

// eventlistner
btnc.addEventListener("click" , clear)
btn1.addEventListener("click" , addone)
btn2.addEventListener("click" , addtwo)
btn3.addEventListener("click" , addthree)
btn4.addEventListener("click" , addfour)
btn5.addEventListener("click" ,addfive)
btn6.addEventListener("click" ,addsix)
btn7.addEventListener("click" ,addseven)
btn8.addEventListener("click" ,addeight)
btn9.addEventListener("click" ,addnine)
btnten.addEventListener("click" ,addten)
btnplus.addEventListener("click" ,addplus)
btnminus.addEventListener("click" ,addminus)
btnmultpl.addEventListener("click" ,addmultiply)
btndivid.addEventListener("click" ,adddivid)
btnstop.addEventListener("click" ,adddot)
btnequal.addEventListener("click" ,addequal)



// project 3 bat ball game
// vaiables
let score = {
   win : 0,
   lost: 0, 
   tie: 0,
   displayScore(){
     return ` won:${score.win}, lost:${score.lost}, tie:${score.tie}`
   }
}
let bat = document.querySelector('.bt')
let ball = document.querySelector('.bl')
let stump = document.querySelector('.sp')
let para2 = document.querySelector('#para')
// function
function genrateComputerCohice (){
   let randomNum = Math.random() * 3;
     if(randomNum > 0 && randomNum <= 1){
           return 'bat'
     }
     else if (randomNum > 1 && randomNum <=2){
            return 'ball'
     }
     else{
            return 'stump'
     }
   
}

// function2
let getResult = (userMove, computerMove) =>{
   if (userMove === 'bat'){
        if (computerMove === 'ball'){
         score.win++;
         return  'user won'
   }
   else if (computerMove === 'bat'){
           score.tie++;
           return 'its tie'   
   }
   else{
           score.lost++;
           return 'computer won'
   }
}
   else if(userMove === 'ball'){
        if (computerMove === 'ball'){
          score.tie++;
         return 'its tie'
   }
   else if (computerMove === 'bat'){
       score.lost++;
      return 'computer won'
   }
   else{
      score.win++;
    return 'user won'
   }
   }
   else{
          if (computerMove === 'ball'){
              score.lost++;
              return  'computer won'
   }
         else if (computerMove === 'bat'){
             score.win++;
              return 'user won'
   }
      else{
          score.tie++;
       return 'its tie'
   }
         
   }
}
  

//   function3 
function showResult(userMove, computerMove , resultMsg){
  
     localStorage.setItem('score' , JSON.stringify(score))
   // alert(`you have chosen ${userMove}. computer choice is ${computerMove} and 
      
   //    ${resultMsg}
      
   //    ${score.displayScore()}
   //   `);
}

// logic

// bat

let cricket = () =>{
   computerChoice = genrateComputerCohice() 
   let resultMsg = getResult('Bat' , computerChoice);
   showResult('Bat' ,  computerChoice , resultMsg);
   
   para2.innerHTML = score.displayScore();
}
// ball
let football = () =>{
     computerChoice = genrateComputerCohice()
   let resultMsg = getResult('ball' , computerChoice);
   showResult('ball' ,  computerChoice , resultMsg);
    para2.innerHTML = score.displayScore();
}
// stump
let hockey = () =>{
  computerChoice = genrateComputerCohice()
     let resultMsg = getResult('stump' , computerChoice);
   showResult('stump' ,  computerChoice , resultMsg);
    para2.innerHTML = score.displayScore();
}

// eventlistner

bat.addEventListener("click" , cricket)
ball.addEventListener("click" , football)
stump.addEventListener("click" , hockey)
// var



// ternry operator make if else work easssy in just one line as

// let myAge = 11;
// let result = myAge > 15 ? 'valid' : 'not valid'
// console.log(result)

// function to check even or odd

function evenOdd (num){
   if(num%2 === 0){
      return 'its even'
   }
   else{
      return 'its odd'
   }
}
console.log(evenOdd(15))
console.log(evenOdd(19))
console.log(evenOdd(151))
console.log(evenOdd(152))

// function for larger num
let larger = (num1 , num2) =>{
   if(num1>num2){
      return `${num1} is larger`
   }
   else{
      return `${num2} is larger`
   }
}
console.log(larger(5 , 10))

// objects
let product = {
  company : 'mango',
  price : 430,
  tag : 'star',
};
console.log(product)
console.log(product.company)
product.company = 'apple'
console.log(product)

delete product.company;
console.log(product)

// Nested objects

let product2 = {
   company : 'apple',
   price : 500,
   itemName : 'Shirt' ,

   // we can also use function in js thats called method
   displayPrice(){
      // console.log(`price of product is ${product2.price}`)
      // we can also acces function using this keyword as
      console.log(`price of product is ${this.price}`)
   }
}
product2.displayPrice();
// destructring short method to access 
let {price} = product2;

// autoboxing means we can use function/method in premitive data as 
console.log('its me ayesha'.toUpperCase())

// json 
// localStorage.setItem('Name', 'javascript');
console.log(localStorage.getItem('Name'))
// localStorage.clear();

let myDate = new Date();
console.log(myDate)
console.log(myDate.getTime())

// json and dom practice
function dogreeting(personName = 'dear'){
let date = new Date()
let hours = 20;

let heading = document.querySelector('#greeting')

if(hours > 5 && hours< 12){
   heading.innerHTML = `Good Morning ${personName}`
}else if(hours > 12 && hours< 18){
   heading.innerHTML = `Good afternoon ${personName}`
}else{
   heading.innerHTML = `Good Night ${personName}`
}
}
dogreeting('Ayesha')

// variable
let pressed = document.querySelector('#my-btn');



// function
let noofCount = localStorage.getItem('noofCount') || 0;
let increment = () =>{
    noofCount++;
    localStorage.setItem('noofCount' , noofCount)
    updatebutton()
}

let updatebutton = () =>{


     if(noofCount % 2 == 0){
      pressed.classList.remove('js-odd')
      pressed.classList.add('js-even')
    }else{
       pressed.classList.remove('js-even')
      pressed.classList.add('js-odd')
    }
    pressed.innerHTML = noofCount;
}
updatebutton()
// eventlistner
pressed.addEventListener('click' , increment)






// arrays
let Array = [1 , 3, 'Ayesha' , 6]
console.log(Array[2])
console.log(Array.length)
console.log(typeof(Array))
// we can use push , pop , shift , unshift, slice , splice, sort 




// loops
// for , while , dowhlw
let num = 1;
while(num<=10){
   console.log(num)
   num++;
}

let num1 = 5;
do{
   console.log(num1)
   num1++
}while(false)


for(let num2 = 1; num2<=20; num2++){
   console.log(num2)
}

let arr = [4, 5, 9,0,12, 45, 6];
for(let index = 0; index < arr.length ; index++){
   console.log(arr[index])
}


// accumulator
let arr2 = [3,5,6,7,8,9];
let sum = 0;
for(let i=0; i<arr2.length; i++){
   sum +=arr2[i]
}
console.log(`sum of array is ${sum}`)

let square = [];
for(let i=0; i<arr2.length; i++){
   // square[i] = arr2[i] * arr2[i];
   square.push(arr2[i] * arr2[i]);
}
console.log(square)

// break is used as your required condition meets it exits the program 

let arr3 = [2 ,6, 5, 7,9,1,7,5,3,4,8,0];
    for(let i=0; i<arr3.length; i++){
           if(arr3[i] === 4){
          console.log(`number found at index ${i}`);
          break;
   }
}

for(let i=0; i<50; i++){
   console.log(i)
   if(i === 29){
      break;
   }
}

// continue is used to skip the present itration and move to next itration 
for(let i=0; i<=30; i++){
   if(i % 2==0){
      continue;
   }
   console.log(i);
}

// practice of arrays and loop
let arr4 = [5,6];
arr4.push(7);
arr4.unshift(4)
console.log(arr4)

function getElement(arr, position){
     return arr[position - 1];
}
let arr5 = [1,2,3,4,5,6,7,8,9]
console.log(getElement(arr5 , 2))

// slice
let arr6 = [2,3,5,6,8,9]
console.log(arr6.slice(1,5));

// count 5 prime numbers
function isPrime(numPrim){
   for (let i = 2; i<numPrim ; i++){
      if(numPrim%i === 0){
         return false
      }
   }
   return true;
}

let numPrim = 2;
let i = 0;
while(true){
   if(isPrime(numPrim)){
      console.log(numPrim)
      i++;
      if(i >= 5){
         break
      }
   }
   numPrim++;
}
 
for(let i = 10; i>0 ; i--){
   console.log(i);
}

console.log("ayehsa")

let myArr = [1,-6,5,7,-93];
for(let i = 0; i<= myArr.length; i++){
   if (myArr[i] < 0) 
      continue;
   console.log(myArr[i]);
}

// concatnation
let arr7 = ['my' , 'name' , 'is' , 'Ayesha']
let results = '';
for (let i = 0; i< arr7.length; i++){
   results += arr7[i] + ' ';
}
console.log(results)

// todo list pro
// 1️⃣  Load saved list or start empty ↓
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

displayItem();

let main = document.querySelector("#app");

let addTodo = () => {
  let inputElement = document.querySelector("#feild");
  let dateElement = document.querySelector("#date");

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });

  // 2️⃣  Save after every change ↓
  localStorage.setItem("todoList", JSON.stringify(todoList));

  inputElement.value = "";
  dateElement.value = "";

  displayItem();
};

function displayItem() {
  let container = document.querySelector("#todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn" onclick="
        todoList.splice(${i}, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList)); 
        displayItem();
      ">Delete</button>
    `;
  }
  container.innerHTML = newHtml;
}

let addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", addTodo);


// for each
let food = ['wheet' , 'milk' , 'pizza' , 'egg' , 'bread']
food.forEach((num) =>{
   console.log(num);
})

// filter
let colors = [1,2,3,4,5,6,7,8,9,0]
let odds = colors.filter((num) =>{
   if(num%2 === 0){
      return true;
   }
   else{
      return false;
   }
})
console.log(odds)
let newodds = colors.filter((num) =>{
   return num%2 ===1;
})
console.log(newodds)

// map will remain the number of elements same but will chanj the value
let arrm = [1,3,5,6,7];
let squares = arrm.map (num => num*num);
console.log(squares)



// practice set 
let multiply = function (a,b){
   return a*b;
}
console.log(multiply(3,5))

// 2 creat function that run twice

let printGreet = () =>
   console.log('Hello Ayesha')
   let runTwice = inputFunction =>{
      inputFunction()
      inputFunction()
   }

runTwice(printGreet)


// let growbtn = document.querySelector('#grow')
// let doublesize = () =>{
// let growbtn = document.querySelector('#grow')
// growbtn.classList.add('js-grow-double');
// }


// growbtn.addEventListener("click" , doublesize)

// wait until the whole document is parsed

    let growbtn = document.querySelector('.grow');   // now it's not null

    let doublesize = () => {
       let growbtn = document.querySelector('.grow'); 
      growbtn.classList.add('.grow-double');         // uses your CSS rule
    };

    growbtn.addEventListener('click', doublesize);
  