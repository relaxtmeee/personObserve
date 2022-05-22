

// обрезка длинных имен в блоке ПОЛЬЗОВАТЕЛИ ПО ИНЦИДЕНТАМ

function slicerTextIncidents(elements) {
    document.querySelectorAll(elements).forEach(el => {
        if (el.innerText.length > 25) {
            el.innerText = el.innerText.match(/[^\s]+/);
        }
    })
}

// обрезка длинных названий в блоке КАТЕГИОРИИ САЙТОВ
// можно было бы использовать одну и туже функцию, но тут немног разный подход

function slicerTextCategory(elements) {
    document.querySelectorAll(elements).forEach(el => {
        if (el.innerText.length > 30) {
            el.innerText = el.innerText.slice(0, 20);
        }
    })
}


export {slicerTextIncidents, slicerTextCategory};