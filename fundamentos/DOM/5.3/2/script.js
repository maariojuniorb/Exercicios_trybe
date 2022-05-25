function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

function daysHolidayOrFriday(parametro) {
    if (parametro.innerHTML == 24) {
        parametro.className = 'day holiday'
    }
    if (parametro.innerHTML == 25) {
        parametro.className = 'day holiday friday'
    }
    if (parametro.innerHTML == 31) {
        parametro.className = 'day holiday'
    }
    if (parametro.innerHTML == 4) {
        parametro.classList.add = 'day friday'
    }
    if (parametro.innerHTML == 11) {
        parametro.className = 'day friday'
    }
    if (parametro.innerHTML == 18) {
        parametro.className = 'day friday'
    }
}


function addDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysUl = document.querySelector('#days')
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let daysNumbers = dezDaysList[index];
        let daysItems = document.createElement('li');
        daysItems.className = 'day'
        daysItems.innerHTML = daysNumbers;
        daysUl.appendChild(daysItems);
        daysHolidayOrFriday(daysItems);
    }
}

addDays();

function buttonHolidays(Feriados) {
    let button = document.createElement('button');
    button.innerText = 'Feriados';
    let div = document.querySelector('.buttons-container');
    button.id = 'btn-holiday'
    let holidays = document.getElementsByClassName('holiday')
    button.addEventListener('click', function () {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.background === '') {
                holidays[i].style.background = 'red';
            } else {
                holidays[i].style.background = '';
            }
        }
    })

    div.appendChild(button);
}

buttonHolidays();

function buttonFriday(SextaFeira) {
    const fridays = ['4', '11', '18', '25'];
    let button = document.createElement('button');
    let buttonFridays = button.innerText = 'Sexta-Feira'
    button.id = 'btn-friday';
    let div = document.querySelector('.buttons-container');
    div.appendChild(button);
    let friday = document.getElementsByClassName('friday')
    button.addEventListener('click', function () {
        for (let i = 0; i < friday.length; i += 1) {
            if (friday[i].innerText == fridays[i]) {
                friday[i].innerText = 'SEXTA-FIRE';
            } else {
                friday[i].innerText = fridays[i]
                console.log(event.target)
            }
        }
    })
}

buttonFriday();

function zoomEfetct() {
    let dias = document.querySelectorAll('.day');
    for (let i = 0; i < dias.length; i += 1) {
        dias[i].addEventListener('mouseover', function () {
            dias[i].style.fontSize = '30px'
        })
    }
    for (let i = 0; i < dias.length; i += 1) {
        dias[i].addEventListener('mouseleave', function () {
            dias[i].style.fontSize = '20px'
        })
    }
}

zoomEfetct();

// function createTask(projeto) {
//     div = document.querySelector('.my-tasks')
//     texto = document.createElement('span')
//     texto.innerHTML = 'Projeto';
//     div.appendChild(texto);

// }

// createTask();

// function createTask2(cor) {
//     div = document.querySelector('.my-tasks');
//     div2 = document.createElement('div');
//     div2.className = 'task';
//     div2.style.background = cor;
//     div.appendChild(div2)
// }

// createTask2();

// function addClassDiv2() {
//     let div = document.querySelector('.task');
//     div.addEventListener('click', function(){
//         div.className = 'task selected'
//         // div.addEventListener('click', function(){
//         //     div.className = 'task'
//         // })
//         console.log(event.taget)
//     })
// }

// addClassDiv2();




