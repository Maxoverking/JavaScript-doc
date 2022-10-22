// const elem = document.getElementById('task');
// elem.addEventListener('click', func);
// const elem1 = document.getElementsByClassName('cls');

// function func() {
// 	let sum = 0;
// 	for ( i = 0; i < elem1.length; i +=1 ) {
// 		sum += +elem1[i].value;
// 	}
// 	let newElem = document.getElementById('sum');
// 	newElem.value = sum;
// } 
/////////////////////////////////////////=================


//Проверяем на последнее после точки

const str = 'dsfvdffdv.fsdv.sdfvf.json';

console.log("🚀 ~ str", str.endsWith('.json'));

// function onStr(arg) {
//     if (typeof arg !== 'string') {
//         throw new Error('Invalid');
//     }
//     const parts = arg.split('.');

//     console.log("🚀 ~ parts", parts);
//     return parts.length === 1 ? null : parts[parts.length - 1];
    
// }
// // onStr(str);

// console.log("🚀 ~ onStr(str)", onStr(str));

//===========================================================

let messages = [1, 3, 5, 7, 3, 9, 8, 2, 5, 15];
let strTry = "sdsfsfcftgctgv,srccgdc";

console.log("🚀 ~ strTry", strTry);



console.log(messages.indexOf(2)); 
console.log(messages.indexOf(-5)); 
console.log(messages[3]); 
console.log(messages[15]); 
console.log(messages.includes(4)); 
console.log(messages.includes(3)); 





const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.race([promiseA, promiseB])
  .then(value => console.log(value)) // "promiseA value"
  .catch(error => console.log(error));
  
    