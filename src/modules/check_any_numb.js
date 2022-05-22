

// ФУНКЦИЯ для проверки содержимого и вставки соответсвующей стрелки
//с помощью parent должны высчитывать процент

function checkAnyNumbers(parent, arrow, percent) {
    const parentBlock = document.querySelectorAll(parent),
          arrowBlock = document.querySelectorAll(arrow),
          percentBlock = document.querySelectorAll(percent);

    percentBlock.forEach((elem, i) => {
        if(elem.innerText.match(/-/)) {
            arrowBlock[i].innerHTML = '<i class="fa-solid fa-caret-down"></i>';
            arrowBlock[i].classList.add('green')
        } else {
            arrowBlock[i].innerHTML = '<i class="fa-solid fa-caret-up"></i>';
            arrowBlock[i].classList.add('red')
        }
    });
}

export default checkAnyNumbers;