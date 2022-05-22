function infoUsersGeneration(name, redNumber, orangeNumber, greenNumber) {
    const parent = document.querySelector('.users-table'),
          element = document.createElement('div');

    element.classList.add('users-table__user');
    element.innerHTML = `
        <div class="users-table__user-name">
            ${name}
        </div>
        <div class="users-table__user-incident">
            <div class="users-table__user-incident__red">
                <div class="users-table__user-incident__red-number">
                    ${redNumber}
                </div>
                <div class="users-table__user-incident__red-icon">
                    
                </div>
            </div>
            <div class="users-table__user-incident__orange">
                <div class="users-table__user-incident__orange-number">
                    ${orangeNumber}
                </div>
                <div class="users-table__user-incident__orange-icon">
                    
                </div>
            </div>
            <div class="users-table__user-incident__green">
                <div class="users-table__user-incident__green-number">
                    ${greenNumber}
                </div>
                <div class="users-table__user-incident__green-icon">
                    
                </div>
            </div>
        </div>
    `;
    parent.appendChild(element);
}

export default infoUsersGeneration;