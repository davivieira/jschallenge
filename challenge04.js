//Prototypal Inheritance

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log('Walking...');
}

function Person(name) {
  Animal.call(this, name);
}

Person.prototype = Object.create(Animal.prototype);

Person.prototype.speak = function() {
  console.log('I can speak! ;)');
}

const p = new Person('Davi');

console.log(p.name);
p.walk();
p.speak();
