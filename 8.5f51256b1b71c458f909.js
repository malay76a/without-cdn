(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{292:function(t,n,e){var s=e(293),r=e(294),o=e(295);t.exports=function(t,n){return s(t)||r(t,n)||o()}},293:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},294:function(t,n){t.exports=function(t,n){var e=[],s=!0,r=!1,o=void 0;try{for(var i,p=t[Symbol.iterator]();!(s=(i=p.next()).done)&&(e.push(i.value),!n||e.length!==n);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==p.return||p.return()}finally{if(r)throw o}}return e}},295:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},363:function(t,n,e){"use strict";e.r(n);var s=e(292),r=e.n(s),o=e(269);customElements.define("uc-plp-item-price",class extends o.a{static get properties(){return{type:{type:String,reflect:!0},content:{type:String},currency:{type:String}}}static get styles(){return o.b`:host {
        word-spacing: -4px;
      }
      :host([type='main']) {
        color: #333333;
      }

      :host([type='second']) {
        color: #727272;
      }

      .first-part {
        font-weight: normal;
      }

      .second-part {
        font-weight: normal;
      }

      .unit {
        margin-left: 5px;
      }

      @media (max-width: 767px) {
        :host([type='main']) .first-part {
          font-size: 1.5em;
        }

        :host([type='main']) .second-part {
          font-size: 1.07143em;
        }

        :host([type='main']) .unit {
          font-size: 0.78571em;
        }

        :host([type='second']) .first-part {
          font-size: 0.85714em;
        }

        :host([type='second']) .second-part {
          font-size: 0.85714em;
        }

        :host([type='second']) .unit {
          font-size: 0.92857em;
        }
      }

      @media (min-width: 768px) {
        :host([type='second']) .unit {
          font-size: 12px;
        }

        :host([type='main']) .unit {
          font-size: 14px;
        }

        :host([type='main']) .first-part {
          font-size: 24px;
          font-weight: 500;
        }

        :host([type='main']) .second-part {
          font-size: 18px;
        }

        :host([type='second']) .first-part {
          font-size: 14px;
        }

        :host([type='second']) .second-part {
          font-size: 12px;
        }
      }`}constructor(){super(),this.type="main",this.content="0,0",this.currency=""}render(){var t=this.content.split(","),n=r()(t,2),e=n[0],s=n[1];return o.c`<div><span class="first-part">${e}</span> <span class="second-part">,${s}</span> <span class="unit">${this.currency}</span></div>`}})}}]);