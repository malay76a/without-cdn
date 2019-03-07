(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{364:function(t,r,s){"use strict";s.r(r);var e=s(269);customElements.define("uc-plp-list",class extends e.a{static get properties(){return{typed:{type:String,reflect:!0}}}static get styles(){return e.b`:host {
        display: -ms-grid;
        display: grid;
        width: 100%;
      }
      @media (max-width: 767px) {
        :host {
          grid-row-gap: 0.71429em;
          -ms-grid-columns: 1fr;
          grid-template-columns: 1fr;
        }
      }

      @media (min-width: 768px) {
        :host([typed='list']),
        :host(:not([typed='card'])) {
          grid-row-gap: 10px;
          -ms-grid-columns: 1fr;
          grid-template-columns: 1fr;
        }

        :host([typed='card']) {
          -ms-grid-columns: (1fr)[3];
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 20px;
          grid-column-gap: 20px;
        }
      }`}constructor(){super(),this.typed="list"}render(){return e.c`<slot></slot>`}})}}]);