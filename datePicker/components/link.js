const templateLink = document.createElement('template');
templateLink.innerHTML =
`
<style>



a{
    text-decoration: none;
    color:#0d78e4;
    display: flex;
    width: fit-content;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a:link:active, a:visited:active {
    color: (internal value);
}

span.a1{
    transition: all 0.5s;
}

a.goTo:hover span.a1{
    opacity:1;
}

span.a1{
    opacity:0;
}

p{
    margin:0;
}




</style>
<div class="container">
    <a class="goTo" href="#">
        <span class="a1"> &lt;</span>
        <p class="text-container"></p>
    </a>
</div>
`;

class  LinkComponent extends HTMLElement {
    constructor(){
        super();
        this.content;
        this.toUrl;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(templateLink.content.cloneNode(true))

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
        this.$textcontainer.innerHTML = `< ${this.content}`;
        this.$href.setAttribute('href',this.toUrl);
    }



}
window.customElements.define('link-page', LinkComponent);
