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

//TASK K
function countVowels(a: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cnt: number = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) {
            cnt++;
        }
    }
    
    return cnt;
}

console.log(countVowels("string"));
console.log(countVowels("vowel"));
console.log(countVowels("terminal"));


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


/** Sessions
 * request join
 * self destroy
 */
