const btnCmpHelp = document.createElement('template');
btnCmpHelp.innerHTML =
`
<style>
.button-container {
    width: fit-content;
    height: fit-content;
    color: black;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius:25px;
    cursor: pointer;
    transition: all 0.5s;
}

#Grupo_522{
    fill:#588fcd;
    transition:fill 0.5s;
}


.button-container:hover #Grupo_522{
    fill:#0071e3;
}

#Rectángulo_574{
    fill:#588fcd;
    transition:fill 0.5s;
}

.button-container:hover #Rectángulo_574{
    fill:#0071e3;
}


</style>
    <div id="changeButton" class="button-container">
    
    </div>



`;

const help = `
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49">
        <g id="Grupo_522" data-name="Grupo 522" transform="translate(0.093 0.093)">
        <circle id="Elipse_134" data-name="Elipse 134" cx="24.5" cy="24.5" r="24.5" transform="translate(-0.093 -0.093)" />
        <g id="Grupo_523" data-name="Grupo 523" transform="translate(18.152 9.941)">
            <path id="Trazado_352" data-name="Trazado 352" d="M-8829.486-2255.031s-2.089-8.414,5.982-8.414,8.877,12.693,3.4,12.765-3.4,8.783-3.4,8.783" transform="translate(8829.729 2263.445)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5"/>
            <ellipse id="Elipse_135" data-name="Elipse 135" cx="2.5" cy="3" rx="2.5" ry="3" transform="translate(3.756 25.966)" fill="#fff"/>
        </g>
        </g>
    </svg>
    <p>Ayuda<p>

`;

const alert = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52.271" height="45.937" viewBox="0 0 52.271 45.937">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectángulo_574" data-name="Rectángulo 574" width="52.271" height="45.937" fill="#0071e3"/>
  </clipPath>
</defs>
<g id="Grupo_752" data-name="Grupo 752" transform="translate(-95.284 -107.931)">
  <g id="Grupo_435" data-name="Grupo 435" transform="translate(93.196 109.11)">
    <g id="Grupo_601" data-name="Grupo 601" transform="translate(2.088 -1.18)" clip-path="url(#clip-path)">
      <path id="Rectángulo_574" data-name="Trazado 576" d="M12.433,21.928,24.585,1.02a2.034,2.034,0,0,1,3.526,0L40.056,21.95,52,42.878a2.048,2.048,0,0,1-1.778,3.06l-24.1-.019L2.03,45.9A2.034,2.034,0,0,1,.282,42.837Z" transform="translate(-0.001 -0.001)" fill="#0071e3"/>
      <path id="Rectángulo_574" data-name="Trazado 577" d="M116.7,79.788h0a3.03,3.03,0,0,1-3.022-2.8L112.395,60.1a3.03,3.03,0,0,1,3.022-3.261h2.433a3.031,3.031,0,0,1,3.024,3.236l-1.145,16.889a3.031,3.031,0,0,1-3.024,2.826" transform="translate(-90.527 -45.783)" fill="#0071e3"/>
      <path id="Rectángulo_574" data-name="Trazado 578" d="M124.376,185.95a3.112,3.112,0,1,1-3.112-3.112,3.112,3.112,0,0,1,3.112,3.112" transform="translate(-95.172 -147.277)" fill="#0071e3"/>
    </g>
  </g>
  <rect id="Rectángulo_669" data-name="Rectángulo 669" width="6" height="6" rx="3" transform="translate(119 143)" fill="#fff"/>
  <path id="Trazado_627" data-name="Trazado 627" d="M116.206,77.138h0a2.681,2.681,0,0,1-2.673-2.477l-1.139-14.939a2.681,2.681,0,0,1,2.673-2.885h2.152a2.681,2.681,0,0,1,2.675,2.862l-1.013,14.939a2.681,2.681,0,0,1-2.675,2.5" transform="translate(5.85 64.191)" fill="#fff"/>
</g>
</svg>
<p>Ayuda<p>
`;




class  btnHelp extends HTMLElement {
    constructor(){
        super();
        this.btntype;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(btnCmpHelp.content.cloneNode(true))

        this.$container = this._sR.querySelector('.button-container');
        // this.$text = this._sR.querySelector('.content');

    }

    static get observedAttributes(){
        return [ 'btntpye'];
    }

    get btnType() {
        return this.getAttribute('btntpye');
    }
     
    set btnType(value) {
        this.setAttribute('btntpye', value);
    } 
     
    static get observedAttributes() {
        return ['btntpye'];
      }
    
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    
    render() {
        if(this.btnType == 'help'){
            this.$container.innerHTML = help;
        }else if(this.btnType == 'alert'){
            this.$container.innerHTML = alert;
        }
        console.log(`funciona help ${this.btnType}`);    
    }



}
window.customElements.define('button-help', btnHelp);
