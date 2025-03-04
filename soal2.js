function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
function wrapInArray(item) {
    return [item];
}
// Contoh penggunaan
var person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person)); // Output: "John Doe"
console.log(wrapInArray(42)); // Output: [42]
console.log(wrapInArray("Hello")); // Output: ["Hello"]
console.log(wrapInArray(person)); // Output: [{ firstName: "John", lastName: "Doe" }]
