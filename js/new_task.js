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

const messages = [1, 3, 5, 7, 3, 9, 8, 2, 5];


console.log(messages.map( message => message * 5)); // 8
