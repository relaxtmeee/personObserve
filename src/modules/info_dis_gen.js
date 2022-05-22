

function infoDisGeneration(date, coming, care) {
    const parent = document.querySelector('.discipline-table'),
          element = document.createElement('div'),
          comingBeg = +coming.slice(0, 2),
          comingEnd = +coming.slice(3, 5),
          careBeg = +care.slice(0, 2),
          careEnd = +care.slice(3, 5);
    let comingDif;
    let careDif;
    let workingDay;
    console.log();
    let begDif = careBeg - comingBeg;
    let endDif = careEnd - comingEnd;

    // много условий для того, чтобы автоматически расчитывать данные прихода и узода относительно 8 и 17 часов соответственноё
    
    if (comingBeg == 8 && comingEnd == 0) {
        comingDif = `-`;
    } else if (comingBeg > 8) {
        comingDif = `+${comingBeg - 8}ч ${comingEnd}мин`;
    } else if (comingBeg == 7) {
        comingDif = `-${60 - comingEnd}мин`;
    } else if (comingBeg == 8) {
        comingDif = `+${comingEnd}мин`;
    } else {
        comingDif = `-${7 - comingBeg}ч ${60 - comingEnd}мин`
    };

    if (careBeg == 17 && careEnd == 0) {
        careDif = `-`;
    } else if (careBeg == 16) {
        careDif = `-${60 - careEnd}мин`;
    } else if (careBeg < 16) {
        careDif = `-${16 - careBeg}ч ${60 - careEnd}мин`;
    } else if (careBeg == 17) {
        careDif = `+${careEnd}мин`;
    } else {
        careDif = `+${careBeg - 17}ч ${careEnd}мин`;
    }

    if (endDif >= 10 && begDif == 8) {
        begDif--;
        workingDay = `0${begDif}:${endDif}`;
    } else if (endDif < 10 && begDif == 8) {
        begDif--;
        workingDay = `0${begDif}:0${endDif}`;
    } else if (begDif < 8 && endDif >= 10) {

        workingDay = `0${begDif}:${endDif}`;
    } else if (begDif < 8 && endDif < 10) {
        begDif--;
        workingDay = `0${begDif}:${60 - Math.abs(endDif)}`;
    } else if (begDif > 8 && endDif >= 10) {
        
        workingDay = `0${begDif}:${endDif}`;
    } else {
        begDif--;
        workingDay = `0${begDif}:0${endDif}`;
    }

    element.classList.add('discipline-table__categories');
    element.innerHTML = `
        <div class="discipline-table__categories-date">
            ${date}
        </div>
        <div class="discipline-table__categories-coming">
            <div class="discipline-table__categories-coming__time">
                ${coming}
            </div>
            <div class="discipline-table__categories-coming__difference">
                ${comingDif}
            </div>
        </div>
        <div class="discipline-table__categories-care">
            <div class="discipline-table__categories-care__time">
                ${care}
            </div>
            <div class="discipline-table__categories-care__difference">
                ${careDif}
            </div>
        </div>
        <div class="discipline-table__categories-working">
            ${workingDay}
        </div>
    `;
    parent.append(element);
}

export default infoDisGeneration;