

// Генерация блоков в header

function headerGeneration(allIncidents, heighImportance, lowImportance, connections, outTraf, inTraf){
    const headerBlock = document.querySelectorAll('.data-block'),
            headerNumbers = document.querySelectorAll('.data-block__number'),
            headerPercent = document.querySelectorAll('.data-block__percent');

    if (window.innerWidth > 992) {
        headerBlock.forEach((elem, i) => {
            if (i > 0) {
                elem.classList.add('data-border');
            }
        });
    } else {
        headerBlock.forEach((elem) => {
            elem.classList.add('data-border992');
            elem.style.width = `${Math.floor((100/headerBlock.length*2)/10)*10}%`;
        });
    }

    // Эти блоки имеются постоянно, поэтому выбрал такой подход для добавления данных в каждый блок
    
    headerNumbers[0].innerText = allIncidents;
    headerNumbers[1].innerText = heighImportance;
    headerNumbers[2].innerText = lowImportance;
    headerNumbers[3].innerText = connections;
    headerNumbers[4].innerText = `${outTraf} МБ`;
    headerNumbers[5].innerText = `${inTraf} МБ`;
}

export default headerGeneration;