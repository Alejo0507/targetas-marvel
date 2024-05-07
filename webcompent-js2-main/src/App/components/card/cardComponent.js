export class CardComponent extends HTMLElement{
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /* html */ `
            <style rel="stylesheet">
                @import "./css/bootstrap/bootstrap.min.css";
                @import "./src/App/components/card/cardStyle.css";
            </style>
            <div class="card" style="width: 18rem;">
            <slot name="imagen"></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name="numero"></slot></h5>
                    <p class="card-text"><slot name ="contenido"></slot></p>
                    <p class="card-text fw-bold"><slot name="estudio"></slot></p>
                    
                </div>
            </div>
        `
    }
}
customElements.define('card-component',CardComponent);