(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{319:function(e,o,t){"use strict";t.r(o);var r=t(269);customElements.define("uc-app",class extends r.a{static get properties(){return{comparePanel:{type:Boolean}}}static get styles(){return r.b`:host {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
      }

      ::slotted(uc-nckd) {
        -webkit-box-ordinal-group: -3;
        -ms-flex-order: -4;
        order: -4;
      }

      ::slotted(uc-header-panel) {
        -webkit-box-ordinal-group: -2;
        -ms-flex-order: -3;
        order: -3;
      }

      ::slotted(uc-header) {
        -webkit-box-ordinal-group: -1;
        -ms-flex-order: -2;
        order: -2;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 10;
      }

      ::slotted(main) {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
      }

      ::slotted(footer) {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
      }

      @media (max-width: 991px) {
        ::slotted(uc-header-panel) {
          display: none;
        }
        ::slotted(uc-nckd) {
          display: none;
        }
      }

      @media (min-width: 768px) {
        ::slotted(footer) {
          border-top: 5px solid #66c05d;
          margin-top: 40px;
        }
      }

      @media (max-width: 767px) {
        ::slotted(footer) {
          border-top: calc((5px / 14) * 1em) solid #66c05d;
          margin-top: 20px;
        }
      }`}constructor(){super(),this.comparePanel=!1}render(){return r.c`<slot></slot>${this.comparePanel?r.c`<uc-compare-panel></uc-compare-panel>`:""}`}})}}]);