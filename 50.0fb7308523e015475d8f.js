(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{325:function(t,e,r){"use strict";r.r(e);var a=r(269);customElements.define("uc-current-filter-item",class extends a.a{static get properties(){return{facetName:{type:String}}}static get styles(){return a.b`:host {
        display: block;
        position: relative;
        background-color: #e6e6e6;
      }
      @media (min-width: 768px) {
        :host {
          margin-left: 10px;
          padding: 3px 15px 3px 10px;
          font-size: 11px;
        }
      }
      @media (max-width: 767px) {
        :host {
          font-size: 0.78571em;
          margin-left: 0.90909em;
          padding: 0.27273em 1.36364em 0.27273em 0.90909em;
        }
      }

      div {
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
      }
      @media (min-width: 768px) {
        div {
          border-top: 10px solid transparent;
          border-bottom: 11px solid transparent;
          border-right: 10px solid #e6e6e6;
          left: -10px;
        }
      }
      @media (max-width: 767px) {
        div {
          border-top: 0.90909em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 0.90909em solid #e6e6e6;
          left: -0.90909em;
        }
      }
      div::before {
        content: '';
        display: block;
        background-color: #ffffff;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
        border-radius: 50%;
      }
      @media (min-width: 768px) {
        div::before {
          width: 4px;
          height: 4px;
          left: 10px;
        }
      }
      @media (max-width: 767px) {
        div::before {
          width: 0.36364em;
          height: 0.36364em;
          left: 0.90909em;
        }
      }

      p {
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      span {
        display: block;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
        cursor: pointer;
      }
      @media (min-width: 768px) {
        span {
          width: 10px;
          height: 10px;
          right: 5px;
        }
      }
      @media (max-width: 767px) {
        span {
          width: 0.90909em;
          height: 0.90909em;
          right: 0.45455em;
        }
      }
      span:before,
      span:after {
        content: '';
        position: absolute;
        z-index: -1;
        background: #333333;
      }
      span:before {
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
        -ms-transform: translate(-50%, -50%) rotate(45deg);
        transform: translate(-50%, -50%) rotate(45deg);
        width: 1px;
        height: 100%;
      }
      span:after {
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) rotate(-45deg);
        -ms-transform: translate(-50%, -50%) rotate(-45deg);
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 1px;
        height: 100%;
      }`}render(){return a.c`<div></div><p>${this.facetName}</p><span></span>`}})}}]);