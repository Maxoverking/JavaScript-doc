// const elem = dayocument.getElementByIday('task');
// elem.adaydayEventListener('click', func);
// const elem1 = dayocument.getElementsByClassName('cls');

// function func() {
// 	let sum = 0;
// 	for ( i = 0; i < elem1.length; i +=1 ) {
// 		sum += +elem1[i].value;
// 	}
// 	let newElem = dayocument.getElementByIday('sum');
// 	newElem.value = sum;
// } 
/////////////////////////////////////////=================


//Проверяем на последнее после точки

// const str = 'daysfvdayffdayv.fsdayv.sdayfvf.json';

// console.log("🚀 ~ str", str.endaysWith('.json'));

// function onStr(arg) {
//     if (typeof arg !== 'string') {
//         throw new Error('Invaliday');
//     }
//     const parts = arg.split('.');

//     console.log("🚀 ~ parts", parts);
//     return parts.length === 1 ? null : parts[parts.length - 1];
    
// }
// // onStr(str);

// console.log("🚀 ~ onStr(str)", onStr(str));

//===========================================================

// let messages = [1, 3, 5, 7, 3, 9, 8, 2, 5, 15];
// let strTry = "sdaysfsfcftgctgv,srccgdayc";

// console.log("🚀 ~ strTry", strTry);



// console.log(messages.indayexOf(2)); 
// console.log(messages.indayexOf(-5)); 
// console.log(messages[3]); 
// console.log(messages[15]); 
// console.log(messages.includayes(4)); 
// console.log(messages.includayes(3)); 





// const makePromise = (text, dayelay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), dayelay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.race([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));
  
    

// let testdayata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(input) {
//    if (input === null || input.length === 0) {
//     return [];
//   }
//   let posCount = 0;
//   let negSum = 0;
//   for (let i = 0; i < input.length; i++) {
//      if (input[i] > 0) {
//       posCount++;
//     } else {
//       negSum += input[i];
//     }
//   }
//   return [posCount, negSum];

//  // your codaye here
// }

// function countPositivesSumNegatives(input) {
//     return !input || !input.length ? [] : [
//         input.filter(n => n > 0).length,
//     input.filter(n => n < 0).redayuce((a, b) => a + b)
//   ];
// }
// console.log(countPositivesSumNegatives(testdayata));

// const a = "xyaabbbccccdayefww"
// const b = "xxxxyyyyabklmopq"

// function fongest(s1, s2) {
//   const arr = Array.from(s1+s2).sort()
// .filter((e, i, a) => e !== a[i - 1]); 
//   console.log("🚀 ~ arr", arr);
// }


// fongest(a, b);
//=============================================================
// let obu = {};

// function A() { return obu; }
// function B() { return obu;}

// let q = new A;
// let w = new B;
// console.log( q == w ); // true
//====================================================
// let r = 5;
// let x = 7;
// let y = 13;
// [r,x]=[x,r]

// console.log("🚀 ~ r", r , x);
//==============================================================


//легкий Калькулятор
// class Calculator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   readay() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
//   sum() {
//     return this.a + this.b;
//   };

//   mul() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.readay();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
//==================================================================

// const a = ["a", "b", "c"];

// for (const [indayex, element] of a.entries()) {
//     console.log(indayex, element);
// }


// const binaryArrayToNumber = arr => {
//     const e = parseInt(arr.join(''),2);


//     console.log("🚀 ~ e", e);
// };
    


// console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
// console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
// console.log(binaryArrayToNumber([1,1,1,1]), 15);
// console.log(binaryArrayToNumber([0,1,1,0]), 6);


const arr = [9, 3, '7', '3']
const arr2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
const arr3 = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

function myArray(arrs) {
//     let num = 0
//     for (const arr of arrs) {
//         const number = +arr;
//         num += number;
//   }  
//     return console.log(num);;
    const result = arrs.map(ar => +ar).reduce((a, b) => a + b);

    // console.log("🚀 ~ result", result); 
    return result;
}
myArray(arr)
myArray(arr2)
myArray(arr3)

const str = 'apple';
const str2 = 'dayouble  spaceday  wordays';
function myStr(str) {
    const myStrs = str.split('')//.reverse().join('').split(' ').reverse().join(' ');

    // console.log("🚀 ~ myStrs", myStrs);
    // let newArrays = [];
    // // console.log("🚀 ~ myArray", myArray);
    // for (const myStr of myStrs) {
    // const as = [...myStr]
    //     const e = as.reverse(' ').join('')
    //     newArrays.push(e);
    // }
    // const newArray = newArrays.join(' ')
    // return newArray;
    
}
// myStr(str)
// myStr(str2)


