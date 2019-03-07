(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{361:function(e,t,i){"use strict";i.r(t);var s=i(269);customElements.define("uc-plp-change-typed",class extends s.a{static get properties(){return{type:{type:String}}}static get styles(){return s.b`:host {
        display: inline-block;
      }

      .toggle {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        border-radius: 2px;
        -webkit-box-shadow: inset 0 2px 3px 1px #ffffff;
        box-shadow: inset 0 2px 3px 1px #ffffff;
        border: 1px solid #d9d9d9;
        background-color: #fafafa;
      }

      .toggle div {
        width: 36px;
        height: 36px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 18px 18px;
        cursor: pointer;
      }

      .toggle div svg path {
        fill: #66c05d;
      }

      .toggle div[data-active] {
        background-color: #66c05d;
      }

      .toggle div[data-active] svg path {
        fill: #ffffff;
      }`}constructor(){super(),this.type="list"}firstUpdated(e){super.firstUpdated(e),this.changeTypeEmmit(this.type)}changeType(e){e.stopPropagation(),this.type=e.currentTarget.classList.item(0),this.changeTypeEmmit(this.type)}changeTypeEmmit(){}render(){var e="list"===this.type;return s.c`<div class="toggle"><div class="list" ?data-active="${e}" @click="${this.changeType}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="13"><path fill="#66C05D" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 5h18v3H0V5zm0 5h18v3H0v-3z"/></svg></div><div class="card" ?data-active="${!e}" @click="${this.changeType}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#66C05D" fill-rule="evenodd" d="M0 0h8v8H0V0zm10 0h8v8h-8V0zM0 10h8v8H0v-8zm10 0h8v8h-8v-8z"/></svg></div></div>`}})}}]);