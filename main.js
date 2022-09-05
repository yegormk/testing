// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     getData(){
//         console.log(`Name is ${name} and currently ${age} years old`);
//     }
//     changeName(newName){
//         this.name = newName;
//     }
// }


// class House{
//     constructor(adress, price, residentals){
//         this.adress = adress;
//         this.price = price;
//         this.residentals = residentals;
//     }

//     getAdress(){
//         console.log(this.adress);
//     }
//     getResidentals(){
//         for(let i = 0; i < this.residentals.length; i++){
//             console.log(this.residentals[i].name);
//         }
//     }
// }

// let Yehor = new Person('Yehor', 19)
// let Angela = new Person('Angela', 19)

// let house = new House('Kyivsk`a Oblast', 34000, [Yehor, Angela])

// house.getResidentals();

//Enheritance

// class Programmer extends Person {
//     constructor(name, age, company, salary, language){
//         super(name, age);
//         this.company = company;
//         this.salary = salary;
//         this.language = language;
//     };

//     sayHi = () => {
//         console.log(`Hello, I am a programmer! My name is ${this.name} I work for ${this.company}`);
//     };
// }

// let programmer = new Programmer('Yehor', 19, 'Twitch', 10000, 'JavaScript');
// programmer.sayHi();

//Polymorphism







// Object:

// let person = {
//     name: 'Yehor',
//     eyeColor: 'Brown',
//     age: 19,
//     updateAge: () => ++person.age //this.age can`t be used in arrow functions
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.updateAge()); 
// console.log(person.age);






//~~~~~~~~~~~~~~~~~~~EVENTS
// const divs = document.querySelectorAll('div');

// addGlobalEventListener('click', 'div', e => {
//     console.log('Hi!');
// })

// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, e => {
//         if (e.target.matches(selector)) callback(e)
//     })
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Higher order functions and ARRAY FUNCTIONS
// function multiplier(factor){
//   return (x) => x * factor;
// }

// let doubler = multiplier(2);
// let tripler = multiplier(3);


//~~~~~~~~~~~~~~~~Map() and fill()
// let vals = new Array(100);
// console.log(vals);

// vals = vals.map(x => x * 2);
// console.log(vals);

// vals = Array(100).fill().map(() => Math.floor(Math.random() * 100)); // Array(100).fill().map(Math.random)
// console.log(vals);

//~~~~~~~~~~~~~~~~Reduce
// let vals = [5, 4, 1, 2, 9];

// let sum = vals.reduce((acc, val) => acc + val);
// console.log(sum);

// let biggest = vals.reduce((acc, val) => val > acc ? val : acc);
// console.log(biggest);


//~~~~~~~~~~~~~~~~Filter
// let vals = [5, 4, 1, 2, 9];

// vals = vals.filter(x => x % 2 == 0);
// console.log(vals);
// let s = 'It was a dark and stormy night.'
// let words = s.split(/\W+/).filter(word => word.length);
// console.log(words);


//~~~~~~~~~~~~~~~~Sort




//###Note: Map() AND filter() functions create a new array (DON`T CHNAGE AN OLD ONE)| OPPOSITE to fill()

















window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }







