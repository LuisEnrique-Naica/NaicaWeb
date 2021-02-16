const datePicker = document.createElement('template');
datePicker.innerHTML = `
<style>
.date-picker {
	position: relative;
	width: 100%;
	max-width: 290px;
	height: 50px;
	margin: 10px auto;
	/* box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2); */
	border: 1px solid #707070;
	border-radius: 25px;

	
	user-select: none;
}

.date-picker:hover {
	background-color: #F3F3F3;
}

.date-picker .selected-date {
	width: 100%;
	height: 100%;

	display: flex;
	justify-content:space-around ;
	align-items: center;

	color: #313131;
	font-size: 20px;
	background-color: #FFF;
	border-radius: 25px;

	
}

div.date-picker div.selected-date svg{
	height: 60%;
}

.date-picker .dates {
	max-height: 0;
	overflow: hidden;
	position: absolute;
	top: 140%;
	left: 0;
	right: 0;
	transition: max-height 0.3s ease-out;

	background-color: #FFF;
}


.date-picker .dates .month {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #414141 ;
	color: white;
	/* border-bottom: 2px solid #EEE; */
}

.date-picker .dates .month .arrows {
	width: 35px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 12px;
	cursor: pointer;
}

.date-picker .dates .month .arrows:active {
	background-color: #757575;
}

.date-picker .dates .days {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	height: 200px;
	background-color: #f2f2f2;
	
}

.date-picker .dates .days .day { 
	display: flex;
	justify-content: center;
	align-items: center;
	color: #313131;
	transition: background-color 0.2s;
	cursor: pointer;
	height: 35px;
}

.date-picker .dates .days :hover{
	box-shadow: 0rem 0rem 0.2rem #4465cc;
	/* border: 0.01cm solid #4465cc; */
		
}

.date-picker .dates .days .day.selected {
	background-color: #bdc7e6;
}

.prev-date:hover{
	box-shadow:none!important;
}

.week{
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	height: 35px;
	background-color:#f2f2f2;
}

.week p{
	align-self:center;
	justify-self: center;
	font-weight: bolder;
	font-size: 14px;
}

.disabledTime { 
	display: flex;
	justify-content: center;
	align-items: center;
	height: 35px;
	color: #a0a0a0;
	cursor: not-allowed;
}

.disabledTime:hover{
	box-shadow:none!important;
}



/* months */ 

.month-year{
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	/* height: 234px; */
	max-height: 0;
	background-color: #f2f2f2;
	overflow: hidden;
	position: absolute;
	top: 17%;
	left: 0;
	right: 0;
	transition: max-height 0.3s ease-out;
}

.month-year p {
	text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
	height: 50px;
	cursor: pointer;
}

.month-year p.selected-month{
	background-color: #bdc7e6;
}

.month-year p:hover{
	box-shadow: 0rem 0rem 0.2rem #4465cc;
}


.mth{
	cursor: pointer;
}


</style>

<div class="date-picker">
<div class="selected-date">
    <span class="text-selected-date">Fecha de pago </span>
    <svg id="Grupo_4" data-name="Grupo 4" xmlns="http://www.w3.org/2000/svg" width="46.794" height="48" viewBox="0 0 46.794 48">
    <path id="Trazado_256" data-name="Trazado 256" d="M59.96,6.474H52.123V3.46H50.767V6.474H30.119V3.46H28.761V6.474H19.945a3.392,3.392,0,0,0-3.389,3.389V48.069a3.394,3.394,0,0,0,3.389,3.391H59.959a3.4,3.4,0,0,0,3.392-3.391V9.866A3.393,3.393,0,0,0,59.96,6.474ZM19.947,7.829h8.815v2.562H30.12V7.829H50.767v2.562h1.356V7.829h7.837A2.037,2.037,0,0,1,62,9.863V15.5H17.914V9.866a2.036,2.036,0,0,1,2.033-2.037ZM59.96,50.1H19.947a2.036,2.036,0,0,1-2.033-2.035V16.85H62V48.069A2.038,2.038,0,0,1,59.96,50.1Z" transform="translate(-16.556 -3.46)" fill="#0071e3"/>
    <rect id="Rectángulo_175" data-name="Rectángulo 175" width="13.399" height="1.356" transform="translate(17.257 28.107)" fill="#0071e3"/>
    </svg>
    </div>

<div class="dates">
    <div class="month">
        <div class="arrows prev-mth">&lt;</div>
        <div class="mth"></div>
        <div class="arrows next-mth">&gt;</div>
    </div>
    <div class="week">
        <p>do.</p>
        <p>lu.</p>
        <p>ma.</p>
        <p>mi.</p>
        <p>ju.</p>
        <p>vi.</p>
        <p>sa.</p>
    </div>
    <div class="month-year">
        <p id="0">Ene.</p>
        <p id="1">Feb.</p>
        <p id="2">Mar.</p>
        <p id="3">Abr.</p>
        <p id="4">May.</p>
        <p id="5">Jun.</p>
        <p id="6">Jul.</p>
        <p id="7">Ago.</p>
        <p id="8">Sep.</p>
        <p id="9">Oct.</p>
        <p id="10">Nov.</p>
        <p id="11">Dic.</p>
    </div>
    <div class="days"></div>
</div>
</div>
`;

