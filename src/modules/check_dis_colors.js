

function checkComingColor(parent) {
    const par = document.querySelectorAll(parent);
    par.forEach(elem => {
        if (elem.innerText.match(/-\d/)) {
            elem.classList.add('green');
        } else if(elem.innerText.match(/-/)) {
            
        } else {
            elem.classList.add('red');
        }
    });
}

function checkCareColor(parent) {
    const par = document.querySelectorAll(parent);
    par.forEach(elem => {
        if (elem.innerText.match(/-\d/)) {
            elem.classList.add('red');
        } else if(elem.innerText.match(/-/)) {
            
        } else {
            elem.classList.add('green');
        }
    });
}

function checkWorkingColor(parent) {
    const par = document.querySelectorAll(parent);
    par.forEach(elem => {
        if (elem.innerText.slice(0, 2) >= 8) {
            elem.classList.add('green');
        } else {
            elem.classList.add('red');
        }
    });
}

export {checkComingColor, checkCareColor, checkWorkingColor};