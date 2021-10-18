function Person(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

Person.prototype.sayHello = function(){
    return this.firstName + " " + this.lastName;
};

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 34
};

var person2 = new Person("Jan", "Kowalski", 43);

for (const [key, value] of Object.entries(person2)) { //wyświetlenie wszystkich pól i wartości obiektu
    console.log(key, value);
  }


  for (var key in person2){ //wyświetlenie wszystkich pól obiektu + to co znajduje się w prototypie (nazwy metod, pól stworzonych przez nas - wbudowane są nonenumerable)
      console.log(key);
  }

  for (var key in person2){
      if(person2.hasOwnProperty(key)){ //wyświetlenie wszystkich pól obiektu pomijajac to co znajduje się w prototypie liczy się tylko obiekt Person 
                                        
          console.log(key);
      }
  }

