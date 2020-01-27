interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = firstName + " " + middleName  + " " + lastName;
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Michael", "Bruce", "Allen");

document.body.textContent = greeter(user);
