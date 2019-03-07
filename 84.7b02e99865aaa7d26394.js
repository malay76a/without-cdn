(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{351:function(e,t,n){"use strict";n.r(t);var i=n(269);customElements.define("uc-header-panel-user-profile",class extends i.a{static get styles(){return i.b`:host {
        padding: 8px 16px;
        background-color: #66c05d;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
      }

      .login,
      .registration {
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
      }

      .login + .registration::before {
        content: '';
        height: 100%;
        width: 0;
        border-left: 1px dashed #ffffff;
        margin-left: 5px;
        margin-right: 5px;
      }
      .registration:hover {
        text-decoration: underline;
      }`}render(){return i.c`<div class="login">вход</div><a href="/lk/register/" class="registration">регистрация</a>`}})}}]);