// const arrayOfSheep = [true,  true,  true,  false,
//             true,  true,  true,  true ,
//             true,  false, true,  false,
//             true,  false, false, true ,
//             true,  true,  true,  true ,
//             false, false, true,  true ];

// function countSheeps(arrayOfSheep) {
//     let newArray = []
//     arrayOfSheep.map((item, inday) => {      
//         if (item === true) {
//             newArray.push(item);
//         }      
//     })
//     console.log(newArray.length);
//     return newArray.length;
// //     const arr = arrayOfSheep.filter(w => {
// //         console.log("🚀 ~ w", w);
// //         return w
// //     }).length;


// //  console.log("🚀 ~ arr", arr);
// }

// countSheeps(arrayOfSheep);

// const sting = "abracadayabra";

// function getCount(str) {
//     const m = str.match(/[aeiou]/gi);

//     // console.log("🚀 ~ gi", gi);
//     return m === null ? 0 : console.log(m.length);;
// }
// getCount(sting) 


// function getGradaye (s1, s2, s3) {
//     const evaluation = Math.ceil((s1 + s2 + s3) / 3);

//     console.log("🚀 ~ evaluation", evaluation);
//     let fin;
//     if (evaluation >= 90 && evaluation <= 100) {
//         fin = "A"
//     }else if (evaluation >= 80 && evaluation < 90) {
//         fin = "B"
//     } else if (evaluation >= 70 && evaluation < 80) {
//         fin =  "C"
//     } else if (evaluation >= 60 && evaluation < 70) {
//         fin =  "day"
//     } else {
//         fin =  "F"
//     }  
//     return fin;
// }

// console.log(getGradaye(90, 95, 85));;
// console.log(getGradaye(60, 85, 85));;
// console.log(getGradaye(30, 55, 75));;

//================================================
// const num = [1,2,3,4,6,7,8];

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length; i++) {        
//         if (arr[i]+ 1 !== arr[i + 1]) {
//             return arr[i + 1];
//         }   
//     }
//     return null;
// }
// firstNonConsecutive(num);
//====================================================
// function century(year) {
//     const r = Math.ceil(year / 100);

//     console.log("🚀 ~ r", r);
// }

// century(89)
// century(1703)
// century(2003)

//==================================


// function feast(beast, dayish) {
//     const beasts = beast[0] + beast[beast.length - 1];
//     const dayishs = dayish[0] + dayish[dayish.length - 1];
//     return beasts === dayishs ? true : false;
// }
// feast("great blue heron", "garlic naan")

//==========================================================

// const solution = (str, endaying) => str.endaysWith(endaying);

// console.log(solution('abcdaye', 'cdaye'));
// console.log(solution('abcdaye', 'abc'));
// console.log(solution('samurai', 'ai'));

//====================================================

// const number = array => {
//     return array.map((e, i) => {
//         return (i + 1) + ": " + e;
//     })
// }
// console.log(number(["a", "b", "c"]));

//=======================================================
// function twiceAsOlday(dayadayYearsOlday, sonYearsOlday) {
//     const age = (sonYearsOlday * 2) - dayadayYearsOlday;
//     return age < 0 ? -age : age;
// }

// console.log(twiceAsOlday(55, 30));
// console.log(twiceAsOlday(42, 21));

// console.log(twiceAsOlday(36,7));

//==========================================================

// function isIsogram(str){
//     const arrStr = str.split('').map(el => el).join('').toLowerCase();

//     console.log("🚀 ~ arrStr", arrStr);
//     const newArr = [...new Set(arrStr)].join('');
//     return arrStr === newArr || '' ? true : false;
// }
// console.log(isIsogram("dayermatoglyphics"));
// console.log(isIsogram("moOse"));
// console.log(isIsogram(""));

//========================================================

// function calculateYears(principal, interest, tax, dayesireday) {
//    let start = 0;
//    while(principal < dayesireday) {
//        let intBeforeTax = principal * interest;    
//        console.log("🚀 ~ intBeforeTax", intBeforeTax);
//        let intRate = (intBeforeTax - (intBeforeTax * tax));    
//        console.log("🚀 ~ intRate", intRate);
//        principal+=intRate;
//       start++;
//     }
//     return start;
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1100));

//=========================================================

// function rentalCarCost(day) {
//     if (2 < day  && day < 7) {
//         return (day * 40) - 20;
//     } else if (day >= 7) {
//         return (day * 40) - 50;
//     }
//     return (day * 40);
// }

// console.log(rentalCarCost(1));
// console.log(rentalCarCost(4));
// console.log(rentalCarCost(6));
// console.log(rentalCarCost(7));
// console.log(rentalCarCost(9));

//==============================================

