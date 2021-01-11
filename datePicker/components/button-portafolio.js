const btnPortafiolio = document.createElement('template');
btnPortafiolio.innerHTML =
`
<style>

.button-container {
    width: fit-content;
    height: fit-content;
    color: #0071e3;
    border-radius:25px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    margin:0;
    padding: 9px;
}


a{
    border-radius: 25px;
    text-decoration: none;
    color:white;
}

div.button-container svg{
    height:50px;
    transition: all 0.5s;

}

div.button-container p{
    text-align: center;
    margin :0;
    transition: all 0.5s;
}

div.button-container:hover p{
    color: #263bc2;

}




div.button-container:hover #Grupo_37{
    fill: #263bc2;
    transform: rotate(270deg);
}

g{
    transition: stroke 0.5s;
}

div.button-container:hover g, div.button-container:hover line{
    stroke: #263bc2;
}

#Grupo_428{
    transition:all 1s;
}


div.button-container:hover #contrato {
    transform: rotateY(180deg);
}





</style>
<a class="goTo" >
    <div id="changeButton" class="button-container">
    </div>
</a>
`;

const aportaciones = `
    <svg id="Grupo_37" data-name="Grupo 37" xmlns="http://www.w3.org/2000/svg" width="16.642" height="16.642" viewBox="0 0 16.642 16.642" fill="#0071e3">
        <rect id="Rectángulo_23" data-name="Rectángulo 23" width="4.641" height="16.642" rx="0.455" transform="translate(10.641 16.642) rotate(-180)" />
        <rect id="Rectángulo_24" data-name="Rectángulo 24" width="4.641" height="16.642" rx="0.455" transform="translate(0 10.641) rotate(-90)" />
    </svg>
    <p>Aportacion <br> adicional</p>

`;

const contrato = `
    <svg id="contrato" xmlns="http://www.w3.org/2000/svg" width="23" height="29" viewBox="0 0 23 29">
        <g id="Grupo_428" data-name="Grupo 428" transform="translate(-24.906 -0.433)">
            <g id="Rectángulo_380" data-name="Rectángulo 380" transform="translate(24.906 0.433)" fill="none" stroke="#0071e3" stroke-width="1">
                <rect width="23" height="29" stroke="none"/>
                <rect x="0.5" y="0.5" width="22" height="28" fill="none"/>
            </g>
            <line id="Línea_9" data-name="Línea 9" x2="14.226" transform="translate(29.081 14.749)" fill="none" stroke="#0071e3" stroke-width="1"/>
            <line id="Línea_10" data-name="Línea 10" x2="14.226" transform="translate(29.081 19.078)" fill="none" stroke="#0071e3" stroke-width="1"/>
            <line id="Línea_11" data-name="Línea 11" x2="14.226" transform="translate(29.081 24.645)" fill="none" stroke="#0071e3" stroke-width="1"/>
            <g id="Rectángulo_381" data-name="Rectángulo 381" transform="translate(28.906 3.433)" fill="none" stroke="#0071e3" stroke-width="1">
                <rect width="15" height="9" stroke="none"/>
                <rect x="0.5" y="0.5" width="14" height="8" fill="none"/>
            </g>
        </g>
    </svg>
    <p>Aportacion <br> adicional</p>

`;


class  btnPorta extends HTMLElement {
    constructor(){
        super();
        this.btntype;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(btnPortafiolio.content.cloneNode(true))

        this.$content = this._sR.querySelector('.button-container');
        // this.$idButton = this._sR.querySelector('#changeButton')
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
        if (this.btnType == "aportacion") {
            this.$content.innerHTML = aportaciones;
        } else if(this.btnType == "contrato"){
            this.$content.innerHTML = contrato;
        }
        // console.log(`funciona ${this.btnType}`)    
    }



}
window.customElements.define('button-portafolio', btnPorta);
