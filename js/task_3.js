
// // 1. Объявление параметров x, y, z
// const  multiply = function (w, t, y) {
//     return `Результат умножения равен ${w* t* y}`;
// }

// // 2. Передача аргументов
// console.log(multiply(2, 6, 3));  
// console.log(multiply(4, 8, 12)); 


// const elements = function (elmt) {

//     for (let i = 0; i < elmt.length; i += 1) {
        
//         return elmt;
//     }    
// }
// console.log(elements(["cat", "dog", "giraff"]));
// console.log(elements(["cat", "fish", "bat"]));
// console.log(elements(["cat", "mouse", "ant"]));
// console.log(elements([1, 4, 3,5,7,2,8]));
// console.log(`dgfstvedtf  erfw  `);

//===================================

// const numbers = [77, 97, 99, 87, 34, 62, 83, 16, 71, 11, 51, 55];


// const min = Math.min(...numbers);
// console.log(min);

// const max  = Math.max(...numbers);
// console.log(max);

// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
// const min = Math.min(...arr);
// console.log(min);


// for (let i = 0; i < numbers.length; i += 1) {
//   const element = numbers[i];
  // console.log(element);

  // const smallest = Math.min(String(element));
  // console.log(smallest);
// }
// let nums = numbers ;
// let num = Math.round(Math.random() * (99 - 11) + 11);
// console.log(Math.min(numbers));
// console.log(Math.max(77, 97, 99, 87, 34, 62, 83, 16, 71, 11, 51, 55));

// console.log(num);
// console.log(3 * 2);

// function bmi(weight, height) {
// if(weight/(height * 2) > 30 ){
//     return "Obese";
// }if (weight/(height * 2)  <= 30.0 && weight/(height * 2) > 25.0 ){
//   return "Overweight";
// }if (weight/(height * 2) <= 25.0 && weight/(height * 2) >= 18.5){
//   return "Normal";
// }
// return "Underweight"}

// console.log(bmi(150, 1.80));
// console.log(bmi(100, 1.80));
// console.log(bmi(80, 1.80));
// console.log(bmi(50, 1.80));


document.querySelector('.go').addEventListener("mousemove", wideWidth)

let w = 100;
function wideWidth() {
  w +=1
  document.querySelector('.go').style.width = w + 'px';
  
}

//==============================================


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ

//   // console.log(key);
//   // Значение свойства
//   // console.log(book[key]);
// }

// // console.log(book);
//==============================================

//Функция должна вернуть 
//массив всех значений свойства с таким 
//именем из каждого объекта в массиве products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
  
//   // Создали  переменную всех значений
//   let arrValue = [];
//   // Узнали сколько свойств
//   for (const product of products) {
//     // console.log(product);
    
//     //Узнали именна ключей 
//     for (const obj in product) {
//       console.log(obj);
      
//       //Проверяем на равенство есть ли они в аргументах
//       if (obj === propName) {
//         arrValue.push(product[obj]);
//       }}}
//       return arrValue;
//       // Change code above this line
//     }
//     console.log(getAllPropValues('name'));
//     // console.log(getAllPropValues('price'));
//     // console.log(getAllPropValues('quantity'));
    
//==============================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   let total = 0;

//   for (const product of products) {
//       console.log(product);
//     if (propName) {
//       total = product.price * product.quantity; 
//     console.log(total);
//     }
//   }
//     return total  ;  
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));

//================================================


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//     totalPrice = product.price * product.quantity;
      
//     }
//   }
//     return totalPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('name'));


//====================================================
// const arr = [110, 58, 20, 77, 66, 82, 42, 67, 42, 4];

// function tryFn (...args){
//   let total = 0;
//   for (const arg of args) {

//     console.log(arg[1],...args);

//     // if (arg[0] <total += arg) {
      
//     // }
//     // else{
//       return arg[0];
//     // }
    
//   }
//     // return total;

// }
// console.log( tryFn (arr));

//============================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//   const bookIndex = this.potions.indexOf(oldName);
//     this.potions.splice(bookIndex, 1, newName );
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad);
// atTheOldToad.updatePotionName();
//////===================================

function tryFn(n){
  console.log(n);
}
tryFn("ffjbhbjhb")
tryFn("гпшилотддрж")