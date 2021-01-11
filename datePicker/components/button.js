const templateButton = document.createElement('template');
templateButton.innerHTML =
`
<style>

.button-container {
    width: 130px;
    height: 35px;
    background-color:  #0071e3;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:25px;
    cursor: pointer;
    transition: all 0.5s;
}

.button-container:hover{
    background-color: #263bc2;
}

a{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    text-decoration: none;
    color:white;
}

a:link:active, a:visited:active {
    color: (internal value);
}

</style>

<div class="button-container">
    <a class="goTo" href="#">
        <p class="text-container">hola</p>
    </a>
</div>
`;

class  ButtonComponent extends HTMLElement {
    constructor(){
        super();
        this.content;
        this.toUrl;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(templateButton.content.cloneNode(true))

        this.$textcontainer = this._sR.querySelector('.text-container');
        this.$href = this._sR.querySelector('.goTo');
    }

    static get observedAttributes(){
        return ['content', 'toUrl',];
    }

    get content () {
        return this.getAttribute('content');
    }
     
    set content(value) {
        this.setAttribute('content', value);
    } 

    get toUrl() {
        return this.getAttribute('toUrl');
    }
     
    set toUrl(value) {
        this.setAttribute('toUrl', value);
    } 
     

    static get observedAttributes() {
        return ['content', 'toUrl'];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    
    render() {
        this.$textcontainer.innerHTML = this.content;
        this.$href.setAttribute('href',this.toUrl);
        // this.$select.innerHTML = '';
        // console.log(this.options)
        // Object.keys(this.options).forEach(key => {
        //     console.log(this.options[key])
        //     let $options = document.createElement('option');
        //     $options.innerHTML = this.options[key].label;
        //     $options.value = this.options[key].value;
        //     this.$select.appendChild($options)
        // })
    }



}
window.customElements.define('button-page', ButtonComponent);
