
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

function getKeys(obj) {
  let newArray = []
  for (let key in person) {
    newArray.push(key)
  }
  return newArray
}

const keys = getKeys(person);
console.log(keys);