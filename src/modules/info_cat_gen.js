 // INFO-CATEGORIES GENERATION
// поцент по идее должен высчитываться от какого-то числа, поэтому просто вставляем его здесь
// стрела также должна будет добавляться в зависимости от процента, поэтому сейчас прописать это не могу

function infoCategGeneration(name, number, percent) {
    const parent = document.querySelector('.category-table'),
            element = document.createElement('div');

    element.classList.add('category-table__categories');
    element.innerHTML = `
        <div class="category-table__categories-name">
            ${name}
        </div>
        <div class="category-table__categories-incident">
            <div class="category-table__numbers">
                <div class="category-table__number">
                    ${number}
                </div>
                <div class="category-table__percents">
                    <div class="category-arrow red">
                        <i class="fa-solid fa-caret-up"></i>
                    </div>
                    <div class="category-block__percent">
                        ${percent}
                    </div>
                </div>
            </div>
        </div>
    `;
    parent.appendChild(element);
}

export default infoCategGeneration;