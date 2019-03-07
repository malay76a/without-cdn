(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{347:function(t,e,r){"use strict";r.r(e);var i=r(269);customElements.define("uc-header-logo",class extends i.a{static get properties(){return{url:{type:String},img:{type:String}}}static get styles(){return i.b`:host {
        display: block;
      }

      a {
        display: block;
        height: 100%;
        width: 100%;
      }
      img {
        height: calc(100% + 16px);
        margin-top: -8px;
        margin-bottom: -8px;
      }`}constructor(){super(),this.url="",this.img=""}firstUpdated(t){super.firstUpdated(t);var e=this.querySelector("a"),r=this.querySelector("img");e&&(this.url=e.getAttribute("href")),r&&(this.img=r.getAttribute("src"))}render(){return i.c`<a href="${this.url}"><img src="${this.img}" alt=""></a>`}})}}]);