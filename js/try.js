
//ЗАДАЧА ВЫЧИСЛЕНИЕ СУММЫ ЧЕТНЫХ ЧИСЕЛ


// const min = 7;
// const max = 15;
// let total = 0;

// for (i = min; i <= max; i += 1) {

//     if (i % 2 !== 0) {  
//       console.log('Четное :', i); 
//       continue;
//     }
  
//   total +=  i;
// }

// console.log( 'Сумма :', total);



// ЗЗЗЗЗЗадача для опраделения суммы заказа




// let balance = 600;
// const payment = 500;

// console.log(`Ваша сумма ${balance} `);

// if (balance >= payment) {

//   console.log('OK');

//   balance -= payment;
//   console.log('Осталось :' , balance);
// } else {
//   console.log("Not money");
// }
// ЗАДАЧА 1
// const num = 3;
// console.log(num);

// ЗАДАЧА 2

// const a = 10;
// const b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// ЗАДАЧА 3
// const c = 15;
// const d = 2;
// const result = c + d;
// console.log(result);

// ЗАДАЧА 4
// const a = 10;
// const b = 2;
// const result = a + b + c;
// console.log(result);

// ЗАДАЧА 5
// const a = 10;
// const b = 2;
// const c = a - b;
// const d = 7;
// const result = c + d;
// console.log(result);

// ЗАДАЧА 6  Строки

// const srt = 'Привет мир'
// console.log(srt);

// ЗАДАЧА 7

// const srt1 = 'Привет';
// const srt2 = 'мир';
// console.log(srt1 + ' ' + srt2);

// ЗАДАЧА 8

// const srt = 'Привет';
// const name1 = 'MAX!';
// console.log(srt + ' ' + name1);

// ЗАДАЧА 9

// const age = 32;
// console.log(`Мне ${age} лет!`);

// ЗАДАЧА 10
// Обращение к отдельным символам этой строки
// const srt = 'abcde';
// console.log(srt[0]);
// console.log(srt[2]);


// ЗАДАЧА 11
//Найдите произведение (умножение) цифр этого числа
// const num = '23456';
// const num2 = num[0] * num[1] * num[2] * num[3] * num[4] ;
// console.log(num2);

// ЗАДАЧА 12
// const sec = 60;
// const minut = sec;
// const hour = sec * minut;
// const day = 24;
// const oneday = hour * day;

// let  mounth = 31 ;
// console.log(hour);

// console.log(oneday * mounth);

// ЗАДАЧА 13
//Выведите текущее время в формате 'час:минута:секунда'.
// const hour = 2;
// const minut = 34;
// const sec = 23;
// console.log(hour + ':' + minut +':'+ sec);

// ЗАДАЧА 14

// let num = 6 ** 2 ;
// console.log(num );


// const dishes = document.querySelectorAll(".dishes > li");
// console.log("dishes", dishes)



// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });


// const goEl = document.querySelector('.newtry');
// console.log("goEl", goEl.children);


// let childs = goEl.children[3];
// console.log("childs", childs);

// let itemLi = document.createElement('li');

// let str = 'Привет'
// itemLi.innerHTML = str;

// console.log("itemLi", itemLi)
// childs.append(itemLi);

// let byTag = document.getElementsByTagName('ul');
// console.log("byTag", byTag);

// const titleEl = document.querySelector('.title');
// // console.log("H2", titleEl)

// const button = document.querySelector('.change');
// // console.log(" button", button)

// const newText = "Hello !";

// titleEl.innerHTML = newText;

// button.addEventListener('click', changeColor);


// function changeColor(){
//     titleEl.style.color = 'red'
//     itemLi.remove()
// }

///=======================================================
// const inputText = document.querySelector('.text');
// console.log("inputText", inputText);

// inputText.setAttribute('max', 30 )

// const sendBtn = document.querySelector('.send');
// console.log("🚀sendBtn", sendBtn);

// const outputText = document.querySelector('.outputSpan');
// console.log("outputText", outputText);

// inputText.addEventListener('input' , outPut);

// function outPut (){
//     let textValue = inputText.value;
//     for (const textValu of textValue) {
//         // console.log("🚀textValu", textValu);
//         let sum = textValu;
//         console.log("🚀 sum", sum);
//         // outputText.innerHTML = sum  ; 
        
//         // outputText.style.color = getRandomHexColor() ; 
//     }};
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   };
//===================================================================

//   let links = document.querySelectorAll('a');
// //   console.log("🚀 Ul", links);

// links.forEach(link => {
//     // console.log("link", link);
//     let href = link.getAttribute('href')
//     console.log("href", href);
//     for (const link of links) {
//             // console.log("link", link)
//             let href = link.getAttribute('href')
//             console.log("href:", href);
//             if(!href){
//                 continue;
//             }
//             if(!href.includes('://')){
//                 continue;
//             }
//             if(href.startsWith('http://internal.com')){
//                 continue;
//             }
//             link.style.color = 'orange';
//           }
// });
//  =======================================


// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   console.log("selectedOptionValue", selectedOptionValue);

//   const selectedOptionIndex = select.selectedIndex;
//   console.log("selectedOptionIndex", selectedOptionIndex);

//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

//===========================================================


// let elem = document.getElementById('elem').children;
//  console.log("el", elem);

// function c (elem) {
//     [...elem].forEach(element => {
//         console.log("element", element);
//         // element.innerHTML = "";
    
//         // element.remove();
//         if (element.textContent === "Світ") {
//             element.style.color = 'red'
//         }
//         if (element.textContent === "Привіт") {
//             element.remove();
//         }})}
// c(elem);

//==========================================================

// let data = {
//     Риба: {
//       форель: {},
//       лосось: {}
//     },

//     Дерево: {
//       Величезні: {
//         секвойя: {},
//         дуб: {}
//       },
//       Квітучі: {
//         яблуня: {},
//         магнолія: {}
//       }
//     }
//   };


// let container = document.getElementById('container');
// console.log(" container", container)
// createTree(container, data);

// function createTree(container, obj) {
//     console.log("obj", obj)
//     container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//     // якщо дочірніх елементів немає, тоді виклик повертає undefined
//     // та <ul> не буде створено
//     // if (!Object.keys(obj).length) return;
//     let ul = document.createElement('ul');

//     for (let key in obj) {
//         // console.log("key", key)
//         let li = document.createElement('li');
//         li.innerHTML = key;

//         let childrenUl = createTreeDom(obj[key]);
//         console.log("childrenUl", childrenUl);

//         if (childrenUl) {
//         li.append(childrenUl);
//         }
//         ul.append(li);
//     }
//     return ul;}

//==============================================
//Добавить елемент ли 
// let element = document.getElementById('one');
// console.log("element", element);
// element.insertAdjacentHTML('beforebegin' ,"<li>1</li><li>2</li>" )
// element.insertAdjacentHTML('afterbegin' ,"<li>3</li><li>4</li>" )
// element.insertAdjacentHTML('beforeend', "<li>2</li><li>3</li>")
// element.insertAdjacentHTML('afterend',"<li>5</li><li>6</li>")
//===============================================================
// const array1 = [2, 4, 8, 1,7,9,6,4];
// const array2 = [3, 5, 1, 6, 8, 2];

// function twoNum(a,b) {
// let newArray = [];
// for (let i = 0; i < array1.length; i += 1) {
//     let indArray1 = array1[i];

//     if (array2.includes(indArray1)) {
//         newArray.push(indArray1);
//     }   
// }
// return newArray;
// }
// twoNum(array1,array2)
// console.log(twoNum(array1,array2));

///=================================================

// let className = ['link', 'footer', 'main', 'div', 'div', 'div', 'div',
//   'head', 'link', 'link', 'link', 'link'];

// let newObj = {}

// for (let i = 0; i < className.length; i++) {
//   const element = className[i];

//   // console.log("🚀 ~ element",element );
//   if (newObj[element]) {
//     newObj[element] += 1;
//   } else {
//     newObj[element] = 1;
//   }
  
//   console.log("🚀 ~ element", element); 
// }
// console.log("🚀 ~ newObj", newObj);

// let result = Object.keys(newObj).sort((a,b)=> newObj[b] - newObj[a])

// console.log("🚀 ~ result", result);

//=====================================









// Удаление блока с текстом

// const div = document.getElementById('container');

// // console.log("🚀 ~ div", div);
// const btn = document.querySelectorAll('.remove-button')

// // console.log("🚀 ~ btn", btn);

// div.addEventListener('click' , onClickRemoveDiv )

// function onClickRemoveDiv(evt) {

// // console.log("🚀 ~ evt", evt.target);
//   if (!evt.target.classList.contains('remove-button')) {
//     return;
//   }
//   let pane = evt.target.closest('.pane');
//   // console.log("🚀 ~ pane", pane);
//   pane.remove();
// }









//============================================
// //Создание дом дерева
// const div = document.createElement('div');
// div.classList.add('try');
// // console.log("🚀 ~ div", div);

// const main = document.querySelector('main');

// console.log("🚀 ~ main", main);
// // const body = document.body;
// main.append(div);


// const header = document.createElement('h1');

// header.textContent = 'ПРИВЕТ !!!!!'

// // console.log("🚀 ~ header", header);
// div.insertAdjacentElement('afterbegin', header);

// const ul = `
//         <ul>
//           <li>pav</li>
//           <li>vddde</li>
//           <li>fdsfds</li>
//         </ul>`;

// div.innerHTML = ul;

