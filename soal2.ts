type Person = {
	firstName: string;
	lastName: string;
  };
  
  function getFullName(person: Person): string {
	return `${person.firstName} ${person.lastName}`;
  }
  
  function wrapInArray<T>(item: T): T[] {
	return [item];
  }
  
  // Contoh penggunaan
  const person: Person = { firstName: "John", lastName: "Doe" };
  console.log(getFullName(person)); // Output: "John Doe"
  
  console.log(wrapInArray(42)); // Output: [42]
  console.log(wrapInArray("Hello")); // Output: ["Hello"]
  console.log(wrapInArray(person)); // Output: [{ firstName: "John", lastName: "Doe" }]
