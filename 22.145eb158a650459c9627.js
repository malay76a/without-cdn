(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{270:function(t,e,i){"use strict";i.d(e,"b",function(){return d}),i.d(e,"a",function(){return b});var n=992,o=768,r=n-1,s=o-1;function a(t){return window.matchMedia(t).matches}function d(){return a(`(max-width: ${s}px)`)}function b(){return a(`(max-width: ${r}px) and (min-width: ${o}px)`)||d()}},341:function(t,e,i){"use strict";i.r(e);var n=i(269),o=i(270);customElements.define("uc-footer-subscribe",class extends n.a{static get properties(){return{method:{type:String},action:{type:String}}}static get styles(){return n.b`form {
        width: 100%;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      @media (min-width: 768px) {
        form {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 50px;
          border: 3px solid #66c05d;
        }
      }
      @media (max-width: 767px) {
        form {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          height: 3.57143em;
        }
      }

      input {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 70%;
        flex: 1 1 70%;
        border: none;
        padding: 10px 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      input:valid + label,
      input:focus + label {
        display: none;
      }

      label {
        position: absolute;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE2IDEyIj4gICAgPHBhdGggZmlsbD0iI0IyQjJCMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xODIgMGw2LjYwNiA2LjZMMTQuMzg5IDBIMS4xODJ6TTguNzMgNy41NWwtLjk0My45NDItLjk0MS0uOTQyTDAgLjcwNXYxMC41MTNsNC42OTMtNC42OTIuOTQyLjk0Mi00LjQ1OCA0LjQ1OGgxMy4yMjFMOS45NCA3LjQ2OGwuOTQyLS45NDIgNC42OTIgNC42OTZWLjcwNUw4LjczIDcuNTV6Ii8+PC9zdmc+);
        width: 16px;
        height: 12px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        top: 50%;
        left: 15px;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
      }

      button {
        background-color: #66c05d;
        line-height: 1.18;
        color: #ffffff;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
      }
      @media (min-width: 768px) {
        button {
          font-size: 11px;
          width: 140px;
        }
      }
      @media (max-width: 767px) {
        button {
          font-size: 0.78571em;
        }
      }`}constructor(){super(),this.method="POST",this.action=""}render(){return n.c`<form method="${this.method}" action="${this.action}">${Object(o.b)()?n.c``:n.c`<input id="footer-subscrube-input" type="text" required placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Введите Ваш e-mail"> <label for="footer-subscrube-input"></label>`} <button type="submit">ПОДПИСАТЬСЯ НА&nbsp;РАССЫЛКУ</button></form>`}})}}]);