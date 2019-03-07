(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{324:function(t,e,i){"use strict";i.r(e);var r=i(269);customElements.define("uc-current-filter-group",class extends r.a{static get properties(){return{title:{type:String},facetId:{type:String}}}static get styles(){return r.b`:host {
        margin-top: 10px;
        display: block;
      }

      h2 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        text-transform: uppercase;
        color: #333333;
      }
      @media (min-width: 768px) {
        h2 {
          font-size: 13px;
        }
      }
      @media (max-width: 767px) {
        h2 {
          font-size: 0.92857em;
        }
      }

      ::slotted(uc-current-filter-item:not(:first-child)) {
        margin-top: 5px;
      }`}render(){return r.c`${this.title?r.c`<h2>${this.title}</h2>`:r.c``}<slot></slot>`}})}}]);