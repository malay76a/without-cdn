(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{334:function(e,t,o){"use strict";o.r(t);var s=o(269);customElements.define("uc-footer-app-mobile",class extends s.a{static get styles(){return s.b`:host {
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
        display: block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      @media (min-width: 768px) {
        :host {
          max-width: 180px;
          height: 43px;
        }
      }
      @media (max-width: 767px) {
        :host {
          max-width: 10.35714em;
          height: 3.07143em;
        }
      }

      :host([android]) {
        background-image: url('https://res.cloudinary.com/lmru/image/upload/index/google.svg');
      }

      :host([ios]) {
        background-image: url('https://res.cloudinary.com/lmru/image/upload/index/appstore.svg');
      }

      ::slotted(*:not(a)) {
        display: none;
      }

      ::slotted(a) {
        display: block;
        color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }`}render(){return s.c`<slot></slot>`}})}}]);