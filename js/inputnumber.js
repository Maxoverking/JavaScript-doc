const inputSrt = document.querySelector('.string[data-input]')
const addBtn = document.querySelector('button[data-add]');
const addReset = document.querySelector('button[data-clean]');
const outPut = document.querySelector('.output span')

let total = 0;

addBtn.addEventListener('click', function () {
    // console.log(addBtn);

    const value = Number(inputSrt.value);


    // console.log(value);
    total += value;
    outPut.textContent = total;
    inputSrt.value = '';

    console.log(total);
})

addReset.addEventListener('click', function () {
    total = 0;
    outPut.textContent = 0;
    
})


