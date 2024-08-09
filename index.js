function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'javascript';
    let age = 21;
}

//   sayHi();

function scopeEx(){
    (() => {
        let x, y;
        try {
          throw new Error();
        } catch (x) {
          (x = 1), (y = 2);
          console.log(x);
        }
        console.log(x);
        console.log(y);
      })();
}

// scopeEx();

function loopTest() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
}

// loopTest();

function shapeLog() {
    const shape = {
        radius: 10,
        diameter() {
            return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
    };

    console.log(shape.diameter());
    console.log(shape.perimeter());
}

// shapeLog();


function keyVal() {
    const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };
    a[b] = 'hello';
    a[c] = 'world';
    console.log(a[b]);
}

// keyVal();

function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

//   checkAge({ age: 18 });


// write a debounceTime function that takes a function and a timeout
// debounceTime(func,timeout);


function sum(a,b){
    return a+b;
}

// sum();
/**
 * memoise this sum function in such a way
 * if sum(10,10) => output = 20
 * if sum(10,20) => output = 30
 * if sum(10,10) => output = 20 // but in this case sum function should not execute instead we should get the result from a cache,
 *  as for these arguments we have already computed sum function
 *  */ 

// write a polyfill for Array.filter method



function timeOutExp(timeout){
    console.log('one');
    setTimeout(()=>{
        console.log('two');
    },timeout)
    console.log('three');
}

// timeOutExp();



/**
 * modify this timeOutExp in such a way that no matter how much timeout is passed
 * the final output should be
 * one
 * two //wait for the timeout passed
 * three
 *   */ 


function fetchDetails(){
    const idsArr = [1,2,3,4,5,6,7,8,9,10];
    // api url = https://jsonplaceholder.typicode.com/todos/1

    // todo => complete this function such that it calls all these apis concurrently and returns the result in array
}







