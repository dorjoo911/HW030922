"use strict";
// Fix the code below using an arrow function and then using bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(function(student) {
    // Error: Cannot read property 'title' of undefined
    console.log(this.title + ': ' + student)
    });
    }
};
   group.showList();
   
   function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
  }
  
  let f1000 = delay(alert, 1000);
  
  f1000("test"); // shows "test" after 1000ms

  function spy(func) {

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }