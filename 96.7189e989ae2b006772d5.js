(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{357:function(e,t,o){"use strict";o.r(t);var i=o(269);customElements.define("uc-parent-link",class extends i.a{static get styles(){return i.b`:host {
        display: block;
      }

      ::slotted(a) {
        color: #57ad31;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: stretch;
        -ms-flex-pack: stretch;
        justify-content: stretch;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 25%;
        flex: 1 1 25%;
        text-decoration: none;
      }
      @media (min-width: 768px) {
        ::slotted(a) {
          font-size: 14px;
        }
      }
      @media (max-width: 767px) {
        ::slotted(a) {
          font-size: 0.85714em;
        }
      }
      ::slotted(a)::before {
        content: '';
      }
      @media (max-width: 767px) {
        ::slotted(a)::after {
          content: '';
          margin-left: 1.75em;
        }
        ::slotted(a)::before {
          content: '';
          margin-right: 1.75em;
        }
      }
      @media (min-width: 768px) {
        ::slotted(a)::before {
          content: '';
          margin-right: 21px;
        }
      }
      ::slotted(a)::after,
      ::slotted(a)::before {
        height: 1px;
        max-width: 100%;
        display: inline-block;
        background-color: #d9d9d9;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 25%;
        flex: 1 1 25%;
      }`}render(){return i.c`<slot></slot>`}})}}]);