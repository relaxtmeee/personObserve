

// Проверка содержимого блоков, чтобы вставить необходимый стиль для инцидентов

function checkNumberColor(parent, child, color) {
    const numberColor = document.querySelectorAll(parent),
          childBlock = document.querySelectorAll(child);
    numberColor.forEach((elem, i) => {
        if (+elem.innerText > 0) {
            childBlock[i].classList.add(`bg${color}`);
        } else {
            childBlock[i].classList.add(`bg${color}-zero`);
        }
    });
}

export default checkNumberColor;