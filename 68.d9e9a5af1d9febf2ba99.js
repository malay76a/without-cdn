(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{337:function(t,e,i){"use strict";i.r(e);var d=i(269);customElements.define("uc-footer-menu",class extends d.a{static get styles(){return d.b`:host {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      @media (min-width: 1200px) {
        :host {
          padding: 0 10px;
          margin-left: -10px;
        }
      }
      @media (max-width: 767px) {
        :host {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      }

      ::slotted(*) {
        position: relative;
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(1)),
        ::slotted(*:nth-child(3)) {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 25%;
          flex: 1 1 25%;
        }
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(1)) {
          padding-right: 35px;
        }
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(2)) {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 50%;
          flex: 1 1 50%;
          padding-left: 35px;
          padding-right: 35px;
        }
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(3)) {
          padding-left: 35px;
        }
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(2))::after,
        ::slotted(*:nth-child(2))::before {
          content: '';
          height: 100%;
          width: 0;
          border-left: 1px dashed #d9d9d9;
          position: absolute;
          top: 0;
        }
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(2))::after {
          left: 0;
        }
      }

      @media (min-width: 768px) {
        ::slotted(*:nth-child(2))::before {
          right: 0;
        }
      }`}render(){return d.c`<slot></slot>`}})}}]);