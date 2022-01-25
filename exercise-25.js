const person = {
  set firstName (name) {
    this._firstname = name;
  },
  get firstName () {
    return this._firstname;
  },
  set lastName (lastName) {
    this._lastName = lastName;
  },
  get lastName () {
    return this._lastName;
  },
  fullName () {
    return `${this._firstname}, ${this._lastName}`;
  }
}

const simon = Object.create(person)
simon.firstName = "Simon";
simon.lastName = "Collins";

const john = Object.create(person)
john.firstName = "John";
john.lastName = "Doe";
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins