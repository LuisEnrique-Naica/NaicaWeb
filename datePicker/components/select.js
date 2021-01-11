const template = document.createElement('template');
template.innerHTML =
`
<style>

.selectTitle{
    margin: 0 0.3em;
}


select#standard-select {
    appearance:none;
    background-color: white;
    background: white;
    border: 1px solid #898989;
    border-radius: 25px;
    padding: 0.5em  0.88em;
    margin: 0.7em 0;
    width: 100%;
    height:35px;
    outline: none;
    transition: border 0.5s;
    color: #707070;
    position:relative;
  }

select#standard-select:hover{
    border-color: #3f94e9;
}


.select-icon {
    position: absolute;
    top: 18px;
    right: 25px;
    width: 20px;
    pointer-events: none;
    // border: 2px solid #962d22;
    padding-left: 5px;
    // transition: background-color 0.3s ease, border-color 0.3s ease;
}

.select-container {
    width: 320px;
    position: relative;
}

#relleno{
    transition: fill 0.5s;
}

select#standard-select:hover + div.select-icon #relleno {
      fill: #ffffff;
}

</style>
<span class="selectTitle">newTittle</span>
<div class="select-container">
    <select id="standard-select">
        <option selected disabled value="" >Selecciona una opcion</option>
    </select>
    <div class="select-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.609 18.858">
        <g id="Trazado_621" data-name="Trazado 621" transform="translate(22.36 19.824) rotate(180)" fill="#0071e3">
            <path id="relleno" d="M9.938,1.889a1.879,1.879,0,0,1,3.236,0l8.922,15.1a1.879,1.879,0,0,1-1.618,2.835H2.633a1.879,1.879,0,0,1-1.618-2.835Z" fill="#0071e3"/>
            <path d="M 11.55565738677979 1.965679168701172 C 11.40477752685547 1.965679168701172 11.028977394104 2.007780075073242 10.79857730865479 2.397699356079102 L 1.876077651977539 17.49728965759277 C 1.641597747802734 17.89410018920898 1.79328727722168 18.24711990356445 1.869386672973633 18.38048934936523 C 1.945487976074219 18.51384925842285 2.172246932983398 18.82403945922852 2.633176803588867 18.82403945922852 L 20.4781379699707 18.82403945922852 C 20.93905639648438 18.82403945922852 21.16581726074219 18.51384925842285 21.24191665649414 18.38048934936523 C 21.31801795959473 18.24712944030762 21.46970748901367 17.89410972595215 21.2352180480957 17.49728965759277 L 12.31273746490479 2.397699356079102 C 12.08233737945557 2.007780075073242 11.7065372467041 1.965679168701172 11.55565738677979 1.965679168701172 M 11.55565357208252 0.9656810760498047 C 12.18280029296875 0.9656810760498047 12.80994701385498 1.273445129394531 13.17366695404053 1.888969421386719 L 22.09614753723145 16.98855972290039 C 22.83645820617676 18.24137878417969 21.93334770202637 19.82403945922852 20.4781379699707 19.82403945922852 L 2.633176803588867 19.82403945922852 C 1.177967071533203 19.82403945922852 0.2748470306396484 18.24137878417969 1.015157699584961 16.98855972290039 L 9.937647819519043 1.888969421386719 C 10.30136203765869 1.273445129394531 10.92850780487061 0.9656810760498047 11.55565357208252 0.9656810760498047 Z" stroke="none" fill="#0071e3"/>
        </g>
        </svg>
    </div>
</div>
`;

class  SelectComponent extends HTMLElement {
    constructor(){
        super();
        this.newtitle;
        this.option;
        this.newID;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(template.content.cloneNode(true))

        this.$title = this._sR.querySelector('.selectTitle');
        this.$select = this._sR.querySelector('#standard-select');
    }

    static get observedAttributes(){
        return ['newtitle', 'options', 'id'];
    }

    get newTitle() {
        return this.getAttribute('newtitle');
    }
     
      set newTitle(value) {
        this.setAttribute('newtitle', value);
    } 

    get newID() {
        return this.getAttribute('newid');
    }
     
      set newID(value) {
        this.setAttribute('newid', value);
    } 
     
    get options() {
        return JSON.parse(this.getAttribute('option'));
    }
    
    set options(value) {
        this.setAttribute('option', JSON.stringify(value));
    }


    static get observedAttributes() {
        return ['newtitle', 'options'];
      }
    
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    
    render() {
        this.$title.innerHTML = this.newTitle;
        this.$title.id = this.newID;
        // this.$select.innerHTML = '';
        console.log(this.options)
        Object.keys(this.options).forEach(key => {
            // console.log(this.options[key])
            let $options = document.createElement('option');
            $options.innerHTML = this.options[key].label;
            $options.value = this.options[key].value;
            this.$select.appendChild($options)
        })
    }



}
window.customElements.define('select-component', SelectComponent);