//====================================================
//Создать изображение 
// const img = document.createElement('img');

// console.log("🚀 ~ img", img);

// img.src = 'https://picsum/photos/240'
// img.width = 150;
// img.classList.add('pic');
// img.alt = `xnjsdfl,fe`;

// div.append(img);

//============================================
const liLists = tree.querySelectorAll('li');

// console.log("🚀 ~ li", liLists);

for (let liList of liLists) {

  let span = document.createElement('span');

  // console.log("🚀 ~ span", span);

  liList.prepend(span);
  span.append(span.nextSibling);
  
  // console.log("🚀 ~ liList", liList);
}

const ulList = document.getElementById('tree');

// console.log("🚀 ~ ulList", ulList);

ulList.addEventListener('click', (event) => {
  if (event.target.tagName !== "SPAN") {
    return;
  }
  // console.log("🚀 ~ event", event.target);
  let childrenCont = event.target.parentNode.querySelector('ul');

  console.log("🚀 ~ childrenCont", childrenCont);
  

  if (!childrenCont) {
    return;
  }
  childrenCont.hidden = !childrenCont.hidden;
});

//======================================================

// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name , prop) {
//   // Only change code below this line

//   for (let x = 0; x < contacts.length; x++) {

//     if (contacts[x].firstName === name) {
    
//       if (contacts[x].hasOwnProperty(prop)) {
        
//         return contacts[x][prop];
//       } else {
//         return "No such property";
//       }

//     }
//   }
//   return "No such contact";
  //Only change code above this line
// }


// console.log(lookUpProfile(contacts));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Bob", "number"));

//=========================================================
// const createBtn = document.createElement('button');
// createBtn.innerText = 'Кнопка';
// createBtn.type = "button";
// createBtn.classList.add('btn-delete');
// document.body.append(createBtn);

// createBtn.addEventListener('click', deleteBtn )

// function deleteBtn() {
//   createBtn.remove();

  
//   const createBtn2 = document.createElement('button');
//   createBtn2.innerText = 'Кнопка2';
//   createBtn2.type = "button";
//   createBtn2.classList.add('btn-delete');
  
//   const createBtn3 = document.createElement('button');
//   createBtn3.innerText = 'Кнопка3';
//   createBtn3.type = "button";
//   createBtn3.classList.add('btn-delete');
  

//   document.body.append(createBtn2);
//   document.body.append(createBtn3);

//   createBtn2.addEventListener('click',createBtnBack);

//   function createBtnBack() {
//     createBtn2.remove();
//     createBtn3.remove();
//     document.body.append(createBtn);
    
//   }
// }

// console.log("🚀 ~ createBtn", createBtn);
//============================================================

// const listEL = document.querySelector('.new-list');

// // console.log("🚀 ~ listEL", listEL);
// const elements = document.querySelectorAll('.we li');
// console.log("🚀 ~ elements", elements);

// const elementsAll = elements;
// console.log("🚀 ~ elementsAll", elementsAll);

// for (const element of elements) {

//   console.log("🚀 ~ element", element);
  
// }

// for (let i = 0; i < elements.length; i++) {
//   const element = elements[i];

//   console.log("🚀 ~ element", element);
  
// }
// const el = document.querySelector('.rom');

// console.log("🚀 ~ el", el);

// // console.log("🚀 ~ listEL", listEL);

// listEL.addEventListener('click', onClick);

// function onClick() {
//   // el.classList.toggle('hidd'); 
//   for (const element of elements) {
//     element.classList.toggle('hidd'); 
//   }
  
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const func = n => n % 2 ;
// const newArray = arr.filter(func);

// console.log("🚀 ~ newArray", newArray);

// // const remove = (arr, func) =>
// //   // Проверяем, является ли arr массивом.
// //   Array.isArray(arr)
// //     // Фильтруем массив arr применяя функцию func к каждому элементу.
// //     ? arr.filter(func).reduce((acc, val) => {
// //         // Удаляем отфильтрованные элементы из оригинального массива.
// //         arr.splice(arr.indexOf(val), 1);
// //         // Возвращаем новый массив только с отфильтрованными элементами.
// //         return acc.concat(val);
// //       }, [])
// //     : [];

// console.log("🚀 ~ remove(arr, odd);", arr);
// let r = [1, -2, 3, 4, 5];
// function positiveSum(arr) {
//   return arr.filter(el => el > 0).reduce((a, b) => a + b, 0);
// }
// console.log(positiveSum(r));


// const q = "bitcoin take over the world maybe who knows perhaps";
// function short(str) {
//   // let arr = str.split(' ').sort((a, b) => a.length - b.length)[0].length;
//   // let arr = str.split(' ').sort((a, b) => b.length - a.length).pop().length;
//   console.log("🚀 ~ arr", arr);
// }

// console.log(short(q));