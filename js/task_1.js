//ЗАДАЧА 1
// const arr = ['a', 'b', 'c']
// console.log(arr);

//ЗАДАЧА 2
 //выведите на экран содержимое первого, второго и третьего элементов.
// console.log(arr[0], arr[1], arr[2]);

//ЗАДАЧА 3

// const arr = ['a+b', 'c+d']
// console.log(arr[0] + ',' + arr[1]);

//ЗАДАЧА 4

// const arr = [2 ,5, 3, 9]
// const num1 = arr[0] * arr[1];
// const num2 = arr[2] * arr[3];
// const result = num1 + num2;
// console.log(result);

//ЗАДАЧА 5
// const max = 20;
// const min = 3;
// const result = Math.random() * ((max - min) + min);

// console.log(result.toFixed());


//ЗАДАЧА 6
// перевод чисела со знаком минус

// console.log(-Math.abs(4));

//ЗАДАЧА 7 
//Функция, которая возвращает массив целых чисел от n до 1, где n>0.

// const reverseSeq = n => {
//     let answer = [];          //intialize an array
    
//     for (let i=n; i > 0; i -= 1 ){  //loop down from n to 1
//       answer.push(i);         //push each i to the answer array
//     }
    
//     return answer; }           //return answer;

//     console.log(reverseSeq(7));
//===================================================================
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА
//ЗАДАЧА

// const num = {
//     names: 'Привет',
//     age: 20,
//     msg: 'МИР',
// }
// console.log(num);

// num.names = 'Пока';
// console.log(num);


//ЗАДАЧА Переворот строки и числа

// const n = "Your order is too large, not enough goods in stock!";

// const w = 456923759;

// let q = String(n).split(' ').join(' ').toLowerCase();

// let r  = parseInt(String(w).split('').sort().reverse().join(''));

// console.log(q);
// console.log(r);
//===============================================================

// const num = 9119;


// function squareDigits(num){
//     const string = num.toString();
//     const results = [];
//     for ( i = 0; i < string.length; i++){
//         results[i] = string[i] * string[i];
//     }
//     console.log(Number(results.join(''))) ;
// };

//===============================================================
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits[2]);
//===============================================================

// const clients = [12, 32, 6];
// let sum = 0 ;
// let div = clients;
// for (i = 0; i <= clients.length; i +=1) {
//     sum += clients[i];
   
// }
// console.log(clients[0]);
// console.log(sum);
// console.log(div);
//  console.log(Number(sum));
//===============================================================
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//     console.log('el:',client.toLowerCase());
// }

//===============================================================

// const number = [1, 3, 14, 20, 4, 7, 25, 6, 30];
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let num = 0; num < numbers.length; num += 1) {
//       if (numbers[num] < threshold) {
//               continue;
//           }
//           console.log(`Число больше чем ${threshold}: ${numbers[num]}`);
//         }
//===============================================================

// const clients = ["Mango", "Ajax", "Max", 'Sem'];
// const clientNameToFind = "Poly" && "Max" ;
// let message;

// for (const client of clients) {
    //   // На каждой итерации будем проверять совпадает ли элемент массива с
    //   // именем клиента. Если совпадает то мы записываем в message сообщение
    //   // об успехе и делаем break чтобы не искать дальше
    //   if (client === clientNameToFind) {
        //     message = "Клиент с таким именем есть в базе данных!";
        //     break;
        //   }
        
        //   // Если они не совпадают то запишем в message сообщение об отсутствии имени
        //   message = "Клиента с таким именем нету в базе данных!";
        // }
        
        // console.log(message); // "Клиент с таким именем есть в базе данных!"
        
//===============================================================
//===============================================================

// let a = 3;

// let b = a;

// a = 5;
// b = 7;

// console.log(a);
// console.log(b);


// let w = ['Max']

// let r = w;

// w.push("WERc") + w.push('HTRERG');

// console.log(r);

//===============================================================

//Возвращает сумму всех целых чисел от единицы и до этого числа. 
//Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
    //     sum +=i
    //     console.log(i);
    // }
    
    // console.log(sum);
    
//===============================================================

//Цикл for можно использовать для итерации по массиву, 
//то есть «перебрать» его поэлементно.


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length ; i += 1) { 
//     const fruit = fruits[i]; 
//     console.log(fruit);
// }
//===============================================================

//Массив чисел, и рассчитывает общую сумму его элементов.Общая сумма элементов 
//должна сохраняться в переменной S, которая возвращается, как результат работы функции.
// const clients = [12, 12, 6, 6];
// let S = 0;

// for (let i = 0; i < clients.length; i += 1) {

//     S += clients[i];

//     console.log(S);
// }


// function sum (clients) {
//     let s = 0; 
//     for (let i = 0; i < clients.length; i += 1) {

//         // s += clients[i];

//         console.log(i);
        

//     }
//    console.log([i]); 
// }
//============================================================
//============================================================

//Возвращает самое длинное слово в этой строке.


// const str = "The quick brown fox jumped over the lazy dog";

// const strSplit = str.split(' ');
// const sortSrt = strSplit.sort((strA, strB) => {
//     return strB.length - strA.length;
// })
// console.log(sortSrt[0]);

//============================================================

// const num = 30;
// console.log(num * (num + 1) / 2);



// function squareSum(numbers){
//     let sum = 0;
//     for ( let number of numbers ){
//      sum +=  number * number;
//     }
//    console.log(sum);
//    }

//    console.log(squareSum([0, 3, 4, 5]));