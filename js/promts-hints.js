async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}
const postsElMain = document.querySelector('.posts')
const paginationEl = document.querySelector('.pagination');
const postEl = document.querySelectorAll('.post');

const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');


async function mainFn() {
    const postData = await getData();

    // console.log("🚀 ~ postData", postData);
    

    let currentPage = 1 ;
    let rows = 10;
    displayList(postData, rows, currentPage);
    displayPagination(postData, rows);
    
    function displayList(arrData, rowPerPage, currentPage) {

        postsElMain.innerHTML = '';
        currentPage -= 1;
        const start = rowPerPage * currentPage;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);
        


        paginatedData.forEach(el => {
            const postEl = document.createElement('div');
            postEl.classList.add("post");
            postEl.innerText = `${el.title}`
            postsElMain.append(postEl)
            
        });
}

    function displayPagination(arrData,rowPerPage) {
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulList = document.createElement('ul');
        ulList.classList.add('pagination__list');
        for (let i = 0; i < pagesCount; i++) {
            const btnEl = paginationBtn(i + 1)
            ulList.append(btnEl);
        }
        paginationEl.append(ulList);
 
    }

    function paginationBtn(page) { 
        const btnEl = document.createElement('button');
        btnEl.classList.add('pagination__item');
        btnEl.innerText = page;
        if (currentPage == page) {
            btnEl.classList.add('pagination__item--active');
        }


        btnEl.addEventListener('click', () => {
            currentPage = page;
             if (currentPage == page) {                  
                    btnEl.classList.remove('pagination__item--active')
             }       
            console.log("🚀 ~ currentPage", currentPage-1);
            displayList(postData, rows, currentPage);

            let currentItemBtn = document.querySelector('button.pagination__item--active');
            currentItemBtn.classList.remove('pagination__item--active');
            btnEl.classList.add('pagination__item--active');
            
           
            
        })
        return btnEl;
    }
}
mainFn()


    
