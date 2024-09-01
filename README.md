
# OPPS CONCEPTS IN ``javaScript ``

<hr>

<span><img src="./asstes/comp.jpg" height="200px" width="300px"></span>

## object orianted programming
 ```javascript 
 //to structure our code..
  1 prototype
  2 new operator
  3 constructors
  4 classes
  5 keywrods (extends,super)
 ```
### object prototype
 ``` html
 Prtotype are the machanism by which javaScript objects inherit fatures from one another. 

 Its like a single tamplet object that all objets inherit methods and properties from without having their own copy.
 
 ```


 ```java

 1 arr.__proto__(refrence) <--- refrence of prototype object

 2 Array.prototype() <--- actual Array prototype object 
 
 3 String.prototype() <--- actual Strng prototype object 
  ````

  ```javascript

// browser console..

  let arr=[1, 2, 3, 4]

  >arr
  0: 1
  1: 2
  2: 3
  3: 4

  length: 4[[Prototype]]: Array(0)

  // protype consist all methods related to array like eg. push ,pop splice...

  /* and we crate new array that time we crate new instance of array object so our crate array access array prototype methods.. */
  ````

  ```javascript 
  // chnage the defination of push function
   
arr.__prototype.push = function(num){
    resturn(`you want push ${num} but these time you are not able to push number`)
}

> arr.push(5)
> you want push 5 but these time you are not able to push number

  ```

  ### FACTORY ```FUNCTIONS```

  ```javascript
function makeStudent(name,rollnum){
    const student= {
       name:name,
       roll_num:rollnum,
       say(){`my name is ${this.name}`}
    };
    return student
}

let s1 = makeStudent('sarthak',12)

let s2 = makeStudent('sarth',13)

console.log(s1.say)

  // these function

  ```