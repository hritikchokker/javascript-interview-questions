function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'javascript';
    let age = 21;
  }
  
//   sayHi();

function loopTest(){
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
}

// loopTest();