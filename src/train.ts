// //MIT task #G

// function getHighestIndex(a) {
//     let maxIndex = 0;

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > a[maxIndex]) {
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// console.log(getHighestIndex([5, 12, 21, 8, 2]));
// console.log(getHighestIndex([5, 12, 35, 45, 55]));



//MIT task #H

// function getPositive(a: number[]): string {
//     const arrayA: number[] = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > 0) {
//             arrayA.push(a[i]);
//         }
//     }
//     return arrayA.join('');
// }

// console.log(getPositive([1, -4, 2]));
// console.log(getPositive([1, -3, 3, -2, 2]));


//MIT task #H-2
// function getDigits(a: string): string {
//     const digits: string[] = [];

//     for (let i=0; i < a.length; i++) {
//         if ( a[i] >= '0' && a[i] <= '9') {
//             digits.push(a[i]);
//         }
//     }
//     return digits.join('');
// }

// console.log(getDigits("m14i1t"));
// console.log(getDigits("ma35gd21t0"));


//MIT task #I
// function majorityElement(a: number[]): number {
//     let maxCnt:number = 0;
//     let maxNumber: number = a[0];
    
//     for ( let i = 0; i < a.length; i++) {
//         let cnt: number = 0;
//         for (let k = 0; k < a.length; k++) {
//             if ( a[i] == a[k]) {
//                 cnt++;
//             }
//         }

//         if ( cnt > maxCnt) {
//             maxCnt = cnt;
//             maxNumber = a[i];
//         }
//     }
//        return maxNumber;
// };

// console.log(majorityElement([1,2,3,3,5,6,3,7,3]));
// console.log(majorityElement([1,2,3,4,5,6,4,7,4]));

// //TASK J:
// function findLongestWord(a: string): string { //define
//     const sentence = a.split(' ');
//     var lengths: string = "";
//     for ( let i = 0; i < sentence.length; i++) {
//         if(sentence[i].length > lengths.length) {
//             lengths = sentence[i];
//         }
//     }
//     return lengths; //longest word 
// }
// console.log(findLongestWord("I came from Uzbekistan!")); 
// console.log(findLongestWord("I came from KoreaOfRepublic!"));//call 

// //TASK K
// function countVowels(a: string): number {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let cnt: number = 0;
    
//     for (let i = 0; i < a.length; i++) {
//         if (vowels.includes(a[i])) {
//             cnt++;
//         }
//     }
    
//     return cnt;
// }

// console.log(countVowels("string"));
// console.log(countVowels("vowel"));
// console.log(countVowels("terminal"));

// // TASK L
// function reverseSentence( a: string): string {
//     const words = a.split(' ');
//     const reversedWords = words.map(word => {
//         return word.split('').reverse().join('');
//     });
//     return reversedWords.join(' ');
// }

// console.log(reverseSentence("we like coding!")); 
// console.log(reverseSentence("hello world"));      
// console.log(reverseSentence("TypeScript")); 



// // TASK M
// function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
//     return numbers.map(num => ({
//         number: num,
//         square: num * num
//     }));
// }

// console.log(getSquareNumbers([1, 2, 3]));
// console.log(getSquareNumbers([4, 5, 6]));



// // TASK N
// function palindromCheck(a: string): boolean {

//     const reversedWords = a.split('').reverse().join('');

//     if ( a === reversedWords) {
//         return true;
//     } else {return false};
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("121213"));
// console.log(palindromCheck("mom"));

// //TASK O
// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//         }
//     }
    
//     return sum;
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));
// console.log(calculateSumOfNumbers([102, "34", {son: 95}, false, 23]));




// //TASK P
// function objectToArray(obj: object): [string, any][] {
//   return Object.entries(obj);
// }
// console.log(objectToArray({a: 10, b: 20})); 
// console.log(objectToArray({name: 'Ace', age: 23, city: 'Busan'}));



//TASK Q

function hasProperty(obj: object, propertyName: string): boolean {
  return propertyName in obj;
}

interface Car {
  name: string;
  model: string;
}

const car: Car = { name: "BMW", model: "M3" };

console.log(hasProperty(car, "model"));  
console.log(hasProperty(car, "year")); 
console.log(hasProperty({ name: "BMW", model: "M3" }, "production")); 




/* Project Standards:
    - Logging Standards
    - Naming Standards: 
            function, method, variable => Camel case standard => goHome
            class => Pascal case standard => MemberService
            folder => Kebab case
            css => Snake case => button_size
    - Error Standards
*/



/** API types: Traditional & RestApi, GraphQL
 * methods: post & get
 * structure: header & body
 */

/** Frontend development:
 * traditional development -> BSSR (Admin page)  -> EJS
 * modern development -> SPA (User app) -> React library
 */


/** Cookies:
 * request join
 * self destroy
 */


/**Validations:
 * Frontend
 * Backend
 * Database
 * DTO
 */