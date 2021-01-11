const btnCmpFAQS = document.createElement('template');
btnCmpFAQS.innerHTML =
`
<style>
.button-container {
    width: 95%;
    height: 45px;
    background-color:  #414141;
    color:white;
    display:flex;
    padding-left: 6%;
    align-items: center;
    border-radius:25px;
    cursor: pointer;
    transition: all 0.5s;
}

.button-container:hover{
    background-color: #447fcc;
}

.content {
    margin: 15px 0 0 18px;
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #ebebeb;
}

.active{
    background-color: #447fcc;
}


</style>
    <div id="changeButton" class="button-container"></div>
    <div class="content">
        <p class="text-component"></p>
    </div>

`;




class  btnFAQS extends HTMLElement {
    constructor(){
        super();
        this.newcontext;
        this.subcontext;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(btnCmpFAQS.content.cloneNode(true))

        this.$container = this._sR.querySelector('.button-container');
        this.$text = this._sR.querySelector('.content');
        this.$complement = this._sR.querySelector('.text-component')

        //evento para la caja
        this.$container.addEventListener('click',() => {
            this.$container.classList.toggle("active")
            if (this.$text.style.maxHeight){
                this.$text.style.maxHeight = null;
            } else {
                this.$text.style.maxHeight = this.$text.scrollHeight + "px";
            } 
        })
    }

    static get observedAttributes(){
        return [ 'newcontext', 'subcontext'];
    }

    get newContext() {
        return this.getAttribute('newcontext');
    }
     
    set newContext(value) {
        this.setAttribute('newcontext', value);
    }
    
    get subContext() {
        return this.getAttribute('subcontext');
    }
     
    set subContext(value) {
        this.setAttribute('subcontext', value);
    } 
     
     
    static get observedAttributes() {
        return ['newcontext','subcontext'];
      }
    
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    
    render() {
        this.$container.innerHTML = this.newContext;
         this.$complement.innerHTML = this.subContext; 
    }



}
window.customElements.define('button-faqs', btnFAQS);
