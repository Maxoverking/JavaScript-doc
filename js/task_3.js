
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

// ССсамое длинное слово в строке

// function findLongestWord(string) {
//   // Change code below this line
// const strSplit = string.split(' ');
// let longWord = strSplit[0];
//   for (let i = 0; i < strSplit.length; i++) {
    
//     if (strSplit[i].length > longWord.length ) {
//       longWord = strSplit[i];
      
//     }
//   }
//     return longWord;

//   // Change code above this line
// }


//===========================================



// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onSuccess,onError) {
//  for (let pizza of pizzaPalace.pizzas) {
//   // console.log(pizza);
//    if (pizza === pizzaName) {
//       // console.log(pizzaName);
//     }if (pizza.includes(pizzaName)) {
//       console.log(pizzaName); 
//     }
//       // console.log(pizzaName);
//  }}};
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//============================================================
//Найти похожие значения в масивах ключей
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);;
// const uniqueGenres = allGenres.filter((genres ,allGenres, books) => books.indexOf(genres) === allGenres);

// console.log(uniqueGenres);
// console.log(allGenres);

//============================================================
// Флет мап перебор и фильтр масива без похожих елементов !!!!!!!!!

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
//=============================================================


// const arrayBallances = users.map(users => users.friends);
// console.log(arrayBallances);

// const allFriends = users.flatMap(users => users.friends );
//   console.log(allFriends);


  // const totalBallance = arrayBallances.reduce((x, arrayBallances) => {
  //   return x + arrayBallances;
  // }, 0);
// console.log(totalBallance);


//===============================================================
// const getFriends = (users) => users.sort((a, b) => 
// a.friends.length - b.friends.length).map(users => users.friends);


  // const allFriends = users.flatMap(users => users.friends ).sort((a,b)=> b.localeCompare(a));
  // console.log(allFriends);
// }
  
  
  // const uniqueFriends = allFriends.filter((friends ,allFriends, users) => 
  // users.indexOf(friends) === allFriends);
  // console.log(uniqueFriends);
  // };
  // console.log(getFriends(users));

///=================================================================


//Код так, чтобы в переменной totalPlayTime получилось 
//общее игровое время из массива playtimes.


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// // const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line


// const playTimes = players.map(players => players.playtime / players.gamesPlayed);
// console.log(playTimes);

// const totalgameTimes = playTimes.reduce((x, playTimes) => {
//   return x + playTimes;
// }, 0);

// console.log(totalgameTimes);

// Change code above this line
// const averagePlayTime = totalPlayTime / totalgameTimes;

// console.log(averagePlayTime);

//===================================================================
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);


//     return allTags;
//   }, []);



// console.log(getTags(tweets));

//=======================

//Сортируем по рейтингу


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books.filter(books => books.rating >= MIN_BOOK_RATING)
// .map(books => books.author).sort((a,b)=> a.localeCompare(b));


// const names =books.map(books => books.author)
// console.log(names);
/// =======================================


//  Функция getSortedFriends(users) так, чтобы она возвращала массив
// уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const allFriends = users.flatMap(users => users.friends ).sort((a,b) => a.localeCompare(b)).filter((friends ,idx, users) => users.indexOf(friends) === idx);
//   console.log(allFriends);
/////======================================================================================

//Функция getTotalBalanceByGender(users, gender)
// так, чтобы она возвращала общий баланс пользователей (свойство balance),
// пол которых (свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => users.filter(users => 
//   users.gender === gender).map(users => 
//   users.balance).reduce((x, arreyBallances) => {
//   return x + arreyBallances;
// }, 0);
//  console.log(getTotalBalanceByGender(users ,"female"));
//  console.log(getTotalBalanceByGender(users ,"male"));
//=========================================================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const playTimes = players.map(players => 
//   players.playtime /  players.gamesPlayed);

// console.log(playTimes);




// function addBinary(a,b) {
//   const sum= a+b;
//     return sum.toString(2)
//   }
//   console.log(addBinary(1,1));
//   console.log(addBinary(5,9));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// for (const product of products){
//   console.table(product);
//   for (const obj in product){
//     console.log(obj);
//   }
// }


// // =============================================================
// const friends = ["Love", "Your", "Face", "1"];

// const friend = friends =>{
//   const countSimbols = friends.filter(friend => friend.length === 4);
//   console.log(countSimbols);
//   console.log(friends);
// }
// console.log(friend(friends));

//====================================================
// class Car {
//   static MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price){
//     if (price < Car.MAX_PRICE) {
//         return "Success! Price is within acceptable limits";
        
//     }
//     return  "Error! Price exceeds the maximum"; 
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// function changeEven(numbers, value) {
//   // Change code below this line
//     const newArray = [];

//   numbers.forEach(element => { 
//     if (element % 2 === 0) {
//       newArray.push(element + value)
//     } else {
//       newArray.push(element)
//     }
//   return newArray;
  
//   // Change code above this line
// })}

//======================================================
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();



