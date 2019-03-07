(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{331:function(t,e,o){"use strict";o.r(e);var s=o(269);customElements.define("uc-facet-toggle",class extends s.a{static get properties(){return{closed:{type:Boolean,reflect:!0},titleFacet:{type:String}}}static get styles(){return s.b`:host {
        background-color: #ffffff;
        position: relative;
        display: block;
      }

      .toggler {
        width: 0;
        height: 0;
        cursor: pointer;
        position: absolute;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      :host([closed]) .toggler {
        -webkit-transform: scale(1, -1);
        -ms-transform: scale(1, -1);
        transform: scale(1, -1);
      }

      h2 {
        margin-top: 0;
        margin-bottom: 0;
        color: #333333;
        font-weight: bold;
        text-transform: uppercase;
        width: calc(100% - 15px);
      }
      @media (min-width: 768px) {
        :host {
          padding: 11px;
          min-height: 38px;
        }

        .toggler {
          top: 14px;
          right: 11px;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid #333333;
        }
        h2 {
          font-size: 13px;
        }
      }
      @media (max-width: 767px) {
        :host {
          padding: 0.78571em;
          min-height: 2.71429em;
        }
        .toggler {
          top: 1em;
          right: 0.78571em;
          border-left: 0.28571em solid transparent;
          border-right: 0.28571em solid transparent;
          border-top: 0.42857em solid #333333;
        }
        h2 {
          font-size: 0.92857em;
        }
      }`}toggle(){this.closed=!this.closed}constructor(){super(),this.closed=!1}render(){return s.c`${this.titleFacet?s.c`<h2>${this.titleFacet}</h2>`:s.c``}<div class="toggler" @click="${this.toggle}"></div>${this.closed?s.c``:s.c`<slot></slot>`}`}})}}]);