class PickerComponent extends HTMLElement {
    constructor(){
        super();

        this._sR = this.attachShadow({mode:'open'});
        this._sR.appendChild(datePicker.content.cloneNode(true));
		//funciones para obtener variables
		this.toggleDatePicker = this.toggleDatePicker.bind(this);
		this.daysPerMonth = this.daysPerMonth.bind(this);
		this.goToNextMonth = this.goToNextMonth.bind(this);
		this.goToPrevMonth = this.goToPrevMonth.bind(this);
		this.populateDates = this.populateDates.bind(this);
		this.formatDate = this.formatDate.bind(this);
		this.setDateInput = this.setDateInput.bind(this);
		this.toggleDatePickerToDays = this.toggleDatePickerToDays.bind(this);
		this.toggleMonths = this.toggleMonths.bind(this);
		this.changeMonth = this.changeMonth.bind(this);

        this.$date_picker_element = this._sR.querySelector('.date-picker');
        this.$selected_date = this._sR.querySelector('.date-picker .selected-date ');
        this.$selected_date_element = this._sR.querySelector('.date-picker .selected-date .text-selected-date');
        this.$dates_element = this._sR.querySelector('.date-picker .dates');
        this.$mth_element = this._sR.querySelector('.date-picker .dates .month .mth');
        this.$next_mth_element = this._sR.querySelector('.date-picker .dates .month .next-mth');
        this.$prev_mth_element = this._sR.querySelector('.date-picker .dates .month .prev-mth');
        this.$days_element = this._sR.querySelector('.date-picker .dates .days');
        this.$monts_year_element = this._sR.querySelector('.month-year');
        this.$monts_year_element_selected = this._sR.querySelectorAll('.month-year p');
        this.$month_selected = this._sR.querySelector('.mth');


		// console.log(this.$dates_element.style.maxHeight)


        this.$months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        console.log(this.$months, ' funciona ojete date');
		this.$date = new Date();
		this.$day = this.$date.getDate();
		this.$month = this.$date.getMonth();
		this.$year = this.$date.getFullYear();

		this.$selectedDate = this.$date;
		this.$selectedDay = this.$day;
		this.$selectedMonth = this.$month;
		this.$selectedYear = this.$year;

		this.$selectedMonth2 = this.$month + 1;

		this.$mth_element.textContent = this.$months[this.$month] + ' ' + this.$year;

		this.$selected_date_element.textContent = this.formatDate(this.$date);
		this.$selected_date_element.dataset.value = `${this.$year}-${this.$selectedMonth2}-${this.$selectedDay}`;

		this.$daysMonth = '';
		
		this.$selected_date.addEventListener('click', this.toggleDatePicker);
		this.$next_mth_element.addEventListener('click', this.goToNextMonth);
		this.$prev_mth_element.addEventListener('click', this.goToPrevMonth);
		this.$days_element.addEventListener('click', this.toggleDatePickerToDays)
		this.$mth_element.addEventListener('click', this.toggleMonths)

		this.$monts_year_element_selected.forEach(elem => {
			elem.addEventListener('click', this.changeMonth)
		});

		this.populateDates();
		
	}

	changeMonth(e) {
		console.log(e.value, e, e.target.tagName);
		// if(!checkEventPathForClass(e.path, 'month-year p')){
		if(e.target.tagName == 'P'){
			this.$mth_element.textContent = this.$months[e.currentTarget.id] + ' ' + this.$year;
			this.$date.setMonth(parseInt(e.currentTarget.id));
			this.$month = parseInt(e.currentTarget.id)
			this.populateDates();
		}
			
			if(this.$monts_year_element.style.maxHeight){
				this.$monts_year_element.style.maxHeight = null;
			}else{
				this.$monts_year_element.style.maxHeight = this.$monts_year_element.scrollHeight + "px";
			}
			
	}

	toggleMonths() {

		if(this.$monts_year_element.style.maxHeight){
			this.$monts_year_element.style.maxHeight = null;
		}else{
			this.$monts_year_element.style.maxHeight = this.$monts_year_element.scrollHeight + "px";
		}
	}

