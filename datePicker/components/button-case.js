const templateBtnCase = document.createElement('template');
templateBtnCase.innerHTML =
`
<style>

.content{
    height:90px; 
    width:100%;
    display:grid;
    grid-template-rows: none;
    grid-template-columns: 40% 30% 30%;
    background-color: #e9eff2;
    margin: 30px 0;
}


.buttonOne {
    align-self: center;
    justify-self: center;
    width: 100%;
    height: 35px;
    background-color:  #0071e3;
    color:white;
    padding: 0 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:25px;
    cursor: pointer;
    transition: all 0.5s;
    font-weight:bold;
}

.buttonTwo {
    align-self: center;
    justify-self: center;
    width: 100%;
    height: 35px;
    border: 2px solid #0071e3;
    color: #0071e3;
    padding: 0 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:25px;
    cursor: pointer;
    transition: all 0.5s;
    font-weight:bold;
}


.buttonOne:hover{
    background-color: #263bc2;
}

.buttonTwo:hover{
    border: 2px solid #263bc2;
    color: #263bc2;
}



.buttonOne svg{
    height:35%;
    padding-right:5px;
}

p{
    margin:0;
}

a{
    width: 80%;
    height: fit-content;
    border-radius: 25px;
    text-decoration: none;
    color:white;
    align-self:center;
}

a:link:active, a:visited:active {
    color: (internal value);
}

.big-text{
    color:#447fcc;
    align-self:center;
    font-size:26px;
    padding-left: 40px;
    margin: 0;
    font-weight:bold;
}



</style>


<div class="content">
    <p class="big-text">Tus Inversiones</p>
    <a href="http://www.w3.org/">
        <div class="buttonOne">
            <svg id="Grupo_37" data-name="Grupo 37" xmlns="http://www.w3.org/2000/svg" width="16.642" height="16.642" viewBox="0 0 16.642 16.642">
                <rect id="Rectángulo_23" data-name="Rectángulo 23" width="4.641" height="16.642" rx="0.455" transform="translate(10.641 16.642) rotate(-180)" fill="#fff"/>
                <rect id="Rectángulo_24" data-name="Rectángulo 24" width="4.641" height="16.642" rx="0.455" transform="translate(0 10.641) rotate(-90)" fill="#fff"/>
            </svg>
            <p>Nuevo Portafolio</p>
        </div>
    </a>
    <a href="http://www.w3.org/">
        <div class="buttonTwo">
            <p>Simular inversion</p>
        </div>
    </a>
</div>
`;

class  btnCase extends HTMLElement {
    constructor(){
        super();

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(templateBtnCase.content.cloneNode(true))

      
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    
    render() {
        // this.$textcontainer.innerHTML = this.content;
        // this.$href.setAttribute('href',this.toUrl);
    }



}
window.customElements.define('button-case', btnCase);
