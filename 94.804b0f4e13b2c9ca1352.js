(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{356:function(t,i,n){"use strict";n.r(i);var e=n(269);customElements.define("uc-page-title",class extends e.a{static get properties(){return{counter:{type:String}}}static get styles(){return e.b`:host {
        display: block;
      }
      @media (min-width: 1200px) {
        :host {
          margin-top: 26px;
          margin-bottom: 18px;
        }
      }
      @media (max-width: 1199px) and (min-width: 992px) {
        :host {
          margin-top: 30px;
          margin-bottom: 20px;
        }
      }
      @media (max-width: 991px) and (min-width: 768px) {
        :host {
          margin-top: 19px;
          margin-bottom: 22px;
        }
      }
      @media (max-width: 767px) {
        :host {
          margin-top: 21px;
          margin-bottom: 18px;
        }
      }

      ::slotted(h1),
      span {
        display: inline;
        margin: 0;
        font-weight: bold;
        color: #333333;
        text-transform: uppercase;
      }
      @media (min-width: 1200px) {
        ::slotted(h1),
        span {
          font-size: 36px;
        }
      }
      @media (max-width: 1199px) and (min-width: 992px) {
        ::slotted(h1),
        span {
          font-size: 32px;
        }
      }
      @media (max-width: 991px) and (min-width: 768px) {
        ::slotted(h1),
        span {
          font-size: 25px;
        }
      }
      @media (max-width: 767px) {
        ::slotted(h1),
        span {
          font-size: 1.28571em;
        }
      }`}constructor(){super(),this.counter=""}render(){return e.c`<slot></slot>${this.counter?e.c`<span>(${this.counter})</span>`:e.c``}`}})}}]);