	toggleDatePickerToDays() {
		if(this.$dates_element.style.maxHeight){
			this.$dates_element.style.maxHeight = null;
		}else{
			this.$dates_element.style.maxHeight = this.$dates_element.scrollHeight + "px";
		}
	}
	

	formatDate (d) {
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

	toggleDatePicker(e) {
		console.log(e.target)
			if(e.target.className == 'text-selected-date' || e.target.className == 'selected-date' || e.target.tagName == 'svg'){
				if(this.$dates_element.style.maxHeight){
					this.$dates_element.style.maxHeight = null;
				}else{
					this.$dates_element.style.maxHeight = this.$dates_element.scrollHeight + "px";
				}
		}
	}

	goToNextMonth (e) {
		this.$month++;
		if (this.$month > 11) {
			this.$month = 0;
			this.$year++;
		}
		this.$mth_element.textContent = this.$months[this.$month] + ' ' + this.$year;
		this.$date.setMonth(this.$date.getMonth() + 1);
		this.populateDates();
	}

	goToPrevMonth (e) {
		this.$month--;
		if (this.$month < 0) {
			this.$month = 11;
			this.$year--;
		}
		this.$mth_element.textContent = this.$months[this.$month] + ' ' + this.$year;
		this.$date.setMonth(this.$date.getMonth() - 1);
		this.populateDates();
	}
	
	
	setDateInput(e){
		if( e.target.classList.contains('day')){

		let daySelectManual = e.target.innerHTML;
		daySelectManual = parseInt(daySelectManual) ;

		
		this.$selectedDate = new Date(this.$year,this.$month, daySelectManual);
		this.$selectedDay = daySelectManual;
		this.$selectedMonth = this.$month + 1;
		this.$selectedYear = this.$year;
		
		
		
		

		this.$selected_date_element.textContent = this.formatDate(this.$selectedDate);
		this.$selected_date_element.dataset.value = `${this.$year}-${this.$selectedMonth}-${this.$daySelectManual}`;
		this.populateDates();
		}
	}



	populateDates(){
	let monthReal = new Date();
	let actualMonth = monthReal.getMonth();
	this.$monts_year_element_selected.forEach((ed,index) => {
		if( actualMonth == index ){
			ed.classList.add('selected-month')
		}
	})
	
	this.$days_element.innerHTML = '';


	let first = new Date(this.$year, this.$month, 1);
	let dayFirst = first.getDay();

	let actualDay = new Date();
	let actDay = actualDay.getDate();


	let amount_days = this.daysPerMonth(this.$month);
	
	// calcular cuantos dias le sobran  
	let days = '';
	for (let x = dayFirst; x > 0; x--) {
		days += `<div class="prev-date"></div>`;
	}
	this.$days_element.innerHTML = days;

	let d1 = Date.now();
	let d2 = new Date(this.$year, this.$month, this.$day).getTime();

	let m = new Date();
	let n = m.getMonth();
	let y = m.getFullYear();

	//calculo de fechas
	if(d1 < d2 ){

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (this.$selectedDay == (i + 1) && this.$selectedYear == this.$year && this.$selectedMonth == this.$month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', this.setDateInput )

		this.$days_element.appendChild(day_element);
	}
	}else{
		for (let i = 0; i < amount_days; i++) {
			const day_element = document.createElement('div');
			day_element.classList.add('day');
			day_element.textContent = i + 1;
	
			if (this.$selectedDay == (i + 1) && this.$selectedYear == this.$year && this.$selectedMonth == this.$month) {
				day_element.classList.add('selected');
			}
			if ((i + 1) < actDay ) {
				day_element.classList.remove('day');
				day_element.classList.add('disabledTime');
			}
			if(this.$month < n || this.$year < y ){
				day_element.classList.remove('day');
				day_element.classList.add('disabledTime');
			}
			
			day_element.addEventListener('click', this.setDateInput )
	
			this.$days_element.appendChild(day_element);
		}
	}
	}




	daysPerMonth(val){
	
		switch (val) {
			case 0:
			case 2:
			case 4:
			case 6:
			case 7:
			case 9:
			case 11:
				this.$daysMonth = 31
			break;
			case 1:
				this.$daysMonth = 28
			break;
			case 3:
			case 5:
			case 8:
			case 10:
				this.$daysMonth = 30
			break;
			default:
				this.$daysMonth = 'Error on daysPermonth() '
			break;
		}
	
		return this.$daysMonth;
	
	
	}


}

window.customElements.define('date-picker', PickerComponent);