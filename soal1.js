function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
// Contoh penggunaan
var person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person)); // Output: "John Doe"
