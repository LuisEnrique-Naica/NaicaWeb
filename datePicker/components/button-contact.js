const btnCmp = document.createElement('template');
btnCmp.innerHTML =
`
<style>

.button-container {
    width: fit-content;
    height: 35px;
    background-color:  #0071e3;
    color:white;
    border-radius:25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    margin:0;
    padding: 0 9px;
}

.button-container:hover{
    background-color: #263bc2;
}

.button-containerDate {
    width: fit-content;
    height: 35px;
    background-color:  white;
    border: 2px solid #0071e3;
    color: #0071e3;
    border-radius:25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    margin:0;
    padding: 0 9px;
}

.button-containerDate:hover{
    border: 2px solid #263bc2;
    color: #263bc2;
}

a{
    width:100%;
    height:100%;
    border-radius: 25px;
    text-decoration: none;
    color:white;
    
}

a:link:active, a:visited:active {
    color: (internal value);
}

p{
    margin:0;
}

div.button-container svg{
    height:60%;
    padding: 0 6px ;
}

div.button-container p{
    padding: 0 6px ;
}

div.button-containerDate svg{
    height:60%;
    padding: 0 6px ;
}


#Trazado_593  {
    fill:#0071e3;
    transition: all 0.5s;
} 


div.button-containerDate:hover  #Trazado_593  {
    fill:#263bc2;
    
} 



</style>
<a class="goTo" >
    <div id="changeButton" class="button-container">
    </div>
</a>
`;

const buttonWhats = `
<svg xmlns="http://www.w3.org/2000/svg" width="26.443" height="26.409" viewBox="0 0 26.443 26.409">
    <g id="Grupo_729" data-name="Grupo 729" transform="translate(-1018.734 1532)">
    <path id="Trazado_584" data-name="Trazado 584" d="M349.207,0a12.872,12.872,0,0,0-11.119,19.521l-2.354,6.888,7.191-2.286A12.9,12.9,0,1,0,349.207,0m.034,23.687a10.823,10.823,0,0,1-6.014-1.78l-4.2,1.342,1.378-4.03a10.734,10.734,0,0,1-2.085-6.35,10.921,10.921,0,1,1,10.921,10.819" transform="translate(683 -1532)" fill="#fff"/>
    <path id="Trazado_585" data-name="Trazado 585" d="M350.938,11.4c-.337-.167-1.882-.94-2.185-1.041-.269-.1-.5-.133-.7.17a10.152,10.152,0,0,1-1.007,1.242c-.167.2-.371.235-.673.068a9.335,9.335,0,0,1-2.553-1.579,10.7,10.7,0,0,1-1.78-2.185c-.2-.3-.034-.47.133-.639.136-.133.3-.368.47-.535a4.044,4.044,0,0,0,.3-.54.6.6,0,0,0-.031-.538c-.068-.167-.707-1.712-.976-2.349s-.5-.54-.7-.54c-.17,0-.4-.031-.605-.031a1.268,1.268,0,0,0-.84.4,3.452,3.452,0,0,0-1.107,2.621,5.978,5.978,0,0,0,1.31,3.258,13.078,13.078,0,0,0,5.442,4.774c3.26,1.242,3.26.838,3.829.773a3.317,3.317,0,0,0,2.151-1.511,2.329,2.329,0,0,0,.136-1.446c-.068-.136-.3-.2-.605-.371" transform="translate(687.183 -1527.876)" fill="#fff"/>
    </g>
</svg>
<p>Contactar por Whatsapp</p>

`;


const buttonCall = `
<svg xmlns="http://www.w3.org/2000/svg" width="24.191" height="24.191" viewBox="0 0 24.191 24.191">
  <path id="Trazado_582" data-name="Trazado 582" d="M21.315,18.081q-.77-.465-1.917-1.072l-1.148-.628c-.074-.045-.21-.138-.413-.284a3.362,3.362,0,0,0-.542-.325,1.111,1.111,0,0,0-.456-.107q-.39,0-1.017.7c-.42.468-.831.943-1.237,1.418s-.723.716-.952.716a1.062,1.062,0,0,1-.358-.076,3.214,3.214,0,0,1-.337-.141c-.086-.043-.21-.11-.368-.205s-.26-.155-.306-.184a16.424,16.424,0,0,1-3.693-2.743,16.5,16.5,0,0,1-2.743-3.693c-.029-.045-.091-.146-.184-.3s-.162-.284-.205-.37a3.214,3.214,0,0,1-.141-.337,1.062,1.062,0,0,1-.076-.358,1.207,1.207,0,0,1,.444-.723,8.35,8.35,0,0,1,.976-.836,7.446,7.446,0,0,0,.974-.857,1.286,1.286,0,0,0,.444-.79,1.111,1.111,0,0,0-.107-.456,3.352,3.352,0,0,0-.325-.54c-.146-.2-.239-.341-.282-.413s-.153-.294-.327-.618-.353-.654-.54-.986S6.1,3.2,5.906,2.846a8.923,8.923,0,0,0-.542-.878,1.3,1.3,0,0,0-.358-.391,1.069,1.069,0,0,0-.346-.043,5.726,5.726,0,0,0-2.189.477A3.924,3.924,0,0,0,.738,4.059,6.877,6.877,0,0,0,0,6.887a5.432,5.432,0,0,0,.055.738q.054.39.107.659A6.612,6.612,0,0,0,.358,9c.093.3.167.508.217.64s.141.368.27.714.21.563.239.652A19.417,19.417,0,0,0,5.775,17.95a19.464,19.464,0,0,0,6.947,4.693c.086.026.3.107.649.236l.716.272c.129.05.341.122.64.215a6.6,6.6,0,0,0,.714.2c.181.038.4.072.661.11a5.823,5.823,0,0,0,.738.053,6.877,6.877,0,0,0,2.829-.738,3.907,3.907,0,0,0,2.046-1.733,5.662,5.662,0,0,0,.477-2.187,1.028,1.028,0,0,0-.041-.346q-.064-.175-.836-.64" transform="translate(1 -0.533)" fill="none" stroke="#fff" stroke-width="2"/>
</svg>
<p>Llamar</p>

`;


const buttonDate = `
<svg id="Grupo_730" data-name="Grupo 730" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23.246" height="23.781" viewBox="0 0 23.246 23.781">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectángulo_583" data-name="Rectángulo 583" width="23.246" height="23.781" fill="none"/>
    </clipPath>
  </defs>
  <g id="Grupo_613" data-name="Grupo 613" clip-path="url(#clip-path)">
    <path id="Trazado_593" data-name="Trazado 593" d="M20.362,63.8H2.883A2.887,2.887,0,0,1,0,60.915V46.2a2.887,2.887,0,0,1,2.883-2.883H20.362A2.887,2.887,0,0,1,23.246,46.2V60.915A2.887,2.887,0,0,1,20.362,63.8M2.883,44.536A1.667,1.667,0,0,0,1.219,46.2V60.915a1.667,1.667,0,0,0,1.665,1.665H20.362a1.667,1.667,0,0,0,1.665-1.665V46.2a1.667,1.667,0,0,0-1.665-1.665Z" transform="translate(0 -40.017)" />
    <path id="Trazado_593" data-name="Trazado 594" d="M47.742,134.859h3.64a.335.335,0,0,0,.335-.335v-3.639a.335.335,0,0,0-.335-.335h-3.64a.335.335,0,0,0-.335.335v3.639a.335.335,0,0,0,.335.335" transform="translate(-43.796 -120.606)" />
    <path id="Trazado_593" data-name="Trazado 595" d="M124.635,134.859h3.64a.335.335,0,0,0,.335-.335v-3.639a.335.335,0,0,0-.335-.335h-3.64a.335.335,0,0,0-.335.335v3.639a.335.335,0,0,0,.335.335" transform="translate(-114.832 -120.606)" />
    <path id="Trazado_593" data-name="Trazado 596" d="M201.529,134.859h3.64a.335.335,0,0,0,.335-.335v-3.639a.335.335,0,0,0-.335-.335h-3.64a.335.335,0,0,0-.335.335v3.639a.335.335,0,0,0,.335.335" transform="translate(-185.869 -120.606)" />
    <path id="Trazado_593" data-name="Trazado 597" d="M47.742,211.752h3.64a.335.335,0,0,0,.335-.335v-3.639a.335.335,0,0,0-.335-.335h-3.64a.335.335,0,0,0-.335.335v3.639a.335.335,0,0,0,.335.335" transform="translate(-43.796 -191.642)" />
    <path id="Trazado_593" data-name="Trazado 598" d="M124.635,211.752h3.64a.335.335,0,0,0,.335-.335v-3.639a.335.335,0,0,0-.335-.335h-3.64a.335.335,0,0,0-.335.335v3.639a.335.335,0,0,0,.335.335" transform="translate(-114.832 -191.642)" />
    <path id="Trazado_593" data-name="Trazado 599" d="M201.529,211.752h3.64a.335.335,0,0,0,.335-.335v-3.639a.335.335,0,0,0-.335-.335h-3.64a.335.335,0,0,0-.335.335v3.639a.335.335,0,0,0,.335.335" transform="translate(-185.869 -191.642)" />
    <path id="Trazado_593" data-name="Trazado 600" d="M12.372,51.585l10.168-.7,11.193.7v3.258H12.372Z" transform="translate(-11.43 -47.01)" />
    <path id="Trazado_593" data-name="Trazado 601" d="M92.749,5.184a.609.609,0,0,1-.609-.609V.609a.609.609,0,1,1,1.219,0V4.575a.609.609,0,0,1-.609.609" transform="translate(-85.121)" />
    <path id="Trazado_593" data-name="Trazado 602" d="M207.829,5.184a.609.609,0,0,1-.609-.609V.609a.609.609,0,1,1,1.219,0V4.575a.609.609,0,0,1-.609.609" transform="translate(-191.436)" />
  </g>
</svg>
<p>Agendar Cita</p>

`;

class  btnCmpType extends HTMLElement {
    constructor(){
        super();
        this.btntype;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(btnCmp.content.cloneNode(true))

        this.$title = this._sR.querySelector('.button-container');
        this.$idButton = this._sR.querySelector('#changeButton')
    }

    static get observedAttributes(){
        return [ 'btntype'];
    }

    get btnType() {
        return this.getAttribute('btntype');
    }
     
    set btnType(value) {
        this.setAttribute('btntype', value);
    } 
     
    static get observedAttributes() {
        return ['btntype'];
      }
    
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    
    render() {

        if (this.btnType == 'whatsapp'){
            this.$title.innerHTML = buttonWhats;
            // console.log("hay prop")
        }else if(this.btnType == 'call'){
            this.$title.innerHTML = buttonCall;
            // console.log("no hay prop")
        }else if (this.btnType == 'date'){
            this.$title.innerHTML = buttonDate;
            this.$idButton.classList.remove("button-container") ;
            this.$idButton.classList.add("button-containerDate") ;
        }        
    }



}
window.customElements.define('button-component', btnCmpType);
