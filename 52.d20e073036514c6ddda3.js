(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{323:function(t,e,o){"use strict";o.r(e);var i=o(269);customElements.define("uc-current-filter",class extends i.a{static get properties(){return{count:{type:String,reflect:!0},resetButton:{type:Boolean}}}static get styles(){return i.b`:host {
        display: block;
        background-color: #ffffff;
        border: 1px solid #f8e300;
      }
      @media (min-width: 768px) {
        :host {
          padding: 11px;
        }
      }
      @media (max-width: 767px) {
        :host {
          padding: 0.78571em;
        }
      }

      h2 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: bold;
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

      div {
        color: #333333;
      }
      @media (min-width: 768px) {
        div {
          font-size: 11px;
        }
      }
      @media (max-width: 767px) {
        div {
          font-size: 0.78571em;
        }
      }

      button {
        border: 0;
        background: none;
        cursor: pointer;
        text-decoration: underline;
        color: #66c05d;
        padding: 0;
        margin-top: 10px;
      }
      @media (min-width: 768px) {
        button {
          font-size: 10px;
        }
      }
      @media (max-width: 767px) {
        button {
          font-size: 0.90909em;
        }
      }`}constructor(){super(),this.count="0",this.resetButton=!1}render(){return i.c`<h2>Ваш выбор:</h2><div>Найдено ${this.count} товаров</div><slot>${this.resetButton?i.c`<button>Сбросить все фильтры</button>`:i.c``}`}})}}]);