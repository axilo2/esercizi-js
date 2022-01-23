function adultFilter(persons) {
  let filter = 0;
  for (let x = 0; x < persons.length; x++) {
    if (persons[x].age >= 18){
      result[filter] = persons[x];
      filter++;
    }
    
  }
  return result;
}

const result = [];

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
