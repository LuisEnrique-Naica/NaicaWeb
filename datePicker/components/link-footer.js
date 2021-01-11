const templateLinkfooter = document.createElement('template');
templateLinkfooter.innerHTML =
`
<style>

.container {
    width: fit-content;
    text-align: center;
}

a{
    text-decoration: none;
    color:#0d78e4;
 
}

a:link:active, a:visited:active {
    color: (internal value);
}

a.goTo:hover span.a1{
    opacity:1;
}

a.goTo::after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background-color: transparent;
    transition: all 0.5s;

}

a.goTo:hover:after{
    width:100%;
    background-color: #263bc2;
    
}

a.goTo:hover{
    color: #263bc2;
}


</style>
<div class="container">
    <a class="goTo" href="#">
        
    </a>
</div>
`;

class  LinkFooterComponent extends HTMLElement {
    constructor(){
        super();
        this.content;
        this.toUrl;

        this._sR = this.attachShadow({mode:'open'})
        this._sR.appendChild(templateLinkfooter.content.cloneNode(true))

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
        this.$href.innerHTML = this.content;
        this.$href.setAttribute('href',this.toUrl);
        
    }



}
window.customElements.define('link-footer', LinkFooterComponent);
