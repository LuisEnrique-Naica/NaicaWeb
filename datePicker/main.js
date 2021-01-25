const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date .text-selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

let selectedMonth2 = month + 1;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = `${year}-${selectedMonth2}-${selectedDay}`;

let daysMonth = '';

function daysPerMonth(val){
	
	switch (val) {
		case 0:
		case 2:
		case 4:
		case 6:
		case 7:
		case 9:
		case 11:
			daysMonth = 31
		break;
		case 1:
			daysMonth = 28
		break;
		case 3:
		case 5:
		case 8:
		case 10:
			daysMonth = 30
		break;
		default:
			daysMonth = 'Error on daysPermonth() '
		break;
	}

	return daysMonth;


}





// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);
days_element.addEventListener('click', toggleDatePickerToDays)

// FUNCTIONS

function toggleDatePickerToDays() {
	dates_element.classList.toggle('active')
}

function toggleDatePicker (e) {
	// if (!checkEventPathForClass(e.path, 'dates')) {
	// 	dates_element.classList.toggle('active');
	// }
	if(dates_element.style.maxHeight){
		dates_element.style.maxHeight = null;
	}else{
		dates_element.style.maxHeight = dates_element.scrollHeight + "px";
	}
	console.log(dates_element.style.maxHeight , dates_element.style.scrollHeight)
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	date.setMonth(date.getMonth() + 1);
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	date.setMonth(date.getMonth() - 1);
	populateDates();
}

populateDates();





function populateDates (e) {
	days_element.innerHTML = '';


	let first = new Date(year, month, 1);
	let dayFirst = first.getDay();

	let actualDay = new Date();
	let actDay = actualDay.getDate();


	let amount_days = daysPerMonth(month);
	
	// calcular cuantos dias le sobran  
	let days = '';
	for (let x = dayFirst; x > 0; x--) {
		days += `<div class="prev-date"></div>`;
	}
	days_element.innerHTML = days;

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}
		if ((i + 1) < actDay || selectedMonth < month || selectedYear < year) {
			day_element.classList.remove('day');
			day_element.classList.add('disabledTime');
		}
		// console.log(selectedDay , i, actDay)

		day_element.addEventListener('click', function (e) {
			if( day_element.classList.contains('day')){

			let daySelectManual = e.target.innerHTML;
			daySelectManual = parseInt(daySelectManual) ;

			console.log(daySelectManual)

			selectedDate = new Date(year,month, daySelectManual);
			selectedDay = daySelectManual;
			selectedMonth = month + 1;
			selectedYear = year;


			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = `${year}-${selectedMonth}-${daySelectManual}`;
			populateDates();
			}

		});

		days_element.appendChild(day_element);
	}
	
	// for (let j = 1; j <= nextDays; j++) {
	// 	days += `<div class="next-date">${j}</div>`;
	// 	days_element.innerHTML += days;
	//   }

}

// MORE FUNCTIONS
function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}

