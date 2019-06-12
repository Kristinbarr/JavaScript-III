/* The for principles of "this";

* in your own words. explain the four principle for the "this" keyword below.

* 1. Window binding
  By default, 'this' binds to the global window object if it has no assigned context.

* 2. Implicit Binding
  When an object method is invoked, the 'this' keyword will refer to the object to the left of dot notation.

* 3. 'new' Binding
  The 'new' keyword creates a new instance from a constructor function. 'this' will refer to the instance that was created.

* 4. Explicit Binding
  Sets the context manually for 'this' with methods like `.call` or `.apply` on the function invocation. `.bind` is used to set the context but not immediately invoke the function.


* write out a code example of each explanation above
*/

// Principle 1 - code example for Window Binding:
this.place = 'NY'
console.log('window binding:', this.place) // 'NY'


// Principle 2 - code example for Implicit Binding:
const me = {
  name: 'Kristin',
  location: 'NYC',
  sayName: function() {
    console.log('Implicit binding: ', `Hello, I'm ${this.name}!`)
    // Hello, I'm Kristin!
  }
}
me.sayName()


// Principle 3 - code example for New Binding:
const Animal = function(type, name, color) {
  this.type = type
  this.name = name
  this.color = color
}
const Tommy = new Animal('Tiger', 'Tommy', 'orange')
console.log('new binding:', Tommy)
// Animal { type: 'Tiger', name: 'Tommy', color: 'orange' }


// Principle 4 - code example for Explicit Binding:
const meObj = {
  name: 'Kristin',
  location: 'NYC'
}
const hobbiesArr = ['code', 'bike', 'sew']

const describeMe = function(hobby1, hobby2, hobby3) {
  console.log(
    'Explicit binding: ',
    `I'm ${this.name} and I like to ${hobby1}, ${hobby2} and ${hobby3}.`
  ) // I'm Kristin and I like to code, bike and sew.
}
describeMe.call(me, ...hobbiesArr)
