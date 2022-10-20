const drinks = ["Vodka", "Beer", "Rum", "Whiskey"];

const rootRef = document.querySelector("#root");
const btnRef = document.querySelector("#openMenu");

function createLi(text) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.classList.add("list__item");
    a.classList.add("list__item--link");

    a.href = "/" + text.toLowerCase();
    a.target = "_blank";
    a.textContent = text;

    li.append(a);

    return li;
}
//=====================================================

// Кнопка открытия меню

const ul = document.createElement("ul");

ul.classList.add("list");
ul.classList.add("hide");

const menu = drinks.map((li) => {
    return createLi(li);
});

// console.log(menu);

ul.append(...menu);
rootRef.append(ul);

btnRef.addEventListener("click", (event) => {
    // console.log("🚀 ~ event", event.target);
    if (ul.classList.toggle("show")) {
        btnRef.textContent = "Close menu";
    }
    if(ul.classList.toggle("hide")) {
        btnRef.textContent = "Open menu";
    }
});

//==========================================

// btnRef.addEventListener("click", (event) => {
//   ul.classList.toggle("show");
//   ul.classList.toggle("hide");
//     ul.classList.contains("show")
//     ? (event.target.textContent = "Close menu")
//     : (event.target.textContent = "Open menu");
// });
//============================================
// btnRef.addEventListener("click", onBtn);

// console.log(ul.classList.contains("show"));

// function onBtn(event) {
//     if (ul.classList.contains("show")) {
//         event.target.textContent = "Close menu";
//         return;
//     }
//     event.target.textContent = "Open menu";
// }

// ДЗ. Доробити функціонал кнопки щоб мінявся текст








