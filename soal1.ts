type Person = {
    firstName: string;
    lastName: string;
  };
  
  function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }
  
  // Contoh penggunaan
  const person: Person = { firstName: "John", lastName: "Doe" };
  console.log(getFullName(person)); // Output: "John Doe"
  