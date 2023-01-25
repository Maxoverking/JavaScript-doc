// const ulList = document.querySelector('ul');
// let totalPages = 20

// function element(totalPages, page) {
//     let liTag = '';
//     let activeLi;
//     let beforePage = page - 1;
//     let afterPage = page + 1;


//     if (page > 1) {
//         liTag += `<button class="prev"><span><</span></button> `;
//     }
//     if (page > 2) {
//         liTag += `<button class="numb "><span>1</span></button>`;
//           if (page > 3) {
//         liTag += `<button class="numb "><span>...</span></button>`;
//     }
//     }
    

//     for (let pagesLength = beforePage; pagesLength <= afterPage; pagesLength++) {
//         if (pagesLength === page) {
//            activeLi = 'active'
//         } else {
//            activeLi = '' 
//         }

//         liTag += `<button class="numb  ${activeLi}"><span>${pagesLength}</span></button>`;   
//     }
//     const currentBtn = document.querySelector('.numb');

//     console.log("🚀 ~ currentBtn", currentBtn);
    
//      if (page < totalPages -1) {
//          if (page < totalPages -2) {
//              liTag += `<button class="numb "><span>...</span></button>`;
//             }
//             liTag += `<button class="numb "><span>${totalPages}</span></button>`;
//     }

//       if (page < totalPages) {
//         liTag += `<button class="next"><span>></span></button> `;
//       }
//     ulList.innerHTML = liTag;

//     const prevBtn = document.querySelector('.prev')
//     const nextBtn = document.querySelector('.next')
    
//     // console.log("🚀 ~ prevBtn", prevBtn);
//     prevBtn.addEventListener('click', () => {
//        element(totalPages, page - 1) 
//     })
    
//     nextBtn.addEventListener('click', () => {
//        element(totalPages, page + 1) 
// })
// }

// element(totalPages, 5)

// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     return data;
// }
//  const postData = await getData();



// const paginationElement = document.getElementById('pagination');

// console.log("🚀 ~ paginationElement", paginationElement);
// const arrowLeft = document.querySelector('.arrow_left');
// const arrowRight = document.querySelector('.arrow_right');
// let currentPage = 1;
// let pageCount;
// const pagesOnWindow = 5;
// let rows = 10;

// function resetCurrentPage() {
//   currentPage = 1;
// }


// const erf = addThreeDotsBlock();

// console.log("🚀 ~ erf", erf);

// function addThreeDotsBlock() {
//     const threeDots = document.createElement('div');
//     threeDots.classList.add('threeDots');
//     threeDots.innerText = '...';
//     return threeDots;A
// }
  

// const btn = paginationButton(5);

// console.log("🚀 ~ btn", btn);

// function paginationButton(page) {
//     let button = document.createElement('button');
//     button.innerText = page;

//     if (currentPage == page) button.classList.add('active');

//     button.addEventListener('click', function () {
//         //   warningField.textContent = ``;
//         //   placeholder.spinner.show();
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         currentPage = page;
//         //   callback(listElement, currentPage, searchQuery);

//         let current_btn = document.querySelector('.pagenumbers button.active');
//         current_btn.classList.remove('active');

//         button.classList.add('active');
//         //   setupPagination(listItems, paginationElement, rows);
//         //   hideExtremeButtons(totalPages);
//     });
//     return button
// }
// paginationElement.insertAdjacentElement('afterbegin', btn);

//=======================================
const postsElMain = document.querySelector('.posts')
const ulList = document.querySelector('.list');
const arrowLeft = document.querySelector('.prev');
const arrowRight = document.querySelector('.next');

let currentPage = 1;
let pageCount;
const pagesOnWindow = 5;
let rows = 20;
const items = 1000

  function setupPagination( items, rowsPerPage) {

    const totalPages = items /rowsPerPage
    pageCount = totalPages;
    let maxLeftPage = currentPage - Math.floor(pagesOnWindow / 2);
    let maxRightPage = currentPage + Math.floor(pagesOnWindow / 2);

    if (maxLeftPage < 1) {
      maxLeftPage = 1;
      maxRightPage = pagesOnWindow;
    }

    if (maxRightPage > totalPages) {
      maxLeftPage = totalPages - (pagesOnWindow - 1);

      if (maxLeftPage < 1) {
        maxLeftPage = 1;
      }
      maxRightPage = totalPages;
    }

    for (let i = 1; i <= totalPages; i++) {
      if (maxLeftPage !== 1 && i == 1) {
        let btn = paginationButton(i, items);
        ulList.appendChild(btn);
      }

      if (maxRightPage !== totalPages && i == totalPages) {
        let btn = paginationButton(i, items);
        ulList.appendChild(btn);
      }

      if (i >= maxLeftPage && i <= maxRightPage) {
        let btn = paginationButton(i, items);
        ulList.appendChild(btn);
      }

      // добавляет троеточие в pagination в зависимости от текущей страницы и общего к-ва страниц
      if (
        totalPages >= 6 &&
        i == 1 &&
        currentPage !== 1 &&
        currentPage !== 2 &&
        currentPage !== 3
      ) {
        const threeDotsEl = addThreeDotsBlock();
        ulList.insertBefore(threeDotsEl, ulList[ulList.length - 2]);
      }

      if (
        pageCount >= 7 &&
        i == pageCount - 1 &&
        currentPage !== pageCount &&
        currentPage !== pageCount - 2 &&
        currentPage !== pageCount - 1
      ) {
        const threeDotsEl = addThreeDotsBlock();
        ulList.insertBefore(threeDotsEl, ulList[1]);
      }
    }
  }


  
     function paginationButton(page, items) {
    let button = document.createElement('button');
    button.classList.add('numb')
    button.innerText = page;

    if (currentPage == page) button.classList.add('active');

         button.addEventListener('click', function () {
             ulList.innerHTML = ''
            currentPage = page;

      setupPagination(items,  rows);
    //   hideExtremeButtons(totalPages);
    });

    return button;
     }

        function addThreeDotsBlock() {
    const threeDots = document.createElement('button');
    threeDots.classList.add('threeDots');
    threeDots.innerText = '...';
    return threeDots;
        }

        
setupPagination(items, rows);

// arrowLeft.addEventListener('click',function () {
//     const activeElement = document.querySelector('.active');
//     const previousSiblingElement = activeElement.previousSibling;
//     const previousSiblingElementText = activeElement.previousSibling.textContent;

//     // console.log("🚀  previousSiblingElementText", previousSiblingElementText);
//     activeElement.classList.remove('active');
//     previousSiblingElement.classList.add('active');
    
    
// })
    