// @ts-check

/**
 * Student Name
 * @type {string}
 */

const studentName = "Valentine OO";

/**
 * Array of grades
 * @type {Array<number>}
 */

const grades = [90, 80.7, 100, 70, 85];

/**Tod object
 * @type {{id: number|string, text: string}}
 */

const todo = {
  id: 1,
  text: "Hello",
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A  student
 * @typedef{object} Student
 * @property{number} id - student ID
 * @property{string} name - Student name
 * @property{string|number} [age] - Student age (optional)
 * @property{boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: "John Doe",
  age: 20,
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   * @param {object } personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with the name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} `);
  }
}
