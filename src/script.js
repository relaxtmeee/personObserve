import headerGeneration from './modules/header_gen';
import infoUsersGeneration from './modules/info_user_gen';
import checkNumberColor from './modules/check_numb_color';
import infoCategGeneration from './modules/info_cat_gen';
import infoDisGeneration from './modules/info_dis_gen';
import {checkComingColor, checkCareColor, checkWorkingColor} from './modules/check_dis_colors';
import checkAnyNumbers from './modules/check_any_numb';
import {slicerTextIncidents, slicerTextCategory} from './modules/slicers';

window.addEventListener('DOMContentLoaded', () => {


    headerGeneration(1576, 157, 253, 88, 653, 476);


    infoUsersGeneration('Андрей Иванов', 50, 18, 31);
    infoUsersGeneration('Михаил Вашкин', 47, 24, 0);
    infoUsersGeneration('Семен Измайлович', 32, 0, 12 );
    infoUsersGeneration('Николай Островский', 11, 7, 0);
    infoUsersGeneration('Константин Константинопольский', 0, 0, 8);
    infoUsersGeneration('Александр Овчинников', 0, 13, 7);

   
    checkNumberColor('.users-table__user-incident__red-number', '.users-table__user-incident__red-icon', 'red');
    checkNumberColor('.users-table__user-incident__orange-number', '.users-table__user-incident__orange-icon', 'orange');
    checkNumberColor('.users-table__user-incident__green-number', '.users-table__user-incident__green-icon', 'green');


    infoCategGeneration('Поисковики', '1 257', '+3%');
    infoCategGeneration('Новостный порталы', '1 129', '-2.1%');
    infoCategGeneration('Развлекательные', '1257', '+7%');
    infoCategGeneration('Категория с длинным названием, которая обрезается по ширине...', 596, '-3%');
    infoCategGeneration('Игры', 431, '+2%');
    infoCategGeneration('Форумы', 147, '+3%');


    infoDisGeneration('20.04', '08:07', '16:55');
    infoDisGeneration('19.04', '07:56', '16:56');
    infoDisGeneration('18.04', '09:30', '18:30');
    infoDisGeneration('17.04', '08:47', '17:47');
    infoDisGeneration('16.04', '08:12', '16:55');
    infoDisGeneration('14.04', '08:00', '16:57');


    checkComingColor('.discipline-table__categories-coming__difference');
    checkCareColor('.discipline-table__categories-care__difference');
    checkWorkingColor('.discipline-table__categories-working');


    checkAnyNumbers('.category-table__number', '.category-arrow', '.category-block__percent');
    checkAnyNumbers('.data-block__number', '.data-arrow', '.data-block__percent');


    slicerTextIncidents('.users-table__user-name');
    slicerTextCategory('.category-table__categories-name');
});
